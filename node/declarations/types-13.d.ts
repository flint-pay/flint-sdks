import type {
    DeliveryEligibilityExpression,
    DeliveryEligibilityExpressionInput,
    DeliveryCalculatedPricingStrategy,
    DeliveryExternalPricingStrategy,
    DeliveryFixedPricingStrategy,
    DeliveryCallbackPricingStrategyRequest,
    DeliveryCallerSuppliedPricingStrategyRequest,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryFixedPricingStrategyRequestInput
} from './types-11.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type {
    DeliveryRateTablePricingStrategy,
    DeliveryRateTablePricingStrategyCreateRequest,
    DeliveryRateTablePricingStrategyCreateRequestInput,
    DeliveryRateTablePricingStrategyRequest,
    DeliveryRateTablePricingStrategyRequestInput
} from './types-14.js';
import type { DeliveryTieredPricingStrategy, DeliveryTieredPricingStrategyRequestInput } from './types-15.js';
import type { ResponseMeta } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { AssignToUnconfiguredDeliveryProfileRequestInput } from './types-0.js';
import type { CreateDeliveryProfileRequestInput } from './types-6.js';
/**
 * Shape $ (Value): {@link DeliveryPricingRate}. One rate in a rate table pricing strategy: a
 * `when` condition, a `priority`, and a price per currency. The first matching rate by priority
 * sets the price.
 */
export type DeliveryPricingRate = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /** Shape $ (Value): string. */
    "delivery_rate_id": string;
    /**
     * Shape $ (Value): integer. Rates are checked from the highest priority to the lowest. The
     * first matching rate sets the price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpression} or null. Shape $.anyOf[1] (Value):
     * {@link DeliveryEligibilityExpression}. A boolean expression containing exactly one operator
     * or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * Shape $.anyOf[2] (Value): null.
     */
    "when": ((DeliveryEligibilityExpression) | (null) | (unknown));
};
/**
 * Shape $ (Value): {@link DeliveryPricingRateCreateRequest}. A rate to add when creating a rate
 * table pricing strategy: a `when` condition, a `priority`, and a price per currency.
 */
export type DeliveryPricingRateCreateRequest = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Shape $ (Value): integer. Rates are checked from the highest priority to the lowest. The
     * first matching rate sets the price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpression}. A boolean expression containing
     * exactly one operator or typed condition at each node. Expressions support at most 8 levels
     * and 100 total nodes.
     */
    "when": DeliveryEligibilityExpression;
};
/**
 * Shape $ (Value): {@link DeliveryPricingRateCreateRequestInput}. A rate to add when creating a
 * rate table pricing strategy: a `when` condition, a `priority`, and a price per currency.
 */
export type DeliveryPricingRateCreateRequestInput = {
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): integer. Rates are checked from the highest priority to the lowest. The
     * first matching rate sets the price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpressionInput}. A boolean expression containing
     * exactly one operator or typed condition at each node. Expressions support at most 8 levels
     * and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionInput;
};
/**
 * Shape $ (Value): {@link DeliveryPricingRateRequest}. A rate in a rate table pricing strategy you
 * send when updating a delivery method. Include `delivery_rate_id` to keep or update an existing
 * rate.
 */
export type DeliveryPricingRateRequest = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Shape $ (Value): string. Stable rate identifier returned by Flint. Include it when updating
     * or retaining an existing rate. minLength: 1.
     */
    "delivery_rate_id"?: string;
    /**
     * Shape $ (Value): integer. Rates are checked from the highest priority to the lowest. The
     * first matching rate sets the price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpression}. A boolean expression containing
     * exactly one operator or typed condition at each node. Expressions support at most 8 levels
     * and 100 total nodes.
     */
    "when": DeliveryEligibilityExpression;
};
/**
 * Shape $ (Value): {@link DeliveryPricingRateRequestInput}. A rate in a rate table pricing
 * strategy you send when updating a delivery method. Include `delivery_rate_id` to keep or update
 * an existing rate.
 */
export type DeliveryPricingRateRequestInput = {
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): string. Stable rate identifier returned by Flint. Include it when updating
     * or retaining an existing rate. minLength: 1.
     */
    "delivery_rate_id"?: string;
    /**
     * Shape $ (Value): integer. Rates are checked from the highest priority to the lowest. The
     * first matching rate sets the price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpressionInput}. A boolean expression containing
     * exactly one operator or typed condition at each node. Expressions support at most 8 levels
     * and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionInput;
};
/**
 * Shape $ (Value): {@link DeliveryPricingStrategy}. How a delivery method sets its price, selected
 * by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`,
 * `callback`, or `caller_supplied`) is set.
 */
export type DeliveryPricingStrategy = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * Shape $ (Value): string. Value enum: "fixed", "rate_table", "tiered", "calculated",
     * "callback", "caller_supplied".
     */
    "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied" | (string & {});
})
    & ((Exclude<DeliveryPricingStrategyCalculated & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCallback & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCallerSupplied & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyFixed & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyRateTable & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyTiered & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCalculated}. The `calculated` variant of
 * `DeliveryPricingStrategy`.
 */
export type DeliveryPricingStrategyCalculated = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "calculated". */
    "type": "calculated" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "calculated". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCallback}. The `callback` variant of
 * `DeliveryPricingStrategy`.
 */
export type DeliveryPricingStrategyCallback = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback": DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "callback". */
    "type": "callback" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "callback". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback": DeliveryExternalPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCallerSupplied}. The `caller_supplied` variant of
 * `DeliveryPricingStrategy`.
 */
export type DeliveryPricingStrategyCallerSupplied = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "caller_supplied". */
    "type": "caller_supplied" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "caller_supplied". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryExternalPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputCalculated}. The `calculated` variant
 * of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputCalculated = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "calculated". */
    "type": "calculated" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "calculated". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputCalculatedInput}. The `calculated`
 * variant of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputCalculatedInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "calculated". */
    "type": "calculated";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "calculated". */
    "type": ("calculated") & ("calculated");
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
})
    & (({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputCallback}. The `callback` variant of
 * `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputCallback = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "callback". */
    "type": "callback" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "callback". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputCallbackInput}. The `callback` variant
 * of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputCallbackInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "callback". */
    "type": "callback";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "callback". */
    "type": ("callback") & ("callback");
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputCallerSupplied}. The `caller_supplied`
 * variant of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputCallerSupplied = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "caller_supplied". */
    "type": "caller_supplied" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "caller_supplied". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputCallerSuppliedInput}. The
 * `caller_supplied` variant of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputCallerSuppliedInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "caller_supplied". */
    "type": "caller_supplied";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "caller_supplied". */
    "type": ("caller_supplied") & ("caller_supplied");
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputFixed}. The `fixed` variant of
 * `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputFixed = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputFixedInput}. The `fixed` variant of
 * `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputFixedInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed". */
    "type": ("fixed") & ("fixed");
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputRateTable}. The `rate_table` variant
 * of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputRateTable = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "rate_table". */
    "type": "rate_table" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "rate_table". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputRateTableInput}. The `rate_table`
 * variant of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputRateTableInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "rate_table". */
    "type": "rate_table";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "rate_table". */
    "type": ("rate_table") & ("rate_table");
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputTiered}. The `tiered` variant of
 * `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputTiered = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "tiered". */
    "type": "tiered" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "tiered". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputTieredInput}. The `tiered` variant of
 * `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputTieredInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "tiered". */
    "type": "tiered";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "tiered". */
    "type": ("tiered") & ("tiered");
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateRequest}. The pricing strategy you supply
 * when creating a delivery method. Set `type` and the matching property.
 */
export type DeliveryPricingStrategyCreateRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * Shape $ (Value): string. Value enum: "fixed", "rate_table", "tiered", "calculated",
     * "callback", "caller_supplied".
     */
    "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied" | (string & {});
})
    & ((Exclude<DeliveryPricingStrategyCreateInputCalculated & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputCallback & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputCallerSupplied & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputFixed & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputRateTable & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputTiered & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateRequestInput}. The pricing strategy you
 * supply when creating a delivery method. Set `type` and the matching property.
 */
export type DeliveryPricingStrategyCreateRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * Shape $ (Value): string. Value enum: "fixed", "rate_table", "tiered", "calculated",
     * "callback", "caller_supplied".
     */
    "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied";
})
    & ((Exclude<DeliveryPricingStrategyCreateInputCalculatedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputCallbackInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputCallerSuppliedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputFixedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputRateTableInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputTieredInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyFixed}. The `fixed` variant of
 * `DeliveryPricingStrategy`.
 */
export type DeliveryPricingStrategyFixed = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed": DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed": DeliveryFixedPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputCalculated}. The `calculated` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputCalculated = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "calculated". */
    "type": "calculated" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "calculated". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputCalculatedInput}. The `calculated` variant
 * of `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputCalculatedInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "calculated". */
    "type": "calculated";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "calculated". */
    "type": ("calculated") & ("calculated");
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
})
    & (({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputCallback}. The `callback` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputCallback = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "callback". */
    "type": "callback" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "callback". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputCallbackInput}. The `callback` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputCallbackInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "callback". */
    "type": "callback";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "callback". */
    "type": ("callback") & ("callback");
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputCallerSupplied}. The `caller_supplied`
 * variant of `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputCallerSupplied = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "caller_supplied". */
    "type": "caller_supplied" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "caller_supplied". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputCallerSuppliedInput}. The `caller_supplied`
 * variant of `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputCallerSuppliedInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "caller_supplied". */
    "type": "caller_supplied";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "caller_supplied". */
    "type": ("caller_supplied") & ("caller_supplied");
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputFixed}. The `fixed` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputFixed = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputFixedInput}. The `fixed` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputFixedInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed". */
    "type": ("fixed") & ("fixed");
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputRateTable}. The `rate_table` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputRateTable = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "rate_table". */
    "type": "rate_table" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "rate_table". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputRateTableInput}. The `rate_table` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputRateTableInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "rate_table". */
    "type": "rate_table";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "rate_table". */
    "type": ("rate_table") & ("rate_table");
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputTiered}. The `tiered` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputTiered = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "tiered". */
    "type": "tiered" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "tiered". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputTieredInput}. The `tiered` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputTieredInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "tiered". */
    "type": "tiered";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "tiered". */
    "type": ("tiered") & ("tiered");
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyRateTable}. The `rate_table` variant of
 * `DeliveryPricingStrategy`.
 */
export type DeliveryPricingStrategyRateTable = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table": DeliveryRateTablePricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "rate_table". */
    "type": "rate_table" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "rate_table". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table": DeliveryRateTablePricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyRequest}. The pricing strategy you supply when
 * updating a delivery method. Set `type` and the matching property.
 */
export type DeliveryPricingStrategyRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * Shape $ (Value): string. Value enum: "fixed", "rate_table", "tiered", "calculated",
     * "callback", "caller_supplied".
     */
    "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied" | (string & {});
})
    & ((Exclude<DeliveryPricingStrategyInputCalculated & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputCallback & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputCallerSupplied & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputFixed & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputRateTable & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputTiered & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyRequestInput}. The pricing strategy you supply
 * when updating a delivery method. Set `type` and the matching property.
 */
export type DeliveryPricingStrategyRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * Shape $ (Value): string. Value enum: "fixed", "rate_table", "tiered", "calculated",
     * "callback", "caller_supplied".
     */
    "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied";
})
    & ((Exclude<DeliveryPricingStrategyInputCalculatedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputCallbackInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputCallerSuppliedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputFixedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputRateTableInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputTieredInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyTiered}. The `tiered` variant of
 * `DeliveryPricingStrategy`.
 */
export type DeliveryPricingStrategyTiered = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered": DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "tiered". */
    "type": "tiered" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "tiered". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered": DeliveryTieredPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingTierBand}. One band of a tiered pricing strategy,
 * covering values of the strategy's `basis` from `from` to `to`, with a price per currency.
 */
export type DeliveryPricingTierBand = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "from": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "to"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryPricingTierBandRequestInput}. One band of a tiered pricing
 * strategy you supply, covering values of the strategy's `basis` from `from` to `to`, with a price
 * per currency.
 */
export type DeliveryPricingTierBandRequestInput = {
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "from": `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "to"?: `${bigint}` | bigint;
};
/** Shape $ (Value): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog items. */
export type DeliveryProfile = {
    /**
     * Shape $ (Value): {@link DeliveryProfileConfiguration}. Current delivery requirement and
     * grouping policy. Whether delivery planning applies to items under a delivery profile, and if
     * so the allowed delivery types, resolution mode, origin policy, packing rules, weight, and
     * dimensions.
     */
    "configuration": DeliveryProfileConfiguration;
    /** Shape $ (Value): string. Time the profile was created. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. Immutable revision used for new line-item snapshots. */
    "current_delivery_profile_revision_id": string;
    /** Shape $ (Value): string. Stable delivery profile ID. */
    "delivery_profile_id": string;
    /**
     * Shape $ (Value): {@link DeliveryProfileDiagnostics}. Read-only catalog and delivery-method
     * compatibility diagnostics. Read-only coverage checks for a delivery profile, such as how
     * many active Locations have no compatible delivery method and how many countries its zones
     * name.
     */
    "diagnostics"?: DeliveryProfileDiagnostics;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): boolean. True only when this profile is the current physical catalog
     * default.
     */
    "is_default": boolean;
    /** Shape $ (Value): Map of string. Caller-owned metadata. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. Merchant-facing profile name. */
    "name": string;
    /**
     * Shape $ (Value): string. Current profile lifecycle status. Value enum: "active", "archived".
     */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. Time the profile last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Optimistic-concurrency version for profile writes. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryProfileAssignment}. Result of assigning a delivery profile to
 * catalog items that had none, with counts of the product variants and bundle components updated.
 */
export type DeliveryProfileAssignment = {
    /**
     * Shape $ (Value): integer string. Number of previously unconfigured catalog records updated.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "bundle_components_updated": `${bigint}`;
    /** Shape $ (Value): string. Delivery profile assigned to each updated catalog item. */
    "delivery_profile_id": string;
    /**
     * Shape $ (Value): integer string. Number of previously unconfigured catalog records updated.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "product_variants_updated": `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryProfileAssignmentResponse}. A response containing
 * `DeliveryProfileAssignment` data.
 */
export type DeliveryProfileAssignmentResponse = {
    /**
     * Shape $ (Value): {@link DeliveryProfileAssignment}. Result of assigning a delivery profile
     * to catalog items that had none, with counts of the product variants and bundle components
     * updated.
     */
    "data": DeliveryProfileAssignment;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryProfileConfiguration}. Whether delivery planning applies to
 * items under a delivery profile, and if so the allowed delivery types, resolution mode, origin
 * policy, packing rules, weight, and dimensions.
 */
export type DeliveryProfileConfiguration = {
    /**
     * Shape $ (Value): Array of string. Required as a non-empty unique list when requirement is
     * required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and
     * service. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". Shape $[]
     * (Value): string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls which delivery obligations can share a choice
     * group. Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Shape $ (Value): {@link DeliveryProfileOriginPolicy}. Required for quote resolution and
     * forbidden for none or manual resolution. fixed_location requires location_id.
     * inventory_routing forbids location_id and applies only to tracked inventory. method_origin
     * forbids location_id. Where items under a delivery profile ship or leave from: a fixed
     * Location (`location_id`), inventory routing, or the origin set on the delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicy;
    /**
     * Shape $ (Value): string. Whether delivery planning applies. none forbids every other
     * configuration field. required also requires resolution_mode and allowed_types, plus the
     * fields required by that resolution mode. Value enum: "none", "required".
     */
    "requirement": "none" | "required" | (string & {});
    /**
     * Shape $ (Value): string. Required when requirement is required. quote plans physical
     * delivery and requires origin_policy, combination_policy, and splitting_policy. manual
     * supports digital and service items and forbids physical planning fields. Value enum:
     * "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls whether a line item quantity can be split across
     * delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryProfileConfigurationRequest}. Delivery planning settings you
 * supply when creating or updating a delivery profile. Which fields are allowed depends on
 * `requirement` and `resolution_mode`.
 */
export type DeliveryProfileConfigurationRequest = ({
    /**
     * Shape $ (Value): Array of string. Required as a non-empty unique list when requirement is
     * required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and
     * service. minItems: 1. uniqueItems: true. [] enum: "shipment", "pickup", "local_delivery",
     * "digital", "service". Shape $[] (Value): string. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls which delivery obligations can share a choice
     * group. Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Shape $ (Value): {@link DeliveryProfileOriginPolicyRequest}. Required for quote resolution
     * and forbidden for none or manual resolution. fixed_location requires location_id.
     * inventory_routing forbids location_id and applies only to tracked inventory. method_origin
     * forbids location_id. Origin policy you supply for a delivery profile: a fixed Location
     * (`location_id`), inventory routing, or the origin set on the delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequest;
    /**
     * Shape $ (Value): string. Whether delivery planning applies. none forbids every other
     * configuration field. required also requires resolution_mode and allowed_types, plus the
     * fields required by that resolution mode. Value enum: "none", "required".
     */
    "requirement"?: "none" | "required" | (string & {});
    /**
     * Shape $ (Value): string. Required when requirement is required. quote plans physical
     * delivery and requires origin_policy, combination_policy, and splitting_policy. manual
     * supports digital and service items and forbids physical planning fields. Value enum:
     * "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls whether a line item quantity can be split across
     * delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    & ((({
    /** Shape $ (Value): any.  Value enum: "none". */
    "requirement": unknown;
}))
    | ({
    /**
     * Shape $ (Value): Array of string. minItems: 1. uniqueItems: true. [] enum: "shipment",
     * "pickup", "local_delivery". Shape $[] (Value): string. Value enum: "shipment", "pickup",
     * "local_delivery".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | (string & {})>;
    /** Shape $ (Value): any.  Value enum: "required". */
    "requirement": unknown;
    /** Shape $ (Value): any.  Value enum: "quote". */
    "resolution_mode": unknown;
    /**
     * Shape $ (Value): {@link DeliveryProfileOriginPolicyRequest}. Required for quote resolution
     * and forbidden for none or manual resolution. fixed_location requires location_id.
     * inventory_routing forbids location_id and applies only to tracked inventory. method_origin
     * forbids location_id. Origin policy you supply for a delivery profile: a fixed Location
     * (`location_id`), inventory routing, or the origin set on the delivery method.
     */
    "origin_policy": DeliveryProfileOriginPolicyRequest;
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls which delivery obligations can share a choice
     * group. Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy": "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls whether a line item quantity can be split across
     * delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy": "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    | (({
    /**
     * Shape $ (Value): Array of string. minItems: 1. uniqueItems: true. [] enum: "digital",
     * "service". Shape $[] (Value): string. Value enum: "digital", "service".
     */
    "allowed_types": Array<"digital" | "service" | (string & {})>;
    /** Shape $ (Value): any.  Value enum: "required". */
    "requirement": unknown;
    /** Shape $ (Value): any.  Value enum: "manual". */
    "resolution_mode": unknown;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryProfileConfigurationRequestInput}. Delivery planning settings
 * you supply when creating or updating a delivery profile. Which fields are allowed depends on
 * `requirement` and `resolution_mode`.
 */
export type DeliveryProfileConfigurationRequestInput = ({
    /**
     * Shape $ (Value): Array of string. Required as a non-empty unique list when requirement is
     * required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and
     * service. minItems: 1. uniqueItems: true. [] enum: "shipment", "pickup", "local_delivery",
     * "digital", "service". Shape $[] (Value): string. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">;
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls which delivery obligations can share a choice
     * group. Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Shape $ (Value): {@link DeliveryProfileOriginPolicyRequestInput}. Required for quote
     * resolution and forbidden for none or manual resolution. fixed_location requires location_id.
     * inventory_routing forbids location_id and applies only to tracked inventory. method_origin
     * forbids location_id. Origin policy you supply for a delivery profile: a fixed Location
     * (`location_id`), inventory routing, or the origin set on the delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequestInput;
    /**
     * Shape $ (Value): string. Whether delivery planning applies. none forbids every other
     * configuration field. required also requires resolution_mode and allowed_types, plus the
     * fields required by that resolution mode. Value enum: "none", "required".
     */
    "requirement"?: "none" | "required";
    /**
     * Shape $ (Value): string. Required when requirement is required. quote plans physical
     * delivery and requires origin_policy, combination_policy, and splitting_policy. manual
     * supports digital and service items and forbids physical planning fields. Value enum:
     * "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual";
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls whether a line item quantity can be split across
     * delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
})
    & ((({
    /** Shape $ (Value): any.  Value enum: "none". */
    "requirement": "none";
})
    & (({
    "resolution_mode"?: never;
})
    & ({
    "allowed_types"?: never;
})
    & ({
    "origin_policy"?: never;
})
    & ({
    "combination_policy"?: never;
})
    & ({
    "splitting_policy"?: never;
})))
    | ({
    /**
     * Shape $ (Value): Array of string. minItems: 1. uniqueItems: true. [] enum: "shipment",
     * "pickup", "local_delivery". Shape $[] (Value): string. Value enum: "shipment", "pickup",
     * "local_delivery".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery">;
    /** Shape $ (Value): any.  Value enum: "required". */
    "requirement": "required";
    /** Shape $ (Value): any.  Value enum: "quote". */
    "resolution_mode": "quote";
    /**
     * Shape $ (Value): {@link DeliveryProfileOriginPolicyRequestInput}. Required for quote
     * resolution and forbidden for none or manual resolution. fixed_location requires location_id.
     * inventory_routing forbids location_id and applies only to tracked inventory. method_origin
     * forbids location_id. Origin policy you supply for a delivery profile: a fixed Location
     * (`location_id`), inventory routing, or the origin set on the delivery method.
     */
    "origin_policy": DeliveryProfileOriginPolicyRequestInput;
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls which delivery obligations can share a choice
     * group. Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy": "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls whether a line item quantity can be split across
     * delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy": "whole_line_item" | "quantity_split_allowed";
})
    | (({
    /**
     * Shape $ (Value): Array of string. minItems: 1. uniqueItems: true. [] enum: "digital",
     * "service". Shape $[] (Value): string. Value enum: "digital", "service".
     */
    "allowed_types": Array<"digital" | "service">;
    /** Shape $ (Value): any.  Value enum: "required". */
    "requirement": "required";
    /** Shape $ (Value): any.  Value enum: "manual". */
    "resolution_mode": "manual";
})
    & (({
    "origin_policy"?: never;
})
    & ({
    "combination_policy"?: never;
})
    & ({
    "splitting_policy"?: never;
}))));
/**
 * Shape $ (Value): {@link DeliveryProfileDiagnostics}. Read-only coverage checks for a delivery
 * profile, such as how many active Locations have no compatible delivery method and how many
 * countries its zones name.
 */
export type DeliveryProfileDiagnostics = {
    /**
     * Shape $ (Value): integer. Number of active delivery methods whose type is allowed by this
     * profile. minimum: 0.
     */
    "active_method_definitions_count": number;
    /**
     * Shape $ (Value): boolean. True when this is the physical catalog default and every active
     * physical catalog obligation uses it.
     */
    "covers_all_items": boolean;
    /**
     * Shape $ (Value): integer. Number of active Locations that no active delivery method
     * compatible with this profile can use as an origin. minimum: 0.
     */
    "locations_without_rates_count": number;
    /**
     * Shape $ (Value): Array of string. Up to 20 active Location IDs that no compatible active
     * delivery method can use as an origin. Use locations_without_rates_count for the complete
     * count. Shape $[] (Value): string.
     */
    "unassigned_locations": Array<string>;
    /**
     * Shape $ (Value): boolean. True when more matching Locations exist than are returned in
     * unassigned_locations.
     */
    "unassigned_locations_truncated": boolean;
    /**
     * Shape $ (Value): integer. Number of distinct countries explicitly named by zones referenced
     * from compatible active delivery methods. minimum: 0.
     */
    "zone_country_count": number;
};
/** Shape $ (Value): {@link DeliveryProfileListResponse}. A page of `DeliveryProfile` objects. */
export type DeliveryProfileListResponse = {
    /**
     * Shape $ (Value): Array of {@link DeliveryProfile}. Shape $[] (Value): {@link
     * DeliveryProfile}. Reusable delivery rules assigned to catalog items.
     */
    "data": Array<DeliveryProfile>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryProfileOriginPolicy}. Where items under a delivery profile ship
 * or leave from: a fixed Location (`location_id`), inventory routing, or the origin set on the
 * delivery method.
 */
export type DeliveryProfileOriginPolicy = {
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "fixed_location", "inventory_routing", "method_origin".
     */
    "type": "fixed_location" | "inventory_routing" | "method_origin" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryProfileOriginPolicyInputFixedLocation}. The `fixed_location`
 * variant of `DeliveryProfileOriginPolicyInput`.
 */
export type DeliveryProfileOriginPolicyInputFixedLocation = ({
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /** Shape $ (Value): string.  Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & ({
    /** Shape $ (Value): any.  Value enum: "fixed_location". */
    "type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
});
/**
 * Shape $ (Value): {@link DeliveryProfileOriginPolicyInputFixedLocationInput}. The
 * `fixed_location` variant of `DeliveryProfileOriginPolicyInput`.
 */
export type DeliveryProfileOriginPolicyInputFixedLocationInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /** Shape $ (Value): string.  Value enum: "fixed_location". */
    "type": "fixed_location";
})
    & ({
    /** Shape $ (Value): any.  Value enum: "fixed_location". */
    "type": "fixed_location";
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
});
/**
 * Shape $ (Value): {@link DeliveryProfileOriginPolicyInputInventoryRouting}. The
 * `inventory_routing` variant of `DeliveryProfileOriginPolicyInput`.
 */
export type DeliveryProfileOriginPolicyInputInventoryRouting = ({
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "inventory_routing". */
    "type": "inventory_routing" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "inventory_routing". */
    "type": unknown;
}));
/**
 * Shape $ (Value): {@link DeliveryProfileOriginPolicyInputInventoryRoutingInput}. The
 * `inventory_routing` variant of `DeliveryProfileOriginPolicyInput`.
 */
export type DeliveryProfileOriginPolicyInputInventoryRoutingInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "inventory_routing". */
    "type": "inventory_routing";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "inventory_routing". */
    "type": "inventory_routing";
})
    & (({
    "location_id"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryProfileOriginPolicyInputMethodOrigin}. The `method_origin`
 * variant of `DeliveryProfileOriginPolicyInput`.
 */
export type DeliveryProfileOriginPolicyInputMethodOrigin = ({
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "method_origin". */
    "type": "method_origin" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "method_origin". */
    "type": unknown;
}));
/**
 * Shape $ (Value): {@link DeliveryProfileOriginPolicyInputMethodOriginInput}. The `method_origin`
 * variant of `DeliveryProfileOriginPolicyInput`.
 */
export type DeliveryProfileOriginPolicyInputMethodOriginInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "method_origin". */
    "type": "method_origin";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "method_origin". */
    "type": "method_origin";
})
    & (({
    "location_id"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryProfileOriginPolicyRequest}. Origin policy you supply for a
 * delivery profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
 * delivery method.
 */
export type DeliveryProfileOriginPolicyRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "fixed_location", "inventory_routing", "method_origin".
     */
    "type": "fixed_location" | "inventory_routing" | "method_origin" | (string & {});
})
    & ((Exclude<DeliveryProfileOriginPolicyInputFixedLocation & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileOriginPolicyInputInventoryRouting & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileOriginPolicyInputMethodOrigin & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryProfileOriginPolicyRequestInput}. Origin policy you supply for a
 * delivery profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
 * delivery method.
 */
export type DeliveryProfileOriginPolicyRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "fixed_location", "inventory_routing", "method_origin".
     */
    "type": "fixed_location" | "inventory_routing" | "method_origin";
})
    & ((Exclude<DeliveryProfileOriginPolicyInputFixedLocationInput & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileOriginPolicyInputInventoryRoutingInput & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileOriginPolicyInputMethodOriginInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link DeliveryProfileResponse}. A response containing `DeliveryProfile` data.
 */
export type DeliveryProfileResponse = {
    /**
     * Shape $ (Value): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog items.
     */
    "data": DeliveryProfile;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type DeliveryProfilesAssignToUnconfiguredInput = {
    /** Shape $ (Value): string. */
    "delivery_profile_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link AssignToUnconfiguredDeliveryProfileRequestInput}. The request body
     * for: Assign unconfigured catalog entries.
     */
    "body": InputValue<AssignToUnconfiguredDeliveryProfileRequestInput>;
};
export type DeliveryProfilesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateDeliveryProfileRequestInput}. The request body for: Create
     * delivery profile.
     */
    "body": InputValue<CreateDeliveryProfileRequestInput>;
};
export type DeliveryProfilesGetInput = {
    /** Shape $ (Value): string. */
    "delivery_profile_id": InputValue<string>;
    /** Shape $ (Value): boolean. Default: false. */
    "include_diagnostics"?: InputValue<boolean>;
};
export type DeliveryProfilesListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "archived". Shape $[]
     * (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<Array<"active" | "archived">>;
    /** Shape $ (Value): boolean. */
    "is_default"?: InputValue<boolean>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "quote", "manual". Shape $[]
     * (Value): string. Value enum: "quote", "manual".
     */
    "resolution_mode"?: InputValue<Array<"quote" | "manual">>;
    /** Shape $ (Value): boolean. Default: false. */
    "include_diagnostics"?: InputValue<boolean>;
};
