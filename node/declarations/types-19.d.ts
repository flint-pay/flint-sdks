import type { Address } from './types-0.js';
import type { CreateOrderLineItem } from './types-11.js';
import type {
    DeliveryBuyerLocationResource,
    DeliveryInputRequirement,
    DeliveryCandidateOutcomeResource,
    DeliveryEligibilityExpression,
    DeliveryEligibilityExpressionRequest,
    DeliveryEligibilityExpressionRequestInput,
    DeliveryCalculatedPricingStrategy,
    DeliveryExternalPricingStrategy,
    DeliveryFixedPricingStrategy,
    DeliveryCallbackPricingStrategyRequest,
    DeliveryCallerSuppliedPricingStrategyRequest,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryFixedPricingStrategyRequestInput
} from './types-17.js';
import type { DeliveryMerchantDiagnostic, DeliveryOptionProjection, DeliveryPickupAvailability } from './types-18.js';
import type {
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteLineItemResource,
    DeliveryProfileDiagnostics,
    DeliveryProfileUnconfiguredAssignment,
    DeliveryProfileOriginPolicy,
    DeliveryProfileOriginPolicyRequest,
    DeliveryProfileOriginPolicyRequestInput
} from './types-20.js';
import type { ResponseMeta } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryPreviewRequestInput } from './types-8.js';
import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type {
    DeliveryRateTablePricingStrategy,
    DeliveryRateTablePricingStrategyCreateRequest,
    DeliveryRateTablePricingStrategyCreateRequestInput,
    DeliveryRateTablePricingStrategyRequest,
    DeliveryRateTablePricingStrategyRequestInput
} from './types-21.js';
import type { DeliveryTieredPricingStrategy, DeliveryTieredPricingStrategyRequestInput } from './types-22.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-37.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
/**
 * A delivery eligibility condition that matches the address postal code against exact or prefix
 * `values`.
 */
export type DeliveryPostalCodeConditionRequestInput = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
    /**
     * Postal codes, each with its country. Flint compares codes in uppercase without spaces or
     * hyphens. An exact value matches that code, and a prefix value matches every code that starts
     * with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes
     * within it, so 07030 matches 07030-5788, which address verification returns for a full
     * address. A ZIP+4 value matches only that ZIP+4. [] (Value): {@link
     * DeliveryPostalCodeValueRequestInput}. A postal code or postal code prefix with its country,
     * used in a postal code condition.
     */
    "values": Array<DeliveryPostalCodeValueRequestInput>;
};
/** A postal code or postal code prefix with its country, used in a postal code condition. */
export type DeliveryPostalCodeValue = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /**
     * Whether `value` is a whole postal code or the start of one. Default: "exact". Value enum:
     * "exact", "prefix".
     */
    "type"?: "exact" | "prefix" | (string & {});
    /** The postal code, or the start of postal codes, to match. minLength: 1. */
    "value": string;
};
/** A postal code or postal code prefix with its country, used in a postal code condition. */
export type DeliveryPostalCodeValueRequestInput = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /**
     * Whether `value` is a whole postal code or the start of one. Default: "exact". Value enum:
     * "exact", "prefix".
     */
    "type"?: "exact" | "prefix";
    /** The postal code, or the start of postal codes, to match. minLength: 1. */
    "value": string;
};
/**
 * The delivery options and prices Flint would offer for the supplied items and buyer location,
 * with input requirements and merchant diagnostics.
 */
export type DeliveryPreview = {
    /**
     * Buyer location used to evaluate delivery availability and pickup proximity. Omitted when the
     * request sent none. The normalized buyer address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationResource;
    /**
     * Groups of order items that each choose their own delivery option. [] (Value): {@link
     * DeliveryPreviewChoiceGroupResource}. One group of order items in a delivery options preview,
     * with the options a buyer could choose, its availability status, and any input still needed.
     */
    "choice_groups": Array<DeliveryPreviewChoiceGroupResource>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Delivery methods the preview evaluated. [] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids": Array<string>;
    /**
     * Destination address used to evaluate shipment and local delivery options. Omitted when the
     * request sent none. A postal address. Every address has country. Addresses Flint checked as
     * complete (customer and saved addresses, merchant, location, invoice, order delivery
     * destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and
     * city, and US ones always have state and postal_code. Delivery quote destinations, buyer
     * locations and postal-code tax locations hold only what was provided, such as postal_code and
     * country.
     */
    "destination_address"?: Address;
    /** Time Flint computed this preview. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at": string;
    /**
     * How completely Flint evaluated the candidate delivery methods. Value enum: "complete",
     * "incomplete", "degraded".
     */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Request a new preview after this time, because prices and availability may have changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Inputs the delivery methods need. A quote requirement, such as the destination address, is
     * input a method needs before Flint can price it. A selection requirement is input a delivery
     * selection needs before payment, such as a recipient field or delivery window an option
     * requires. A method that waits on the buyer's address or store, or on an address the buyer
     * must correct, already lists the recipient fields it requires. Those requirements name the
     * method's choice group and have no delivery_option_ids. [] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Items the preview evaluated. [] (Value): {@link CreateOrderLineItem}. A line item in a
     * delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
    /**
     * Present for merchant callers as an array, including when empty. Absent for buyer callers. []
     * (Value): {@link DeliveryMerchantDiagnostic}. A merchant-only diagnostic explaining why a
     * delivery method produced no option, with its outcome, recommended action, and eligibility
     * mismatches.
     */
    "merchant_diagnostics"?: Array<DeliveryMerchantDiagnostic>;
    /**
     * The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods
     * and prices for the supplied items and buyer location. Value enum: "delivery_options".
     */
    "mode": "delivery_options" | (string & {});
    /**
     * ID of the Location at which pickup methods were priced. Omitted when the request sent none.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "pickup_location_id"?: string;
};
/**
 * One group of order items in a delivery options preview, with the options a buyer could choose,
 * its availability status, and any input still needed.
 */
export type DeliveryPreviewChoiceGroupResource = {
    /** Delivery types permitted by this group's items. [] (Value): string. */
    "allowed_types"?: Array<string>;
    /**
     * Whether this group has a delivery option available. Value enum: "ready", "needs_input",
     * "needs_checkout_context", "unavailable".
     */
    "availability_status": "ready" | "needs_input" | "needs_checkout_context" | "unavailable" | (string & {});
    /**
     * Evaluation result for each candidate delivery method, keyed by its method ID. * (Value):
     * {@link DeliveryCandidateOutcomeResource}. The result of evaluating one delivery method for a
     * choice group, selected by `type`: available with an option, unavailable, input required,
     * cannot calculate, or requires checkout context.
     */
    "candidate_outcomes": Record<string, DeliveryCandidateOutcomeResource>;
    /**
     * How completely Flint evaluated the group's candidate delivery methods. Value enum:
     * "complete", "incomplete", "degraded".
     */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Where the group's items leave from, one leg per origin Location, when all of its methods
     * leave from the same Locations. Omitted when the origin depends on the chosen method, such as
     * shipping from a warehouse or picking up at a store. Each option then lists its own
     * execution_legs. [] (Value): {@link DeliveryQuoteExecutionLegResource}. One leg of a delivery
     * choice group, identifying the origin Location the group's items leave from.
     */
    "execution_legs"?: Array<DeliveryQuoteExecutionLegResource>;
    /**
     * Inputs this group's delivery methods need before they can be priced. [] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Order line items, or bundle components, this group covers, with the quantity covered. []
     * (Value): {@link DeliveryQuoteLineItemResource}. An order line item, or one bundle component
     * of it, and the quantity covered by a delivery choice group.
     */
    "line_items": Array<DeliveryQuoteLineItemResource>;
    /**
     * Delivery options available for these items. [] (Value): {@link DeliveryOptionProjection}. A
     * delivery option in a quote or preview: its price, type, timing, delivery plan, execution
     * legs, and shipment, pickup, or local delivery details.
     */
    "options": Array<DeliveryOptionProjection>;
};
/** The response for: Create delivery preview. */
export type DeliveryPreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. oneOf[1] (Value): {@link
     * DeliveryPreview}. The delivery options and prices Flint would offer for the supplied items
     * and buyer location, with input requirements and merchant diagnostics. oneOf[2] (Value):
     * {@link DeliveryPickupAvailability}. The result of a pickup locations preview: each pickup
     * location and whether it can supply the order, with input requirements and merchant
     * diagnostics.
     */
    "data": ((DeliveryPreview) | (DeliveryPickupAvailability) | (Record<string, unknown>));
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
export type DeliveryPreviewsCreateParams = (CreateDeliveryPreviewRequestInput)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/**
 * One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per
 * currency. The first matching rate by priority sets the price.
 */
export type DeliveryPricingRate = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /** ID of this rate. Flint assigns it. Example: "drate_01KEZF7C00FD0B4QEC0M00MJ4S". */
    "delivery_rate_id": string;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Eligibility expression that decides whether this rate applies. The rate matches when the
     * expression matches. `null` when a stored rate has no condition. Flint requires a condition
     * on every rate, so expect an expression. anyOf[1] (Value): {@link
     * DeliveryEligibilityExpression}. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * anyOf[2] (Value): null.
     */
    "when": ((DeliveryEligibilityExpression) | (null) | (unknown));
};
/**
 * A rate to add when creating a rate table pricing strategy: a `when` condition, a `priority`, and
 * a price per currency.
 */
export type DeliveryPricingRateCreateRequest = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Eligibility expression that decides whether this rate applies. The rate matches when the
     * expression matches. A boolean expression containing exactly one operator or typed condition
     * at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionRequest;
};
/**
 * A rate to add when creating a rate table pricing strategy: a `when` condition, a `priority`, and
 * a price per currency.
 */
export type DeliveryPricingRateCreateRequestInput = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Eligibility expression that decides whether this rate applies. The rate matches when the
     * expression matches. A boolean expression containing exactly one operator or typed condition
     * at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionRequestInput;
};
/**
 * A rate in a rate table pricing strategy you send when updating a delivery method. Include
 * `delivery_rate_id` to keep or update an existing rate.
 */
export type DeliveryPricingRateRequest = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Stable rate identifier returned by Flint. Include it when updating or retaining an existing
     * rate. minLength: 1. Example: "drate_01KEZF7C00FD0B4QEC0M00MJ4S".
     */
    "delivery_rate_id"?: string;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Eligibility expression that decides whether this rate applies. The rate matches when the
     * expression matches. A boolean expression containing exactly one operator or typed condition
     * at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionRequest;
};
/**
 * A rate in a rate table pricing strategy you send when updating a delivery method. Include
 * `delivery_rate_id` to keep or update an existing rate.
 */
export type DeliveryPricingRateRequestInput = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Stable rate identifier returned by Flint. Include it when updating or retaining an existing
     * rate. minLength: 1. Example: "drate_01KEZF7C00FD0B4QEC0M00MJ4S".
     */
    "delivery_rate_id"?: string;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Eligibility expression that decides whether this rate applies. The rate matches when the
     * expression matches. A boolean expression containing exactly one operator or typed condition
     * at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionRequestInput;
};
/**
 * How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`,
 * `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.
 */
export type DeliveryPricingStrategy = ({
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
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "fixed",
     * "rate_table", "tiered", "calculated", "callback", "caller_supplied".
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
/** The `calculated` variant of `DeliveryPricingStrategy`. */
export type DeliveryPricingStrategyCalculated = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing
     * calculated from a base fee, distance, weight, and per-item handling, with minimum and
     * maximum fees, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
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
     * Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing
     * calculated from a base fee, distance, weight, and per-item handling, with minimum and
     * maximum fees, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
/** The `callback` variant of `DeliveryPricingStrategy`. */
export type DeliveryPricingStrategyCallback = ({
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
    "callback": DeliveryExternalPricingStrategy;
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
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that
     * comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryExternalPricingStrategy;
}));
/** The `caller_supplied` variant of `DeliveryPricingStrategy`. */
export type DeliveryPricingStrategyCallerSupplied = ({
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
    "caller_supplied": DeliveryExternalPricingStrategy;
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
     * pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded
     * by minimum and maximum fees by currency.
     */
    "caller_supplied": DeliveryExternalPricingStrategy;
}));
/** The `calculated` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCalculated = ({
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
/** The `calculated` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCalculatedInput = ({
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
/** The `callback` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCallback = ({
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
        "object": {
            "configuration": DeliveryProfileConfiguration;
            "created_at": string;
            "current_delivery_profile_revision_id": string;
            "delivery_profile_id": string;
            "diagnostics"?: DeliveryProfileDiagnostics;
            "external_reference_id"?: string;
            "is_default": boolean;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "unconfigured_assignment"?: ((DeliveryProfileUnconfiguredAssignment) | (null));
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryProfile>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_profile.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryProfileConfiguration;
            "created_at": string;
            "current_delivery_profile_revision_id": string;
            "delivery_profile_id": string;
            "diagnostics"?: DeliveryProfileDiagnostics;
            "external_reference_id"?: string;
            "is_default": boolean;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "unconfigured_assignment"?: ((DeliveryProfileUnconfiguredAssignment) | (null));
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryProfile>;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `diagnostics`, `unconfigured_assignment`. object.configuration (Required): {@link
     * DeliveryProfileConfiguration}. Current delivery requirement and grouping policy. Whether
     * delivery planning applies to items under a delivery profile, and if so the allowed delivery
     * types, resolution mode, origin policy, and grouping and splitting rules. object.created_at
     * (Required): string. Time the profile was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.current_delivery_profile_revision_id (Required): string.
     * Immutable revision used for new line-item snapshots. Example:
     * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F". object.delivery_profile_id (Required): string. Stable
     * delivery profile ID. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". object.diagnostics
     * (Optional): {@link DeliveryProfileDiagnostics}. Read-only catalog and delivery-method
     * compatibility diagnostics. Read-only coverage checks for a delivery profile, such as how
     * many active Locations have no compatible delivery method and how many countries its zones
     * name. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.is_default
     * (Required): boolean. True only when this profile is the current physical catalog default.
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.name (Required): string.
     * Merchant-facing profile name. object.status (Required): string. Current profile lifecycle
     * status. Value enum: "active", "archived". object.unconfigured_assignment (Optional): {@link
     * DeliveryProfileUnconfiguredAssignment} or null. Progress of the profile's latest bulk
     * assignment through `POST
     * /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`. `null` when the profile
     * has never had one. Omitted when the response is a write response or a webhook object;
     * retrieve and list responses include it. Flint updates it as the assignment's runs commit,
     * without changing the profile's `version` or sending `delivery_profile.updated`; each batch's
     * `product_variant.updated`, `product.updated`, and `bundle.updated` events report the items
     * it assigned. object.unconfigured_assignment.anyOf[1] (Value): {@link
     * DeliveryProfileUnconfiguredAssignment}. Progress of a delivery profile's latest bulk
     * assignment to catalog items that have no delivery profile. It moves from `processing` to
     * `completed`, to `canceled` when it stops early, or to `failed` when Flint can't finish it.
     * object.unconfigured_assignment.anyOf[2] (Value): null. object.updated_at (Required): string.
     * Time the profile last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Optimistic-concurrency version for profile writes.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
         * `unconfigured_assignment`. configuration (Required): {@link
         * DeliveryProfileConfiguration}. Current delivery requirement and grouping policy. Whether
         * delivery planning applies to items under a delivery profile, and if so the allowed
         * delivery types, resolution mode, origin policy, and grouping and splitting rules.
         * created_at (Required): string. Time the profile was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_delivery_profile_revision_id (Required): string.
         * Immutable revision used for new line-item snapshots. Example:
         * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F". delivery_profile_id (Required): string. Stable
         * delivery profile ID. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". diagnostics
         * (Optional): {@link DeliveryProfileDiagnostics}. Read-only catalog and delivery-method
         * compatibility diagnostics. Read-only coverage checks for a delivery profile, such as how
         * many active Locations have no compatible delivery method and how many countries its
         * zones name. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". is_default
         * (Required): boolean. True only when this profile is the current physical catalog
         * default. metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. name (Required): string.
         * Merchant-facing profile name. status (Required): string. Current profile lifecycle
         * status. Value enum: "active", "archived". unconfigured_assignment (Optional): {@link
         * DeliveryProfileUnconfiguredAssignment} or null. Progress of the profile's latest bulk
         * assignment through `POST
         * /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`. `null` when the
         * profile has never had one. Omitted when the response is a write response or a webhook
         * object; retrieve and list responses include it. Flint updates it as the assignment's
         * runs commit, without changing the profile's `version` or sending
         * `delivery_profile.updated`; each batch's `product_variant.updated`, `product.updated`,
         * and `bundle.updated` events report the items it assigned.
         * unconfigured_assignment.anyOf[1] (Value): {@link DeliveryProfileUnconfiguredAssignment}.
         * Progress of a delivery profile's latest bulk assignment to catalog items that have no
         * delivery profile. It moves from `processing` to `completed`, to `canceled` when it stops
         * early, or to `failed` when Flint can't finish it. unconfigured_assignment.anyOf[2]
         * (Value): null. updated_at (Required): string. Time the profile last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current delivery requirement and grouping policy. Whether delivery planning applies
             * to items under a delivery profile, and if so the allowed delivery types, resolution
             * mode, origin policy, and grouping and splitting rules.
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
             * Read-only catalog and delivery-method compatibility diagnostics. Read-only coverage
             * checks for a delivery profile, such as how many active Locations have no compatible
             * delivery method and how many countries its zones name.
             */
            "diagnostics"?: DeliveryProfileDiagnostics;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** True only when this profile is the current physical catalog default. */
            "is_default": boolean;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing profile name. */
            "name": string;
            /** Current profile lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Progress of the profile's latest bulk assignment through `POST
             * /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`. `null` when the
             * profile has never had one. Omitted when the response is a write response or a
             * webhook object; retrieve and list responses include it. Flint updates it as the
             * assignment's runs commit, without changing the profile's `version` or sending
             * `delivery_profile.updated`; each batch's `product_variant.updated`,
             * `product.updated`, and `bundle.updated` events report the items it assigned.
             * anyOf[1] (Value): {@link DeliveryProfileUnconfiguredAssignment}. Progress of a
             * delivery profile's latest bulk assignment to catalog items that have no delivery
             * profile. It moves from `processing` to `completed`, to `canceled` when it stops
             * early, or to `failed` when Flint can't finish it. anyOf[2] (Value): null.
             */
            "unconfigured_assignment"?: ((DeliveryProfileUnconfiguredAssignment) | (null));
            /**
             * Time the profile last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /** Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryProfile>;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `diagnostics`, `unconfigured_assignment`. object.configuration (Required): {@link
     * DeliveryProfileConfiguration}. Current delivery requirement and grouping policy. Whether
     * delivery planning applies to items under a delivery profile, and if so the allowed delivery
     * types, resolution mode, origin policy, and grouping and splitting rules. object.created_at
     * (Required): string. Time the profile was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.current_delivery_profile_revision_id (Required): string.
     * Immutable revision used for new line-item snapshots. Example:
     * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F". object.delivery_profile_id (Required): string. Stable
     * delivery profile ID. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". object.diagnostics
     * (Optional): {@link DeliveryProfileDiagnostics}. Read-only catalog and delivery-method
     * compatibility diagnostics. Read-only coverage checks for a delivery profile, such as how
     * many active Locations have no compatible delivery method and how many countries its zones
     * name. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.is_default
     * (Required): boolean. True only when this profile is the current physical catalog default.
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.name (Required): string.
     * Merchant-facing profile name. object.status (Required): string. Current profile lifecycle
     * status. Value enum: "active", "archived". object.unconfigured_assignment (Optional): {@link
     * DeliveryProfileUnconfiguredAssignment} or null. Progress of the profile's latest bulk
     * assignment through `POST
     * /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`. `null` when the profile
     * has never had one. Omitted when the response is a write response or a webhook object;
     * retrieve and list responses include it. Flint updates it as the assignment's runs commit,
     * without changing the profile's `version` or sending `delivery_profile.updated`; each batch's
     * `product_variant.updated`, `product.updated`, and `bundle.updated` events report the items
     * it assigned. object.unconfigured_assignment.anyOf[1] (Value): {@link
     * DeliveryProfileUnconfiguredAssignment}. Progress of a delivery profile's latest bulk
     * assignment to catalog items that have no delivery profile. It moves from `processing` to
     * `completed`, to `canceled` when it stops early, or to `failed` when Flint can't finish it.
     * object.unconfigured_assignment.anyOf[2] (Value): null. object.updated_at (Required): string.
     * Time the profile last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Optimistic-concurrency version for profile writes.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
         * `unconfigured_assignment`. configuration (Required): {@link
         * DeliveryProfileConfiguration}. Current delivery requirement and grouping policy. Whether
         * delivery planning applies to items under a delivery profile, and if so the allowed
         * delivery types, resolution mode, origin policy, and grouping and splitting rules.
         * created_at (Required): string. Time the profile was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_delivery_profile_revision_id (Required): string.
         * Immutable revision used for new line-item snapshots. Example:
         * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F". delivery_profile_id (Required): string. Stable
         * delivery profile ID. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". diagnostics
         * (Optional): {@link DeliveryProfileDiagnostics}. Read-only catalog and delivery-method
         * compatibility diagnostics. Read-only coverage checks for a delivery profile, such as how
         * many active Locations have no compatible delivery method and how many countries its
         * zones name. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". is_default
         * (Required): boolean. True only when this profile is the current physical catalog
         * default. metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. name (Required): string.
         * Merchant-facing profile name. status (Required): string. Current profile lifecycle
         * status. Value enum: "active", "archived". unconfigured_assignment (Optional): {@link
         * DeliveryProfileUnconfiguredAssignment} or null. Progress of the profile's latest bulk
         * assignment through `POST
         * /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`. `null` when the
         * profile has never had one. Omitted when the response is a write response or a webhook
         * object; retrieve and list responses include it. Flint updates it as the assignment's
         * runs commit, without changing the profile's `version` or sending
         * `delivery_profile.updated`; each batch's `product_variant.updated`, `product.updated`,
         * and `bundle.updated` events report the items it assigned.
         * unconfigured_assignment.anyOf[1] (Value): {@link DeliveryProfileUnconfiguredAssignment}.
         * Progress of a delivery profile's latest bulk assignment to catalog items that have no
         * delivery profile. It moves from `processing` to `completed`, to `canceled` when it stops
         * early, or to `failed` when Flint can't finish it. unconfigured_assignment.anyOf[2]
         * (Value): null. updated_at (Required): string. Time the profile last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current delivery requirement and grouping policy. Whether delivery planning applies
             * to items under a delivery profile, and if so the allowed delivery types, resolution
             * mode, origin policy, and grouping and splitting rules.
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
             * Read-only catalog and delivery-method compatibility diagnostics. Read-only coverage
             * checks for a delivery profile, such as how many active Locations have no compatible
             * delivery method and how many countries its zones name.
             */
            "diagnostics"?: DeliveryProfileDiagnostics;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** True only when this profile is the current physical catalog default. */
            "is_default": boolean;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing profile name. */
            "name": string;
            /** Current profile lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Progress of the profile's latest bulk assignment through `POST
             * /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`. `null` when the
             * profile has never had one. Omitted when the response is a write response or a
             * webhook object; retrieve and list responses include it. Flint updates it as the
             * assignment's runs commit, without changing the profile's `version` or sending
             * `delivery_profile.updated`; each batch's `product_variant.updated`,
             * `product.updated`, and `bundle.updated` events report the items it assigned.
             * anyOf[1] (Value): {@link DeliveryProfileUnconfiguredAssignment}. Progress of a
             * delivery profile's latest bulk assignment to catalog items that have no delivery
             * profile. It moves from `processing` to `completed`, to `canceled` when it stops
             * early, or to `failed` when Flint can't finish it. anyOf[2] (Value): null.
             */
            "unconfigured_assignment"?: ((DeliveryProfileUnconfiguredAssignment) | (null));
            /**
             * Time the profile last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /** Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryProfile>;
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
