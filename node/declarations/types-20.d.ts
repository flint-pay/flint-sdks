import type {
    DeliveryEligibilityExpressionRequestInput,
    DeliveryEligibilityExpressionPreviousAttributes,
    DeliveryEstimateRulePreviousAttributes,
    DeliveryEligibilityExpressionRequest,
    DeliveryEstimateRule,
    DeliveryEstimateRuleRequestInput,
    DeliveryMethodConfiguration,
    DeliveryMethod,
    DeliveryLocationSetsDeleteParams,
    DeliveryInputRequirement,
    DeliveryLocationSummaryResource,
    DeliveryLocationSummaryResourcePreviousAttributes
} from './types-19.js';
import type {
    DeliveryPricingStrategyRequestInput,
    DeliveryPricingStrategyPreviousAttributes,
    DeliveryPricingStrategyRequest
} from './types-21.js';
import type {
    DeliveryRecipientRequirementRequestInput,
    DeliveryRecipientRequirementPreviousAttributes,
    DeliveryRecipientRequirement
} from './types-23.js';
import type {
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryTransitTimeRuleRequestInput,
    DeliveryShipmentDetails,
    DeliveryWindowRequest,
    DeliveryShipmentDetailsPreviousAttributes,
    DeliveryWindowResourcePreviousAttributes
} from './types-24.js';
import type {
    BuyerInstructionsConfigPreviousAttributes,
    BuyerInstructionsConfig,
    BuyerInstructionsConfigRequestInput
} from './types-2.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { SubscriptionCounts, SubscriptionCountsPreviousAttributes } from './types-70.js';
import type { ResponseMeta } from './types-63.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryMethodRequestInput } from './types-9.js';
import type { DisputesAcceptParams } from './types-26.js';
import type { UpdateDeliveryMethodRequestInput } from './types-77.js';
import type {
    DeliveryArrivalEstimate,
    DeliveryArrivalEstimatePreviousAttributes,
    DeliveryAddressAdvisoryResource
} from './types-18.js';
import type {
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteExecutionLegResourcePreviousAttributes,
    DeliveryQuoteLineItemResource
} from './types-22.js';
import type { MoneyValue, MoneyValuePreviousAttributes } from './types-44.js';
import type { Address } from './types-0.js';
/**
 * Patch object: fields you send are applied, fields you omit are unchanged. Each key you send
 * replaces that part of the configuration as a whole, so send every field you want to keep in
 * pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field
 * describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
 * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate,
 * leave out the ID to create one, and leave out a rate to remove it. The result must be a
 * configuration you could create, including pickup_mode for pickup methods. An empty configuration
 * is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires
 * expected_version. minProperties: 1.
 */
export type DeliveryMethodConfigurationPatchRequestInput = {
    /**
     * Replaced as a whole: send every field you want to keep. Controls whether checkout collects
     * buyer instructions for this method. Null disables instruction collection. enabled
     * (Required): boolean. Whether checkout collects buyer instructions. label (Optional): string.
     * Checkout field label, without leading or trailing whitespace. Clients use a delivery-type
     * default when omitted. minLength: 1. maxLength: 255. placeholder (Optional): string. Checkout
     * field placeholder, without leading or trailing whitespace. Clients use a delivery-type
     * default when omitted. minLength: 1. maxLength: 500. required (Required): boolean. Whether
     * the buyer must enter instructions before selecting the option. Requires enabled=true.
     */
    "buyer_instructions"?: {
        /** Whether checkout collects buyer instructions. */
        "enabled": boolean;
        /**
         * Checkout field label, without leading or trailing whitespace. Clients use a
         * delivery-type default when omitted. minLength: 1. maxLength: 255.
         */
        "label"?: string;
        /**
         * Checkout field placeholder, without leading or trailing whitespace. Clients use a
         * delivery-type default when omitted. minLength: 1. maxLength: 500.
         */
        "placeholder"?: string;
        /**
         * Whether the buyer must enter instructions before selecting the option. Requires
         * enabled=true.
         */
        "required": boolean;
    }
        | null;
    /**
     * Tax category of the delivery charge, which decides its automatic tax and appears in tax
     * records and reporting. Automatic tax calculates service_fee, shipping, delivery, handling,
     * and surcharge at the general rate at the charge location, including the store for pickup.
     * Null uses settings.tax.default_delivery_tax_category, or, when that is unset, shipping for
     * shipment, delivery for local_delivery, or service_fee for pickup. Value enum: "service_fee",
     * "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Replaced as a whole: send every field you want to keep. Conditions that decide where this
     * method is offered. Null removes the conditions, so the method is offered everywhere the
     * merchant serves. anyOf[1] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. anyOf[2] (Value): null.
     */
    "eligibility"?: ((DeliveryEligibilityExpressionRequestInput) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. The buyer-visible delivery or pickup
     * estimate. Use type none when the merchant makes no timing promise. Null restores type none,
     * when the pricing type allows it. schedule_window (Optional): {@link
     * DeliveryScheduleWindowRuleRequestInput}. Weekly schedule of delivery windows. Set only when
     * `type` is `schedule_window`. Scheduled-window estimate rule you supply for a delivery
     * method, defined by its `availability` schedule. transit_time (Optional): {@link
     * DeliveryTransitTimeRuleRequestInput}. Handling and transit time. Set only when `type` is
     * `transit_time`. Estimate rule giving a delivery method's handling time and transit time as
     * ranges of business days. type (Required): string. How Flint estimates timing. Set the
     * property named by this value. Value enum: "none", "transit_time", "schedule_window".
     */
    "estimate"?: {
        /**
         * Weekly schedule of delivery windows. Set only when `type` is `schedule_window`.
         * Scheduled-window estimate rule you supply for a delivery method, defined by its
         * `availability` schedule.
         */
        "schedule_window"?: DeliveryScheduleWindowRuleRequestInput;
        /**
         * Handling and transit time. Set only when `type` is `transit_time`. Estimate rule giving
         * a delivery method's handling time and transit time as ranges of business days.
         */
        "transit_time"?: DeliveryTransitTimeRuleRequestInput;
        /**
         * How Flint estimates timing. Set the property named by this value. Value enum: "none",
         * "transit_time", "schedule_window".
         */
        "type": "none" | "transit_time" | "schedule_window";
    }
        | null;
    /**
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Null restores 0 for fixed, tiered, or rate_table
     * pricing. It is invalid for calculated, callback, or caller_supplied pricing. Format: int64.
     * minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds"?: number | null;
    /**
     * Replaced as a whole: send every field you want to keep. Where delivery starts. A method can
     * use a fixed location or a delivery location set; origin.type determines allocation or buyer
     * pickup behavior. Null is invalid. The origin you supply for a delivery method, chosen by
     * `type`: a fixed location, or locations from a delivery location set or an inline list.
     */
    "origin"?: DeliveryMethodOriginSelectorRequestInput;
    /**
     * Replaced as a whole: send every field you want to keep. How Flint calculates the delivery
     * charge. Null is invalid. The pricing strategy you supply when updating a delivery method.
     * Set `type` and the matching property.
     */
    "pricing"?: DeliveryPricingStrategyRequestInput;
    /**
     * Replaced as a whole: send every field you want to keep. Buyer-visible structured details
     * supplied by the merchant. Null removes the public details; pickup methods still require
     * pickup_mode. minProperties: 1. instructions (Optional): string. Buyer-visible instructions
     * for this method. minLength: 1. maxLength: 2048. pickup_mode (Optional): string. Required for
     * pickup methods and rejected for other method types. Value enum: "in_store", "curbside",
     * "locker", "other". service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day", "on_demand", "scheduled".
     */
    "public_details"?: {
        /** Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. */
        "instructions"?: string;
        /**
         * Required for pickup methods and rejected for other method types. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other";
        /**
         * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
         * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
         * "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled";
    }
        | null;
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive. Use []
     * to clear it. Null is invalid. maxItems: 12. uniqueItems: true. [] enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". [] (Value): string. Request
     * properties the callback needs. - `destination_address`: The full destination address. -
     * `destination_address.line1`: The destination street address. - `destination_address.line2`:
     * The destination apartment, suite, or other secondary address. - `destination_address.city`:
     * The destination city. - `destination_address.state`: The destination state or region. -
     * `destination_address.postal_code`: The destination postal code. -
     * `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.address.country"
        | "buyer_location.coordinate">;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Use [] to clear it. Null is invalid. [] (Value): {@link
     * DeliveryRecipientRequirementRequestInput}. Says whether a recipient field (`name`, `email`,
     * or `phone`) is required for a delivery method, and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirementRequestInput>;
    /**
     * How long after evaluation Flint guarantees a selected price, when that is later than the
     * option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table
     * prices for a cart without tracked inventory hold until the checkout's calculation expiry.
     * Null restores 0, which uses the option expiry. Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: number | null;
    /**
     * US destinations where this shipment method's shipping charge is exempt from tax. Use
     * uppercase two-letter state codes such as CA. All other destinations use the method's taxable
     * setting or the merchant default. For a taxable shipment method with exemptions, quoting
     * requires a destination country and, for US destinations, a state. Use [] to clear it. Null
     * is invalid. uniqueItems: true. [] enum: "AA", "AE", "AK", "AL", "AP", "AR", "AS", "AZ",
     * "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY",
     * "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ",
     * "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT",
     * "VA", "VI", "VT", "WA", "WI", "WV", "WY". [] (Value): string. Value enum: "AA", "AE", "AK",
     * "AL", "AP", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA",
     * "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT",
     * "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC",
     * "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY".
     */
    "tax_exempt_us_states"?: Array<"AA"
        | "AE"
        | "AK"
        | "AL"
        | "AP"
        | "AR"
        | "AS"
        | "AZ"
        | "CA"
        | "CO"
        | "CT"
        | "DC"
        | "DE"
        | "FL"
        | "GA"
        | "GU"
        | "HI"
        | "IA"
        | "ID"
        | "IL"
        | "IN"
        | "KS"
        | "KY"
        | "LA"
        | "MA"
        | "MD"
        | "ME"
        | "MI"
        | "MN"
        | "MO"
        | "MP"
        | "MS"
        | "MT"
        | "NC"
        | "ND"
        | "NE"
        | "NH"
        | "NJ"
        | "NM"
        | "NV"
        | "NY"
        | "OH"
        | "OK"
        | "OR"
        | "PA"
        | "PR"
        | "RI"
        | "SC"
        | "SD"
        | "TN"
        | "TX"
        | "UM"
        | "UT"
        | "VA"
        | "VI"
        | "VT"
        | "WA"
        | "WI"
        | "WV"
        | "WY">;
    /**
     * Whether the delivery charge is taxable. Null follows tax.default_delivery_taxable in the
     * merchant's settings.
     */
    "taxable"?: boolean | null;
};
export type DeliveryMethodConfigurationPreviousAttributes = {
    /**
     * Controls whether checkout collects buyer instructions for this method. anyOf[1] (Value):
     * {@link BuyerInstructionsConfigPreviousAttributes}. anyOf[2] (Value): null.
     */
    "buyer_instructions"?: ((BuyerInstructionsConfigPreviousAttributes) | (null));
    /**
     * Tax category of the delivery charge, which decides its automatic tax and appears in tax
     * records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset,
     * Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for
     * pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or
     * send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping,
     * delivery, handling, and surcharge at the general rate at the charge location, including the
     * store for pickup. `null` when the method inherits the default delivery tax category from
     * settings. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     * anyOf[1] (Value): string. Tax category of the delivery charge, which decides its automatic
     * tax and appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and
     * surcharge at the general rate at the charge location, including the store for pickup. `null`
     * when the method inherits the default delivery tax category from settings. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. anyOf[2] (Value):
     * null.
     */
    "charge_tax_category"?: (("service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {})) | (null));
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. anyOf[1] (Value): {@link
     * DeliveryEligibilityExpressionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "eligibility"?: ((DeliveryEligibilityExpressionPreviousAttributes) | (null));
    /**
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. anyOf[1] (Value): {@link DeliveryEstimateRulePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "estimate"?: ((DeliveryEstimateRulePreviousAttributes) | (null));
    /**
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. anyOf[1] (Value): integer. Minimum remaining
     * quote lifetime required before Flint offers this method. Required for calculated, callback,
     * and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. anyOf[2] (Value): null.
     */
    "minimum_option_lifetime_seconds"?: ((number) | (null));
    /**
     * Where delivery starts. A method can use a fixed location or a delivery location set;
     * origin.type determines allocation or buyer pickup behavior. anyOf[1] (Value): {@link
     * DeliveryMethodOriginSelectorPreviousAttributes}. anyOf[2] (Value): null.
     */
    "origin"?: ((DeliveryMethodOriginSelectorPreviousAttributes) | (null));
    /**
     * How Flint calculates the delivery charge. anyOf[1] (Value): {@link
     * DeliveryPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "pricing"?: ((DeliveryPricingStrategyPreviousAttributes) | (null));
    /**
     * Buyer-visible structured details supplied by the merchant. anyOf[1] (Value): object.
     * anyOf[1].instructions (Optional): string or null. Buyer-visible instructions for this
     * method. anyOf[1].instructions.anyOf[1] (Value): string. Buyer-visible instructions for this
     * method. maxLength: 2048. anyOf[1].instructions.anyOf[2] (Value): null. anyOf[1].pickup_mode
     * (Optional): string or null. Required for pickup methods and rejected for other method types.
     * Value enum: "in_store", "curbside", "locker", "other". anyOf[1].pickup_mode.anyOf[1]
     * (Value): string. Required for pickup methods and rejected for other method types. Value
     * enum: "in_store", "curbside", "locker", "other". anyOf[1].pickup_mode.anyOf[2] (Value):
     * null. anyOf[1].service_level (Optional): string or null. Buyer-visible service level.
     * Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery
     * accepts on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited",
     * "express", "overnight", "same_day", "on_demand", "scheduled".
     * anyOf[1].service_level.anyOf[1] (Value): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day", "on_demand", "scheduled". anyOf[1].service_level.anyOf[2] (Value):
     * null. anyOf[2] (Value): null.
     */
    "public_details"?: (({
        /**
         * Buyer-visible instructions for this method. anyOf[1] (Value): string. Buyer-visible
         * instructions for this method. maxLength: 2048. anyOf[2] (Value): null.
         */
        "instructions"?: ((string) | (null));
        /**
         * Required for pickup methods and rejected for other method types. Value enum: "in_store",
         * "curbside", "locker", "other". anyOf[1] (Value): string. Required for pickup methods and
         * rejected for other method types. Value enum: "in_store", "curbside", "locker", "other".
         * anyOf[2] (Value): null.
         */
        "pickup_mode"?: (("in_store" | "curbside" | "locker" | "other" | (string & {})) | (null));
        /**
         * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
         * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
         * "scheduled". anyOf[1] (Value): string. Buyer-visible service level. Shipment accepts
         * economy, standard, expedited, express, overnight, same_day. Local delivery accepts
         * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited",
         * "express", "overnight", "same_day", "on_demand", "scheduled". anyOf[2] (Value): null.
         */
        "service_level"?: (("economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled"
            | (string & {}))
            | (null));
    })
        | (null));
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive. [] enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". anyOf[1] (Value): Array of
     * string. Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". anyOf[1][] (Value): string.
     * Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". anyOf[2] (Value): null.
     */
    "quote_input_fields"?: ((Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.address.country"
        | "buyer_location.coordinate"
        | (string & {})>)
        | (null));
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. anyOf[1] (Value): Array of {@link
     * DeliveryRecipientRequirementPreviousAttributes}. Recipient fields this method asks for. A
     * delivery selection can leave out required fields, but payment needs them. anyOf[1][]
     * (Value): {@link DeliveryRecipientRequirementPreviousAttributes}. anyOf[2] (Value): null.
     */
    "recipient_requirements"?: ((Array<DeliveryRecipientRequirementPreviousAttributes>) | (null));
    /**
     * How long after evaluation Flint guarantees a selected price, when that is later than the
     * option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table
     * prices for a cart without tracked inventory hold until the checkout's calculation expiry.
     * anyOf[1] (Value): integer. How long after evaluation Flint guarantees a selected price, when
     * that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed,
     * tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's
     * calculation expiry. Format: int64. minimum: 0. anyOf[2] (Value): null.
     */
    "selection_guarantee_seconds"?: ((number) | (null));
    /**
     * US destinations where this shipment method's shipping charge is exempt from tax. Use
     * uppercase two-letter state codes such as CA. All other destinations use the method's taxable
     * setting or the merchant default. For a taxable shipment method with exemptions, quoting
     * requires a destination country and, for US destinations, a state. [] enum: "AA", "AE", "AK",
     * "AL", "AP", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA",
     * "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT",
     * "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC",
     * "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY". anyOf[1] (Value):
     * Array of string. US destinations where this shipment method's shipping charge is exempt from
     * tax. Use uppercase two-letter state codes such as CA. All other destinations use the
     * method's taxable setting or the merchant default. For a taxable shipment method with
     * exemptions, quoting requires a destination country and, for US destinations, a state.
     * uniqueItems: true. [] enum: "AA", "AE", "AK", "AL", "AP", "AR", "AS", "AZ", "CA", "CO",
     * "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA",
     * "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV",
     * "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA", "VI",
     * "VT", "WA", "WI", "WV", "WY". anyOf[1][] (Value): string. Value enum: "AA", "AE", "AK",
     * "AL", "AP", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA",
     * "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT",
     * "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC",
     * "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY". anyOf[2] (Value):
     * null.
     */
    "tax_exempt_us_states"?: ((Array<"AA"
        | "AE"
        | "AK"
        | "AL"
        | "AP"
        | "AR"
        | "AS"
        | "AZ"
        | "CA"
        | "CO"
        | "CT"
        | "DC"
        | "DE"
        | "FL"
        | "GA"
        | "GU"
        | "HI"
        | "IA"
        | "ID"
        | "IL"
        | "IN"
        | "KS"
        | "KY"
        | "LA"
        | "MA"
        | "MD"
        | "ME"
        | "MI"
        | "MN"
        | "MO"
        | "MP"
        | "MS"
        | "MT"
        | "NC"
        | "ND"
        | "NE"
        | "NH"
        | "NJ"
        | "NM"
        | "NV"
        | "NY"
        | "OH"
        | "OK"
        | "OR"
        | "PA"
        | "PR"
        | "RI"
        | "SC"
        | "SD"
        | "TN"
        | "TX"
        | "UM"
        | "UT"
        | "VA"
        | "VI"
        | "VT"
        | "WA"
        | "WI"
        | "WV"
        | "WY"
        | (string & {})>)
        | (null));
    /**
     * Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable.
     * Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null
     * to clear it back to inheriting. `null` when the method inherits
     * `settings.tax.default_delivery_taxable`. anyOf[1] (Value): boolean. Whether the delivery
     * charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`.
     * anyOf[2] (Value): null.
     */
    "taxable"?: ((boolean) | (null));
};
/**
 * The configuration you supply for a delivery method: origin, pricing, eligibility, timing
 * estimate, tax settings, and recipient requirements.
 */
export type DeliveryMethodConfigurationRequest = ({
    /**
     * Controls whether checkout collects buyer instructions for this method. Controls buyer
     * instructions for a delivery option. Omit it from a method configuration to disable
     * instruction collection.
     */
    "buyer_instructions"?: BuyerInstructionsConfig;
    /**
     * Tax category of the delivery charge, which decides its automatic tax and appears in tax
     * records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset,
     * Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for
     * pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or
     * send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping,
     * delivery, handling, and surcharge at the general rate at the charge location, including the
     * store for pickup. Value enum: "service_fee", "shipping", "delivery", "handling",
     * "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpressionRequest;
    /**
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`:
     * none, a transit time, or a schedule window.
     */
    "estimate"?: DeliveryEstimateRule;
    /**
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds"?: number;
    /**
     * Where delivery starts. A method can use a fixed location or a delivery location set;
     * origin.type determines allocation or buyer pickup behavior. The origin you supply for a
     * delivery method, chosen by `type`: a fixed location, or locations from a delivery location
     * set or an inline list.
     */
    "origin": DeliveryMethodOriginSelectorRequest;
    /**
     * How Flint calculates the delivery charge. The pricing strategy you supply when updating a
     * delivery method. Set `type` and the matching property.
     */
    "pricing": DeliveryPricingStrategyRequest;
    /**
     * Buyer-visible structured details supplied by the merchant. instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. pickup_mode
     * (Optional): string. Required for pickup methods and rejected for other method types. Value
     * enum: "in_store", "curbside", "locker", "other". service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
     * "scheduled".
     */
    "public_details"?: {
        /** Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. */
        "instructions"?: string;
        /**
         * Required for pickup methods and rejected for other method types. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
        /**
         * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
         * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
         * "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled"
            | (string & {});
    };
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". [] (Value): string. Request
     * properties the callback needs. - `destination_address`: The full destination address. -
     * `destination_address.line1`: The destination street address. - `destination_address.line2`:
     * The destination apartment, suite, or other secondary address. - `destination_address.city`:
     * The destination city. - `destination_address.state`: The destination state or region. -
     * `destination_address.postal_code`: The destination postal code. -
     * `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.address.country"
        | "buyer_location.coordinate"
        | (string & {})>;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. [] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /**
     * How long after evaluation Flint guarantees a selected price, when that is later than the
     * option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table
     * prices for a cart without tracked inventory hold until the checkout's calculation expiry.
     * Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: number;
    /**
     * US destinations where this shipment method's shipping charge is exempt from tax. Use
     * uppercase two-letter state codes such as CA. All other destinations use the method's taxable
     * setting or the merchant default. For a taxable shipment method with exemptions, quoting
     * requires a destination country and, for US destinations, a state. uniqueItems: true. []
     * enum: "AA", "AE", "AK", "AL", "AP", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL",
     * "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN",
     * "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR",
     * "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV",
     * "WY". [] (Value): string. Value enum: "AA", "AE", "AK", "AL", "AP", "AR", "AS", "AZ", "CA",
     * "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
     * "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM",
     * "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA",
     * "VI", "VT", "WA", "WI", "WV", "WY".
     */
    "tax_exempt_us_states"?: Array<"AA"
        | "AE"
        | "AK"
        | "AL"
        | "AP"
        | "AR"
        | "AS"
        | "AZ"
        | "CA"
        | "CO"
        | "CT"
        | "DC"
        | "DE"
        | "FL"
        | "GA"
        | "GU"
        | "HI"
        | "IA"
        | "ID"
        | "IL"
        | "IN"
        | "KS"
        | "KY"
        | "LA"
        | "MA"
        | "MD"
        | "ME"
        | "MI"
        | "MN"
        | "MO"
        | "MP"
        | "MS"
        | "MT"
        | "NC"
        | "ND"
        | "NE"
        | "NH"
        | "NJ"
        | "NM"
        | "NV"
        | "NY"
        | "OH"
        | "OK"
        | "OR"
        | "PA"
        | "PR"
        | "RI"
        | "SC"
        | "SD"
        | "TN"
        | "TX"
        | "UM"
        | "UT"
        | "VA"
        | "VI"
        | "VT"
        | "WA"
        | "WI"
        | "WV"
        | "WY"
        | (string & {})>;
    /**
     * Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable.
     * Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null
     * to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
/**
 * The configuration you supply for a delivery method: origin, pricing, eligibility, timing
 * estimate, tax settings, and recipient requirements.
 */
export type DeliveryMethodConfigurationRequestInput = ({
    /**
     * Controls whether checkout collects buyer instructions for this method. Controls buyer
     * instructions for a delivery option. Omit it from a method configuration to disable
     * instruction collection.
     */
    "buyer_instructions"?: BuyerInstructionsConfigRequestInput;
    /**
     * Tax category of the delivery charge, which decides its automatic tax and appears in tax
     * records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset,
     * Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for
     * pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or
     * send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping,
     * delivery, handling, and surcharge at the general rate at the charge location, including the
     * store for pickup. Value enum: "service_fee", "shipping", "delivery", "handling",
     * "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`:
     * none, a transit time, or a schedule window.
     */
    "estimate"?: DeliveryEstimateRuleRequestInput;
    /**
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds"?: number;
    /**
     * Where delivery starts. A method can use a fixed location or a delivery location set;
     * origin.type determines allocation or buyer pickup behavior. The origin you supply for a
     * delivery method, chosen by `type`: a fixed location, or locations from a delivery location
     * set or an inline list.
     */
    "origin": DeliveryMethodOriginSelectorRequestInput;
    /**
     * How Flint calculates the delivery charge. The pricing strategy you supply when updating a
     * delivery method. Set `type` and the matching property.
     */
    "pricing": DeliveryPricingStrategyRequestInput;
    /**
     * Buyer-visible structured details supplied by the merchant. instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. pickup_mode
     * (Optional): string. Required for pickup methods and rejected for other method types. Value
     * enum: "in_store", "curbside", "locker", "other". service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
     * "scheduled".
     */
    "public_details"?: {
        /** Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. */
        "instructions"?: string;
        /**
         * Required for pickup methods and rejected for other method types. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other";
        /**
         * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
         * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
         * "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled";
    };
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". [] (Value): string. Request
     * properties the callback needs. - `destination_address`: The full destination address. -
     * `destination_address.line1`: The destination street address. - `destination_address.line2`:
     * The destination apartment, suite, or other secondary address. - `destination_address.city`:
     * The destination city. - `destination_address.state`: The destination state or region. -
     * `destination_address.postal_code`: The destination postal code. -
     * `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.address.country"
        | "buyer_location.coordinate">;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. [] (Value): {@link DeliveryRecipientRequirementRequestInput}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirementRequestInput>;
    /**
     * How long after evaluation Flint guarantees a selected price, when that is later than the
     * option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table
     * prices for a cart without tracked inventory hold until the checkout's calculation expiry.
     * Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: number;
    /**
     * US destinations where this shipment method's shipping charge is exempt from tax. Use
     * uppercase two-letter state codes such as CA. All other destinations use the method's taxable
     * setting or the merchant default. For a taxable shipment method with exemptions, quoting
     * requires a destination country and, for US destinations, a state. uniqueItems: true. []
     * enum: "AA", "AE", "AK", "AL", "AP", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL",
     * "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN",
     * "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR",
     * "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV",
     * "WY". [] (Value): string. Value enum: "AA", "AE", "AK", "AL", "AP", "AR", "AS", "AZ", "CA",
     * "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
     * "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM",
     * "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA",
     * "VI", "VT", "WA", "WI", "WV", "WY".
     */
    "tax_exempt_us_states"?: Array<"AA"
        | "AE"
        | "AK"
        | "AL"
        | "AP"
        | "AR"
        | "AS"
        | "AZ"
        | "CA"
        | "CO"
        | "CT"
        | "DC"
        | "DE"
        | "FL"
        | "GA"
        | "GU"
        | "HI"
        | "IA"
        | "ID"
        | "IL"
        | "IN"
        | "KS"
        | "KY"
        | "LA"
        | "MA"
        | "MD"
        | "ME"
        | "MI"
        | "MN"
        | "MO"
        | "MP"
        | "MS"
        | "MT"
        | "NC"
        | "ND"
        | "NE"
        | "NH"
        | "NJ"
        | "NM"
        | "NV"
        | "NY"
        | "OH"
        | "OK"
        | "OR"
        | "PA"
        | "PR"
        | "RI"
        | "SC"
        | "SD"
        | "TN"
        | "TX"
        | "UM"
        | "UT"
        | "VA"
        | "VI"
        | "VT"
        | "WA"
        | "WI"
        | "WV"
        | "WY">;
    /**
     * Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable.
     * Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null
     * to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
export type DeliveryMethodCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_method.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_method.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_method.created";
});
/**
 * The `delivery_method.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryMethodCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Delivery usage
     * counts by stored status, with separate subsets for active subscriptions that are canceling
     * or on billing hold. object.type (Required): string. Delivery mode this method offers. Value
     * enum: "shipment", "local_delivery", "pickup". object.updated_at (Required): string. Time the
     * method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
     * minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Delivery usage counts by stored status,
         * with separate subsets for active subscriptions that are canceling or on billing hold.
         * type (Required): string. Delivery mode this method offers. Value enum: "shipment",
         * "local_delivery", "pickup". updated_at (Required): string. Time the method last changed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Optimistic-concurrency version for method writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Delivery usage counts by stored
             * status, with separate subsets for active subscriptions that are canceling or on
             * billing hold.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_method.created". */
    "event_type"?: "delivery_method.created";
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
 * The `delivery_method.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryMethodCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Delivery usage
     * counts by stored status, with separate subsets for active subscriptions that are canceling
     * or on billing hold. object.type (Required): string. Delivery mode this method offers. Value
     * enum: "shipment", "local_delivery", "pickup". object.updated_at (Required): string. Time the
     * method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
     * minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Delivery usage counts by stored status,
         * with separate subsets for active subscriptions that are canceling or on billing hold.
         * type (Required): string. Delivery mode this method offers. Value enum: "shipment",
         * "local_delivery", "pickup". updated_at (Required): string. Time the method last changed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Optimistic-concurrency version for method writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Delivery usage counts by stored
             * status, with separate subsets for active subscriptions that are canceling or on
             * billing hold.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_method.created". */
    "event_type"?: "delivery_method.created";
});
export type DeliveryMethodDeactivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryMethodConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_method_revision_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_revocation_id"?: ((string) | (null));
            "description"?: ((string) | (null));
            "display_position"?: ((number) | (null));
            "external_reference_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "recommendation_priority"?: ((number) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "subscription_counts"?: ((SubscriptionCountsPreviousAttributes) | (null));
            "type"?: (("shipment" | "local_delivery" | "pickup" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_method.deactivated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryMethodConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_method_revision_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_revocation_id"?: ((string) | (null));
            "description"?: ((string) | (null));
            "display_position"?: ((number) | (null));
            "external_reference_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "recommendation_priority"?: ((number) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "subscription_counts"?: ((SubscriptionCountsPreviousAttributes) | (null));
            "type"?: (("shipment" | "local_delivery" | "pickup" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_method.deactivated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_method.deactivated";
});
/**
 * The `delivery_method.deactivated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryMethodDeactivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Delivery usage
     * counts by stored status, with separate subsets for active subscriptions that are canceling
     * or on billing hold. object.type (Required): string. Delivery mode this method offers. Value
     * enum: "shipment", "local_delivery", "pickup". object.updated_at (Required): string. Time the
     * method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.configuration (Optional): {@link
     * DeliveryMethodConfigurationPreviousAttributes} or null. Current eligibility, pricing,
     * origin, estimate, and tax configuration. previous_attributes.configuration.anyOf[1] (Value):
     * {@link DeliveryMethodConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. Time the method was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the method was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.current_delivery_method_revision_id (Optional): string or
     * null. Immutable revision currently used for new quotes.
     * previous_attributes.current_delivery_method_revision_id.anyOf[1] (Value): string. Immutable
     * revision currently used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * previous_attributes.current_delivery_method_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_method_id (Optional): string or null. Stable delivery method
     * ID. previous_attributes.delivery_method_id.anyOf[1] (Value): string. Stable delivery method
     * ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_revocation_id (Optional): string or null. The revocation
     * fencing this resource's own current revision. `null` when the current revision isn't
     * revoked. It doesn't cover dependencies: a method can be unusable while this is `null`
     * because its rate callback revision, signing key, or a Location's address is revoked. A
     * revocation doesn't change `status`; publish a new revision to clear it.
     * previous_attributes.delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing
     * this resource's own current revision. `null` when the current revision isn't revoked. It
     * doesn't cover dependencies: a method can be unusable while this is `null` because its rate
     * callback revision, signing key, or a Location's address is revoked. A revocation doesn't
     * change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". previous_attributes.delivery_revocation_id.anyOf[2]
     * (Value): null. previous_attributes.description (Optional): string or null. Optional
     * buyer-facing description. previous_attributes.description.anyOf[1] (Value): string. Optional
     * buyer-facing description. previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.display_position (Optional): integer or null. Ascending display order
     * among methods. previous_attributes.display_position.anyOf[1] (Value): integer. Ascending
     * display order among methods. Format: int32. previous_attributes.display_position.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing method name. previous_attributes.name.anyOf[1] (Value):
     * string. Merchant-facing method name. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.recommendation_priority (Optional): integer or null. Marks this method
     * as recommended. Within each choice group, the available method with the lowest value is
     * recommended and listed first. Ties go to the lower display_position, then the method ID.
     * Null never recommends the method. previous_attributes.recommendation_priority.anyOf[1]
     * (Value): integer. Marks this method as recommended. Within each choice group, the available
     * method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     * previous_attributes.recommendation_priority.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[1] (Value):
     * string. Current method lifecycle status. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_counts
     * (Optional): {@link SubscriptionCountsPreviousAttributes} or null. How many subscriptions use
     * this method, by status. previous_attributes.subscription_counts.anyOf[1] (Value): {@link
     * SubscriptionCountsPreviousAttributes}. previous_attributes.subscription_counts.anyOf[2]
     * (Value): null. previous_attributes.type (Optional): string or null. Delivery mode this
     * method offers. Value enum: "shipment", "local_delivery", "pickup".
     * previous_attributes.type.anyOf[1] (Value): string. Delivery mode this method offers. Value
     * enum: "shipment", "local_delivery", "pickup". previous_attributes.type.anyOf[2] (Value):
     * null. previous_attributes.updated_at (Optional): string or null. Time the method last
     * changed. previous_attributes.updated_at.anyOf[1] (Value): string. Time the method last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Optimistic-concurrency version for method writes.
     * previous_attributes.version.anyOf[1] (Value): integer. Optimistic-concurrency version for
     * method writes. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Delivery usage counts by stored status,
         * with separate subsets for active subscriptions that are canceling or on billing hold.
         * type (Required): string. Delivery mode this method offers. Value enum: "shipment",
         * "local_delivery", "pickup". updated_at (Required): string. Time the method last changed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Optimistic-concurrency version for method writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Delivery usage counts by stored
             * status, with separate subsets for active subscriptions that are canceling or on
             * billing hold.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryMethodConfigurationPreviousAttributes} or null. Current eligibility, pricing,
         * origin, estimate, and tax configuration. configuration.anyOf[1] (Value): {@link
         * DeliveryMethodConfigurationPreviousAttributes}. configuration.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the method was created. created_at.anyOf[1]
         * (Value): string. Time the method was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_method_revision_id (Optional): string or null. Immutable revision
         * currently used for new quotes. current_delivery_method_revision_id.anyOf[1] (Value):
         * string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". current_delivery_method_revision_id.anyOf[2]
         * (Value): null. delivery_method_id (Optional): string or null. Stable delivery method ID.
         * delivery_method_id.anyOf[1] (Value): string. Stable delivery method ID. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_method_id.anyOf[2] (Value): null.
         * delivery_revocation_id (Optional): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it.
         * delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing this resource's
         * own current revision. `null` when the current revision isn't revoked. It doesn't cover
         * dependencies: a method can be unusable while this is `null` because its rate callback
         * revision, signing key, or a Location's address is revoked. A revocation doesn't change
         * `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". delivery_revocation_id.anyOf[2] (Value): null.
         * description (Optional): string or null. Optional buyer-facing description.
         * description.anyOf[1] (Value): string. Optional buyer-facing description.
         * description.anyOf[2] (Value): null. display_position (Optional): integer or null.
         * Ascending display order among methods. display_position.anyOf[1] (Value): integer.
         * Ascending display order among methods. Format: int32. display_position.anyOf[2] (Value):
         * null. external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing method name. name.anyOf[1] (Value): string. Merchant-facing
         * method name. name.anyOf[2] (Value): null. recommendation_priority (Optional): integer or
         * null. Marks this method as recommended. Within each choice group, the available method
         * with the lowest value is recommended and listed first. Ties go to the lower
         * display_position, then the method ID. Null never recommends the method.
         * recommendation_priority.anyOf[1] (Value): integer. Marks this method as recommended.
         * Within each choice group, the available method with the lowest value is recommended and
         * listed first. Ties go to the lower display_position, then the method ID. Null never
         * recommends the method. Format: int32. recommendation_priority.anyOf[2] (Value): null.
         * status (Optional): string or null. Current method lifecycle status. Value enum:
         * "active", "inactive", "archived". status.anyOf[1] (Value): string. Current method
         * lifecycle status. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value):
         * null. subscription_counts (Optional): {@link SubscriptionCountsPreviousAttributes} or
         * null. How many subscriptions use this method, by status. subscription_counts.anyOf[1]
         * (Value): {@link SubscriptionCountsPreviousAttributes}. subscription_counts.anyOf[2]
         * (Value): null. type (Optional): string or null. Delivery mode this method offers. Value
         * enum: "shipment", "local_delivery", "pickup". type.anyOf[1] (Value): string. Delivery
         * mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. Time the method last
         * changed. updated_at.anyOf[1] (Value): string. Time the method last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Optimistic-concurrency version for method writes.
         * version.anyOf[1] (Value): integer. Optimistic-concurrency version for method writes.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. anyOf[1]
             * (Value): {@link DeliveryMethodConfigurationPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "configuration"?: ((DeliveryMethodConfigurationPreviousAttributes) | (null));
            /**
             * Time the method was created. anyOf[1] (Value): string. Time the method was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision currently used for new quotes. anyOf[1] (Value): string.
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". anyOf[2] (Value): null.
             */
            "current_delivery_method_revision_id"?: ((string) | (null));
            /**
             * Stable delivery method ID. anyOf[1] (Value): string. Stable delivery method ID.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. anyOf[1] (Value): string. The revocation fencing this
             * resource's own current revision. `null` when the current revision isn't revoked. It
             * doesn't cover dependencies: a method can be unusable while this is `null` because
             * its rate callback revision, signing key, or a Location's address is revoked. A
             * revocation doesn't change `status`; publish a new revision to clear it. Example:
             * "drev_01KEZF7C007Q141XJ28YAAC87B". anyOf[2] (Value): null.
             */
            "delivery_revocation_id"?: ((string) | (null));
            /**
             * Optional buyer-facing description. anyOf[1] (Value): string. Optional buyer-facing
             * description. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Ascending display order among methods. anyOf[1] (Value): integer. Ascending display
             * order among methods. Format: int32. anyOf[2] (Value): null.
             */
            "display_position"?: ((number) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Merchant-facing method name. anyOf[1] (Value): string. Merchant-facing method name.
             * anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. anyOf[1]
             * (Value): integer. Marks this method as recommended. Within each choice group, the
             * available method with the lowest value is recommended and listed first. Ties go to
             * the lower display_position, then the method ID. Null never recommends the method.
             * Format: int32. anyOf[2] (Value): null.
             */
            "recommendation_priority"?: ((number) | (null));
            /**
             * Current method lifecycle status. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Current method lifecycle status. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * How many subscriptions use this method, by status. anyOf[1] (Value): {@link
             * SubscriptionCountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_counts"?: ((SubscriptionCountsPreviousAttributes) | (null));
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup". anyOf[1] (Value): string. Delivery mode this method offers. Value enum:
             * "shipment", "local_delivery", "pickup". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "local_delivery" | "pickup" | (string & {})) | (null));
            /**
             * Time the method last changed. anyOf[1] (Value): string. Time the method last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for method writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for method writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_method.deactivated". */
    "event_type"?: "delivery_method.deactivated";
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
 * The `delivery_method.deactivated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type DeliveryMethodDeactivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Delivery usage
     * counts by stored status, with separate subsets for active subscriptions that are canceling
     * or on billing hold. object.type (Required): string. Delivery mode this method offers. Value
     * enum: "shipment", "local_delivery", "pickup". object.updated_at (Required): string. Time the
     * method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.configuration (Optional): {@link
     * DeliveryMethodConfigurationPreviousAttributes} or null. Current eligibility, pricing,
     * origin, estimate, and tax configuration. previous_attributes.configuration.anyOf[1] (Value):
     * {@link DeliveryMethodConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. Time the method was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the method was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.current_delivery_method_revision_id (Optional): string or
     * null. Immutable revision currently used for new quotes.
     * previous_attributes.current_delivery_method_revision_id.anyOf[1] (Value): string. Immutable
     * revision currently used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * previous_attributes.current_delivery_method_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_method_id (Optional): string or null. Stable delivery method
     * ID. previous_attributes.delivery_method_id.anyOf[1] (Value): string. Stable delivery method
     * ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_revocation_id (Optional): string or null. The revocation
     * fencing this resource's own current revision. `null` when the current revision isn't
     * revoked. It doesn't cover dependencies: a method can be unusable while this is `null`
     * because its rate callback revision, signing key, or a Location's address is revoked. A
     * revocation doesn't change `status`; publish a new revision to clear it.
     * previous_attributes.delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing
     * this resource's own current revision. `null` when the current revision isn't revoked. It
     * doesn't cover dependencies: a method can be unusable while this is `null` because its rate
     * callback revision, signing key, or a Location's address is revoked. A revocation doesn't
     * change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". previous_attributes.delivery_revocation_id.anyOf[2]
     * (Value): null. previous_attributes.description (Optional): string or null. Optional
     * buyer-facing description. previous_attributes.description.anyOf[1] (Value): string. Optional
     * buyer-facing description. previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.display_position (Optional): integer or null. Ascending display order
     * among methods. previous_attributes.display_position.anyOf[1] (Value): integer. Ascending
     * display order among methods. Format: int32. previous_attributes.display_position.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing method name. previous_attributes.name.anyOf[1] (Value):
     * string. Merchant-facing method name. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.recommendation_priority (Optional): integer or null. Marks this method
     * as recommended. Within each choice group, the available method with the lowest value is
     * recommended and listed first. Ties go to the lower display_position, then the method ID.
     * Null never recommends the method. previous_attributes.recommendation_priority.anyOf[1]
     * (Value): integer. Marks this method as recommended. Within each choice group, the available
     * method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     * previous_attributes.recommendation_priority.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[1] (Value):
     * string. Current method lifecycle status. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_counts
     * (Optional): {@link SubscriptionCountsPreviousAttributes} or null. How many subscriptions use
     * this method, by status. previous_attributes.subscription_counts.anyOf[1] (Value): {@link
     * SubscriptionCountsPreviousAttributes}. previous_attributes.subscription_counts.anyOf[2]
     * (Value): null. previous_attributes.type (Optional): string or null. Delivery mode this
     * method offers. Value enum: "shipment", "local_delivery", "pickup".
     * previous_attributes.type.anyOf[1] (Value): string. Delivery mode this method offers. Value
     * enum: "shipment", "local_delivery", "pickup". previous_attributes.type.anyOf[2] (Value):
     * null. previous_attributes.updated_at (Optional): string or null. Time the method last
     * changed. previous_attributes.updated_at.anyOf[1] (Value): string. Time the method last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Optimistic-concurrency version for method writes.
     * previous_attributes.version.anyOf[1] (Value): integer. Optimistic-concurrency version for
     * method writes. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Delivery usage counts by stored status,
         * with separate subsets for active subscriptions that are canceling or on billing hold.
         * type (Required): string. Delivery mode this method offers. Value enum: "shipment",
         * "local_delivery", "pickup". updated_at (Required): string. Time the method last changed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Optimistic-concurrency version for method writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Delivery usage counts by stored
             * status, with separate subsets for active subscriptions that are canceling or on
             * billing hold.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryMethodConfigurationPreviousAttributes} or null. Current eligibility, pricing,
         * origin, estimate, and tax configuration. configuration.anyOf[1] (Value): {@link
         * DeliveryMethodConfigurationPreviousAttributes}. configuration.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the method was created. created_at.anyOf[1]
         * (Value): string. Time the method was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_method_revision_id (Optional): string or null. Immutable revision
         * currently used for new quotes. current_delivery_method_revision_id.anyOf[1] (Value):
         * string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". current_delivery_method_revision_id.anyOf[2]
         * (Value): null. delivery_method_id (Optional): string or null. Stable delivery method ID.
         * delivery_method_id.anyOf[1] (Value): string. Stable delivery method ID. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_method_id.anyOf[2] (Value): null.
         * delivery_revocation_id (Optional): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it.
         * delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing this resource's
         * own current revision. `null` when the current revision isn't revoked. It doesn't cover
         * dependencies: a method can be unusable while this is `null` because its rate callback
         * revision, signing key, or a Location's address is revoked. A revocation doesn't change
         * `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". delivery_revocation_id.anyOf[2] (Value): null.
         * description (Optional): string or null. Optional buyer-facing description.
         * description.anyOf[1] (Value): string. Optional buyer-facing description.
         * description.anyOf[2] (Value): null. display_position (Optional): integer or null.
         * Ascending display order among methods. display_position.anyOf[1] (Value): integer.
         * Ascending display order among methods. Format: int32. display_position.anyOf[2] (Value):
         * null. external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing method name. name.anyOf[1] (Value): string. Merchant-facing
         * method name. name.anyOf[2] (Value): null. recommendation_priority (Optional): integer or
         * null. Marks this method as recommended. Within each choice group, the available method
         * with the lowest value is recommended and listed first. Ties go to the lower
         * display_position, then the method ID. Null never recommends the method.
         * recommendation_priority.anyOf[1] (Value): integer. Marks this method as recommended.
         * Within each choice group, the available method with the lowest value is recommended and
         * listed first. Ties go to the lower display_position, then the method ID. Null never
         * recommends the method. Format: int32. recommendation_priority.anyOf[2] (Value): null.
         * status (Optional): string or null. Current method lifecycle status. Value enum:
         * "active", "inactive", "archived". status.anyOf[1] (Value): string. Current method
         * lifecycle status. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value):
         * null. subscription_counts (Optional): {@link SubscriptionCountsPreviousAttributes} or
         * null. How many subscriptions use this method, by status. subscription_counts.anyOf[1]
         * (Value): {@link SubscriptionCountsPreviousAttributes}. subscription_counts.anyOf[2]
         * (Value): null. type (Optional): string or null. Delivery mode this method offers. Value
         * enum: "shipment", "local_delivery", "pickup". type.anyOf[1] (Value): string. Delivery
         * mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. Time the method last
         * changed. updated_at.anyOf[1] (Value): string. Time the method last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Optimistic-concurrency version for method writes.
         * version.anyOf[1] (Value): integer. Optimistic-concurrency version for method writes.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. anyOf[1]
             * (Value): {@link DeliveryMethodConfigurationPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "configuration"?: ((DeliveryMethodConfigurationPreviousAttributes) | (null));
            /**
             * Time the method was created. anyOf[1] (Value): string. Time the method was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision currently used for new quotes. anyOf[1] (Value): string.
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". anyOf[2] (Value): null.
             */
            "current_delivery_method_revision_id"?: ((string) | (null));
            /**
             * Stable delivery method ID. anyOf[1] (Value): string. Stable delivery method ID.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. anyOf[1] (Value): string. The revocation fencing this
             * resource's own current revision. `null` when the current revision isn't revoked. It
             * doesn't cover dependencies: a method can be unusable while this is `null` because
             * its rate callback revision, signing key, or a Location's address is revoked. A
             * revocation doesn't change `status`; publish a new revision to clear it. Example:
             * "drev_01KEZF7C007Q141XJ28YAAC87B". anyOf[2] (Value): null.
             */
            "delivery_revocation_id"?: ((string) | (null));
            /**
             * Optional buyer-facing description. anyOf[1] (Value): string. Optional buyer-facing
             * description. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Ascending display order among methods. anyOf[1] (Value): integer. Ascending display
             * order among methods. Format: int32. anyOf[2] (Value): null.
             */
            "display_position"?: ((number) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Merchant-facing method name. anyOf[1] (Value): string. Merchant-facing method name.
             * anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. anyOf[1]
             * (Value): integer. Marks this method as recommended. Within each choice group, the
             * available method with the lowest value is recommended and listed first. Ties go to
             * the lower display_position, then the method ID. Null never recommends the method.
             * Format: int32. anyOf[2] (Value): null.
             */
            "recommendation_priority"?: ((number) | (null));
            /**
             * Current method lifecycle status. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Current method lifecycle status. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * How many subscriptions use this method, by status. anyOf[1] (Value): {@link
             * SubscriptionCountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_counts"?: ((SubscriptionCountsPreviousAttributes) | (null));
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup". anyOf[1] (Value): string. Delivery mode this method offers. Value enum:
             * "shipment", "local_delivery", "pickup". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "local_delivery" | "pickup" | (string & {})) | (null));
            /**
             * Time the method last changed. anyOf[1] (Value): string. Time the method last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for method writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for method writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_method.deactivated". */
    "event_type"?: "delivery_method.deactivated";
});
/** A page of `DeliveryMethod` objects. */
export type DeliveryMethodListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * DeliveryMethod}. A configured shipping, pickup, or local delivery option.
     */
    "data": Array<DeliveryMethod>;
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
 * Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of
 * locations, or a collection of pickup locations.
 */
export type DeliveryMethodOriginSelector = ({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     */
    "delivery_location_set_revision_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. [] (Value): string. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * Where delivery starts. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection".
     */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection" | (string & {});
})
    & ((Exclude<DeliveryMethodOriginSelectorFixedLocation & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorAllocatedOriginGroup & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorPickupLocationCollection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `allocated_origin_group` variant of `DeliveryMethodOriginSelector`. */
export type DeliveryMethodOriginSelectorAllocatedOriginGroup = ({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     */
    "delivery_location_set_revision_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. [] (Value): string. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": unknown;
})
    & (({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
})
    | ({
    /**
     * IDs of the Locations in the group. IDs of the Locations in the group. minItems: 1. maxItems:
     * 25. uniqueItems: true. [] (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": (Array<string>) & (Array<string>);
})
    | (Record<string, unknown>)));
export type DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes = ({
    /**
     * ID of the delivery location set that names the Locations in the group. anyOf[1] (Value):
     * string. ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". anyOf[2] (Value): null.
     */
    "delivery_location_set_id"?: ((string) | (null));
    /**
     * ID of the location set revision in effect for this method revision. anyOf[1] (Value):
     * string. ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". anyOf[2] (Value): null.
     */
    "delivery_location_set_revision_id"?: ((string) | (null));
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. anyOf[1] (Value): string. ID of the Location delivery starts from. Required for
     * `fixed_location` and not allowed otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * IDs of the Locations in the group. anyOf[1] (Value): Array of string. IDs of the Locations
     * in the group. anyOf[1][] (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_ids"?: ((Array<string>) | (null));
    /**
     * Where delivery starts. Value enum: "allocated_origin_group". anyOf[1] (Value): string. Where
     * delivery starts. Value enum: "allocated_origin_group". anyOf[2] (Value): null.
     */
    "type"?: (("allocated_origin_group" | (string & {})) | (null));
})
    & (({
    /**
     * IDs of the Locations in the group. anyOf[1] (Value): Array of string. IDs of the Locations
     * in the group. minItems: 1. maxItems: 25. uniqueItems: true. anyOf[1][] (Value): string.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "location_ids"?: ((Array<string>) | (null));
    /**
     * Where delivery starts. Value enum: "allocated_origin_group". anyOf[1] (Value): any. Where
     * delivery starts. Value enum: "allocated_origin_group". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
})
    & (((unknown) | (unknown) | (Record<string, unknown>))));
/** The `fixed_location` variant of `DeliveryMethodOriginSelector`. */
export type DeliveryMethodOriginSelectorFixedLocation = ({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     */
    "delivery_location_set_revision_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * IDs of the Locations in the group. [] (Value): string. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & (({
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": unknown;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
}));
export type DeliveryMethodOriginSelectorFixedLocationPreviousAttributes = ({
    /**
     * ID of the delivery location set that names the Locations in the group. anyOf[1] (Value):
     * string. ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". anyOf[2] (Value): null.
     */
    "delivery_location_set_id"?: ((string) | (null));
    /**
     * ID of the location set revision in effect for this method revision. anyOf[1] (Value):
     * string. ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". anyOf[2] (Value): null.
     */
    "delivery_location_set_revision_id"?: ((string) | (null));
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. anyOf[1] (Value): string. ID of the Location delivery starts from. Required for
     * `fixed_location` and not allowed otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * IDs of the Locations in the group. anyOf[1] (Value): Array of string. IDs of the Locations
     * in the group. anyOf[1][] (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_ids"?: ((Array<string>) | (null));
    /**
     * Where delivery starts. Value enum: "fixed_location". anyOf[1] (Value): string. Where
     * delivery starts. Value enum: "fixed_location". anyOf[2] (Value): null.
     */
    "type"?: (("fixed_location" | (string & {})) | (null));
})
    & ({
    /**
     * Where delivery starts. Value enum: "fixed_location". anyOf[1] (Value): any. Where delivery
     * starts. Value enum: "fixed_location". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
});
/** The `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroup = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": unknown;
})
    & ((Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/** The Delivery location set selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
});
/** The Delivery location set selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group";
})
    & (({
    "location_id"?: never;
}) & ({
    "location_ids"?: never;
}));
/** The `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group";
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": ("allocated_origin_group") & ("allocated_origin_group");
})
    & ((Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput & object, readonly unknown[]>))
    & ({
    "location_id"?: never;
}));
/** The Locations selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
});
/** The Locations selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group";
})
    & (({
    "location_id"?: never;
}) & ({
    "delivery_location_set_id"?: never;
}));
/** The `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputFixedLocation = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & (({
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": unknown;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
}));
/** The `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputFixedLocationInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": "fixed_location";
})
    & (({
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": ("fixed_location") & ("fixed_location");
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
})
    & (({
    "delivery_location_set_id"?: never;
})
    & ({
    "delivery_location_set_revision_id"?: never;
})
    & ({
    "location_ids"?: never;
})));
/** The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollection = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": unknown;
})
    & ((Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/** The Delivery location set selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
});
/** The Delivery location set selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    "location_id"?: never;
}) & ({
    "location_ids"?: never;
}));
/** The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": ("pickup_location_collection") & ("pickup_location_collection");
})
    & ((Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput & object, readonly unknown[]>))
    & ({
    "location_id"?: never;
}));
/** The Locations selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
});
/** The Locations selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    "location_id"?: never;
}) & ({
    "delivery_location_set_id"?: never;
}));
/** The `pickup_location_collection` variant of `DeliveryMethodOriginSelector`. */
export type DeliveryMethodOriginSelectorPickupLocationCollection = ({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     */
    "delivery_location_set_revision_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. [] (Value): string. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": unknown;
})
    & (({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
})
    | ({
    /**
     * IDs of the Locations in the group. IDs of the Locations in the group. minItems: 1. maxItems:
     * 1000. uniqueItems: true. [] (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": (Array<string>) & (Array<string>);
})
    | (Record<string, unknown>)));
export type DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes = ({
    /**
     * ID of the delivery location set that names the Locations in the group. anyOf[1] (Value):
     * string. ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". anyOf[2] (Value): null.
     */
    "delivery_location_set_id"?: ((string) | (null));
    /**
     * ID of the location set revision in effect for this method revision. anyOf[1] (Value):
     * string. ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". anyOf[2] (Value): null.
     */
    "delivery_location_set_revision_id"?: ((string) | (null));
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. anyOf[1] (Value): string. ID of the Location delivery starts from. Required for
     * `fixed_location` and not allowed otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * IDs of the Locations in the group. anyOf[1] (Value): Array of string. IDs of the Locations
     * in the group. anyOf[1][] (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_ids"?: ((Array<string>) | (null));
    /**
     * Where delivery starts. Value enum: "pickup_location_collection". anyOf[1] (Value): string.
     * Where delivery starts. Value enum: "pickup_location_collection". anyOf[2] (Value): null.
     */
    "type"?: (("pickup_location_collection" | (string & {})) | (null));
})
    & (({
    /**
     * IDs of the Locations in the group. anyOf[1] (Value): Array of string. IDs of the Locations
     * in the group. minItems: 1. maxItems: 1000. uniqueItems: true. anyOf[1][] (Value): string.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "location_ids"?: ((Array<string>) | (null));
    /**
     * Where delivery starts. Value enum: "pickup_location_collection". anyOf[1] (Value): any.
     * Where delivery starts. Value enum: "pickup_location_collection". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
})
    & (((unknown) | (unknown) | (Record<string, unknown>))));
export type DeliveryMethodOriginSelectorPreviousAttributes = ({
    /**
     * ID of the delivery location set that names the Locations in the group. anyOf[1] (Value):
     * string. ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". anyOf[2] (Value): null.
     */
    "delivery_location_set_id"?: ((string) | (null));
    /**
     * ID of the location set revision in effect for this method revision. anyOf[1] (Value):
     * string. ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". anyOf[2] (Value): null.
     */
    "delivery_location_set_revision_id"?: ((string) | (null));
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. anyOf[1] (Value): string. ID of the Location delivery starts from. Required for
     * `fixed_location` and not allowed otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * IDs of the Locations in the group. anyOf[1] (Value): Array of string. IDs of the Locations
     * in the group. anyOf[1][] (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_ids"?: ((Array<string>) | (null));
    /**
     * Where delivery starts. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection". anyOf[1] (Value): string. Where delivery starts. Value enum:
     * "fixed_location", "allocated_origin_group", "pickup_location_collection". anyOf[2] (Value):
     * null.
     */
    "type"?: (("fixed_location" | "allocated_origin_group" | "pickup_location_collection" | (string & {}))
        | (null));
})
    & (((Exclude<DeliveryMethodOriginSelectorFixedLocationPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/**
 * The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations
 * from a delivery location set or an inline list.
 */
export type DeliveryMethodOriginSelectorRequest = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * Where delivery starts. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection".
     */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection" | (string & {});
})
    & ((Exclude<DeliveryMethodOriginSelectorInputFixedLocation & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroup & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations
 * from a delivery location set or an inline list.
 */
export type DeliveryMethodOriginSelectorRequestInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * Where delivery starts. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection".
     */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection";
})
    & ((Exclude<DeliveryMethodOriginSelectorInputFixedLocationInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionInput & object, readonly unknown[]>));
/** A response containing `DeliveryMethod` data. */
export type DeliveryMethodResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A configured shipping,
     * pickup, or local delivery option.
     */
    "data": DeliveryMethod;
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
export type DeliveryMethodUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryMethodConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_method_revision_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_revocation_id"?: ((string) | (null));
            "description"?: ((string) | (null));
            "display_position"?: ((number) | (null));
            "external_reference_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "recommendation_priority"?: ((number) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "subscription_counts"?: ((SubscriptionCountsPreviousAttributes) | (null));
            "type"?: (("shipment" | "local_delivery" | "pickup" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_method.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryMethodConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_method_revision_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_revocation_id"?: ((string) | (null));
            "description"?: ((string) | (null));
            "display_position"?: ((number) | (null));
            "external_reference_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "recommendation_priority"?: ((number) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "subscription_counts"?: ((SubscriptionCountsPreviousAttributes) | (null));
            "type"?: (("shipment" | "local_delivery" | "pickup" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_method.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_method.updated";
});
/**
 * The `delivery_method.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryMethodUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Delivery usage
     * counts by stored status, with separate subsets for active subscriptions that are canceling
     * or on billing hold. object.type (Required): string. Delivery mode this method offers. Value
     * enum: "shipment", "local_delivery", "pickup". object.updated_at (Required): string. Time the
     * method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.configuration (Optional): {@link
     * DeliveryMethodConfigurationPreviousAttributes} or null. Current eligibility, pricing,
     * origin, estimate, and tax configuration. previous_attributes.configuration.anyOf[1] (Value):
     * {@link DeliveryMethodConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. Time the method was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the method was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.current_delivery_method_revision_id (Optional): string or
     * null. Immutable revision currently used for new quotes.
     * previous_attributes.current_delivery_method_revision_id.anyOf[1] (Value): string. Immutable
     * revision currently used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * previous_attributes.current_delivery_method_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_method_id (Optional): string or null. Stable delivery method
     * ID. previous_attributes.delivery_method_id.anyOf[1] (Value): string. Stable delivery method
     * ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_revocation_id (Optional): string or null. The revocation
     * fencing this resource's own current revision. `null` when the current revision isn't
     * revoked. It doesn't cover dependencies: a method can be unusable while this is `null`
     * because its rate callback revision, signing key, or a Location's address is revoked. A
     * revocation doesn't change `status`; publish a new revision to clear it.
     * previous_attributes.delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing
     * this resource's own current revision. `null` when the current revision isn't revoked. It
     * doesn't cover dependencies: a method can be unusable while this is `null` because its rate
     * callback revision, signing key, or a Location's address is revoked. A revocation doesn't
     * change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". previous_attributes.delivery_revocation_id.anyOf[2]
     * (Value): null. previous_attributes.description (Optional): string or null. Optional
     * buyer-facing description. previous_attributes.description.anyOf[1] (Value): string. Optional
     * buyer-facing description. previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.display_position (Optional): integer or null. Ascending display order
     * among methods. previous_attributes.display_position.anyOf[1] (Value): integer. Ascending
     * display order among methods. Format: int32. previous_attributes.display_position.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing method name. previous_attributes.name.anyOf[1] (Value):
     * string. Merchant-facing method name. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.recommendation_priority (Optional): integer or null. Marks this method
     * as recommended. Within each choice group, the available method with the lowest value is
     * recommended and listed first. Ties go to the lower display_position, then the method ID.
     * Null never recommends the method. previous_attributes.recommendation_priority.anyOf[1]
     * (Value): integer. Marks this method as recommended. Within each choice group, the available
     * method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     * previous_attributes.recommendation_priority.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[1] (Value):
     * string. Current method lifecycle status. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_counts
     * (Optional): {@link SubscriptionCountsPreviousAttributes} or null. How many subscriptions use
     * this method, by status. previous_attributes.subscription_counts.anyOf[1] (Value): {@link
     * SubscriptionCountsPreviousAttributes}. previous_attributes.subscription_counts.anyOf[2]
     * (Value): null. previous_attributes.type (Optional): string or null. Delivery mode this
     * method offers. Value enum: "shipment", "local_delivery", "pickup".
     * previous_attributes.type.anyOf[1] (Value): string. Delivery mode this method offers. Value
     * enum: "shipment", "local_delivery", "pickup". previous_attributes.type.anyOf[2] (Value):
     * null. previous_attributes.updated_at (Optional): string or null. Time the method last
     * changed. previous_attributes.updated_at.anyOf[1] (Value): string. Time the method last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Optimistic-concurrency version for method writes.
     * previous_attributes.version.anyOf[1] (Value): integer. Optimistic-concurrency version for
     * method writes. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Delivery usage counts by stored status,
         * with separate subsets for active subscriptions that are canceling or on billing hold.
         * type (Required): string. Delivery mode this method offers. Value enum: "shipment",
         * "local_delivery", "pickup". updated_at (Required): string. Time the method last changed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Optimistic-concurrency version for method writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Delivery usage counts by stored
             * status, with separate subsets for active subscriptions that are canceling or on
             * billing hold.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryMethodConfigurationPreviousAttributes} or null. Current eligibility, pricing,
         * origin, estimate, and tax configuration. configuration.anyOf[1] (Value): {@link
         * DeliveryMethodConfigurationPreviousAttributes}. configuration.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the method was created. created_at.anyOf[1]
         * (Value): string. Time the method was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_method_revision_id (Optional): string or null. Immutable revision
         * currently used for new quotes. current_delivery_method_revision_id.anyOf[1] (Value):
         * string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". current_delivery_method_revision_id.anyOf[2]
         * (Value): null. delivery_method_id (Optional): string or null. Stable delivery method ID.
         * delivery_method_id.anyOf[1] (Value): string. Stable delivery method ID. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_method_id.anyOf[2] (Value): null.
         * delivery_revocation_id (Optional): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it.
         * delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing this resource's
         * own current revision. `null` when the current revision isn't revoked. It doesn't cover
         * dependencies: a method can be unusable while this is `null` because its rate callback
         * revision, signing key, or a Location's address is revoked. A revocation doesn't change
         * `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". delivery_revocation_id.anyOf[2] (Value): null.
         * description (Optional): string or null. Optional buyer-facing description.
         * description.anyOf[1] (Value): string. Optional buyer-facing description.
         * description.anyOf[2] (Value): null. display_position (Optional): integer or null.
         * Ascending display order among methods. display_position.anyOf[1] (Value): integer.
         * Ascending display order among methods. Format: int32. display_position.anyOf[2] (Value):
         * null. external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing method name. name.anyOf[1] (Value): string. Merchant-facing
         * method name. name.anyOf[2] (Value): null. recommendation_priority (Optional): integer or
         * null. Marks this method as recommended. Within each choice group, the available method
         * with the lowest value is recommended and listed first. Ties go to the lower
         * display_position, then the method ID. Null never recommends the method.
         * recommendation_priority.anyOf[1] (Value): integer. Marks this method as recommended.
         * Within each choice group, the available method with the lowest value is recommended and
         * listed first. Ties go to the lower display_position, then the method ID. Null never
         * recommends the method. Format: int32. recommendation_priority.anyOf[2] (Value): null.
         * status (Optional): string or null. Current method lifecycle status. Value enum:
         * "active", "inactive", "archived". status.anyOf[1] (Value): string. Current method
         * lifecycle status. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value):
         * null. subscription_counts (Optional): {@link SubscriptionCountsPreviousAttributes} or
         * null. How many subscriptions use this method, by status. subscription_counts.anyOf[1]
         * (Value): {@link SubscriptionCountsPreviousAttributes}. subscription_counts.anyOf[2]
         * (Value): null. type (Optional): string or null. Delivery mode this method offers. Value
         * enum: "shipment", "local_delivery", "pickup". type.anyOf[1] (Value): string. Delivery
         * mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. Time the method last
         * changed. updated_at.anyOf[1] (Value): string. Time the method last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Optimistic-concurrency version for method writes.
         * version.anyOf[1] (Value): integer. Optimistic-concurrency version for method writes.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. anyOf[1]
             * (Value): {@link DeliveryMethodConfigurationPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "configuration"?: ((DeliveryMethodConfigurationPreviousAttributes) | (null));
            /**
             * Time the method was created. anyOf[1] (Value): string. Time the method was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision currently used for new quotes. anyOf[1] (Value): string.
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". anyOf[2] (Value): null.
             */
            "current_delivery_method_revision_id"?: ((string) | (null));
            /**
             * Stable delivery method ID. anyOf[1] (Value): string. Stable delivery method ID.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. anyOf[1] (Value): string. The revocation fencing this
             * resource's own current revision. `null` when the current revision isn't revoked. It
             * doesn't cover dependencies: a method can be unusable while this is `null` because
             * its rate callback revision, signing key, or a Location's address is revoked. A
             * revocation doesn't change `status`; publish a new revision to clear it. Example:
             * "drev_01KEZF7C007Q141XJ28YAAC87B". anyOf[2] (Value): null.
             */
            "delivery_revocation_id"?: ((string) | (null));
            /**
             * Optional buyer-facing description. anyOf[1] (Value): string. Optional buyer-facing
             * description. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Ascending display order among methods. anyOf[1] (Value): integer. Ascending display
             * order among methods. Format: int32. anyOf[2] (Value): null.
             */
            "display_position"?: ((number) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Merchant-facing method name. anyOf[1] (Value): string. Merchant-facing method name.
             * anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. anyOf[1]
             * (Value): integer. Marks this method as recommended. Within each choice group, the
             * available method with the lowest value is recommended and listed first. Ties go to
             * the lower display_position, then the method ID. Null never recommends the method.
             * Format: int32. anyOf[2] (Value): null.
             */
            "recommendation_priority"?: ((number) | (null));
            /**
             * Current method lifecycle status. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Current method lifecycle status. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * How many subscriptions use this method, by status. anyOf[1] (Value): {@link
             * SubscriptionCountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_counts"?: ((SubscriptionCountsPreviousAttributes) | (null));
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup". anyOf[1] (Value): string. Delivery mode this method offers. Value enum:
             * "shipment", "local_delivery", "pickup". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "local_delivery" | "pickup" | (string & {})) | (null));
            /**
             * Time the method last changed. anyOf[1] (Value): string. Time the method last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for method writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for method writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_method.updated". */
    "event_type"?: "delivery_method.updated";
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
 * The `delivery_method.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryMethodUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Delivery usage
     * counts by stored status, with separate subsets for active subscriptions that are canceling
     * or on billing hold. object.type (Required): string. Delivery mode this method offers. Value
     * enum: "shipment", "local_delivery", "pickup". object.updated_at (Required): string. Time the
     * method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.configuration (Optional): {@link
     * DeliveryMethodConfigurationPreviousAttributes} or null. Current eligibility, pricing,
     * origin, estimate, and tax configuration. previous_attributes.configuration.anyOf[1] (Value):
     * {@link DeliveryMethodConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. Time the method was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the method was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.current_delivery_method_revision_id (Optional): string or
     * null. Immutable revision currently used for new quotes.
     * previous_attributes.current_delivery_method_revision_id.anyOf[1] (Value): string. Immutable
     * revision currently used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * previous_attributes.current_delivery_method_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_method_id (Optional): string or null. Stable delivery method
     * ID. previous_attributes.delivery_method_id.anyOf[1] (Value): string. Stable delivery method
     * ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_revocation_id (Optional): string or null. The revocation
     * fencing this resource's own current revision. `null` when the current revision isn't
     * revoked. It doesn't cover dependencies: a method can be unusable while this is `null`
     * because its rate callback revision, signing key, or a Location's address is revoked. A
     * revocation doesn't change `status`; publish a new revision to clear it.
     * previous_attributes.delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing
     * this resource's own current revision. `null` when the current revision isn't revoked. It
     * doesn't cover dependencies: a method can be unusable while this is `null` because its rate
     * callback revision, signing key, or a Location's address is revoked. A revocation doesn't
     * change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". previous_attributes.delivery_revocation_id.anyOf[2]
     * (Value): null. previous_attributes.description (Optional): string or null. Optional
     * buyer-facing description. previous_attributes.description.anyOf[1] (Value): string. Optional
     * buyer-facing description. previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.display_position (Optional): integer or null. Ascending display order
     * among methods. previous_attributes.display_position.anyOf[1] (Value): integer. Ascending
     * display order among methods. Format: int32. previous_attributes.display_position.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing method name. previous_attributes.name.anyOf[1] (Value):
     * string. Merchant-facing method name. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.recommendation_priority (Optional): integer or null. Marks this method
     * as recommended. Within each choice group, the available method with the lowest value is
     * recommended and listed first. Ties go to the lower display_position, then the method ID.
     * Null never recommends the method. previous_attributes.recommendation_priority.anyOf[1]
     * (Value): integer. Marks this method as recommended. Within each choice group, the available
     * method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     * previous_attributes.recommendation_priority.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[1] (Value):
     * string. Current method lifecycle status. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_counts
     * (Optional): {@link SubscriptionCountsPreviousAttributes} or null. How many subscriptions use
     * this method, by status. previous_attributes.subscription_counts.anyOf[1] (Value): {@link
     * SubscriptionCountsPreviousAttributes}. previous_attributes.subscription_counts.anyOf[2]
     * (Value): null. previous_attributes.type (Optional): string or null. Delivery mode this
     * method offers. Value enum: "shipment", "local_delivery", "pickup".
     * previous_attributes.type.anyOf[1] (Value): string. Delivery mode this method offers. Value
     * enum: "shipment", "local_delivery", "pickup". previous_attributes.type.anyOf[2] (Value):
     * null. previous_attributes.updated_at (Optional): string or null. Time the method last
     * changed. previous_attributes.updated_at.anyOf[1] (Value): string. Time the method last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Optimistic-concurrency version for method writes.
     * previous_attributes.version.anyOf[1] (Value): integer. Optimistic-concurrency version for
     * method writes. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Delivery usage counts by stored status,
         * with separate subsets for active subscriptions that are canceling or on billing hold.
         * type (Required): string. Delivery mode this method offers. Value enum: "shipment",
         * "local_delivery", "pickup". updated_at (Required): string. Time the method last changed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Optimistic-concurrency version for method writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Delivery usage counts by stored
             * status, with separate subsets for active subscriptions that are canceling or on
             * billing hold.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryMethodConfigurationPreviousAttributes} or null. Current eligibility, pricing,
         * origin, estimate, and tax configuration. configuration.anyOf[1] (Value): {@link
         * DeliveryMethodConfigurationPreviousAttributes}. configuration.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the method was created. created_at.anyOf[1]
         * (Value): string. Time the method was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_method_revision_id (Optional): string or null. Immutable revision
         * currently used for new quotes. current_delivery_method_revision_id.anyOf[1] (Value):
         * string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". current_delivery_method_revision_id.anyOf[2]
         * (Value): null. delivery_method_id (Optional): string or null. Stable delivery method ID.
         * delivery_method_id.anyOf[1] (Value): string. Stable delivery method ID. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_method_id.anyOf[2] (Value): null.
         * delivery_revocation_id (Optional): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it.
         * delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing this resource's
         * own current revision. `null` when the current revision isn't revoked. It doesn't cover
         * dependencies: a method can be unusable while this is `null` because its rate callback
         * revision, signing key, or a Location's address is revoked. A revocation doesn't change
         * `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". delivery_revocation_id.anyOf[2] (Value): null.
         * description (Optional): string or null. Optional buyer-facing description.
         * description.anyOf[1] (Value): string. Optional buyer-facing description.
         * description.anyOf[2] (Value): null. display_position (Optional): integer or null.
         * Ascending display order among methods. display_position.anyOf[1] (Value): integer.
         * Ascending display order among methods. Format: int32. display_position.anyOf[2] (Value):
         * null. external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing method name. name.anyOf[1] (Value): string. Merchant-facing
         * method name. name.anyOf[2] (Value): null. recommendation_priority (Optional): integer or
         * null. Marks this method as recommended. Within each choice group, the available method
         * with the lowest value is recommended and listed first. Ties go to the lower
         * display_position, then the method ID. Null never recommends the method.
         * recommendation_priority.anyOf[1] (Value): integer. Marks this method as recommended.
         * Within each choice group, the available method with the lowest value is recommended and
         * listed first. Ties go to the lower display_position, then the method ID. Null never
         * recommends the method. Format: int32. recommendation_priority.anyOf[2] (Value): null.
         * status (Optional): string or null. Current method lifecycle status. Value enum:
         * "active", "inactive", "archived". status.anyOf[1] (Value): string. Current method
         * lifecycle status. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value):
         * null. subscription_counts (Optional): {@link SubscriptionCountsPreviousAttributes} or
         * null. How many subscriptions use this method, by status. subscription_counts.anyOf[1]
         * (Value): {@link SubscriptionCountsPreviousAttributes}. subscription_counts.anyOf[2]
         * (Value): null. type (Optional): string or null. Delivery mode this method offers. Value
         * enum: "shipment", "local_delivery", "pickup". type.anyOf[1] (Value): string. Delivery
         * mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. Time the method last
         * changed. updated_at.anyOf[1] (Value): string. Time the method last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Optimistic-concurrency version for method writes.
         * version.anyOf[1] (Value): integer. Optimistic-concurrency version for method writes.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. anyOf[1]
             * (Value): {@link DeliveryMethodConfigurationPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "configuration"?: ((DeliveryMethodConfigurationPreviousAttributes) | (null));
            /**
             * Time the method was created. anyOf[1] (Value): string. Time the method was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision currently used for new quotes. anyOf[1] (Value): string.
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". anyOf[2] (Value): null.
             */
            "current_delivery_method_revision_id"?: ((string) | (null));
            /**
             * Stable delivery method ID. anyOf[1] (Value): string. Stable delivery method ID.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. anyOf[1] (Value): string. The revocation fencing this
             * resource's own current revision. `null` when the current revision isn't revoked. It
             * doesn't cover dependencies: a method can be unusable while this is `null` because
             * its rate callback revision, signing key, or a Location's address is revoked. A
             * revocation doesn't change `status`; publish a new revision to clear it. Example:
             * "drev_01KEZF7C007Q141XJ28YAAC87B". anyOf[2] (Value): null.
             */
            "delivery_revocation_id"?: ((string) | (null));
            /**
             * Optional buyer-facing description. anyOf[1] (Value): string. Optional buyer-facing
             * description. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Ascending display order among methods. anyOf[1] (Value): integer. Ascending display
             * order among methods. Format: int32. anyOf[2] (Value): null.
             */
            "display_position"?: ((number) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Merchant-facing method name. anyOf[1] (Value): string. Merchant-facing method name.
             * anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. anyOf[1]
             * (Value): integer. Marks this method as recommended. Within each choice group, the
             * available method with the lowest value is recommended and listed first. Ties go to
             * the lower display_position, then the method ID. Null never recommends the method.
             * Format: int32. anyOf[2] (Value): null.
             */
            "recommendation_priority"?: ((number) | (null));
            /**
             * Current method lifecycle status. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Current method lifecycle status. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * How many subscriptions use this method, by status. anyOf[1] (Value): {@link
             * SubscriptionCountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_counts"?: ((SubscriptionCountsPreviousAttributes) | (null));
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup". anyOf[1] (Value): string. Delivery mode this method offers. Value enum:
             * "shipment", "local_delivery", "pickup". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "local_delivery" | "pickup" | (string & {})) | (null));
            /**
             * Time the method last changed. anyOf[1] (Value): string. Time the method last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for method writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for method writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_method.updated". */
    "event_type"?: "delivery_method.updated";
});
export type DeliveryMethodsCreateParams = (CreateDeliveryMethodRequestInput)
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
export type DeliveryMethodsDeleteParams = DeliveryLocationSetsDeleteParams;
export type DeliveryMethodsGetParams = DisputesAcceptParams;
export type DeliveryMethodsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Search across delivery_method_id, name, description, and external_reference_id. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as dmet_01. maxLength: 255.
     */
    "query"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Filter by method type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "shipment", "local_delivery", "pickup". Value enum: "shipment",
     * "local_delivery", "pickup". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "shipment", "local_delivery", "pickup". anyOf[1][] (Value): string. Value enum: "shipment",
     * "local_delivery", "pickup". anyOf[2] (Value): string. Value enum: "shipment",
     * "local_delivery", "pickup".
     */
    "type"?: InputValue<("shipment" | "local_delivery" | "pickup") | readonly ("shipment" | "local_delivery" | "pickup")[]>;
    /**
     * Filter by referenced delivery zone. pattern: ^dzone_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     */
    "delivery_zone_id"?: InputValue<string>;
    /**
     * Filter by referenced delivery location set. pattern: ^dls_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: InputValue<string>;
    /**
     * Filter by referenced callback endpoint. pattern: ^dcb_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id"?: InputValue<string>;
    /**
     * Filter by referenced Location. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: InputValue<string>;
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
export type DeliveryMethodsUpdateParams = (UpdateDeliveryMethodRequestInput)
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
 * A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs,
 * and shipment, pickup, or local delivery details.
 */
export type DeliveryOptionProjection = {
    /**
     * Delivery charge for this option. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Estimated arrival dates. Omitted when the method makes no timing promise. The estimated
     * arrival date range for a delivery option, as calendar dates in the option's timezone.
     */
    "arrival_estimate"?: DeliveryArrivalEstimate;
    /**
     * The instructions field checkout collects for this option: whether it is enabled and
     * required, and its label and placeholder. Controls buyer instructions for a delivery option.
     * Omit it from a method configuration to disable instruction collection.
     */
    "buyer_instructions": BuyerInstructionsConfig;
    /**
     * Flint charge tax category. Value enum: "service_fee", "shipping", "delivery", "handling",
     * "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | (string & {});
    /**
     * ID of the delivery selection that chose this option. Omitted until a selection does.
     * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "consumed_by_delivery_selection_id"?: string;
    /**
     * ID of the delivery method that produced this option. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /**
     * ID of the method revision this option was priced from. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id"?: string;
    /**
     * ID to send when choosing this option in a delivery selection. Omitted on delivery previews,
     * whose options cannot be selected. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923".
     */
    "delivery_option_id"?: string;
    /**
     * How the option divides the items into deliveries. Whether a delivery option is fulfilled in
     * one delivery or several, with the first arrival time, completion time, and delivery count.
     */
    "delivery_plan": DeliveryPlan;
    /** Buyer-visible description of the option. Omitted when the method has none. */
    "description"?: string;
    /**
     * Position in which this option displays among the others. Lower values display first. Format:
     * int32.
     */
    "display_position": number;
    /**
     * Where this option's items leave from, one leg per origin Location. Under method_origin
     * routing each method uses its own origin, so a pickup option leaves from the chosen store
     * while a shipment option can leave from a warehouse. Selecting the option makes these legs
     * the selection's execution legs. [] (Value): {@link DeliveryQuoteExecutionLegResource}. One
     * leg of a delivery choice group, identifying the origin Location the group's items leave
     * from.
     */
    "execution_legs"?: Array<DeliveryQuoteExecutionLegResource>;
    /**
     * Last moment a delivery selection can choose this option: the quote's expires_at, or earlier
     * when the rate the merchant's callback or server returned expires first. Afterward the option
     * is left out of the quote's options and selecting it requires a new quote. Omitted on
     * delivery previews, whose options can't be selected. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Local delivery details. Set only when `type` is `local_delivery`. Details of a local
     * delivery option: instructions and service level.
     */
    "local_delivery"?: DeliveryShipmentDetails;
    /** Buyer-visible name of the option. */
    "name": string;
    /**
     * Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. []
     * (Value): {@link DeliveryWindowRequest}. A time window a buyer can choose for a delivery,
     * with its start, end, price, and the last moment it can be chosen.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /**
     * Pickup details. Set only when `type` is `pickup`. Pickup details of a delivery option: the
     * pickup mode and the pickup location.
     */
    "pickup"?: DeliveryPickupDetails;
    /**
     * Recipient fields this option asks for. A selection can leave out required fields, but
     * payment needs them. [] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /**
     * Whether Flint recommends this option over the others in the group, based on the methods'
     * `recommendation_priority`.
     */
    "recommended": boolean;
    /**
     * Shipment details. Set only when `type` is `shipment`. Shipment-specific details of a
     * delivery option or choice: the `service_level` and buyer `instructions`.
     */
    "shipment"?: DeliveryShipmentDetails;
    /** Whether tax applies to the delivery charge. */
    "taxable": boolean;
    /**
     * IANA timezone for displaying window_start_at, window_end_at, and any offered windows.
     * Example: "America/New_York".
     */
    "timezone"?: string;
    /** Delivery type of this option. Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
    /**
     * End of the delivery window for this option. Omitted when the option has no single window;
     * see offered_windows. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /** Whether the offered windows cost the same. Value enum: "uniform", "varies". */
    "window_pricing"?: "uniform" | "varies" | (string & {});
    /** Whether the buyer chooses a delivery window. Value enum: "none", "offered". */
    "window_selection": "none" | "offered" | (string & {});
    /**
     * Start of the delivery window for this option. Omitted when the option has no single window;
     * see offered_windows. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
};
export type DeliveryOptionProjectionPreviousAttributes = {
    /**
     * Delivery charge for this option. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Estimated arrival dates. Omitted when the method makes no timing promise. anyOf[1] (Value):
     * {@link DeliveryArrivalEstimatePreviousAttributes}. anyOf[2] (Value): null.
     */
    "arrival_estimate"?: ((DeliveryArrivalEstimatePreviousAttributes) | (null));
    /**
     * The instructions field checkout collects for this option: whether it is enabled and
     * required, and its label and placeholder. anyOf[1] (Value): {@link
     * BuyerInstructionsConfigPreviousAttributes}. anyOf[2] (Value): null.
     */
    "buyer_instructions"?: ((BuyerInstructionsConfigPreviousAttributes) | (null));
    /**
     * Flint charge tax category. Value enum: "service_fee", "shipping", "delivery", "handling",
     * "surcharge". anyOf[1] (Value): string. Flint charge tax category. Value enum: "service_fee",
     * "shipping", "delivery", "handling", "surcharge". anyOf[2] (Value): null.
     */
    "charge_tax_category"?: (("service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | (string & {})) | (null));
    /**
     * ID of the delivery selection that chose this option. Omitted until a selection does.
     * anyOf[1] (Value): string. ID of the delivery selection that chose this option. Omitted until
     * a selection does. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
     */
    "consumed_by_delivery_selection_id"?: ((string) | (null));
    /**
     * ID of the delivery method that produced this option. anyOf[1] (Value): string. ID of the
     * delivery method that produced this option. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * anyOf[2] (Value): null.
     */
    "delivery_method_id"?: ((string) | (null));
    /**
     * ID of the method revision this option was priced from. anyOf[1] (Value): string. ID of the
     * method revision this option was priced from. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * anyOf[2] (Value): null.
     */
    "delivery_method_revision_id"?: ((string) | (null));
    /**
     * ID to send when choosing this option in a delivery selection. Omitted on delivery previews,
     * whose options cannot be selected. anyOf[1] (Value): string. ID to send when choosing this
     * option in a delivery selection. Omitted on delivery previews, whose options cannot be
     * selected. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". anyOf[2] (Value): null.
     */
    "delivery_option_id"?: ((string) | (null));
    /**
     * How the option divides the items into deliveries. anyOf[1] (Value): {@link
     * DeliveryPlanPreviousAttributes}. anyOf[2] (Value): null.
     */
    "delivery_plan"?: ((DeliveryPlanPreviousAttributes) | (null));
    /**
     * Buyer-visible description of the option. Omitted when the method has none. anyOf[1] (Value):
     * string. Buyer-visible description of the option. Omitted when the method has none. anyOf[2]
     * (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Position in which this option displays among the others. Lower values display first.
     * anyOf[1] (Value): integer. Position in which this option displays among the others. Lower
     * values display first. Format: int32. anyOf[2] (Value): null.
     */
    "display_position"?: ((number) | (null));
    /**
     * Where this option's items leave from, one leg per origin Location. Under method_origin
     * routing each method uses its own origin, so a pickup option leaves from the chosen store
     * while a shipment option can leave from a warehouse. Selecting the option makes these legs
     * the selection's execution legs. anyOf[1] (Value): Array of {@link
     * DeliveryQuoteExecutionLegResourcePreviousAttributes}. Where this option's items leave from,
     * one leg per origin Location. Under method_origin routing each method uses its own origin, so
     * a pickup option leaves from the chosen store while a shipment option can leave from a
     * warehouse. Selecting the option makes these legs the selection's execution legs. anyOf[1][]
     * (Value): {@link DeliveryQuoteExecutionLegResourcePreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "execution_legs"?: ((Array<DeliveryQuoteExecutionLegResourcePreviousAttributes>) | (null));
    /**
     * Last moment a delivery selection can choose this option: the quote's expires_at, or earlier
     * when the rate the merchant's callback or server returned expires first. Afterward the option
     * is left out of the quote's options and selecting it requires a new quote. Omitted on
     * delivery previews, whose options can't be selected. anyOf[1] (Value): string. Last moment a
     * delivery selection can choose this option: the quote's expires_at, or earlier when the rate
     * the merchant's callback or server returned expires first. Afterward the option is left out
     * of the quote's options and selecting it requires a new quote. Omitted on delivery previews,
     * whose options can't be selected. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * Local delivery details. Set only when `type` is `local_delivery`. anyOf[1] (Value): {@link
     * DeliveryShipmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "local_delivery"?: ((DeliveryShipmentDetailsPreviousAttributes) | (null));
    /**
     * Buyer-visible name of the option. anyOf[1] (Value): string. Buyer-visible name of the
     * option. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`.
     * anyOf[1] (Value): Array of {@link DeliveryWindowResourcePreviousAttributes}. Delivery
     * windows the buyer can choose from. Omitted when `window_selection` is `none`. anyOf[1][]
     * (Value): {@link DeliveryWindowResourcePreviousAttributes}. anyOf[2] (Value): null.
     */
    "offered_windows"?: ((Array<DeliveryWindowResourcePreviousAttributes>) | (null));
    /**
     * Pickup details. Set only when `type` is `pickup`. anyOf[1] (Value): {@link
     * DeliveryPickupDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "pickup"?: ((DeliveryPickupDetailsPreviousAttributes) | (null));
    /**
     * Recipient fields this option asks for. A selection can leave out required fields, but
     * payment needs them. anyOf[1] (Value): Array of {@link
     * DeliveryRecipientRequirementPreviousAttributes}. Recipient fields this option asks for. A
     * selection can leave out required fields, but payment needs them. anyOf[1][] (Value): {@link
     * DeliveryRecipientRequirementPreviousAttributes}. anyOf[2] (Value): null.
     */
    "recipient_requirements"?: ((Array<DeliveryRecipientRequirementPreviousAttributes>) | (null));
    /**
     * Whether Flint recommends this option over the others in the group, based on the methods'
     * `recommendation_priority`. anyOf[1] (Value): boolean. Whether Flint recommends this option
     * over the others in the group, based on the methods' `recommendation_priority`. anyOf[2]
     * (Value): null.
     */
    "recommended"?: ((boolean) | (null));
    /**
     * Shipment details. Set only when `type` is `shipment`. anyOf[1] (Value): {@link
     * DeliveryShipmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "shipment"?: ((DeliveryShipmentDetailsPreviousAttributes) | (null));
    /**
     * Whether tax applies to the delivery charge. anyOf[1] (Value): boolean. Whether tax applies
     * to the delivery charge. anyOf[2] (Value): null.
     */
    "taxable"?: ((boolean) | (null));
    /**
     * IANA timezone for displaying window_start_at, window_end_at, and any offered windows.
     * anyOf[1] (Value): string. IANA timezone for displaying window_start_at, window_end_at, and
     * any offered windows. Example: "America/New_York". anyOf[2] (Value): null.
     */
    "timezone"?: ((string) | (null));
    /**
     * Delivery type of this option. Value enum: "shipment", "pickup", "local_delivery". anyOf[1]
     * (Value): string. Delivery type of this option. Value enum: "shipment", "pickup",
     * "local_delivery". anyOf[2] (Value): null.
     */
    "type"?: (("shipment" | "pickup" | "local_delivery" | (string & {})) | (null));
    /**
     * End of the delivery window for this option. Omitted when the option has no single window;
     * see offered_windows. anyOf[1] (Value): string. End of the delivery window for this option.
     * Omitted when the option has no single window; see offered_windows. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_end_at"?: ((string) | (null));
    /**
     * Whether the offered windows cost the same. Value enum: "uniform", "varies". anyOf[1]
     * (Value): string. Whether the offered windows cost the same. Value enum: "uniform", "varies".
     * anyOf[2] (Value): null.
     */
    "window_pricing"?: (("uniform" | "varies" | (string & {})) | (null));
    /**
     * Whether the buyer chooses a delivery window. Value enum: "none", "offered". anyOf[1]
     * (Value): string. Whether the buyer chooses a delivery window. Value enum: "none", "offered".
     * anyOf[2] (Value): null.
     */
    "window_selection"?: (("none" | "offered" | (string & {})) | (null));
    /**
     * Start of the delivery window for this option. Omitted when the option has no single window;
     * see offered_windows. anyOf[1] (Value): string. Start of the delivery window for this option.
     * Omitted when the option has no single window; see offered_windows. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_start_at"?: ((string) | (null));
};
/**
 * A delivery method and choice group still waiting for a caller-supplied rate on a delivery quote.
 */
export type DeliveryPendingCallerRateRequest = {
    /** Choice group that needs a rate. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". */
    "delivery_choice_group_id": string;
    /** Method that needs a rate. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
    "delivery_method_id": string;
    /** Revision of that method. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". */
    "delivery_method_revision_id": string;
};
/**
 * The result of a pickup locations preview: each pickup location and whether it can supply the
 * order, with input requirements and merchant diagnostics.
 */
export type DeliveryPickupAvailability = {
    /**
     * Time Flint evaluated pickup availability. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "evaluated_at": string;
    /**
     * How completely Flint evaluated the pickup Locations. Value enum: "complete", "incomplete",
     * "degraded".
     */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Inputs the pickup methods need before Flint can evaluate them. [] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Up to 25 pickup locations, nearest first when Flint can place the buyer location, otherwise
     * in the order the pickup methods list them. maxItems: 25. [] (Value): {@link
     * DeliveryPickupAvailabilityLocationResource}. One pickup location in a pickup locations
     * preview, with its outcome, distance, compatible methods, and applicable quantities.
     */
    "locations": Array<DeliveryPickupAvailabilityLocationResource>;
    /**
     * Configured Locations the search left out, and listed Locations that cannot supply the
     * order's tracked items. Always present with an API key or dashboard credential as an array,
     * including when empty. [] (Value): {@link DeliveryPickupAvailabilityDiagnostic}. A
     * merchant-only diagnostic about a configured pickup location that was left out of the results
     * or cannot supply the order.
     */
    "merchant_diagnostics"?: Array<DeliveryPickupAvailabilityDiagnostic>;
    /**
     * The delivery question this preview answers. - `pickup_locations`: Lists the checkout
     * session's pickup locations and whether each can supply its items. Value enum:
     * "pickup_locations".
     */
    "mode": "pickup_locations" | (string & {});
};
/**
 * Whether pickup is available at one location, chosen by `type`, with the reason when it is
 * unavailable or cannot be calculated.
 */
export type DeliveryPickupAvailabilityCandidateOutcome = {
    /**
     * Address verification results that affected this method. Omitted when there are none. []
     * (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * Why Flint could not calculate pickup availability and the action that can make calculation
     * succeed. - `eligibility_context_invalid`: Create a new checkout session, then create a new
     * quote. - `eligibility_dependency_failure`: Retry after the eligibility dependency recovers.
     * - `pickup_method_unavailable`: Activate or choose an available pickup method. -
     * `inventory_dependency_failure`: Retry after inventory availability and routing recover.
     * Value enum: "eligibility_context_invalid", "eligibility_dependency_failure",
     * "pickup_method_unavailable", "inventory_dependency_failure".
     */
    "failure_category"?: "eligibility_context_invalid"
        | "eligibility_dependency_failure"
        | "pickup_method_unavailable"
        | "inventory_dependency_failure"
        | (string & {});
    /**
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /** Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. */
    "retryable"?: boolean;
    /**
     * What happened when Flint evaluated this delivery method. Value enum: "available",
     * "unavailable", "input_required", "cannot_calculate".
     */
    "type": "available" | "unavailable" | "input_required" | "cannot_calculate" | (string & {});
    /**
     * Why pickup is unavailable and the action that can make it eligible. -
     * `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts
     * or method eligibility rule. - `pickup_unavailable`: Choose an available pickup method or
     * location. - `inventory_unavailable`: The origin or pickup location cannot supply the
     * requested inventory. Reduce the quantity, replenish inventory, or choose another origin or
     * method. Value enum: "eligibility_no_match", "pickup_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "eligibility_no_match" | "pickup_unavailable" | "inventory_unavailable" | (string & {});
};
/**
 * A merchant-only diagnostic about a configured pickup location that was left out of the results
 * or cannot supply the order.
 */
export type DeliveryPickupAvailabilityDiagnostic = {
    /**
     * Stable reason a configured pickup location was left out of the results or cannot supply the
     * order. - `pickup_location_inactive`: The Location is inactive, so it was left out. -
     * `pickup_location_geography_unavailable`: The Location has no usable published geography, so
     * it was left out. - `pickup_location_inventory_unavailable`: Flint skips this Location for
     * orders with tracked items because inventory allocation is off. Items without tracked
     * inventory need no allocation. - `pickup_location_dependency_failure`: Flint could not
     * resolve the configured Location. Value enum: "pickup_location_inactive",
     * "pickup_location_geography_unavailable", "pickup_location_inventory_unavailable",
     * "pickup_location_dependency_failure".
     */
    "code": "pickup_location_inactive"
        | "pickup_location_geography_unavailable"
        | "pickup_location_inventory_unavailable"
        | "pickup_location_dependency_failure"
        | (string & {});
    /**
     * ID to quote when you ask Flint about this diagnostic. Example:
     * "ddiag_01KEZF7C002JPVD08857RGDGPC".
     */
    "diagnostic_id": string;
    /** ID of the Location that was evaluated. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /** Time Flint recorded this diagnostic. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * What happened when Flint evaluated the method or Location. Value enum: "unavailable",
     * "cannot_calculate".
     */
    "outcome": "unavailable" | "cannot_calculate" | (string & {});
    /** What the merchant can do to get an option. Value enum: "review_configuration", "retry". */
    "recommended_action": "review_configuration" | "retry" | (string & {});
    /** Whether trying again later can succeed. */
    "retryable": boolean;
    /** What the diagnostic is about. Value enum: "location". */
    "scope": "location" | (string & {});
    /** Plain-language explanation for the merchant. */
    "summary": string;
};
/**
 * One pickup location in a pickup locations preview, with its outcome, distance, compatible
 * methods, and applicable quantities.
 */
export type DeliveryPickupAvailabilityLocationResource = {
    /**
     * Quantities of the order's items this Location can supply. [] (Value): {@link
     * DeliveryQuoteLineItemResource}. The quantity of an order line item, or of one of its bundle
     * components, that a pickup location applies to.
     */
    "applicable_quantities": Array<DeliveryQuoteLineItemResource>;
    /**
     * Result of evaluating this Location for pickup. Whether pickup is available at one location,
     * chosen by `type`, with the reason when it is unavailable or cannot be calculated.
     */
    "candidate_outcome": DeliveryPickupAvailabilityCandidateOutcome;
    /**
     * Pickup methods that can serve this Location. [] (Value): {@link
     * DeliveryPickupAvailabilityMethodResource}. A pickup delivery method, with its revision, that
     * can serve a pickup location.
     */
    "compatible_methods": Array<DeliveryPickupAvailabilityMethodResource>;
    /**
     * Straight-line distance in meters from the buyer location. A buyer location with only a
     * postal code is measured from the postal code's center. Omitted when Flint cannot place the
     * buyer location or the store.
     */
    "distance_meters"?: number;
    /**
     * The pickup Location. The ID, name, and address of a pickup location in a pickup locations
     * preview.
     */
    "location": DeliveryPickupAvailabilityLocationSummary;
};
/** The ID, name, and address of a pickup location in a pickup locations preview. */
export type DeliveryPickupAvailabilityLocationSummary = {
    /**
     * Street address of the Location. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
    /** ID of the Location buyers can collect from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /** Name of the Location, as buyers see it when choosing pickup. */
    "name": string;
};
/**
 * A maximum distance from the buyer location, as a value and unit, that limits which pickup
 * locations a preview returns.
 */
export type DeliveryPickupAvailabilityMaximumDistanceRequestInput = {
    /** Unit of `value`. Value enum: "meter", "kilometer", "mile". */
    "unit": "meter" | "kilometer" | "mile";
    /**
     * Maximum distance from the buyer location, greater than zero, in the selected unit.
     * exclusiveMinimum: 0.
     */
    "value": number;
};
/** A pickup delivery method, with its revision, that can serve a pickup location. */
export type DeliveryPickupAvailabilityMethodResource = {
    /** ID of the pickup method. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
    "delivery_method_id": string;
    /**
     * ID of the method revision that was evaluated. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id": string;
};
/** Pickup details of a delivery option: the pickup mode and the pickup location. */
export type DeliveryPickupDetails = {
    /**
     * Location where the buyer collects the items. A pickup location shown on a delivery option:
     * its name, address, instructions, and timezone.
     */
    "location"?: DeliveryLocationSummaryResource;
    /**
     * How the buyer collects the items at this Location. Value enum: "in_store", "curbside",
     * "locker", "other".
     */
    "pickup_mode": "in_store" | "curbside" | "locker" | "other" | (string & {});
};
export type DeliveryPickupDetailsPreviousAttributes = {
    /**
     * Location where the buyer collects the items. anyOf[1] (Value): {@link
     * DeliveryLocationSummaryResourcePreviousAttributes}. anyOf[2] (Value): null.
     */
    "location"?: ((DeliveryLocationSummaryResourcePreviousAttributes) | (null));
    /**
     * How the buyer collects the items at this Location. Value enum: "in_store", "curbside",
     * "locker", "other". anyOf[1] (Value): string. How the buyer collects the items at this
     * Location. Value enum: "in_store", "curbside", "locker", "other". anyOf[2] (Value): null.
     */
    "pickup_mode"?: (("in_store" | "curbside" | "locker" | "other" | (string & {})) | (null));
};
/**
 * Whether a delivery option is fulfilled in one delivery or several, with the first arrival time,
 * completion time, and delivery count.
 */
export type DeliveryPlan = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "complete_by_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "first_arrival_at"?: string;
    /** Number of deliveries the plan makes. */
    "planned_delivery_count"?: number;
    /** Whether the items arrive together. Value enum: "single_delivery", "multiple_deliveries". */
    "type": "single_delivery" | "multiple_deliveries" | (string & {});
};
export type DeliveryPlanPreviousAttributes = {
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "complete_by_at"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "first_arrival_at"?: ((string) | (null));
    /**
     * Number of deliveries the plan makes. anyOf[1] (Value): integer. Number of deliveries the
     * plan makes. anyOf[2] (Value): null.
     */
    "planned_delivery_count"?: ((number) | (null));
    /**
     * Whether the items arrive together. Value enum: "single_delivery", "multiple_deliveries".
     * anyOf[1] (Value): string. Whether the items arrive together. Value enum: "single_delivery",
     * "multiple_deliveries". anyOf[2] (Value): null.
     */
    "type"?: (("single_delivery" | "multiple_deliveries" | (string & {})) | (null));
};
/**
 * A delivery eligibility condition that matches the address postal code against exact or prefix
 * `values`.
 */
export type DeliveryPostalCodeCondition = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
    /**
     * Postal codes, each with its country. Flint compares codes in uppercase without spaces or
     * hyphens. An exact value matches that code, and a prefix value matches every code that starts
     * with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes
     * within it, so 07030 matches 07030-5788, which address verification returns for a full
     * address. A ZIP+4 value matches only that ZIP+4. [] (Value): {@link DeliveryPostalCodeValue}.
     * A postal code or postal code prefix with its country, used in a postal code condition.
     */
    "values": Array<DeliveryPostalCodeValue>;
};
export type DeliveryPostalCodeConditionPreviousAttributes = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Value enum:
     * "destination_address", "buyer_location". anyOf[1] (Value): string. Address facts tested by
     * this condition. destination_address is the shipping destination. buyer_location is the
     * buyer's current pickup or local-delivery location. Default: "destination_address". Value
     * enum: "destination_address", "buyer_location". anyOf[2] (Value): null.
     */
    "subject"?: (("destination_address" | "buyer_location" | (string & {})) | (null));
    /**
     * Postal codes, each with its country. Flint compares codes in uppercase without spaces or
     * hyphens. An exact value matches that code, and a prefix value matches every code that starts
     * with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes
     * within it, so 07030 matches 07030-5788, which address verification returns for a full
     * address. A ZIP+4 value matches only that ZIP+4. anyOf[1] (Value): Array of {@link
     * DeliveryPostalCodeValuePreviousAttributes}. Postal codes, each with its country. Flint
     * compares codes in uppercase without spaces or hyphens. An exact value matches that code, and
     * a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a
     * US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which
     * address verification returns for a full address. A ZIP+4 value matches only that ZIP+4.
     * anyOf[1][] (Value): {@link DeliveryPostalCodeValuePreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "values"?: ((Array<DeliveryPostalCodeValuePreviousAttributes>) | (null));
};
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
export type DeliveryPostalCodeValuePreviousAttributes = {
    /**
     * ISO 3166-1 alpha-2 country code. anyOf[1] (Value): string. ISO 3166-1 alpha-2 country code.
     * minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". anyOf[2] (Value): null.
     */
    "country"?: ((string) | (null));
    /**
     * Whether `value` is a whole postal code or the start of one. Value enum: "exact", "prefix".
     * anyOf[1] (Value): string. Whether `value` is a whole postal code or the start of one.
     * Default: "exact". Value enum: "exact", "prefix". anyOf[2] (Value): null.
     */
    "type"?: (("exact" | "prefix" | (string & {})) | (null));
    /**
     * The postal code, or the start of postal codes, to match. anyOf[1] (Value): string. The
     * postal code, or the start of postal codes, to match. minLength: 1. anyOf[2] (Value): null.
     */
    "value"?: ((string) | (null));
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
