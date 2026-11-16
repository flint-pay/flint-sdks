import type {
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryCalculatedPricingStrategy,
    DeliveryCallbackPricingStrategyRequest,
    DeliveryCallerSuppliedPricingStrategyRequest,
    DeliveryFixedPricingStrategy,
    DeliveryExternalPricingStrategy,
    DeliveryCalculatedPricingStrategyPreviousAttributes,
    DeliveryExternalPricingStrategyPreviousAttributes,
    DeliveryFixedPricingStrategyPreviousAttributes
} from './types-18.js';
import type {
    DeliveryRateTablePricingStrategyCreateRequestInput,
    DeliveryRateTablePricingStrategyCreateRequest,
    DeliveryRateTablePricingStrategy,
    DeliveryRateTablePricingStrategyPreviousAttributes,
    DeliveryRateTablePricingStrategyRequest,
    DeliveryRateTablePricingStrategyRequestInput
} from './types-23.js';
import type {
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryTieredPricingStrategy,
    DeliveryTieredPricingStrategyPreviousAttributes
} from './types-24.js';
import type {
    DeliveryPricingStrategyCreateInputCalculated,
    DeliveryPricingStrategyCreateInputCallback,
    DeliveryPricingStrategyCreateInputCalculatedInput,
    DeliveryPricingStrategyCalculatedPreviousAttributes,
    DeliveryPricingStrategyCallbackPreviousAttributes,
    DeliveryPricingStrategyCallerSuppliedPreviousAttributes
} from './types-20.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-42.js';
import type {
    DeliveryProfileUnconfiguredAssignment,
    DeliveryProfileOriginPolicyRequest,
    DeliveryProfileOriginPolicyRequestInput,
    DeliveryProfileOriginPolicyPreviousAttributes
} from './types-22.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-41.js';
import type { PartnerWebhookEnvelope } from './types-49.js';
import type { WebhookDeliveryProfile } from './types-76.js';
import type { ResponseMeta } from './types-60.js';
/** The `callback` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCallbackInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "callback".
     */
    "type": "callback";
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "callback".
     */
    "type": ("callback") & ("callback");
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
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
/** The `caller_supplied` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCallerSupplied = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "caller_supplied".
     */
    "type": "caller_supplied" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "caller_supplied".
     */
    "type": unknown;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
}));
/** The `caller_supplied` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCallerSuppliedInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "caller_supplied".
     */
    "type": "caller_supplied";
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "caller_supplied".
     */
    "type": ("caller_supplied") & ("caller_supplied");
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
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
/** The `fixed` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputFixed = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** How the method sets its price. Set the property named by this value. Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** How the method sets its price. Set the property named by this value. Value enum: "fixed". */
    "type": unknown;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategy;
}));
/** The `fixed` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputFixedInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** How the method sets its price. Set the property named by this value. Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** How the method sets its price. Set the property named by this value. Value enum: "fixed". */
    "type": ("fixed") & ("fixed");
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
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
/** The `rate_table` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputRateTable = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "rate_table".
     */
    "type": "rate_table" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "rate_table".
     */
    "type": unknown;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequest;
}));
/** The `rate_table` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputRateTableInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "rate_table".
     */
    "type": "rate_table";
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "rate_table".
     */
    "type": ("rate_table") & ("rate_table");
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
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
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "tiered".
     */
    "type": "tiered" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "tiered".
     */
    "type": unknown;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
}));
/** The `tiered` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputTieredInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategyRequestInput;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "tiered".
     */
    "type": "tiered";
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "tiered".
     */
    "type": ("tiered") & ("tiered");
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
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
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "fixed",
     * "rate_table", "tiered", "calculated", "callback", "caller_supplied".
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
 * The pricing strategy you supply when creating a delivery method. Set `type` and the matching
 * property.
 */
export type DeliveryPricingStrategyCreateRequestInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "fixed",
     * "rate_table", "tiered", "calculated", "callback", "caller_supplied".
     */
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
     * Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing
     * calculated from a base fee, distance, weight, and per-item handling, with minimum and
     * maximum fees, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that
     * comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded
     * by minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by
     * currency.
     */
    "fixed": DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that
     * charges the price of the first matching rate in a list of prioritized rates.
     * `unmatched_behavior` says what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** How the method sets its price. Set the property named by this value. Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** How the method sets its price. Set the property named by this value. Value enum: "fixed". */
    "type": unknown;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by
     * currency.
     */
    "fixed": DeliveryFixedPricingStrategy;
}));
export type DeliveryPricingStrategyFixedPreviousAttributes = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. anyOf[1] (Value): {@link
     * DeliveryCalculatedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "calculated"?: ((DeliveryCalculatedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. anyOf[1] (Value): {@link
     * DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "callback"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. anyOf[1]
     * (Value): {@link DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "caller_supplied"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. anyOf[1] (Value): {@link
     * DeliveryFixedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "fixed"?: ((DeliveryFixedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. anyOf[1] (Value): {@link
     * DeliveryRateTablePricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "rate_table"?: ((DeliveryRateTablePricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. anyOf[1] (Value): {@link
     * DeliveryTieredPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tiered"?: ((DeliveryTieredPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "fixed".
     * anyOf[1] (Value): string. How the method sets its price. Set the property named by this
     * value. Value enum: "fixed". anyOf[2] (Value): null.
     */
    "type"?: (("fixed" | (string & {})) | (null));
})
    & ({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "fixed".
     * anyOf[1] (Value): any. How the method sets its price. Set the property named by this value.
     * Value enum: "fixed". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
});
/** The `calculated` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputCalculated = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "calculated".
     */
    "type": "calculated" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "calculated".
     */
    "type": unknown;
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
/** The `calculated` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputCalculatedInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "calculated".
     */
    "type": "calculated";
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "calculated".
     */
    "type": ("calculated") & ("calculated");
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
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
/** The `callback` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputCallback = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "callback".
     */
    "type": "callback" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "callback".
     */
    "type": unknown;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
}));
/** The `callback` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputCallbackInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "callback".
     */
    "type": "callback";
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "callback".
     */
    "type": ("callback") & ("callback");
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
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
/** The `caller_supplied` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputCallerSupplied = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "caller_supplied".
     */
    "type": "caller_supplied" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "caller_supplied".
     */
    "type": unknown;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
}));
/** The `caller_supplied` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputCallerSuppliedInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "caller_supplied".
     */
    "type": "caller_supplied";
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "caller_supplied".
     */
    "type": ("caller_supplied") & ("caller_supplied");
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
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
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** How the method sets its price. Set the property named by this value. Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** How the method sets its price. Set the property named by this value. Value enum: "fixed". */
    "type": unknown;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategy;
}));
/** The `fixed` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputFixedInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** How the method sets its price. Set the property named by this value. Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** How the method sets its price. Set the property named by this value. Value enum: "fixed". */
    "type": ("fixed") & ("fixed");
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
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
/** The `rate_table` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputRateTable = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "rate_table".
     */
    "type": "rate_table" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "rate_table".
     */
    "type": unknown;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequest;
}));
/** The `rate_table` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputRateTableInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "rate_table".
     */
    "type": "rate_table";
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "rate_table".
     */
    "type": ("rate_table") & ("rate_table");
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
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
/** The `tiered` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputTiered = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "tiered".
     */
    "type": "tiered" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "tiered".
     */
    "type": unknown;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
}));
/** The `tiered` variant of `DeliveryPricingStrategyInput`. */
export type DeliveryPricingStrategyInputTieredInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategyRequestInput;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "tiered".
     */
    "type": "tiered";
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "tiered".
     */
    "type": ("tiered") & ("tiered");
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
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
export type DeliveryPricingStrategyPreviousAttributes = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. anyOf[1] (Value): {@link
     * DeliveryCalculatedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "calculated"?: ((DeliveryCalculatedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. anyOf[1] (Value): {@link
     * DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "callback"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. anyOf[1]
     * (Value): {@link DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "caller_supplied"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. anyOf[1] (Value): {@link
     * DeliveryFixedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "fixed"?: ((DeliveryFixedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. anyOf[1] (Value): {@link
     * DeliveryRateTablePricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "rate_table"?: ((DeliveryRateTablePricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. anyOf[1] (Value): {@link
     * DeliveryTieredPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tiered"?: ((DeliveryTieredPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "fixed",
     * "rate_table", "tiered", "calculated", "callback", "caller_supplied". anyOf[1] (Value):
     * string. How the method sets its price. Set the property named by this value. Value enum:
     * "fixed", "rate_table", "tiered", "calculated", "callback", "caller_supplied". anyOf[2]
     * (Value): null.
     */
    "type"?: (("fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied" | (string & {}))
        | (null));
})
    & (((Exclude<DeliveryPricingStrategyCalculatedPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCallbackPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCallerSuppliedPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyFixedPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyRateTablePreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyTieredPreviousAttributes & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/** The `rate_table` variant of `DeliveryPricingStrategy`. */
export type DeliveryPricingStrategyRateTable = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing
     * calculated from a base fee, distance, weight, and per-item handling, with minimum and
     * maximum fees, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that
     * comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded
     * by minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by
     * currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that
     * charges the price of the first matching rate in a list of prioritized rates.
     * `unmatched_behavior` says what happens when none match.
     */
    "rate_table": DeliveryRateTablePricingStrategy;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "rate_table".
     */
    "type": "rate_table" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "rate_table".
     */
    "type": unknown;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that
     * charges the price of the first matching rate in a list of prioritized rates.
     * `unmatched_behavior` says what happens when none match.
     */
    "rate_table": DeliveryRateTablePricingStrategy;
}));
export type DeliveryPricingStrategyRateTablePreviousAttributes = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. anyOf[1] (Value): {@link
     * DeliveryCalculatedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "calculated"?: ((DeliveryCalculatedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. anyOf[1] (Value): {@link
     * DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "callback"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. anyOf[1]
     * (Value): {@link DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "caller_supplied"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. anyOf[1] (Value): {@link
     * DeliveryFixedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "fixed"?: ((DeliveryFixedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. anyOf[1] (Value): {@link
     * DeliveryRateTablePricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "rate_table"?: ((DeliveryRateTablePricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. anyOf[1] (Value): {@link
     * DeliveryTieredPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tiered"?: ((DeliveryTieredPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "rate_table". anyOf[1] (Value): string. How the method sets its price. Set the property
     * named by this value. Value enum: "rate_table". anyOf[2] (Value): null.
     */
    "type"?: (("rate_table" | (string & {})) | (null));
})
    & ({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "rate_table". anyOf[1] (Value): any. How the method sets its price. Set the property named
     * by this value. Value enum: "rate_table". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
});
/**
 * The pricing strategy you supply when updating a delivery method. Set `type` and the matching
 * property.
 */
export type DeliveryPricingStrategyRequest = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "fixed",
     * "rate_table", "tiered", "calculated", "callback", "caller_supplied".
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
 * The pricing strategy you supply when updating a delivery method. Set `type` and the matching
 * property.
 */
export type DeliveryPricingStrategyRequestInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "fixed",
     * "rate_table", "tiered", "calculated", "callback", "caller_supplied".
     */
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
     * Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing
     * calculated from a base fee, distance, weight, and per-item handling, with minimum and
     * maximum fees, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that
     * comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded
     * by minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by
     * currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that
     * charges the price of the first matching rate in a list of prioritized rates.
     * `unmatched_behavior` says what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered": DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "tiered".
     */
    "type": "tiered" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "tiered".
     */
    "type": unknown;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered": DeliveryTieredPricingStrategy;
}));
export type DeliveryPricingStrategyTieredPreviousAttributes = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. anyOf[1] (Value): {@link
     * DeliveryCalculatedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "calculated"?: ((DeliveryCalculatedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. anyOf[1] (Value): {@link
     * DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "callback"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. anyOf[1]
     * (Value): {@link DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "caller_supplied"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. anyOf[1] (Value): {@link
     * DeliveryFixedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "fixed"?: ((DeliveryFixedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. anyOf[1] (Value): {@link
     * DeliveryRateTablePricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "rate_table"?: ((DeliveryRateTablePricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. anyOf[1] (Value): {@link
     * DeliveryTieredPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tiered"?: ((DeliveryTieredPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "tiered".
     * anyOf[1] (Value): string. How the method sets its price. Set the property named by this
     * value. Value enum: "tiered". anyOf[2] (Value): null.
     */
    "type"?: (("tiered" | (string & {})) | (null));
})
    & ({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "tiered".
     * anyOf[1] (Value): any. How the method sets its price. Set the property named by this value.
     * Value enum: "tiered". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
});
/**
 * One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to
 * `to`, with a price per currency.
 */
export type DeliveryPricingTierBand = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Inclusive lower bound. The first band starts at 0; every later band starts at the previous
     * band's `to`. Format: int64.
     */
    "from": number;
    /**
     * Exclusive upper bound. Required for every band except the final band, where it must be
     * omitted. Format: int64.
     */
    "to"?: number;
};
export type DeliveryPricingTierBandPreviousAttributes = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value.
     * anyOf[1] (Value): Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * Inclusive lower bound. The first band starts at 0; every later band starts at the previous
     * band's `to`. anyOf[1] (Value): integer. Inclusive lower bound. The first band starts at 0;
     * every later band starts at the previous band's `to`. Format: int64. anyOf[2] (Value): null.
     */
    "from"?: ((number) | (null));
    /**
     * Exclusive upper bound. Required for every band except the final band, where it must be
     * omitted. anyOf[1] (Value): integer. Exclusive upper bound. Required for every band except
     * the final band, where it must be omitted. Format: int64. anyOf[2] (Value): null.
     */
    "to"?: ((number) | (null));
};
/**
 * One band of a tiered pricing strategy you supply, covering values of the strategy's `basis` from
 * `from` to `to`, with a price per currency.
 */
export type DeliveryPricingTierBandRequestInput = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Inclusive lower bound. The first band starts at 0; every later band starts at the previous
     * band's `to`. Format: int64.
     */
    "from": number;
    /**
     * Exclusive upper bound. Required for every band except the final band, where it must be
     * omitted. Format: int64.
     */
    "to"?: number;
};
/** Reusable delivery rules assigned to catalog items. */
export type DeliveryProfile = {
    /**
     * Current delivery requirement and grouping policy. Whether delivery planning applies to items
     * under a delivery profile, and if so the allowed delivery types, resolution mode, origin
     * policy, and grouping and splitting rules.
     */
    "configuration": DeliveryProfileConfiguration;
    /** Time the profile was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Immutable revision used for new line-item snapshots. Example:
     * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F".
     */
    "current_delivery_profile_revision_id": string;
    /** Stable delivery profile ID. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". */
    "delivery_profile_id": string;
    /**
     * Read-only catalog and delivery-method compatibility diagnostics. Read-only coverage checks
     * for a delivery profile, such as how many active Locations have no compatible delivery method
     * and how many countries its zones name.
     */
    "diagnostics"?: DeliveryProfileDiagnostics;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
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
    /**
     * Progress of the profile's latest bulk assignment through `POST
     * /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`. `null` when the profile
     * has never had one. Omitted when the response is a write response or a webhook object;
     * retrieve and list responses include it. Flint updates it as the assignment's runs commit,
     * without changing the profile's `version` or sending `delivery_profile.updated`; each batch's
     * `product_variant.updated`, `product.updated`, and `bundle.updated` events report the items
     * it assigned. anyOf[1] (Value): {@link DeliveryProfileUnconfiguredAssignment}. Progress of a
     * delivery profile's latest bulk assignment to catalog items that have no delivery profile. It
     * moves from `processing` to `completed`, to `canceled` when it stops early, or to `failed`
     * when Flint can't finish it. anyOf[2] (Value): null.
     */
    "unconfigured_assignment"?: ((DeliveryProfileUnconfiguredAssignment) | (null));
    /** Time the profile last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1. */
    "version": number;
};
export type DeliveryProfileArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookDeliveryProfile;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryProfileConfigurationPreviousAttributes) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "current_delivery_profile_revision_id"?: ((string) | (null));
            "delivery_profile_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "is_default"?: ((boolean) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "name"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_profile.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookDeliveryProfile;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryProfileConfigurationPreviousAttributes) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "current_delivery_profile_revision_id"?: ((string) | (null));
            "delivery_profile_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "is_default"?: ((boolean) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "name"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_profile.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): {@link WebhookDeliveryProfile}. The resource snapshot, without
     * expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.configuration (Optional): {@link
     * DeliveryProfileConfigurationPreviousAttributes} or null. Current delivery requirement and
     * grouping policy. previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryProfileConfigurationPreviousAttributes}. previous_attributes.configuration.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. Time the profile
     * was created. previous_attributes.created_at.anyOf[1] (Value): string. Time the profile was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.current_delivery_profile_revision_id (Optional): string or null.
     * Immutable revision used for new line-item snapshots.
     * previous_attributes.current_delivery_profile_revision_id.anyOf[1] (Value): string. Immutable
     * revision used for new line-item snapshots. Example: "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F".
     * previous_attributes.current_delivery_profile_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_profile_id (Optional): string or null. Stable delivery profile
     * ID. previous_attributes.delivery_profile_id.anyOf[1] (Value): string. Stable delivery
     * profile ID. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
     * previous_attributes.delivery_profile_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.is_default (Optional): boolean or null. True only when this profile is
     * the current physical catalog default. previous_attributes.is_default.anyOf[1] (Value):
     * boolean. True only when this profile is the current physical catalog default.
     * previous_attributes.is_default.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing profile name. previous_attributes.name.anyOf[1] (Value):
     * string. Merchant-facing profile name. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current profile lifecycle status.
     * Value enum: "active", "archived". previous_attributes.status.anyOf[1] (Value): string.
     * Current profile lifecycle status. Value enum: "active", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. Time the profile last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. Time the profile last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null.
     * Optimistic-concurrency version for profile writes. previous_attributes.version.anyOf[1]
     * (Value): integer. Optimistic-concurrency version for profile writes. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
         * `unconfigured_assignment`.
         */
        "object": WebhookDeliveryProfile;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryProfileConfigurationPreviousAttributes} or null. Current delivery requirement
         * and grouping policy. configuration.anyOf[1] (Value): {@link
         * DeliveryProfileConfigurationPreviousAttributes}. configuration.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the profile was created. created_at.anyOf[1]
         * (Value): string. Time the profile was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_profile_revision_id (Optional): string or null. Immutable revision used
         * for new line-item snapshots. current_delivery_profile_revision_id.anyOf[1] (Value):
         * string. Immutable revision used for new line-item snapshots. Example:
         * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F". current_delivery_profile_revision_id.anyOf[2]
         * (Value): null. delivery_profile_id (Optional): string or null. Stable delivery profile
         * ID. delivery_profile_id.anyOf[1] (Value): string. Stable delivery profile ID. Example:
         * "dprof_01KEZF7C0020J13FQYNY9854R0". delivery_profile_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. is_default
         * (Optional): boolean or null. True only when this profile is the current physical catalog
         * default. is_default.anyOf[1] (Value): boolean. True only when this profile is the
         * current physical catalog default. is_default.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing profile name. name.anyOf[1] (Value): string. Merchant-facing
         * profile name. name.anyOf[2] (Value): null. status (Optional): string or null. Current
         * profile lifecycle status. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Current profile lifecycle status. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. updated_at (Optional): string or null. Time the profile
         * last changed. updated_at.anyOf[1] (Value): string. Time the profile last changed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         * version (Optional): integer or null. Optimistic-concurrency version for profile writes.
         * version.anyOf[1] (Value): integer. Optimistic-concurrency version for profile writes.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current delivery requirement and grouping policy. anyOf[1] (Value): {@link
             * DeliveryProfileConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryProfileConfigurationPreviousAttributes) | (null) | (unknown));
            /**
             * Time the profile was created. anyOf[1] (Value): string. Time the profile was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision used for new line-item snapshots. anyOf[1] (Value): string.
             * Immutable revision used for new line-item snapshots. Example:
             * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F". anyOf[2] (Value): null.
             */
            "current_delivery_profile_revision_id"?: ((string) | (null));
            /**
             * Stable delivery profile ID. anyOf[1] (Value): string. Stable delivery profile ID.
             * Example: "dprof_01KEZF7C0020J13FQYNY9854R0". anyOf[2] (Value): null.
             */
            "delivery_profile_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * True only when this profile is the current physical catalog default. anyOf[1]
             * (Value): boolean. True only when this profile is the current physical catalog
             * default. anyOf[2] (Value): null.
             */
            "is_default"?: ((boolean) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Merchant-facing profile name. anyOf[1] (Value): string. Merchant-facing profile
             * name. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Current profile lifecycle status. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Current profile lifecycle status. Value enum: "active", "archived".
             * anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * Time the profile last changed. anyOf[1] (Value): string. Time the profile last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for profile writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_profile.archived". */
    "event_type"?: "delivery_profile.archived";
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
 * The `delivery_profile.archived` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type DeliveryProfileArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookDeliveryProfile}. The resource snapshot, without
     * expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.configuration (Optional): {@link
     * DeliveryProfileConfigurationPreviousAttributes} or null. Current delivery requirement and
     * grouping policy. previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryProfileConfigurationPreviousAttributes}. previous_attributes.configuration.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. Time the profile
     * was created. previous_attributes.created_at.anyOf[1] (Value): string. Time the profile was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.current_delivery_profile_revision_id (Optional): string or null.
     * Immutable revision used for new line-item snapshots.
     * previous_attributes.current_delivery_profile_revision_id.anyOf[1] (Value): string. Immutable
     * revision used for new line-item snapshots. Example: "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F".
     * previous_attributes.current_delivery_profile_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_profile_id (Optional): string or null. Stable delivery profile
     * ID. previous_attributes.delivery_profile_id.anyOf[1] (Value): string. Stable delivery
     * profile ID. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
     * previous_attributes.delivery_profile_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.is_default (Optional): boolean or null. True only when this profile is
     * the current physical catalog default. previous_attributes.is_default.anyOf[1] (Value):
     * boolean. True only when this profile is the current physical catalog default.
     * previous_attributes.is_default.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing profile name. previous_attributes.name.anyOf[1] (Value):
     * string. Merchant-facing profile name. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current profile lifecycle status.
     * Value enum: "active", "archived". previous_attributes.status.anyOf[1] (Value): string.
     * Current profile lifecycle status. Value enum: "active", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. Time the profile last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. Time the profile last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null.
     * Optimistic-concurrency version for profile writes. previous_attributes.version.anyOf[1]
     * (Value): integer. Optimistic-concurrency version for profile writes. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
         * `unconfigured_assignment`.
         */
        "object": WebhookDeliveryProfile;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryProfileConfigurationPreviousAttributes} or null. Current delivery requirement
         * and grouping policy. configuration.anyOf[1] (Value): {@link
         * DeliveryProfileConfigurationPreviousAttributes}. configuration.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the profile was created. created_at.anyOf[1]
         * (Value): string. Time the profile was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_profile_revision_id (Optional): string or null. Immutable revision used
         * for new line-item snapshots. current_delivery_profile_revision_id.anyOf[1] (Value):
         * string. Immutable revision used for new line-item snapshots. Example:
         * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F". current_delivery_profile_revision_id.anyOf[2]
         * (Value): null. delivery_profile_id (Optional): string or null. Stable delivery profile
         * ID. delivery_profile_id.anyOf[1] (Value): string. Stable delivery profile ID. Example:
         * "dprof_01KEZF7C0020J13FQYNY9854R0". delivery_profile_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. is_default
         * (Optional): boolean or null. True only when this profile is the current physical catalog
         * default. is_default.anyOf[1] (Value): boolean. True only when this profile is the
         * current physical catalog default. is_default.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing profile name. name.anyOf[1] (Value): string. Merchant-facing
         * profile name. name.anyOf[2] (Value): null. status (Optional): string or null. Current
         * profile lifecycle status. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Current profile lifecycle status. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. updated_at (Optional): string or null. Time the profile
         * last changed. updated_at.anyOf[1] (Value): string. Time the profile last changed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         * version (Optional): integer or null. Optimistic-concurrency version for profile writes.
         * version.anyOf[1] (Value): integer. Optimistic-concurrency version for profile writes.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current delivery requirement and grouping policy. anyOf[1] (Value): {@link
             * DeliveryProfileConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryProfileConfigurationPreviousAttributes) | (null) | (unknown));
            /**
             * Time the profile was created. anyOf[1] (Value): string. Time the profile was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision used for new line-item snapshots. anyOf[1] (Value): string.
             * Immutable revision used for new line-item snapshots. Example:
             * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F". anyOf[2] (Value): null.
             */
            "current_delivery_profile_revision_id"?: ((string) | (null));
            /**
             * Stable delivery profile ID. anyOf[1] (Value): string. Stable delivery profile ID.
             * Example: "dprof_01KEZF7C0020J13FQYNY9854R0". anyOf[2] (Value): null.
             */
            "delivery_profile_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * True only when this profile is the current physical catalog default. anyOf[1]
             * (Value): boolean. True only when this profile is the current physical catalog
             * default. anyOf[2] (Value): null.
             */
            "is_default"?: ((boolean) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Merchant-facing profile name. anyOf[1] (Value): string. Merchant-facing profile
             * name. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Current profile lifecycle status. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Current profile lifecycle status. Value enum: "active", "archived".
             * anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * Time the profile last changed. anyOf[1] (Value): string. Time the profile last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for profile writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_profile.archived". */
    "event_type"?: "delivery_profile.archived";
});
/**
 * An accepted assignment of a delivery profile to catalog items that have none, with counts of the
 * product variants and bundle components that had none when Flint accepted it. Flint assigns them
 * after responding; `unconfigured_assignment` is the progress to poll.
 */
export type DeliveryProfileAssignment = {
    /**
     * Bundle components of physical products without a delivery profile when Flint accepted the
     * request. Flint assigns the profile to each one that still has none when the assignment
     * reaches it. Format: int64. minimum: 0.
     */
    "bundle_components_unconfigured": number;
    /**
     * Delivery profile Flint assigns to each unconfigured catalog item. Example:
     * "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id": string;
    /**
     * Physical product variants without a delivery profile when Flint accepted the request. Flint
     * assigns the profile to each one that still has none when the assignment reaches it. Format:
     * int64. minimum: 0.
     */
    "product_variants_unconfigured": number;
    /**
     * The accepted assignment, `processing`. Poll `GET
     * /v1/delivery-profiles/{delivery_profile_id}` until its `unconfigured_assignment.status` is
     * no longer `processing`. Progress of a delivery profile's latest bulk assignment to catalog
     * items that have no delivery profile. It moves from `processing` to `completed`, to
     * `canceled` when it stops early, or to `failed` when Flint can't finish it.
     */
    "unconfigured_assignment": DeliveryProfileUnconfiguredAssignment;
};
/** A response containing `DeliveryProfileAssignment` data. */
export type DeliveryProfileAssignmentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An accepted assignment
     * of a delivery profile to catalog items that have none, with counts of the product variants
     * and bundle components that had none when Flint accepted it. Flint assigns them after
     * responding; `unconfigured_assignment` is the progress to poll.
     */
    "data": DeliveryProfileAssignment;
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
/**
 * Whether delivery planning applies to items under a delivery profile, and if so the allowed
 * delivery types, resolution mode, origin policy, and grouping and splitting rules.
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
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "digital", "service". [] (Value): string. Value enum: "digital", "service".
     */
    "allowed_types": Array<"digital" | "service" | (string & {})>;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": unknown;
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "manual".
     */
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
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "digital", "service". [] (Value): string. Value enum: "digital", "service".
     */
    "allowed_types": Array<"digital" | "service">;
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
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "none".
     */
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
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "none".
     */
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
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery". [] (Value): string. Value enum:
     * "shipment", "pickup", "local_delivery".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | (string & {})>;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": unknown;
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote".
     */
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
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery". [] (Value): string. Value enum:
     * "shipment", "pickup", "local_delivery".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery">;
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
export type DeliveryProfileConfigurationPreviousAttributes = {
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. [] enum: "shipment",
     * "pickup", "local_delivery", "digital", "service". anyOf[1] (Value): Array of string.
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. [] enum: "shipment",
     * "pickup", "local_delivery", "digital", "service". anyOf[1][] (Value): string. Value enum:
     * "shipment", "pickup", "local_delivery", "digital", "service". anyOf[2] (Value): null.
     */
    "allowed_types"?: ((Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>) | (null));
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     * anyOf[1] (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls which delivery obligations can share a choice
     * group. Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone". anyOf[2] (Value): null.
     */
    "combination_policy"?: (("combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {}))
        | (null));
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. anyOf[1] (Value): {@link
     * DeliveryProfileOriginPolicyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "origin_policy"?: ((DeliveryProfileOriginPolicyPreviousAttributes) | (null) | (unknown));
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "none", "required". anyOf[1] (Value): string. Whether delivery planning
     * applies. none forbids every other configuration field. required also requires
     * resolution_mode and allowed_types, plus the fields required by that resolution mode. Value
     * enum: "none", "required". anyOf[2] (Value): null.
     */
    "requirement"?: (("none" | "required" | (string & {})) | (null));
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual". anyOf[1] (Value):
     * string. Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual". anyOf[2] (Value):
     * null.
     */
    "resolution_mode"?: (("quote" | "manual" | (string & {})) | (null));
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed". anyOf[1] (Value): string. Required
     * for quote resolution and forbidden when requirement is none or resolution_mode is manual.
     * Controls whether a line item quantity can be split across delivery assignments. Value enum:
     * "whole_line_item", "quantity_split_allowed". anyOf[2] (Value): null.
     */
    "splitting_policy"?: (("whole_line_item" | "quantity_split_allowed" | (string & {})) | (null));
};
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
        "object": WebhookDeliveryProfile;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_profile.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookDeliveryProfile;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_profile.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): {@link WebhookDeliveryProfile}. The resource snapshot, without
     * expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
         * `unconfigured_assignment`.
         */
        "object": WebhookDeliveryProfile;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_profile.created". */
    "event_type"?: "delivery_profile.created";
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
 * The `delivery_profile.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryProfileCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookDeliveryProfile}. The resource snapshot, without
     * expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
         * `unconfigured_assignment`.
         */
        "object": WebhookDeliveryProfile;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_profile.created". */
    "event_type"?: "delivery_profile.created";
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
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * DeliveryProfile}. Reusable delivery rules assigned to catalog items.
     */
    "data": Array<DeliveryProfile>;
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
/**
 * Where items under a delivery profile ship or leave from: a fixed Location (`location_id`),
 * inventory routing, or the origin set on the delivery method.
 */
export type DeliveryProfileOriginPolicy = {
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Where items under the profile leave from. Value enum: "fixed_location", "inventory_routing",
     * "method_origin".
     */
    "type": "fixed_location" | "inventory_routing" | "method_origin" | (string & {});
};
/** The `fixed_location` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputFixedLocation = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /** Where items under the profile leave from. Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & ({
    /** Where items under the profile leave from. Value enum: "fixed_location". */
    "type": unknown;
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
});
/** The `fixed_location` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputFixedLocationInput = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /** Where items under the profile leave from. Value enum: "fixed_location". */
    "type": "fixed_location";
})
    & ({
    /** Where items under the profile leave from. Value enum: "fixed_location". */
    "type": "fixed_location";
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
});
/** The `inventory_routing` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputInventoryRouting = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /** Where items under the profile leave from. Value enum: "inventory_routing". */
    "type": "inventory_routing" | (string & {});
})
    & (({
    /** Where items under the profile leave from. Value enum: "inventory_routing". */
    "type": unknown;
}));
/** The `inventory_routing` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputInventoryRoutingInput = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /** Where items under the profile leave from. Value enum: "inventory_routing". */
    "type": "inventory_routing";
})
    & (({
    /** Where items under the profile leave from. Value enum: "inventory_routing". */
    "type": "inventory_routing";
})
    & (({
    "location_id"?: never;
})));
/** The `method_origin` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputMethodOrigin = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /** Where items under the profile leave from. Value enum: "method_origin". */
    "type": "method_origin" | (string & {});
})
    & (({
    /** Where items under the profile leave from. Value enum: "method_origin". */
    "type": unknown;
}));
