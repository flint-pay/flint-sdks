import type {
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryCalculatedPricingStrategy,
    DeliveryCallbackPricingStrategyRequest,
    DeliveryCallerSuppliedPricingStrategyRequest
} from './types-14.js';
import type {
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryFixedPricingStrategy,
    DeliveryExternalPricingStrategy
} from './types-15.js';
import type {
    DeliveryRateTablePricingStrategyCreateRequestInput,
    DeliveryRateTablePricingStrategyCreateRequest,
    DeliveryRateTablePricingStrategy,
    DeliveryRateTablePricingStrategyRequest,
    DeliveryRateTablePricingStrategyRequestInput
} from './types-18.js';
import type { DeliveryTieredPricingStrategyRequestInput, DeliveryTieredPricingStrategy } from './types-19.js';
import type {
    DeliveryPricingStrategyCreateInputCalculated,
    DeliveryPricingStrategyCreateInputCallback,
    DeliveryPricingStrategyCreateInputCallerSupplied,
    DeliveryPricingStrategyCreateInputFixed,
    DeliveryPricingStrategyCreateInputRateTable,
    DeliveryPricingStrategyCreateInputCalculatedInput,
    DeliveryPricingStrategyCreateInputCallbackInput,
    DeliveryPricingStrategyCreateInputCallerSuppliedInput,
    DeliveryPricingStrategyCreateInputFixedInput
} from './types-16.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ResponseMeta } from './types-48.js';
/** The `rate_table` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputRateTableInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "rate_table". */
    "type": "rate_table";
})
    & (({
    /** Value enum: "rate_table". */
    "type": ("rate_table") & ("rate_table");
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
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
/** The `tiered` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputTiered = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
    /** Value enum: "tiered". */
    "type": "tiered" | (string & {});
})
    & (({
    /** Value enum: "tiered". */
    "type": unknown;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
}));
/** The `tiered` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputTieredInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "tiered". */
    "type": "tiered";
})
    & (({
    /** Value enum: "tiered". */
    "type": ("tiered") & ("tiered");
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
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
 * The pricing strategy you supply when creating a delivery method. Set `type` and the matching
 * property.
 */
export type DeliveryPricingStrategyCreateRequest = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "fixed", "rate_table", "tiered", "calculated", "callback", "caller_supplied". */
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
 * The pricing strategy you supply when creating a delivery method. Set `type` and the matching
 * property.
 */
export type DeliveryPricingStrategyCreateRequestInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "fixed", "rate_table", "tiered", "calculated", "callback", "caller_supplied". */
    "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied";
})
    & ((Exclude<DeliveryPricingStrategyCreateInputCalculatedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputCallbackInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputCallerSuppliedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputFixedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputRateTableInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputTieredInput & object, readonly unknown[]>));
/** The `fixed` variant of `DeliveryPricingStrategy`. */
export type DeliveryPricingStrategyFixed = ({
    /**
     * Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with
     * minimum and maximum fees, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /** A fixed delivery price, by currency. */
    "fixed": DeliveryFixedPricingStrategy;
    /**
     * Pricing strategy that charges the price of the first matching rate in a list of prioritized
     * rates. `unmatched_behavior` says what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal,
     * selects a band, and `unit` applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Value enum: "fixed". */
    "type": unknown;
    /** A fixed delivery price, by currency. */
    "fixed": DeliveryFixedPricingStrategy;
}));
/** The `calculated` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputCalculated = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "calculated". */
    "type": "calculated" | (string & {});
})
    & (({
    /** Value enum: "calculated". */
    "type": unknown;
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
/** The `calculated` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputCalculatedInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "calculated". */
    "type": "calculated";
})
    & (({
    /** Value enum: "calculated". */
    "type": ("calculated") & ("calculated");
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
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
/** The `callback` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputCallback = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "callback". */
    "type": "callback" | (string & {});
})
    & (({
    /** Value enum: "callback". */
    "type": unknown;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
}));
/** The `callback` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputCallbackInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "callback". */
    "type": "callback";
})
    & (({
    /** Value enum: "callback". */
    "type": ("callback") & ("callback");
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
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
/** The `caller_supplied` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputCallerSupplied = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "caller_supplied". */
    "type": "caller_supplied" | (string & {});
})
    & (({
    /** Value enum: "caller_supplied". */
    "type": unknown;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
}));
/** The `caller_supplied` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputCallerSuppliedInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "caller_supplied". */
    "type": "caller_supplied";
})
    & (({
    /** Value enum: "caller_supplied". */
    "type": ("caller_supplied") & ("caller_supplied");
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
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
/** The `fixed` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputFixed = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed": DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Value enum: "fixed". */
    "type": unknown;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed": DeliveryFixedPricingStrategy;
}));
/** The `fixed` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputFixedInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** Value enum: "fixed". */
    "type": ("fixed") & ("fixed");
    /** A fixed delivery price by currency, supplied for a delivery method. */
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
/** The `rate_table` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputRateTable = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "rate_table". */
    "type": "rate_table" | (string & {});
})
    & (({
    /** Value enum: "rate_table". */
    "type": unknown;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequest;
}));
/** The `rate_table` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputRateTableInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "rate_table". */
    "type": "rate_table";
})
    & (({
    /** Value enum: "rate_table". */
    "type": ("rate_table") & ("rate_table");
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
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
/** The `tiered` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputTiered = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
    /** Value enum: "tiered". */
    "type": "tiered" | (string & {});
})
    & (({
    /** Value enum: "tiered". */
    "type": unknown;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
}));
/** The `tiered` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputTieredInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "tiered". */
    "type": "tiered";
})
    & (({
    /** Value enum: "tiered". */
    "type": ("tiered") & ("tiered");
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
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
/** The `rate_table` variant of `DeliveryPricingStrategy`. */
export type DeliveryPricingStrategyRateTable = ({
    /**
     * Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with
     * minimum and maximum fees, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /** A fixed delivery price, by currency. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Pricing strategy that charges the price of the first matching rate in a list of prioritized
     * rates. `unmatched_behavior` says what happens when none match.
     */
    "rate_table": DeliveryRateTablePricingStrategy;
    /**
     * Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal,
     * selects a band, and `unit` applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "rate_table". */
    "type": "rate_table" | (string & {});
})
    & (({
    /** Value enum: "rate_table". */
    "type": unknown;
    /**
     * Pricing strategy that charges the price of the first matching rate in a list of prioritized
     * rates. `unmatched_behavior` says what happens when none match.
     */
    "rate_table": DeliveryRateTablePricingStrategy;
}));
/**
 * The pricing strategy you supply when updating a delivery method. Set `type` and the matching
 * property.
 */
export type DeliveryPricingStrategyRequest = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "fixed", "rate_table", "tiered", "calculated", "callback", "caller_supplied". */
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
 * The pricing strategy you supply when updating a delivery method. Set `type` and the matching
 * property.
 */
export type DeliveryPricingStrategyRequestInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when updating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "fixed", "rate_table", "tiered", "calculated", "callback", "caller_supplied". */
    "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied";
})
    & ((Exclude<DeliveryPricingStrategyInputCalculatedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputCallbackInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputCallerSuppliedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputFixedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputRateTableInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyInputTieredInput & object, readonly unknown[]>));
/** The `tiered` variant of `DeliveryPricingStrategy`. */
export type DeliveryPricingStrategyTiered = ({
    /**
     * Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with
     * minimum and maximum fees, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /** A fixed delivery price, by currency. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Pricing strategy that charges the price of the first matching rate in a list of prioritized
     * rates. `unmatched_behavior` says what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal,
     * selects a band, and `unit` applies to weight bases.
     */
    "tiered": DeliveryTieredPricingStrategy;
    /** Value enum: "tiered". */
    "type": "tiered" | (string & {});
})
    & (({
    /** Value enum: "tiered". */
    "type": unknown;
    /**
     * Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal,
     * selects a band, and `unit` applies to weight bases.
     */
    "tiered": DeliveryTieredPricingStrategy;
}));
/**
 * One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to
 * `to`, with a price per currency.
 */
export type DeliveryPricingTierBand = {
    /**
     *  * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /** Format: int64. */
    "from": number;
    /** Format: int64. */
    "to"?: number;
};
/**
 * One band of a tiered pricing strategy you supply, covering values of the strategy's `basis` from
 * `from` to `to`, with a price per currency.
 */
export type DeliveryPricingTierBandRequestInput = {
    /**
     *  * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /** Format: int64. */
    "from": number;
    /** Format: int64. */
    "to"?: number;
};
/** Reusable delivery rules assigned to catalog items. */
export type DeliveryProfile = {
    /**
     * Current delivery requirement and grouping policy. Whether delivery planning applies to items
     * under a delivery profile, and if so the allowed delivery types, resolution mode, origin
     * policy, packing rules, weight, and dimensions.
     */
    "configuration": DeliveryProfileConfiguration;
    /** Time the profile was created. Format: date-time. */
    "created_at": string;
    /** Immutable revision used for new line-item snapshots. */
    "current_delivery_profile_revision_id": string;
    /** Stable delivery profile ID. */
    "delivery_profile_id": string;
    /**
     * Read-only catalog and delivery-method compatibility diagnostics. Read-only coverage checks
     * for a delivery profile, such as how many active Locations have no compatible delivery method
     * and how many countries its zones name.
     */
    "diagnostics"?: DeliveryProfileDiagnostics;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /** True only when this profile is the current physical catalog default. */
    "is_default": boolean;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing profile name. */
    "name": string;
    /** Current profile lifecycle status. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Time the profile last changed. Format: date-time. */
    "updated_at": string;
    /** Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1. */
    "version": number;
};
export type DeliveryProfileActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.activated";
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
    "event_type": "delivery_profile.activated";
});
/**
 * The `delivery_profile.activated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryProfileActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
     * items.
     */
    "data"?: {
        /** Reusable delivery rules assigned to catalog items. */
        "object": DeliveryProfile;
    };
    /** Value enum: "delivery_profile.activated". */
    "event_type"?: "delivery_profile.activated";
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
 * The `delivery_profile.activated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type DeliveryProfileActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
     * items.
     */
    "data"?: {
        /** Reusable delivery rules assigned to catalog items. */
        "object": DeliveryProfile;
    };
    /** Value enum: "delivery_profile.activated". */
    "event_type"?: "delivery_profile.activated";
});
export type DeliveryProfileArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.archived";
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
    "event_type": "delivery_profile.archived";
});
/**
 * The `delivery_profile.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryProfileArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
     * items.
     */
    "data"?: {
        /** Reusable delivery rules assigned to catalog items. */
        "object": DeliveryProfile;
    };
    /** Value enum: "delivery_profile.archived". */
    "event_type"?: "delivery_profile.archived";
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
 * The `delivery_profile.archived` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type DeliveryProfileArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
     * items.
     */
    "data"?: {
        /** Reusable delivery rules assigned to catalog items. */
        "object": DeliveryProfile;
    };
    /** Value enum: "delivery_profile.archived". */
    "event_type"?: "delivery_profile.archived";
});
/**
 * Result of assigning a delivery profile to catalog items that had none, with counts of the
 * product variants and bundle components updated.
 */
export type DeliveryProfileAssignment = {
    /** Number of previously unconfigured catalog records updated. Format: int64. minimum: 0. */
    "bundle_components_updated": number;
    /** Delivery profile assigned to each updated catalog item. */
    "delivery_profile_id": string;
    /** Number of previously unconfigured catalog records updated. Format: int64. minimum: 0. */
    "product_variants_updated": number;
};
/** A response containing `DeliveryProfileAssignment` data. */
export type DeliveryProfileAssignmentResponse = {
    /**
     * Result of assigning a delivery profile to catalog items that had none, with counts of the
     * product variants and bundle components updated.
     */
    "data": DeliveryProfileAssignment;
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
 * Whether delivery planning applies to items under a delivery profile, and if so the allowed
 * delivery types, resolution mode, origin policy, packing rules, weight, and dimensions.
 */
export type DeliveryProfileConfiguration = {
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. [] enum: "shipment",
     * "pickup", "local_delivery", "digital", "service". [] (Value): string. Value enum:
     * "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Where items under a delivery profile ship or
     * leave from: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicy;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "none", "required".
     */
    "requirement": "none" | "required" | (string & {});
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual" | (string & {});
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
};
/** The `manual` variant of `DeliveryProfileConfigurationInputRequired`. */
export type DeliveryProfileConfigurationInputManual = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequest;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": "required" | (string & {});
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "manual".
     */
    "resolution_mode": "manual" | (string & {});
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    & (({
    /**
     * minItems: 1. uniqueItems: true. [] enum: "digital", "service". [] (Value): string. Value
     * enum: "digital", "service".
     */
    "allowed_types": Array<"digital" | "service" | (string & {})>;
    /** Value enum: "required". */
    "requirement": unknown;
    /** Value enum: "manual". */
    "resolution_mode": unknown;
}));
/** The `manual` variant of `DeliveryProfileConfigurationInputRequired`. */
export type DeliveryProfileConfigurationInputManualInput = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequestInput;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": "required";
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "manual".
     */
    "resolution_mode": "manual";
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
})
    & (({
    /**
     * minItems: 1. uniqueItems: true. [] enum: "digital", "service". [] (Value): string. Value
     * enum: "digital", "service".
     */
    "allowed_types": Array<"digital" | "service">;
    /** Value enum: "required". */
    "requirement": "required";
    /** Value enum: "manual". */
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
})));
/** The `none` variant of `DeliveryProfileConfigurationInput`. */
export type DeliveryProfileConfigurationInputNone = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequest;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "none".
     */
    "requirement": "none" | (string & {});
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual" | (string & {});
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    & (({
    /** Value enum: "none". */
    "requirement": unknown;
}));
/** The `none` variant of `DeliveryProfileConfigurationInput`. */
export type DeliveryProfileConfigurationInputNoneInput = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequestInput;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "none".
     */
    "requirement": "none";
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual";
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
})
    & (({
    /** Value enum: "none". */
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
})));
/** The `quote` variant of `DeliveryProfileConfigurationInputRequired`. */
export type DeliveryProfileConfigurationInputQuote = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy": "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy": DeliveryProfileOriginPolicyRequest;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": "required" | (string & {});
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote".
     */
    "resolution_mode": "quote" | (string & {});
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy": "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    & ({
    /**
     * minItems: 1. uniqueItems: true. [] enum: "shipment", "pickup", "local_delivery". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | (string & {})>;
    /** Value enum: "required". */
    "requirement": unknown;
    /** Value enum: "quote". */
    "resolution_mode": unknown;
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy": DeliveryProfileOriginPolicyRequest;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy": "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy": "whole_line_item" | "quantity_split_allowed" | (string & {});
});
/** The `quote` variant of `DeliveryProfileConfigurationInputRequired`. */
export type DeliveryProfileConfigurationInputQuoteInput = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy": "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy": DeliveryProfileOriginPolicyRequestInput;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": "required";
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote".
     */
    "resolution_mode": "quote";
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy": "whole_line_item" | "quantity_split_allowed";
})
    & ({
    /**
     * minItems: 1. uniqueItems: true. [] enum: "shipment", "pickup", "local_delivery". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery">;
    /** Value enum: "required". */
    "requirement": "required";
    /** Value enum: "quote". */
    "resolution_mode": "quote";
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy": DeliveryProfileOriginPolicyRequestInput;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy": "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy": "whole_line_item" | "quantity_split_allowed";
});
/** The `required` variant of `DeliveryProfileConfigurationInput`. */
export type DeliveryProfileConfigurationInputRequired = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequest;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": "required" | (string & {});
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual".
     */
    "resolution_mode": "quote" | "manual" | (string & {});
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    & ((Exclude<DeliveryProfileConfigurationInputQuote & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileConfigurationInputManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `required` variant of `DeliveryProfileConfigurationInput`. */
export type DeliveryProfileConfigurationInputRequiredInput = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequestInput;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": "required";
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual".
     */
    "resolution_mode": "quote" | "manual";
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
})
    & ((Exclude<DeliveryProfileConfigurationInputQuoteInput & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileConfigurationInputManualInput & object, readonly unknown[]>));
/**
 * Delivery planning settings you supply when creating or updating a delivery profile. Which fields
 * are allowed depends on `requirement` and `resolution_mode`.
 */
export type DeliveryProfileConfigurationRequest = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequest;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "none", "required".
     */
    "requirement"?: "none" | "required" | (string & {});
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual" | (string & {});
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    & ((Exclude<DeliveryProfileConfigurationInputNone & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileConfigurationInputRequired & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Delivery planning settings you supply when creating or updating a delivery profile. Which fields
 * are allowed depends on `requirement` and `resolution_mode`.
 */
export type DeliveryProfileConfigurationRequestInput = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequestInput;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "none", "required".
     */
    "requirement"?: "none" | "required";
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual";
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
})
    & ((Exclude<DeliveryProfileConfigurationInputNoneInput & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileConfigurationInputRequiredInput & object, readonly unknown[]>));
export type DeliveryProfileCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.created";
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
    "event_type": "delivery_profile.created";
});
/**
 * The `delivery_profile.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryProfileCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
     * items.
     */
    "data"?: {
        /** Reusable delivery rules assigned to catalog items. */
        "object": DeliveryProfile;
    };
    /** Value enum: "delivery_profile.created". */
    "event_type"?: "delivery_profile.created";
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
 * The `delivery_profile.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryProfileCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
     * items.
     */
    "data"?: {
        /** Reusable delivery rules assigned to catalog items. */
        "object": DeliveryProfile;
    };
    /** Value enum: "delivery_profile.created". */
    "event_type"?: "delivery_profile.created";
});
export type DeliveryProfileDeactivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.deactivated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.deactivated";
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
    "event_type": "delivery_profile.deactivated";
});
/**
 * The `delivery_profile.deactivated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryProfileDeactivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
     * items.
     */
    "data"?: {
        /** Reusable delivery rules assigned to catalog items. */
        "object": DeliveryProfile;
    };
    /** Value enum: "delivery_profile.deactivated". */
    "event_type"?: "delivery_profile.deactivated";
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
 * The `delivery_profile.deactivated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryProfileDeactivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
     * items.
     */
    "data"?: {
        /** Reusable delivery rules assigned to catalog items. */
        "object": DeliveryProfile;
    };
    /** Value enum: "delivery_profile.deactivated". */
    "event_type"?: "delivery_profile.deactivated";
});
/**
 * Read-only coverage checks for a delivery profile, such as how many active Locations have no
 * compatible delivery method and how many countries its zones name.
 */
export type DeliveryProfileDiagnostics = {
    /** Number of active delivery methods whose type is allowed by this profile. minimum: 0. */
    "active_method_definitions_count": number;
    /**
     * True when this is the physical catalog default and every active physical catalog obligation
     * uses it.
     */
    "covers_all_items": boolean;
    /**
     * Number of active Locations that no active delivery method compatible with this profile can
     * use as an origin. minimum: 0.
     */
    "locations_without_rates_count": number;
    /**
     * Up to 20 active Location IDs that no compatible active delivery method can use as an origin.
     * Use locations_without_rates_count for the complete count. [] (Value): string.
     */
    "unassigned_locations": Array<string>;
    /** True when more matching Locations exist than are returned in unassigned_locations. */
    "unassigned_locations_truncated": boolean;
    /**
     * Number of distinct countries explicitly named by zones referenced from compatible active
     * delivery methods. minimum: 0.
     */
    "zone_country_count": number;
};
/** A page of `DeliveryProfile` objects. */
export type DeliveryProfileListResponse = {
    /**  [] (Value): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog items. */
    "data": Array<DeliveryProfile>;
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
/**
 * Where items under a delivery profile ship or leave from: a fixed Location (`location_id`),
 * inventory routing, or the origin set on the delivery method.
 */
export type DeliveryProfileOriginPolicy = {
    "location_id"?: string;
    /** Value enum: "fixed_location", "inventory_routing", "method_origin". */
    "type": "fixed_location" | "inventory_routing" | "method_origin" | (string & {});
};
/** The `fixed_location` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputFixedLocation = ({
    /** minLength: 1. */
    "location_id": string;
    /** Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & ({
    /** Value enum: "fixed_location". */
    "type": unknown;
    /** minLength: 1. */
    "location_id": string;
});
/** The `fixed_location` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputFixedLocationInput = ({
    /** minLength: 1. */
    "location_id": string;
    /** Value enum: "fixed_location". */
    "type": "fixed_location";
})
    & ({
    /** Value enum: "fixed_location". */
    "type": "fixed_location";
    /** minLength: 1. */
    "location_id": string;
});
/** The `inventory_routing` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputInventoryRouting = ({
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "inventory_routing". */
    "type": "inventory_routing" | (string & {});
})
    & (({
    /** Value enum: "inventory_routing". */
    "type": unknown;
}));
/** The `inventory_routing` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputInventoryRoutingInput = ({
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "inventory_routing". */
    "type": "inventory_routing";
})
    & (({
    /** Value enum: "inventory_routing". */
    "type": "inventory_routing";
})
    & (({
    "location_id"?: never;
})));
/** The `method_origin` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputMethodOrigin = ({
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "method_origin". */
    "type": "method_origin" | (string & {});
})
    & (({
    /** Value enum: "method_origin". */
    "type": unknown;
}));
/** The `method_origin` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputMethodOriginInput = ({
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "method_origin". */
    "type": "method_origin";
})
    & (({
    /** Value enum: "method_origin". */
    "type": "method_origin";
})
    & (({
    "location_id"?: never;
})));
/**
 * Origin policy you supply for a delivery profile: a fixed Location (`location_id`), inventory
 * routing, or the origin set on the delivery method.
 */
export type DeliveryProfileOriginPolicyRequest = ({
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "fixed_location", "inventory_routing", "method_origin". */
    "type": "fixed_location" | "inventory_routing" | "method_origin" | (string & {});
})
    & ((Exclude<DeliveryProfileOriginPolicyInputFixedLocation & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileOriginPolicyInputInventoryRouting & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileOriginPolicyInputMethodOrigin & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Origin policy you supply for a delivery profile: a fixed Location (`location_id`), inventory
 * routing, or the origin set on the delivery method.
 */
export type DeliveryProfileOriginPolicyRequestInput = ({
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "fixed_location", "inventory_routing", "method_origin". */
    "type": "fixed_location" | "inventory_routing" | "method_origin";
})
    & ((Exclude<DeliveryProfileOriginPolicyInputFixedLocationInput & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileOriginPolicyInputInventoryRoutingInput & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileOriginPolicyInputMethodOriginInput & object, readonly unknown[]>));
/** A response containing `DeliveryProfile` data. */
export type DeliveryProfileResponse = {
    /** Reusable delivery rules assigned to catalog items. */
    "data": DeliveryProfile;
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
export type DeliveryProfileUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.updated";
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
    "event_type": "delivery_profile.updated";
});
/**
 * The `delivery_profile.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryProfileUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
     * items.
     */
    "data"?: {
        /** Reusable delivery rules assigned to catalog items. */
        "object": DeliveryProfile;
    };
    /** Value enum: "delivery_profile.updated". */
    "event_type"?: "delivery_profile.updated";
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
