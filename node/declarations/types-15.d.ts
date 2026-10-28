import type {
    DeliveryCalculatedPricingStrategy,
    DeliveryCallbackPricingStrategyRequest,
    DeliveryCallerSuppliedPricingStrategyRequest,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryBuyerLocationResource,
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource
} from './types-12.js';
import type {
    DeliveryFixedPricingStrategy,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryExternalPricingStrategy,
    DeliveryInputRequirement,
    DeliveryMerchantDiagnostic,
    DeliveryDistance,
    DeliveryDistanceInput
} from './types-13.js';
import type {
    DeliveryRateTablePricingStrategyRequest,
    DeliveryTieredPricingStrategy,
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryRateTablePricingStrategy
} from './types-16.js';
import type {
    DeliveryPricingStrategyInputCalculated,
    DeliveryPricingStrategyInputCallback,
    DeliveryPricingStrategyInputCallerSupplied,
    DeliveryPricingStrategyInputFixed,
    DeliveryPricingStrategyInputRateTable,
    DeliveryPricingStrategyInputCalculatedInput,
    DeliveryPricingStrategyInputCallbackInput,
    DeliveryPricingStrategyInputCallerSuppliedInput,
    DeliveryPricingStrategyInputFixedInput,
    DeliveryPricingStrategyInputRateTableInput,
    DeliveryPendingCallerRateRequest,
    DeliveryOptionProjection
} from './types-14.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { MetadataMap } from './types-32.js';
import type { ResponseMeta } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { AssignToUnconfiguredDeliveryProfileRequestInput, Address } from './types-0.js';
import type { CreateDeliveryProfileRequestInput } from './types-6.js';
import type { UpdateDeliveryProfileRequestInput } from './types-51.js';
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
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
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
    "request_id": string;
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
 * Shape $ (Value): {@link DeliveryProfileConfigurationInputManual}. The `manual` variant of
 * `DeliveryProfileConfigurationInputRequired`.
 */
export type DeliveryProfileConfigurationInputManual = ({
    /**
     * Shape $ (Value): Array of string. Required as a non-empty unique list when requirement is
     * required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and
     * service. minItems: 1. uniqueItems: true. [] enum: "shipment", "pickup", "local_delivery",
     * "digital", "service". Shape $[] (Value): string. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
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
     * fields required by that resolution mode. Value enum: "required".
     */
    "requirement": "required" | (string & {});
    /**
     * Shape $ (Value): string. Required when requirement is required. quote plans physical
     * delivery and requires origin_policy, combination_policy, and splitting_policy. manual
     * supports digital and service items and forbids physical planning fields. Value enum:
     * "manual".
     */
    "resolution_mode": "manual" | (string & {});
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls whether a line item quantity can be split across
     * delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): Array of string. minItems: 1. uniqueItems: true. [] enum: "digital",
     * "service". Shape $[] (Value): string. Value enum: "digital", "service".
     */
    "allowed_types": Array<"digital" | "service" | (string & {})>;
    /** Shape $ (Value): any.  Value enum: "required". */
    "requirement": unknown;
    /** Shape $ (Value): any.  Value enum: "manual". */
    "resolution_mode": unknown;
}));
/**
 * Shape $ (Value): {@link DeliveryProfileConfigurationInputManualInput}. The `manual` variant of
 * `DeliveryProfileConfigurationInputRequired`.
 */
export type DeliveryProfileConfigurationInputManualInput = ({
    /**
     * Shape $ (Value): Array of string. Required as a non-empty unique list when requirement is
     * required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and
     * service. minItems: 1. uniqueItems: true. [] enum: "shipment", "pickup", "local_delivery",
     * "digital", "service". Shape $[] (Value): string. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">;
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
     * fields required by that resolution mode. Value enum: "required".
     */
    "requirement": "required";
    /**
     * Shape $ (Value): string. Required when requirement is required. quote plans physical
     * delivery and requires origin_policy, combination_policy, and splitting_policy. manual
     * supports digital and service items and forbids physical planning fields. Value enum:
     * "manual".
     */
    "resolution_mode": "manual";
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls whether a line item quantity can be split across
     * delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
})
    & (({
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
})));
/**
 * Shape $ (Value): {@link DeliveryProfileConfigurationInputNone}. The `none` variant of
 * `DeliveryProfileConfigurationInput`.
 */
export type DeliveryProfileConfigurationInputNone = ({
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
     * fields required by that resolution mode. Value enum: "none".
     */
    "requirement": "none" | (string & {});
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
    & (({
    /** Shape $ (Value): any.  Value enum: "none". */
    "requirement": unknown;
}));
/**
 * Shape $ (Value): {@link DeliveryProfileConfigurationInputNoneInput}. The `none` variant of
 * `DeliveryProfileConfigurationInput`.
 */
export type DeliveryProfileConfigurationInputNoneInput = ({
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
     * fields required by that resolution mode. Value enum: "none".
     */
    "requirement": "none";
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
    & (({
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
})));
/**
 * Shape $ (Value): {@link DeliveryProfileConfigurationInputQuote}. The `quote` variant of
 * `DeliveryProfileConfigurationInputRequired`.
 */
export type DeliveryProfileConfigurationInputQuote = ({
    /**
     * Shape $ (Value): Array of string. Required as a non-empty unique list when requirement is
     * required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and
     * service. minItems: 1. uniqueItems: true. [] enum: "shipment", "pickup", "local_delivery",
     * "digital", "service". Shape $[] (Value): string. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
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
     * Shape $ (Value): {@link DeliveryProfileOriginPolicyRequest}. Required for quote resolution
     * and forbidden for none or manual resolution. fixed_location requires location_id.
     * inventory_routing forbids location_id and applies only to tracked inventory. method_origin
     * forbids location_id. Origin policy you supply for a delivery profile: a fixed Location
     * (`location_id`), inventory routing, or the origin set on the delivery method.
     */
    "origin_policy": DeliveryProfileOriginPolicyRequest;
    /**
     * Shape $ (Value): string. Whether delivery planning applies. none forbids every other
     * configuration field. required also requires resolution_mode and allowed_types, plus the
     * fields required by that resolution mode. Value enum: "required".
     */
    "requirement": "required" | (string & {});
    /**
     * Shape $ (Value): string. Required when requirement is required. quote plans physical
     * delivery and requires origin_policy, combination_policy, and splitting_policy. manual
     * supports digital and service items and forbids physical planning fields. Value enum:
     * "quote".
     */
    "resolution_mode": "quote" | (string & {});
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls whether a line item quantity can be split across
     * delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy": "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    & ({
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
});
/**
 * Shape $ (Value): {@link DeliveryProfileConfigurationInputQuoteInput}. The `quote` variant of
 * `DeliveryProfileConfigurationInputRequired`.
 */
export type DeliveryProfileConfigurationInputQuoteInput = ({
    /**
     * Shape $ (Value): Array of string. Required as a non-empty unique list when requirement is
     * required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and
     * service. minItems: 1. uniqueItems: true. [] enum: "shipment", "pickup", "local_delivery",
     * "digital", "service". Shape $[] (Value): string. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">;
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls which delivery obligations can share a choice
     * group. Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy": "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Shape $ (Value): {@link DeliveryProfileOriginPolicyRequestInput}. Required for quote
     * resolution and forbidden for none or manual resolution. fixed_location requires location_id.
     * inventory_routing forbids location_id and applies only to tracked inventory. method_origin
     * forbids location_id. Origin policy you supply for a delivery profile: a fixed Location
     * (`location_id`), inventory routing, or the origin set on the delivery method.
     */
    "origin_policy": DeliveryProfileOriginPolicyRequestInput;
    /**
     * Shape $ (Value): string. Whether delivery planning applies. none forbids every other
     * configuration field. required also requires resolution_mode and allowed_types, plus the
     * fields required by that resolution mode. Value enum: "required".
     */
    "requirement": "required";
    /**
     * Shape $ (Value): string. Required when requirement is required. quote plans physical
     * delivery and requires origin_policy, combination_policy, and splitting_policy. manual
     * supports digital and service items and forbids physical planning fields. Value enum:
     * "quote".
     */
    "resolution_mode": "quote";
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls whether a line item quantity can be split across
     * delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy": "whole_line_item" | "quantity_split_allowed";
})
    & ({
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
});
/**
 * Shape $ (Value): {@link DeliveryProfileConfigurationInputRequired}. The `required` variant of
 * `DeliveryProfileConfigurationInput`.
 */
export type DeliveryProfileConfigurationInputRequired = ({
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
     * fields required by that resolution mode. Value enum: "required".
     */
    "requirement": "required" | (string & {});
    /**
     * Shape $ (Value): string. Required when requirement is required. quote plans physical
     * delivery and requires origin_policy, combination_policy, and splitting_policy. manual
     * supports digital and service items and forbids physical planning fields. Value enum:
     * "quote", "manual".
     */
    "resolution_mode": "quote" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls whether a line item quantity can be split across
     * delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    & ((Exclude<DeliveryProfileConfigurationInputQuote & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileConfigurationInputManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryProfileConfigurationInputRequiredInput}. The `required` variant
 * of `DeliveryProfileConfigurationInput`.
 */
export type DeliveryProfileConfigurationInputRequiredInput = ({
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
     * fields required by that resolution mode. Value enum: "required".
     */
    "requirement": "required";
    /**
     * Shape $ (Value): string. Required when requirement is required. quote plans physical
     * delivery and requires origin_policy, combination_policy, and splitting_policy. manual
     * supports digital and service items and forbids physical planning fields. Value enum:
     * "quote", "manual".
     */
    "resolution_mode": "quote" | "manual";
    /**
     * Shape $ (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls whether a line item quantity can be split across
     * delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
})
    & ((Exclude<DeliveryProfileConfigurationInputQuoteInput & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileConfigurationInputManualInput & object, readonly unknown[]>));
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
    & ((Exclude<DeliveryProfileConfigurationInputNone & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileConfigurationInputRequired & object, readonly unknown[]>)
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
    & ((Exclude<DeliveryProfileConfigurationInputNoneInput & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileConfigurationInputRequiredInput & object, readonly unknown[]>));
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
    "request_id": string;
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
    "request_id": string;
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
export type DeliveryProfilesRemoveInput = {
    /** Shape $ (Value): string. */
    "delivery_profile_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeliveryProfilesUpdateInput = {
    /** Shape $ (Value): string. */
    "delivery_profile_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateDeliveryProfileRequestInput}. The request body for: Update
     * delivery profile.
     */
    "body": InputValue<UpdateDeliveryProfileRequestInput>;
};
/**
 * Shape $ (Value): {@link DeliveryQuote}. An estimate of available delivery options and their
 * prices.
 */
export type DeliveryQuote = {
    /** Shape $ (Value): string. */
    "basis_delivery_quote_id"?: string;
    /** Shape $ (Value): string. */
    "basis_delivery_selection_id"?: string;
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationResource}. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. The normalized buyer
     * address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationResource;
    /**
     * Shape $ (Value): Array of string. Buyer-safe reasons no delivery option was available.
     * Merchant configuration details are never included. [] enum: "address_required",
     * "address_incomplete", "outside_delivery_area", "no_pickup_location_nearby",
     * "unavailable_for_these_items", "temporarily_unavailable". Shape $[] (Value): string. Value
     * enum: "address_required", "address_incomplete", "outside_delivery_area",
     * "no_pickup_location_nearby", "unavailable_for_these_items", "temporarily_unavailable".
     */
    "buyer_reasons": Array<"address_required"
        | "address_incomplete"
        | "outside_delivery_area"
        | "no_pickup_location_nearby"
        | "unavailable_for_these_items"
        | "temporarily_unavailable"
        | (string & {})>;
    /** Shape $ (Value): string. Always present with an API key or dashboard credential. */
    "checkout_session_id"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryQuoteChoiceGroupResource}. Shape $[] (Value):
     * {@link DeliveryQuoteChoiceGroupResource}. One group of order items in a delivery quote, with
     * the delivery options the buyer can choose, its availability status, and any input still
     * needed.
     */
    "choice_groups": Array<DeliveryQuoteChoiceGroupResource>;
    /** Shape $ (Value): string. When Flint created this quote. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "delivery_quote_id": string;
    /**
     * Shape $ (Value): integer string. Version of the order's delivery details evaluated by this
     * quote. Always present with an API key or dashboard credential. Use an integer string
     * (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "delivery_quote_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. The delivery revocation that revoked this quote, or null
     * when no revocation applies.
     */
    "delivery_revocation_id": string | null;
    /**
     * Shape $ (Value): {@link Address}. Omitted for a checkout session credential that doesn't act
     * for the customer the buyer verified. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "destination_address"?: Address;
    /**
     * Shape $ (Value): integer string. Version of the checkout eligibility context evaluated by
     * this quote. Always present with an API key or dashboard credential. Use an integer string
     * (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "eligibility_context_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Shape $ (Value): string. Authoritative expiry for this quote: 24 hours when every method
     * uses fixed, tiered, or rate_table pricing, and at most 15 minutes otherwise. A cart with
     * tracked inventory shortens it to the 5 minutes its stock check stays valid. Read this value
     * from every response. Format: date-time.
     */
    "expires_at": string;
    /**
     * Shape $ (Value): Array of {@link DeliveryInputRequirement}. Inputs the delivery methods
     * need. A quote requirement, such as the destination address, is input a method needs before
     * Flint can price it. A selection requirement is input a delivery selection needs before
     * payment, such as a recipient field or delivery window an option requires. A method that
     * waits on the buyer's address or store, or on an address the buyer must correct, already
     * lists the recipient fields it requires. Those requirements name the method's choice group
     * and have no delivery_option_ids. Shape $[] (Value): {@link DeliveryInputRequirement}. An
     * input a delivery method needs, such as an address field or time window, with its
     * `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Shape $ (Value): Array of {@link DeliveryMerchantDiagnostic}. Always present with an API key
     * or dashboard credential. Shape $[] (Value): {@link DeliveryMerchantDiagnostic}. A
     * merchant-only diagnostic explaining why a delivery method produced no option, with its
     * outcome, recommended action, and eligibility mismatches.
     */
    "merchant_diagnostics"?: Array<DeliveryMerchantDiagnostic>;
    /**
     * Shape $ (Value): Array of {@link DeliveryQuoteMethodResource}. Shape $[] (Value): {@link
     * DeliveryQuoteMethodResource}. A delivery method offered in a delivery quote, with its name,
     * type, display position, and revision.
     */
    "methods"?: Array<DeliveryQuoteMethodResource>;
    /** Shape $ (Value): string. Always present with an API key or dashboard credential. */
    "order_id"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryPendingCallerRateRequest}. Shape $[] (Value):
     * {@link DeliveryPendingCallerRateRequest}. A delivery method and choice group still waiting
     * for a caller-supplied rate on a delivery quote.
     */
    "pending_caller_rate_requests"?: Array<DeliveryPendingCallerRateRequest>;
    /**
     * Shape $ (Value): string. Why the quote was revoked: the reason on the delivery revocation
     * that fenced a dependency this quote used. Present when status is revoked. Value enum:
     * "unsafe_configuration", "location_unavailable", "credential_compromise",
     * "legal_requirement", "other".
     */
    "revocation_reason"?: "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "revoked_at"?: string;
    /** Shape $ (Value): boolean. */
    "selection_required": boolean;
    /**
     * Shape $ (Value): string. Value enum: "checkout_changed", "selection_changed",
     * "eligibility_changed", "inventory_changed", "authority_changed",
     * "superseded_by_priced_quote".
     */
    "stale_reason"?: "checkout_changed"
        | "selection_changed"
        | "eligibility_changed"
        | "inventory_changed"
        | "authority_changed"
        | "superseded_by_priced_quote"
        | (string & {});
    /**
     * Shape $ (Value): string. Whether the quote can be selected now, derived from the current
     * checkout or renewal order on every read. Value enum: "active", "consumed", "stale",
     * "expired", "revoked".
     */
    "status": "active" | "consumed" | "stale" | "expired" | "revoked" | (string & {});
    /**
     * Shape $ (Value): string. The priced delivery quote that replaced this quote. Its
     * basis_delivery_quote_id names this quote.
     */
    "superseded_by_delivery_quote_id"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryQuoteChoiceGroupResource}. One group of order items in a
 * delivery quote, with the delivery options the buyer can choose, its availability status, and any
 * input still needed.
 */
export type DeliveryQuoteChoiceGroupResource = {
    /**
     * Shape $ (Value): Array of {@link DeliveryAddressAdvisoryResource}. Buyer-actionable address
     * verification results that affected this choice group. A suggested_address is an explicit
     * correction the buyer may confirm; Flint does not apply it silently. Shape $[] (Value):
     * {@link DeliveryAddressAdvisoryResource}. An address verification result for a delivery
     * address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "allowed_types"?: Array<string>;
    /**
     * Shape $ (Value): string. Value enum: "ready", "needs_input", "needs_checkout_context",
     * "unavailable".
     */
    "availability_status": "ready" | "needs_input" | "needs_checkout_context" | "unavailable" | (string & {});
    /**
     * Shape $ (Value): Map of {@link DeliveryCandidateOutcomeResource}. Shape $.* (Value): {@link
     * DeliveryCandidateOutcomeResource}. The result of evaluating one delivery method for a choice
     * group, selected by `type`: available with an option, unavailable, input required, cannot
     * calculate, or requires checkout context.
     */
    "candidate_outcomes"?: Record<string, DeliveryCandidateOutcomeResource>;
    /** Shape $ (Value): string. */
    "delivery_choice_group_id": string;
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Shape $ (Value): Array of {@link DeliveryQuoteExecutionLegResource}. Where the group's items
     * leave from, one leg per origin Location, when all of its methods leave from the same
     * Locations. Omitted when the origin depends on the chosen method, such as shipping from a
     * warehouse or picking up at a store. Each option then lists its own execution_legs. Shape $[]
     * (Value): {@link DeliveryQuoteExecutionLegResource}. One leg of a delivery choice group,
     * identifying the origin Location the group's items leave from.
     */
    "execution_legs"?: Array<DeliveryQuoteExecutionLegResource>;
    /**
     * Shape $ (Value): Array of {@link DeliveryInputRequirement}. Shape $[] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Shape $ (Value): Array of {@link DeliveryQuoteLineItemResource}. Shape $[] (Value): {@link
     * DeliveryQuoteLineItemResource}. An order line item, or one bundle component of it, and the
     * quantity covered by a delivery choice group.
     */
    "line_items": Array<DeliveryQuoteLineItemResource>;
    /**
     * Shape $ (Value): Array of string. Types of the delivery methods that can serve this group's
     * items, each listed once, in the order the methods display. A type is listed before its
     * options are priced, such as a local delivery that waits for the buyer's address, and stays
     * listed while its methods need more input or cannot serve the current input. options lists
     * what the buyer can choose now. A method whose type these items do not allow is left out, and
     * the list is empty when no method can serve them. [] enum: "shipment", "pickup",
     * "local_delivery". Shape $[] (Value): string. Value enum: "shipment", "pickup",
     * "local_delivery".
     */
    "method_types": Array<"shipment" | "pickup" | "local_delivery" | (string & {})>;
    /**
     * Shape $ (Value): Array of {@link DeliveryOptionProjection}. Shape $[] (Value): {@link
     * DeliveryOptionProjection}. A delivery option in a quote or preview: its price, type, timing,
     * delivery plan, execution legs, and shipment, pickup, or local delivery details.
     */
    "options": Array<DeliveryOptionProjection>;
    /** Shape $ (Value): string. */
    "previously_selected_delivery_method_id"?: string;
    /** Shape $ (Value): string. */
    "stable_key": string;
};
/**
 * Shape $ (Value): {@link DeliveryQuoteExecutionLegResource}. One leg of a delivery choice group,
 * identifying the origin Location the group's items leave from.
 */
export type DeliveryQuoteExecutionLegResource = {
    /** Shape $ (Value): string. */
    "delivery_execution_leg_id": string;
    /** Shape $ (Value): string. */
    "origin_location_id": string;
};
/**
 * Shape $ (Value): {@link DeliveryQuoteLineItemResource}. An order line item, or one bundle
 * component of it, and the quantity covered by a delivery choice group.
 */
export type DeliveryQuoteLineItemResource = {
    /** Shape $ (Value): string. */
    "bundle_component_id"?: string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
};
/** Shape $ (Value): {@link DeliveryQuoteListResponse}. A page of `DeliveryQuote` objects. */
export type DeliveryQuoteListResponse = {
    /**
     * Shape $ (Value): Array of {@link DeliveryQuote}. Shape $[] (Value): {@link DeliveryQuote}.
     * An estimate of available delivery options and their prices.
     */
    "data": Array<DeliveryQuote>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link DeliveryQuoteMethodResource}. A delivery method offered in a delivery
 * quote, with its name, type, display position, and revision.
 */
export type DeliveryQuoteMethodResource = {
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id": string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position": number;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
};
/** Shape $ (Value): {@link DeliveryQuoteResponse}. A response containing `DeliveryQuote` data. */
export type DeliveryQuoteResponse = {
    /**
     * Shape $ (Value): {@link DeliveryQuote}. An estimate of available delivery options and their
     * prices.
     */
    "data": DeliveryQuote;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type DeliveryQuotesGetInput = {
    /** Shape $ (Value): string. */
    "delivery_quote_id": InputValue<string>;
};
export type DeliveryQuotesListInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "consumed", "stale",
     * "expired", "revoked". Shape $[] (Value): string. Value enum: "active", "consumed", "stale",
     * "expired", "revoked".
     */
    "status"?: InputValue<Array<"active" | "consumed" | "stale" | "expired" | "revoked">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "complete", "incomplete",
     * "degraded". Shape $[] (Value): string. Value enum: "complete", "incomplete", "degraded".
     */
    "evaluation_status"?: InputValue<Array<"complete" | "incomplete" | "degraded">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link DeliveryRadiusCondition}. Eligibility condition that matches when the
 * destination or buyer location is within `maximum_distance` of an origin, measured in a straight
 * line.
 */
export type DeliveryRadiusCondition = {
    /**
     * Shape $ (Value): {@link DeliveryDistance}. A distance as a `value` in meters, kilometers, or
     * miles.
     */
    "maximum_distance": DeliveryDistance;
    /** Shape $ (Value): string. Default: "straight_line". Value enum: "straight_line". */
    "measurement"?: "straight_line" | (string & {});
    /**
     * Shape $ (Value): {@link DeliveryRadiusOrigin}. The point a radius condition measures from: a
     * specific Location (`location_id`) or the delivery method's own origin (`method_origin`).
     */
    "origin": DeliveryRadiusOrigin;
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that matches when
 * the destination or buyer location is within `maximum_distance` of an origin, measured in a
 * straight line.
 */
export type DeliveryRadiusConditionInput = {
    /**
     * Shape $ (Value): {@link DeliveryDistanceInput}. A distance as a `value` in meters,
     * kilometers, or miles.
     */
    "maximum_distance": DeliveryDistanceInput;
    /** Shape $ (Value): string. Default: "straight_line". Value enum: "straight_line". */
    "measurement"?: "straight_line";
    /**
     * Shape $ (Value): {@link DeliveryRadiusOriginInput}. The point a radius condition measures
     * from: a specific Location (`location_id`) or the delivery method's own origin
     * (`method_origin`).
     */
    "origin": DeliveryRadiusOriginInput;
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
};
/**
 * Shape $ (Value): {@link DeliveryRadiusOrigin}. The point a radius condition measures from: a
 * specific Location (`location_id`) or the delivery method's own origin (`method_origin`).
 */
export type DeliveryRadiusOrigin = {
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): boolean. */
    "method_origin"?: boolean;
};
/**
 * Shape $ (Value): {@link DeliveryRadiusOriginInput}. The point a radius condition measures from:
 * a specific Location (`location_id`) or the delivery method's own origin (`method_origin`).
 */
export type DeliveryRadiusOriginInput = DeliveryRadiusOrigin;
/** Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates. */
export type DeliveryRateCallback = {
    /**
     * Shape $ (Value): integer. Consecutive callback failures since the last successful response.
     * minimum: 0.
     */
    "circuit_failure_count": number;
    /** Shape $ (Value): string.  Value enum: "closed", "open", "half_open". */
    "circuit_state": "closed" | "open" | "half_open" | (string & {});
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfiguration}. Settings for a delivery rate
     * callback: the endpoint `url` Flint calls, request timeout, request and response size limits,
     * redirect policy, and whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfiguration;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "current_delivery_rate_callback_revision_id": string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Initial HMAC signing key ID. Returned only by create when hmac is
     * included.
     */
    "key_id"?: string;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): string. Initial HMAC shared secret. Returned only by the create response
     * when signing_methods includes hmac.
     */
    "secret"?: string;
    /**
     * Shape $ (Value): Array of string. Signing methods enabled for callback HTTP requests. jwt
     * sends Authorization: Bearer with a Flint-signed token whose aud is this
     * delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. minItems: 1.
     * uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac". Shape $[] (Value): string. jwt
     * uses Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum:
     * "jwt", "hmac".
     */
    "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackConfiguration}. Settings for a delivery rate
 * callback: the endpoint `url` Flint calls, request timeout, request and response size limits,
 * redirect policy, and whether previews can use it.
 */
export type DeliveryRateCallbackConfiguration = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_request_bytes"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_response_bytes"?: `${bigint}`;
    /** Shape $ (Value): boolean. Default: false. */
    "preview_enabled"?: boolean;
    /** Shape $ (Value): string. Default: "reject". Value enum: "reject". */
    "redirect_policy"?: "reject" | (string & {});
    /** Shape $ (Value): number. minimum: 0.1. maximum: 10. Default: 2. */
    "request_timeout_seconds"?: number;
    /** Shape $ (Value): string. minLength: 1. */
    "url": string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackConfigurationInput}. Settings for a delivery rate
 * callback: the endpoint `url` Flint calls, request timeout, request and response size limits,
 * redirect policy, and whether previews can use it.
 */
export type DeliveryRateCallbackConfigurationInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_request_bytes"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_response_bytes"?: `${bigint}` | bigint;
    /** Shape $ (Value): boolean. Default: false. */
    "preview_enabled"?: boolean;
    /** Shape $ (Value): string. Default: "reject". Value enum: "reject". */
    "redirect_policy"?: "reject";
    /** Shape $ (Value): number. minimum: 0.1. maximum: 10. Default: 2. */
    "request_timeout_seconds"?: number;
    /** Shape $ (Value): string. minLength: 1. */
    "url": string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackConfigurationPatchRequest}. Only the keys you send
 * change; keys you leave out keep their current values. Null restores a key's default, as each
 * field describes. The result must be a configuration you could create. Requires expected_version.
 * An empty configuration is invalid. minProperties: 1.
 */
export type DeliveryRateCallbackConfigurationPatchRequest = {
    /**
     * Shape $ (Value): integer string or null. Null restores 262144 bytes. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_request_bytes"?: `${bigint}` | null;
    /**
     * Shape $ (Value): integer string or null. Null restores 262144 bytes. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_response_bytes"?: `${bigint}` | null;
    /** Shape $ (Value): boolean or null. Null restores false. */
    "preview_enabled"?: boolean | null;
    /** Shape $ (Value): string or null. Null restores reject. Value enum: "reject", null. */
    "redirect_policy"?: "reject" | null | (string & {}) | null;
    /** Shape $ (Value): number or null. Null restores 2 seconds. minimum: 0.1. maximum: 10. */
    "request_timeout_seconds"?: number | null;
    /** Shape $ (Value): string. Null is invalid. minLength: 1. */
    "url"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackConfigurationPatchRequestInput}. Only the keys you
 * send change; keys you leave out keep their current values. Null restores a key's default, as
 * each field describes. The result must be a configuration you could create. Requires
 * expected_version. An empty configuration is invalid. minProperties: 1.
 */
export type DeliveryRateCallbackConfigurationPatchRequestInput = {
    /**
     * Shape $ (Value): integer string or null. Null restores 262144 bytes. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_request_bytes"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): integer string or null. Null restores 262144 bytes. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_response_bytes"?: `${bigint}` | bigint | null;
    /** Shape $ (Value): boolean or null. Null restores false. */
    "preview_enabled"?: boolean | null;
    /** Shape $ (Value): string or null. Null restores reject. Value enum: "reject", null. */
    "redirect_policy"?: "reject" | null;
    /** Shape $ (Value): number or null. Null restores 2 seconds. minimum: 0.1. maximum: 10. */
    "request_timeout_seconds"?: number | null;
    /** Shape $ (Value): string. Null is invalid. minLength: 1. */
    "url"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackConnectionCheck}. Result of checking the connection
 * to a delivery rate callback endpoint, with its status, latency, HTTP status code, and failure
 * category if it failed.
 */
export type DeliveryRateCallbackConnectionCheck = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "checked_at": string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_revision_id": string;
    /**
     * Shape $ (Value): string. Why the callback connection check failed and the action that can
     * make the next check succeed. - `authentication_or_http_error`: Return a 2xx status after
     * verifying the enabled signing methods. For a 401, check JWT verification with Flint's JWKS,
     * issuer, delivery_rate_callback_id audience, expiration, and body_sha256 of the exact request
     * bytes. For HMAC, check the shared secret and verify the raw body before parsing it. -
     * `blocked_target`: Use a public HTTPS callback target allowed by Flint's outbound network
     * policy. - `connection_error`: Restore network connectivity to the callback host, then test
     * again. - `dns_error`: Fix the callback hostname or its DNS records, then test again. -
     * `invalid_response`: Return a 2xx application/json response within maximum_response_bytes.
     * For a test delivery, the body must also follow the callback response rules. Then test again.
     * - `request_error`: Flint couldn't complete the request for another reason. Check the URL and
     * your server logs, then test again. - `timeout`: Acknowledge the callback within its
     * configured timeout, then test again. - `tls_error`: Fix the callback certificate and TLS
     * configuration, then test again. Value enum: "authentication_or_http_error",
     * "blocked_target", "connection_error", "dns_error", "invalid_response", "request_error",
     * "timeout", "tls_error".
     */
    "failure_category"?: "authentication_or_http_error"
        | "blocked_target"
        | "connection_error"
        | "dns_error"
        | "invalid_response"
        | "request_error"
        | "timeout"
        | "tls_error"
        | (string & {});
    /** Shape $ (Value): integer. */
    "http_status_code"?: number;
    /**
     * Shape $ (Value): string. ID of the HMAC signing key that signed this request. Empty for a
     * JWT-only callback, which has no shared secret.
     */
    "key_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "latency_milliseconds": `${bigint}`;
    /** Shape $ (Value): string.  Value enum: "succeeded", "failed". */
    "status": "succeeded" | "failed" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackConnectionCheckResponse}. A response containing
 * `DeliveryRateCallbackConnectionCheck` data.
 */
export type DeliveryRateCallbackConnectionCheckResponse = {
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConnectionCheck}. Result of checking the
     * connection to a delivery rate callback endpoint, with its status, latency, HTTP status code,
     * and failure category if it failed.
     */
    "data": DeliveryRateCallbackConnectionCheck;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackListResponse}. A page of `DeliveryRateCallback`
 * objects.
 */
export type DeliveryRateCallbackListResponse = {
    /**
     * Shape $ (Value): Array of {@link DeliveryRateCallback}. Shape $[] (Value): {@link
     * DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data": Array<DeliveryRateCallback>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackResponse}. A response containing
 * `DeliveryRateCallback` data.
 */
export type DeliveryRateCallbackResponse = {
    /** Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates. */
    "data": DeliveryRateCallback;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackSigningKeyRotation}. Result of rotating a delivery
 * rate callback's signing key, including the new `key_id` and the new `secret`, which is returned
 * only in this response.
 */
export type DeliveryRateCallbackSigningKeyRotation = {
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. */
    "key_id": string;
    /** Shape $ (Value): string. New signing secret. Returned only by this rotation response. */
    "secret": string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackSigningKeyRotationResponse}. A response containing
 * `DeliveryRateCallbackSigningKeyRotation` data.
 */
export type DeliveryRateCallbackSigningKeyRotationResponse = {
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackSigningKeyRotation}. Result of rotating a
     * delivery rate callback's signing key, including the new `key_id` and the new `secret`, which
     * is returned only in this response.
     */
    "data": DeliveryRateCallbackSigningKeyRotation;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
