import type {
    DeliverySelectionRecipientRequest,
    DeliverySelection,
    DeliveryRadiusCondition,
    DeliveryRadiusConditionInput
} from './types-14.js';
import type { ResponseMeta, ResetDemoSessionRequestInput } from './types-40.js';
import type { CheckoutSession } from './types-4.js';
import type {
    DeliveryInventoryReservationSummary,
    DeliveryPostalCodeCondition,
    DeliveryPostalCodeConditionInput,
    DeliveryLocationSetsListInput
} from './types-12.js';
import type { Order } from './types-32.js';
import type { DeliveryPricingTierBand, DeliveryPricingTierBandRequestInput } from './types-13.js';
import type { DeliveryBusinessDayRange, DeliveryBusinessDayRangeInput, DeliveryCountryConditionInput } from './types-11.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryZoneRequestInput, CreateDemoSessionRequestInput } from './types-6.js';
import type { UpdateDeliveryZoneRequestInput } from './types-47.js';
import type { CreatePartnerAppRequestInput } from './types-7.js';
import type { CreateSandboxRequestInput } from './types-9.js';
import type { IssueSandboxAPIKeyRequestInput } from './types-28.js';
import type { RotatePartnerAppSecretRequestInput } from './types-43.js';
/**
 * Shape $ (Value): {@link DeliverySelectionRecipientRequestInput}. Recipient details you supply
 * with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
 */
export type DeliverySelectionRecipientRequestInput = DeliverySelectionRecipientRequest;
/**
 * Shape $ (Value): {@link DeliverySelectionResponse}. A response containing `DeliverySelection`
 * data.
 */
export type DeliverySelectionResponse = {
    /**
     * Shape $ (Value): {@link DeliverySelection}. The delivery choice selected for a checkout or
     * order.
     */
    "data": DeliverySelection;
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
 * Shape $ (Value): {@link DeliverySelectionResult}. Result of a checkout delivery selection
 * request, returning the checkout session, order, delivery selection, and any inventory
 * reservation summary.
 */
export type DeliverySelectionResult = {
    /**
     * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "checkout_session": CheckoutSession;
    /**
     * Shape $ (Value): {@link DeliverySelection}. The delivery choice selected for a checkout or
     * order.
     */
    "delivery_selection": DeliverySelection;
    /**
     * Shape $ (Value): {@link DeliveryInventoryReservationSummary}. The inventory reservation held
     * for a delivery selection: its owner, status, expiry, and the next action required.
     */
    "inventory_reservation"?: DeliveryInventoryReservationSummary;
    /**
     * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "order": Order;
};
/**
 * Shape $ (Value): {@link DeliverySelectionResultResponse}. A response containing
 * `DeliverySelectionResult` data.
 */
export type DeliverySelectionResultResponse = {
    /**
     * Shape $ (Value): {@link DeliverySelectionResult}. Result of a checkout delivery selection
     * request, returning the checkout session, order, delivery selection, and any inventory
     * reservation summary.
     */
    "data": DeliverySelectionResult;
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
 * Shape $ (Value): {@link DeliveryShipmentDetails}. Shipment-specific details of a delivery option
 * or choice: the `service_level` and buyer `instructions`.
 */
export type DeliveryShipmentDetails = {
    /** Shape $ (Value): string. */
    "instructions"?: string;
    /** Shape $ (Value): string. */
    "service_level"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryStateCondition}. Eligibility condition that matches when the
 * destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2
 * codes.
 */
export type DeliveryStateCondition = {
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
    /**
     * Shape $ (Value): Array of string. ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For
     * a US state or Canadian province you can send the two-letter code, such as NY or ON, and
     * Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored
     * as US-AA, US-AE, and US-AP. An address matches when its state names one of these
     * subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address
     * country is listed by the condition but state names no subdivision of that country, the
     * condition cannot be decided: the method or rate is left out as cannot_calculate
     * (invalid_buyer_input). Shape $[] (Value): string. minLength: 1.
     */
    "values": Array<string>;
};
/**
 * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches when
 * the destination or buyer location is in one of the listed states or provinces, given as ISO
 * 3166-2 codes.
 */
export type DeliveryStateConditionInput = {
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
    /**
     * Shape $ (Value): Array of string. ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For
     * a US state or Canadian province you can send the two-letter code, such as NY or ON, and
     * Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored
     * as US-AA, US-AE, and US-AP. An address matches when its state names one of these
     * subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address
     * country is listed by the condition but state names no subdivision of that country, the
     * condition cannot be decided: the method or rate is left out as cannot_calculate
     * (invalid_buyer_input). Shape $[] (Value): string. minLength: 1.
     */
    "values": Array<string>;
};
/**
 * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by band.
 * The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to
 * weight bases.
 */
export type DeliveryTieredPricingStrategy = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingTierBand}. Shape $[] (Value): {@link
     * DeliveryPricingTierBand}. One band of a tiered pricing strategy, covering values of the
     * strategy's `basis` from `from` to `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Shape $ (Value): string. Quantity measured by the tier bands. Money subtotal bases use minor
     * currency units. Value enum: "choice_group.total_weight",
     * "choice_group.fulfillment_quantity", "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis": "choice_group.total_weight"
        | "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key"
        | (string & {});
    /**
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & ((Exclude<DeliveryTieredPricingStrategyWeight & object, readonly unknown[]>)
    | (Exclude<DeliveryTieredPricingStrategyQuantityOrMoney & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryTieredPricingStrategyInputQuantityOrMoneyInput}. The
 * `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategyInput`. The
 * `choice_group.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_before_discounts`
 * variant of `DeliveryTieredPricingStrategyInput`. The
 * `order.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_before_discounts` variant
 * of `DeliveryTieredPricingStrategyInput`.
 */
export type DeliveryTieredPricingStrategyInputQuantityOrMoneyInput = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingTierBandRequestInput}. Shape $[] (Value):
     * {@link DeliveryPricingTierBandRequestInput}. One band of a tiered pricing strategy you
     * supply, covering values of the strategy's `basis` from `from` to `to`, with a price per
     * currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Shape $ (Value): string. Quantity measured by the tier bands. Money subtotal bases use minor
     * currency units. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts".
     */
    "basis": "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts";
    /**
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound";
})
    & (({
    /**
     * Shape $ (Value): string. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts".
     */
    "basis"?: "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts";
})
    & ({
    "unit"?: never;
}));
/**
 * Shape $ (Value): {@link DeliveryTieredPricingStrategyInputWeightInput}. The
 * `choice_group.total_weight` variant of `DeliveryTieredPricingStrategyInput`.
 */
export type DeliveryTieredPricingStrategyInputWeightInput = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingTierBandRequestInput}. Shape $[] (Value):
     * {@link DeliveryPricingTierBandRequestInput}. One band of a tiered pricing strategy you
     * supply, covering values of the strategy's `basis` from `from` to `to`, with a price per
     * currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Shape $ (Value): string. Quantity measured by the tier bands. Money subtotal bases use minor
     * currency units. Value enum: "choice_group.total_weight".
     */
    "basis": "choice_group.total_weight";
    /**
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
})
    & ({
    /** Shape $ (Value): string.  Value enum: "choice_group.total_weight". */
    "basis"?: "choice_group.total_weight";
    /**
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
});
/**
 * Shape $ (Value): {@link DeliveryTieredPricingStrategyQuantityOrMoney}. The
 * `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The
 * `choice_group.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts`
 * variant of `DeliveryTieredPricingStrategy`. The
 * `order.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of
 * `DeliveryTieredPricingStrategy`.
 */
export type DeliveryTieredPricingStrategyQuantityOrMoney = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingTierBand}. Shape $[] (Value): {@link
     * DeliveryPricingTierBand}. One band of a tiered pricing strategy, covering values of the
     * strategy's `basis` from `from` to `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Shape $ (Value): string. Quantity measured by the tier bands. Money subtotal bases use minor
     * currency units. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts".
     */
    "basis": "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | (string & {});
    /**
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts".
     */
    "basis"?: "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | (string & {});
}));
/**
 * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy you
 * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when
 * the basis is total weight.
 */
export type DeliveryTieredPricingStrategyRequestInput = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingTierBandRequestInput}. Shape $[] (Value):
     * {@link DeliveryPricingTierBandRequestInput}. One band of a tiered pricing strategy you
     * supply, covering values of the strategy's `basis` from `from` to `to`, with a price per
     * currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Shape $ (Value): string. Quantity measured by the tier bands. Money subtotal bases use minor
     * currency units. Value enum: "choice_group.total_weight",
     * "choice_group.fulfillment_quantity", "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis": "choice_group.total_weight"
        | "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key";
    /**
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound";
})
    & ((Exclude<DeliveryTieredPricingStrategyInputWeightInput & object, readonly unknown[]>)
    | (Exclude<DeliveryTieredPricingStrategyInputQuantityOrMoneyInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link DeliveryTieredPricingStrategyWeight}. The `choice_group.total_weight`
 * variant of `DeliveryTieredPricingStrategy`.
 */
export type DeliveryTieredPricingStrategyWeight = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingTierBand}. Shape $[] (Value): {@link
     * DeliveryPricingTierBand}. One band of a tiered pricing strategy, covering values of the
     * strategy's `basis` from `from` to `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Shape $ (Value): string. Quantity measured by the tier bands. Money subtotal bases use minor
     * currency units. Value enum: "choice_group.total_weight".
     */
    "basis": "choice_group.total_weight" | (string & {});
    /**
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & ({
    /** Shape $ (Value): string.  Value enum: "choice_group.total_weight". */
    "basis"?: "choice_group.total_weight" | (string & {});
    /**
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
});
/**
 * Shape $ (Value): {@link DeliveryTransitTimeRule}. Estimate rule giving a delivery method's
 * handling time and transit time as ranges of business days.
 */
export type DeliveryTransitTimeRule = {
    /**
     * Shape $ (Value): {@link DeliveryBusinessDayRange}. A minimum and maximum number of business
     * days, used in transit time estimates.
     */
    "handling_days": DeliveryBusinessDayRange;
    /**
     * Shape $ (Value): {@link DeliveryBusinessDayRange}. A minimum and maximum number of business
     * days, used in transit time estimates.
     */
    "transit_days": DeliveryBusinessDayRange;
};
/**
 * Shape $ (Value): {@link DeliveryTransitTimeRuleInput}. Estimate rule giving a delivery method's
 * handling time and transit time as ranges of business days.
 */
export type DeliveryTransitTimeRuleInput = {
    /**
     * Shape $ (Value): {@link DeliveryBusinessDayRangeInput}. A minimum and maximum number of
     * business days, used in transit time estimates.
     */
    "handling_days": DeliveryBusinessDayRangeInput;
    /**
     * Shape $ (Value): {@link DeliveryBusinessDayRangeInput}. A minimum and maximum number of
     * business days, used in transit time estimates.
     */
    "transit_days": DeliveryBusinessDayRangeInput;
};
/**
 * Shape $ (Value): {@link DeliveryWeeklyInterval}. A recurring weekly span, from a start weekday
 * and minute to an end weekday and minute, used in a delivery method's availability schedule.
 */
export type DeliveryWeeklyInterval = {
    /** Shape $ (Value): integer. */
    "end_minute": number;
    /** Shape $ (Value): integer. */
    "end_weekday": number;
    /** Shape $ (Value): integer. */
    "start_minute": number;
    /** Shape $ (Value): integer. */
    "start_weekday": number;
};
/**
 * Shape $ (Value): {@link DeliveryWeeklyIntervalInput}. A recurring weekly span, from a start
 * weekday and minute to an end weekday and minute, used in a delivery method's availability
 * schedule.
 */
export type DeliveryWeeklyIntervalInput = DeliveryWeeklyInterval;
/**
 * Shape $ (Value): {@link DeliveryWeightUnitPrice}. Price per unit of weight for calculated
 * pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.
 */
export type DeliveryWeightUnitPrice = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Shape $ (Value): string. Weight unit used by unit_quantity. Value enum: "gram", "kilogram",
     * "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity of the selected unit charged at each
     * configured currency price; fractional quantities are not supported. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "unit_quantity": `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryWeightUnitPriceRequestInput}. Price per unit of weight you
 * supply for calculated pricing: a price per currency for each `unit_quantity` of the chosen
 * weight `unit`.
 */
export type DeliveryWeightUnitPriceRequestInput = {
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): string. Weight unit used by unit_quantity. Value enum: "gram", "kilogram",
     * "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
    /**
     * Shape $ (Value): integer string. Whole-number quantity of the selected unit charged at each
     * configured currency price; fractional quantities are not supported. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "unit_quantity": `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link DeliveryWindowRequest}. A delivery window you supply in a
 * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer can
 * choose it.
 */
export type DeliveryWindowRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_window_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "end_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "start_at": string;
};
/**
 * Shape $ (Value): {@link DeliveryWindowRequestInput}. A delivery window you supply in a
 * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer can
 * choose it.
 */
export type DeliveryWindowRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_window_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "end_at": string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "start_at": string | globalThis.Date;
};
/**
 * Shape $ (Value): {@link DeliveryWindowTimeCondition}. Eligibility condition that matches by time
 * of day, using `start_minute` and `end_minute`, on the listed `weekdays`.
 */
export type DeliveryWindowTimeCondition = {
    /** Shape $ (Value): integer. */
    "end_minute"?: number;
    /** Shape $ (Value): integer. */
    "start_minute"?: number;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "weekdays"?: Array<string>;
};
/**
 * Shape $ (Value): {@link DeliveryWindowTimeConditionInput}. Eligibility condition that matches by
 * time of day, using `start_minute` and `end_minute`, on the listed `weekdays`.
 */
export type DeliveryWindowTimeConditionInput = DeliveryWindowTimeCondition;
/** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
export type DeliveryZone = {
    /**
     * Shape $ (Value): {@link DeliveryZoneConfiguration}. Current geographic eligibility
     * conditions. A reusable geographic predicate containing only country, state, postal_code, and
     * radius conditions.
     */
    "configuration": DeliveryZoneConfiguration;
    /** Shape $ (Value): string. Time the zone was created. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. Immutable revision used for new quotes. */
    "current_delivery_zone_revision_id": string;
    /** Shape $ (Value): string. Stable delivery zone ID. */
    "delivery_zone_id": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): Map of string. Caller-owned metadata. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. Merchant-facing zone name. */
    "name": string;
    /** Shape $ (Value): string. Current zone lifecycle status. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. Time the zone last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Optimistic-concurrency version for zone writes. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryZoneCondition}. Eligibility condition that matches when the
 * destination or buyer location falls inside the delivery zone `delivery_zone_id`.
 */
export type DeliveryZoneCondition = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_zone_id": string;
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryZoneConditionInput}. Eligibility condition that matches when the
 * destination or buyer location falls inside the delivery zone `delivery_zone_id`.
 */
export type DeliveryZoneConditionInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_zone_id": string;
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
};
/**
 * Shape $ (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate containing
 * only country, state, postal_code, and radius conditions.
 */
export type DeliveryZoneConfiguration = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfiguration}. minItems: 1. maxItems: 100.
     * Shape $[] (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfiguration>;
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfiguration}. minItems: 1. maxItems: 100.
     * Shape $[] (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfiguration>;
    /**
     * Shape $ (Value): {@link DeliveryStateCondition}. A delivery eligibility condition that
     * matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * Shape $ (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfiguration;
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeCondition}. A delivery eligibility condition that
     * matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeCondition;
    /**
     * Shape $ (Value): {@link DeliveryRadiusCondition}. Eligibility condition that matches when
     * the destination or buyer location is within `maximum_distance` of an origin, measured in a
     * straight line.
     */
    "radius"?: DeliveryRadiusCondition;
    /**
     * Shape $ (Value): {@link DeliveryStateCondition}. Eligibility condition that matches when the
     * destination or buyer location is in one of the listed states or provinces, given as ISO
     * 3166-2 codes.
     */
    "state"?: DeliveryStateCondition;
})
    & (({
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfiguration}. minItems: 1. maxItems: 100.
     * Shape $[] (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "all": Array<DeliveryZoneConfiguration>;
})
    | ({
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfiguration}. minItems: 1. maxItems: 100.
     * Shape $[] (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "any": Array<DeliveryZoneConfiguration>;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not": DeliveryZoneConfiguration;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryStateCondition}. A delivery eligibility condition that
     * matches when the address country is one of `values`.
     */
    "country": DeliveryStateCondition;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryStateCondition}. Eligibility condition that matches when the
     * destination or buyer location is in one of the listed states or provinces, given as ISO
     * 3166-2 codes.
     */
    "state": DeliveryStateCondition;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeCondition}. A delivery eligibility condition that
     * matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeCondition;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryRadiusCondition}. Eligibility condition that matches when
     * the destination or buyer location is within `maximum_distance` of an origin, measured in a
     * straight line.
     */
    "radius": DeliveryRadiusCondition;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
 * containing only country, state, postal_code, and radius conditions.
 */
export type DeliveryZoneConfigurationInput = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): {@link DeliveryCountryConditionInput}. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeConditionInput}. A delivery eligibility condition
     * that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is within `maximum_distance` of an origin, measured
     * in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is in one of the listed states or provinces, given as
     * ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
})
    & (({
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "all": Array<DeliveryZoneConfigurationInput>;
})
    | ({
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "any": Array<DeliveryZoneConfigurationInput>;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not": DeliveryZoneConfigurationInput;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryCountryConditionInput}. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryCountryConditionInput;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is in one of the listed states or provinces, given as
     * ISO 3166-2 codes.
     */
    "state": DeliveryStateConditionInput;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeConditionInput}. A delivery eligibility condition
     * that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeConditionInput;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is within `maximum_distance` of an origin, measured
     * in a straight line.
     */
    "radius": DeliveryRadiusConditionInput;
}));
/** Shape $ (Value): {@link DeliveryZoneListResponse}. A page of `DeliveryZone` objects. */
export type DeliveryZoneListResponse = {
    /**
     * Shape $ (Value): Array of {@link DeliveryZone}. Shape $[] (Value): {@link DeliveryZone}. A
     * geographic area served by a delivery method.
     */
    "data": Array<DeliveryZone>;
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
/** Shape $ (Value): {@link DeliveryZoneResponse}. A response containing `DeliveryZone` data. */
export type DeliveryZoneResponse = {
    /** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data": DeliveryZone;
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
export type DeliveryZonesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateDeliveryZoneRequestInput}. The request body for: Create
     * delivery zone.
     */
    "body": InputValue<CreateDeliveryZoneRequestInput>;
};
export type DeliveryZonesGetInput = {
    /** Shape $ (Value): string. */
    "delivery_zone_id": InputValue<string>;
};
export type DeliveryZonesListInput = DeliveryLocationSetsListInput;
export type DeliveryZonesRemoveInput = {
    /** Shape $ (Value): string. */
    "delivery_zone_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeliveryZonesUpdateInput = {
    /** Shape $ (Value): string. */
    "delivery_zone_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateDeliveryZoneRequestInput}. The request body for: Update
     * delivery zone.
     */
    "body": InputValue<UpdateDeliveryZoneRequestInput>;
};
/**
 * Shape $ (Value): {@link DemoSession}. A demo session with its sandbox, API key, and expiry,
 * returned when you create or reset a demo session.
 */
export type DemoSession = {
    /**
     * Shape $ (Value): {@link DemoSessionAPIKey}. The API key issued for a demo session, with its
     * `secret_key` and the scopes it grants.
     */
    "api_key": DemoSessionAPIKey;
    /** Shape $ (Value): string. */
    "demo_session_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    /** Shape $ (Value): string. */
    "sandbox_id": string;
};
/**
 * Shape $ (Value): {@link DemoSessionAPIKey}. The API key issued for a demo session, with its
 * `secret_key` and the scopes it grants.
 */
export type DemoSessionAPIKey = {
    /**
     * Shape $ (Value): Array of string. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read",
     * "commerce.inventory.write", "commerce.inventory_locations.write",
     * "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read",
     * "commerce.inventory.write", "commerce.inventory_locations.write",
     * "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.inventory_locations.write"
        | "commerce.inventory_policies.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.return_policies.write"
        | "commerce.return_reasons.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.read"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.payment_options.read"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
    /** Shape $ (Value): string. */
    "secret_key": string;
};
/** Shape $ (Value): {@link DemoSessionResponse}. A response containing `DemoSession` data. */
export type DemoSessionResponse = {
    /**
     * Shape $ (Value): {@link DemoSession}. A demo session with its sandbox, API key, and expiry,
     * returned when you create or reset a demo session.
     */
    "data": DemoSession;
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
export type DemoSessionsCreateInput = {
    /** Shape $ (Value): string. */
    "X-Turnstile-Token"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateDemoSessionRequestInput}. The request body for: Create demo
     * session.
     */
    "body": InputValue<CreateDemoSessionRequestInput>;
};
export type DemoSessionsResetInput = {
    /** Shape $ (Value): string. */
    "X-Turnstile-Token"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ResetDemoSessionRequestInput}. The request body for: Reset demo
     * session.
     */
    "body": InputValue<ResetDemoSessionRequestInput>;
};
/**
 * Shape $ (Value): {@link DeveloperAuthContext}. Identity and access of the current developer
 * credential: whether it is an API key or OAuth, its merchant, environment, sandbox, and scopes.
 */
export type DeveloperAuthContext = ({
    /** Shape $ (Value): string. */
    "api_key_id"?: string;
    /** Shape $ (Value): string.  Value enum: "api_key", "oauth", "workload_identity". */
    "auth_type": "api_key" | "oauth" | "workload_identity" | (string & {});
    /** Shape $ (Value): string. */
    "context_id"?: string;
    /** Shape $ (Value): string.  Value enum: "sandbox", "live". */
    "environment": "sandbox" | "live" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /** Shape $ (Value): string. */
    "name"?: string;
    /** Shape $ (Value): string. */
    "oauth_grant_id"?: string;
    /** Shape $ (Value): string. */
    "oauth_session_id"?: string;
    /** Shape $ (Value): string. */
    "organization_id"?: string;
    /** Shape $ (Value): string. */
    "sandbox_id"?: string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "scopes": Array<string>;
    /** Shape $ (Value): string. */
    "workload_identity_id"?: string;
});
/**
 * Shape $ (Value): {@link DeveloperAuthContextResponse}. A response containing
 * `DeveloperAuthContext` data.
 */
export type DeveloperAuthContextResponse = {
    /**
     * Shape $ (Value): {@link DeveloperAuthContext}. Identity and access of the current developer
     * credential: whether it is an API key or OAuth, its merchant, environment, sandbox, and
     * scopes.
     */
    "data": DeveloperAuthContext;
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
export type DeveloperCreatePartnerAppInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreatePartnerAppRequestInput}. The request body for: Create partner
     * app.
     */
    "body": InputValue<CreatePartnerAppRequestInput>;
};
export type DeveloperCreateSandboxInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateSandboxRequestInput}. The request body for: Create sandbox. */
    "body": InputValue<CreateSandboxRequestInput>;
};
export type DeveloperDeletePartnerAppInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeveloperDeleteSandboxInput = {
    /** Shape $ (Value): string. */
    "sandbox_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeveloperGetAuthContextInput = {};
export type DeveloperGetCurrentAPIKeyRequestLogInput = {
    /** Shape $ (Value): string. */
    "api_request_log_id": InputValue<string>;
};
export type DeveloperGetPartnerAppInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
};
export type DeveloperGetPartnerAppInstallInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "partner_app_install_id": InputValue<string>;
};
export type DeveloperGetResourceTimelineInput = {
    /** Shape $ (Value): string. */
    "resource_id": InputValue<string>;
    /**
     * Shape $ (Value): string. Value enum: "balance", "balance_transaction", "bundle", "category",
     * "checkout_session", "credit_note", "credit_note_allocation", "customer", "dispute",
     * "fraud_warning", "inventory_count", "inventory_level", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer", "invoice",
     * "invoice_payment_term", "merchant_billing_balance", "merchant_billing_invoice", "modifier",
     * "modifier_group", "modifier_set", "order", "payment_intent", "payment_link",
     * "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_variant", "promotion", "promotion_code", "refund",
     * "return", "return_activity", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "subscription",
     * "subscription_plan".
     */
    "resource_type"?: InputValue<"balance"
        | "balance_transaction"
        | "bundle"
        | "category"
        | "checkout_session"
        | "credit_note"
        | "credit_note_allocation"
        | "customer"
        | "dispute"
        | "fraud_warning"
        | "inventory_count"
        | "inventory_level"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "invoice"
        | "invoice_payment_term"
        | "merchant_billing_balance"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "payment_intent"
        | "payment_link"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "product"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "refund"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_receipt"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "subscription"
        | "subscription_plan">;
    /**
     * Shape $ (Value): Array of string. [] enum: "requests", "webhooks", "attempts",
     * "image_mutations". Shape $[] (Value): string. Value enum: "requests", "webhooks",
     * "attempts", "image_mutations".
     */
    "include"?: InputValue<Array<"requests" | "webhooks" | "attempts" | "image_mutations">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
};
export type DeveloperGetSandboxInput = {
    /** Shape $ (Value): string. */
    "sandbox_id": InputValue<string>;
};
/**
 * Shape $ (Value): {@link DeveloperInitialAPIKeyRequest}. The request body for: Create onboarding
 * API key.
 */
export type DeveloperInitialAPIKeyRequest = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "sandbox_id"?: string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "scopes"?: Array<string>;
};
/**
 * Shape $ (Value): {@link DeveloperInitialAPIKeyRequestInput}. The request body for: Create
 * onboarding API key.
 */
export type DeveloperInitialAPIKeyRequestInput = DeveloperInitialAPIKeyRequest;
export type DeveloperIssueSandboxTestKeyInput = {
    /** Shape $ (Value): string. */
    "sandbox_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link IssueSandboxAPIKeyRequestInput}. The request body for: Issue sandbox
     * test key.
     */
    "body": InputValue<IssueSandboxAPIKeyRequestInput>;
};
export type DeveloperListCurrentAPIKeyRequestLogsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "api_key", "user",
     * "partner_app_install", "checkout_session", "customer_session", "invoice",
     * "workload_identity". Shape $[] (Value): string. Value enum: "api_key", "user",
     * "partner_app_install", "checkout_session", "customer_session", "invoice",
     * "workload_identity".
     */
    "caller_type"?: InputValue<Array<"api_key"
        | "user"
        | "partner_app_install"
        | "checkout_session"
        | "customer_session"
        | "invoice"
        | "workload_identity">>;
    /** Shape $ (Value): string. */
    "caller_id"?: InputValue<string>;
    /** Shape $ (Value): string. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. */
    "request_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$. */
    "client_request_id"?: InputValue<string>;
    /** Shape $ (Value): string. pattern: ^[0-9a-f]{32}$. */
    "client_trace_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "GET", "HEAD", "POST", "PUT",
     * "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE". Shape $[] (Value): string. Value enum:
     * "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE".
     */
    "http_method"?: InputValue<Array<"GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "CONNECT" | "TRACE">>;
    /** Shape $ (Value): string. */
    "path_query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "api_key", "api_request_log",
     * "balance", "balance_transaction", "bundle", "bundle_component", "category",
     * "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_session", "customer_verification",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
     * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "user", "webhook_delivery", "webhook_endpoint",
     * "webhook_event", "workload_identity". Shape $[] (Value): string. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_session", "customer_verification",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
     * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "user", "webhook_delivery", "webhook_endpoint",
     * "webhook_event", "workload_identity".
     */
    "resource_type"?: InputValue<Array<"api_key"
        | "api_request_log"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "bundle_component"
        | "category"
        | "checkout_session"
        | "checkout_session_customer_verification"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_address"
        | "customer_deletion_request"
        | "customer_session"
        | "customer_verification"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_quote"
        | "delivery_rate"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "device"
        | "discount"
        | "dispute"
        | "email_change_request"
        | "environment_grant"
        | "feedback_report"
        | "file"
        | "flint_wallet"
        | "flint_wallet_card"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "fulfillment_notification"
        | "gift_card"
        | "gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "inventory_adjustment"
        | "inventory_allocation_policy"
        | "inventory_allocation_policy_revision"
        | "inventory_count"
        | "inventory_item"
        | "inventory_level"
        | "inventory_movement"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "inventory_transfer_line"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_late_fee"
        | "invoice_line_item"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "invoice_payment_term"
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "organization"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "report"
        | "report_download"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_inspection_line_item"
        | "return_line_item"
        | "return_policy"
        | "return_policy_revision"
        | "return_reason"
        | "return_receipt"
        | "return_receipt_line_item"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "sandbox"
        | "settings"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_line_item"
        | "subscription_offer"
        | "subscription_payment_retry"
        | "subscription_plan"
        | "subscription_plan_line_item"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity">>;
    /** Shape $ (Value): string. */
    "resource_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "success", "client_error",
     * "server_error". Shape $[] (Value): string. Value enum: "success", "client_error",
     * "server_error".
     */
    "status_bucket"?: InputValue<Array<"success" | "client_error" | "server_error">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
export type DeveloperListPartnerAppInstallsInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "merchant_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending_exchange", "active",
     * "revoked". Shape $[] (Value): string. Value enum: "pending_exchange", "active", "revoked".
     */
    "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
};
export type DeveloperListPartnerAppsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "archived". Shape $[]
     * (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<Array<"active" | "archived">>;
};
export type DeveloperListPartnerInstallsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "partner_app_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending_exchange", "active",
     * "revoked". Shape $[] (Value): string. Value enum: "pending_exchange", "active", "revoked".
     */
    "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
};
export type DeveloperListSandboxesInput = DeveloperListPartnerAppsInput;
export type DeveloperResetSandboxInput = DeveloperDeleteSandboxInput;
export type DeveloperRevokePartnerAppInstallInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "partner_app_install_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeveloperRevokePartnerEnvironmentGrantInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "partner_app_install_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "environment_grant_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeveloperRotatePartnerAppSecretInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RotatePartnerAppSecretRequestInput}. The request body for: Rotate
     * partner app secret.
     */
    "body"?: InputValue<RotatePartnerAppSecretRequestInput>;
};
