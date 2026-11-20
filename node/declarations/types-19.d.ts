import type { MoneyValuePreviousAttributes, MoneyValueInput, MoneyValue } from './types-44.js';
import type { AddRiskListItemsRequest, Address, AddressPreviousAttributes } from './types-0.js';
import type {
    DeliveryCustomerBooleanCondition,
    DeliveryCustomerBooleanConditionPreviousAttributes,
    DeliveryCustomerSegmentConditionPreviousAttributes,
    DeliveryCountryConditionRequestInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput
} from './types-18.js';
import type {
    DeliveryPostalCodeCondition,
    DeliveryPostalCodeConditionPreviousAttributes,
    DeliveryPostalCodeConditionRequestInput,
    DeliveryMethodOriginSelector,
    DeliveryMethodOriginSelectorRequest,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryMethodOriginSelectorPreviousAttributes
} from './types-20.js';
import type {
    DeliveryRadiusCondition,
    DeliveryRadiusConditionPreviousAttributes,
    DeliveryRadiusConditionRequestInput
} from './types-22.js';
import type {
    DeliveryStateCondition,
    DeliveryWindowTimeCondition,
    DeliveryZoneCondition,
    DeliveryStateConditionPreviousAttributes,
    DeliveryWindowTimeConditionPreviousAttributes,
    DeliveryZoneConditionPreviousAttributes,
    DeliveryStateConditionRequestInput,
    DeliveryWindowTimeConditionInput,
    DeliveryScheduleWindowRule,
    DeliveryTransitTimeRule,
    DeliveryScheduleWindowRulePreviousAttributes,
    DeliveryTransitTimeRulePreviousAttributes,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryTransitTimeRuleRequestInput,
    DeliveryWindowRequest,
    DeliveryWindowResourcePreviousAttributes
} from './types-24.js';
import type { DeliveryZoneConditionRequestInput } from './types-25.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { ResponseMeta } from './types-62.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryLocationSetRequestInput } from './types-9.js';
import type { DisputesAcceptParams } from './types-26.js';
import type { UpdateDeliveryLocationSetRequestInput } from './types-76.js';
import type { SubscriptionCounts, SubscriptionCountsPreviousAttributes } from './types-69.js';
import type {
    BuyerInstructionsConfig,
    BuyerInstructionsConfigRequestInput,
    BuyerInstructionsConfigPreviousAttributes
} from './types-2.js';
import type {
    DeliveryPricingStrategy,
    DeliveryPricingStrategyCreateRequest,
    DeliveryPricingStrategyCreateRequestInput,
    DeliveryPricingStrategyRequest,
    DeliveryPricingStrategyRequestInput,
    DeliveryPricingStrategyPreviousAttributes
} from './types-21.js';
import type {
    DeliveryRecipientRequirement,
    DeliveryRecipientRequirementRequestInput,
    DeliveryRecipientRequirementPreviousAttributes
} from './types-23.js';
export type DeliveryDistanceUnitPricePreviousAttributes = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value.
     * anyOf[1] (Value): Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * Distance unit used by unit_quantity. Value enum: "meter", "kilometer", "mile". anyOf[1]
     * (Value): string. Distance unit used by unit_quantity. Value enum: "meter", "kilometer",
     * "mile". anyOf[2] (Value): null.
     */
    "unit"?: (("meter" | "kilometer" | "mile" | (string & {})) | (null));
    /**
     * Whole-number quantity of the selected unit charged at each configured currency price;
     * fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity of
     * the selected unit charged at each configured currency price; fractional quantities are not
     * supported. Format: int64. minimum: 1. anyOf[2] (Value): null.
     */
    "unit_quantity"?: ((number) | (null));
};
/**
 * A distance rate you supply for calculated delivery pricing: a price by currency for each
 * `unit_quantity` of `unit`.
 */
export type DeliveryDistanceUnitPriceRequestInput = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /** Distance unit used by unit_quantity. Value enum: "meter", "kilometer", "mile". */
    "unit": "meter" | "kilometer" | "mile";
    /**
     * Whole-number quantity of the selected unit charged at each configured currency price;
     * fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "unit_quantity": number;
};
/**
 * A boolean expression containing exactly one operator or typed condition at each node.
 * Expressions support at most 8 levels and 100 total nodes.
 */
export type DeliveryEligibilityExpression = ({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpression}. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpression>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpression}. A boolean expression containing exactly one operator
     * or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpression>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: AddRiskListItemsRequest;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpression;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeCondition;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusCondition;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateCondition;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeCondition;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneCondition;
})
    & (({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpression}. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "all": Array<DeliveryEligibilityExpression>;
})
    | ({
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpression}. A boolean expression containing exactly one operator
     * or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "any": Array<DeliveryEligibilityExpression>;
})
    | ({
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not": DeliveryEligibilityExpression;
})
    | ({
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone": DeliveryZoneCondition;
})
    | ({
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeCondition;
})
    | ({
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius": DeliveryRadiusCondition;
})
    | ({
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time": DeliveryWindowTimeCondition;
})
    | ({
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment": AddRiskListItemsRequest;
})
    | ({
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase": DeliveryCustomerBooleanCondition;
})
    | (Record<string, unknown>));
export type DeliveryEligibilityExpressionPreviousAttributes = ({
    /**
     * Matches when every nested expression matches. anyOf[1] (Value): Array of {@link
     * DeliveryEligibilityExpressionPreviousAttributes}. Matches when every nested expression
     * matches. minItems: 1. maxItems: 100. anyOf[1][] (Value): {@link
     * DeliveryEligibilityExpressionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "all"?: ((Array<DeliveryEligibilityExpressionPreviousAttributes>) | (null));
    /**
     * Matches when at least one nested expression matches. anyOf[1] (Value): Array of {@link
     * DeliveryEligibilityExpressionPreviousAttributes}. Matches when at least one nested
     * expression matches. minItems: 1. maxItems: 100. anyOf[1][] (Value): {@link
     * DeliveryEligibilityExpressionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "any"?: ((Array<DeliveryEligibilityExpressionPreviousAttributes>) | (null));
    /**
     * Matches when the address is in one of the listed countries. anyOf[1] (Value): {@link
     * DeliveryStateConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "country"?: ((DeliveryStateConditionPreviousAttributes) | (null));
    /**
     * Matches when whether the customer has an email address equals `value`. anyOf[1] (Value):
     * {@link DeliveryCustomerBooleanConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "customer_has_email"?: ((DeliveryCustomerBooleanConditionPreviousAttributes) | (null));
    /**
     * Matches when whether the customer has a phone number equals `value`. anyOf[1] (Value):
     * {@link DeliveryCustomerBooleanConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "customer_has_phone"?: ((DeliveryCustomerBooleanConditionPreviousAttributes) | (null));
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. anyOf[1]
     * (Value): {@link DeliveryCustomerBooleanConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "customer_merchant_verified"?: ((DeliveryCustomerBooleanConditionPreviousAttributes) | (null));
    /**
     * Matches the free-form segment you assign to the customer against values. anyOf[1] (Value):
     * {@link DeliveryCustomerSegmentConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "customer_segment"?: ((DeliveryCustomerSegmentConditionPreviousAttributes) | (null));
    /**
     * Matches when the nested expression does not match. anyOf[1] (Value): {@link
     * DeliveryEligibilityExpressionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "not"?: ((DeliveryEligibilityExpressionPreviousAttributes) | (null));
    /**
     * Matches when the address postal code matches one of the listed codes. anyOf[1] (Value):
     * {@link DeliveryPostalCodeConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "postal_code"?: ((DeliveryPostalCodeConditionPreviousAttributes) | (null));
    /**
     * Matches when the address is within a set distance of an origin. anyOf[1] (Value): {@link
     * DeliveryRadiusConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "radius"?: ((DeliveryRadiusConditionPreviousAttributes) | (null));
    /**
     * Matches when the address is in one of the listed states or provinces. anyOf[1] (Value):
     * {@link DeliveryStateConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "state"?: ((DeliveryStateConditionPreviousAttributes) | (null));
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. anyOf[1]
     * (Value): {@link DeliveryCustomerBooleanConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "subscription_purchase"?: ((DeliveryCustomerBooleanConditionPreviousAttributes) | (null));
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. anyOf[1] (Value): {@link
     * DeliveryWindowTimeConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "window_time"?: ((DeliveryWindowTimeConditionPreviousAttributes) | (null));
    /**
     * Matches when the address is inside the delivery zone you name. anyOf[1] (Value): {@link
     * DeliveryZoneConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "zone"?: ((DeliveryZoneConditionPreviousAttributes) | (null));
})
    & (((unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (Record<string, unknown>)));
/**
 * A boolean expression containing exactly one operator or typed condition at each node.
 * Expressions support at most 8 levels and 100 total nodes.
 */
export type DeliveryEligibilityExpressionRequest = ({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequest}. A boolean expression containing exactly one operator
     * or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequest>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequest}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequest>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: AddRiskListItemsRequest;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequest;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeCondition;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusCondition;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateCondition;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeCondition;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneCondition;
})
    & (({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequest}. A boolean expression containing exactly one operator
     * or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "all": Array<DeliveryEligibilityExpressionRequest>;
})
    | ({
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequest}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "any": Array<DeliveryEligibilityExpressionRequest>;
})
    | ({
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not": DeliveryEligibilityExpressionRequest;
})
    | ({
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone": DeliveryZoneCondition;
})
    | ({
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeCondition;
})
    | ({
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius": DeliveryRadiusCondition;
})
    | ({
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time": DeliveryWindowTimeCondition;
})
    | ({
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment": AddRiskListItemsRequest;
})
    | ({
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase": DeliveryCustomerBooleanCondition;
})
    | (Record<string, unknown>));
/**
 * A boolean expression containing exactly one operator or typed condition at each node.
 * Expressions support at most 8 levels and 100 total nodes.
 */
export type DeliveryEligibilityExpressionRequestInput = {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all": Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any": Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not": DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone": DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius": DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time": DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment": DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified": DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email": DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone": DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase": DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
};
/**
 * An eligibility condition that rejected a delivery method, with its condition type, its path in
 * the expression, and the field tested.
 */
export type DeliveryEligibilityMismatch = {
    /**
     * The configured eligibility condition family that did not match. Value enum: "zone",
     * "country", "state", "postal_code", "radius", "window_time", "subscription_purchase",
     * "customer_segment", "customer_merchant_verified", "customer_has_email",
     * "customer_has_phone".
     */
    "condition": "zone"
        | "country"
        | "state"
        | "postal_code"
        | "radius"
        | "window_time"
        | "subscription_purchase"
        | "customer_segment"
        | "customer_merchant_verified"
        | "customer_has_email"
        | "customer_has_phone"
        | (string & {});
    /** The condition's path in the configured eligibility expression, starting at $. */
    "expression_path": string;
    /** The eligibility fact evaluated by the condition. Buyer fact values are not included. */
    "field"?: string;
    /** Whether the condition matched inside a not expression and therefore rejected the method. */
    "negated"?: boolean;
};
export type DeliveryEligibilityMismatchPreviousAttributes = {
    /**
     * The configured eligibility condition family that did not match. Value enum: "zone",
     * "country", "state", "postal_code", "radius", "window_time", "subscription_purchase",
     * "customer_segment", "customer_merchant_verified", "customer_has_email",
     * "customer_has_phone". anyOf[1] (Value): string. The configured eligibility condition family
     * that did not match. Value enum: "zone", "country", "state", "postal_code", "radius",
     * "window_time", "subscription_purchase", "customer_segment", "customer_merchant_verified",
     * "customer_has_email", "customer_has_phone". anyOf[2] (Value): null.
     */
    "condition"?: (("zone"
        | "country"
        | "state"
        | "postal_code"
        | "radius"
        | "window_time"
        | "subscription_purchase"
        | "customer_segment"
        | "customer_merchant_verified"
        | "customer_has_email"
        | "customer_has_phone"
        | (string & {}))
        | (null));
    /**
     * The condition's path in the configured eligibility expression, starting at $. anyOf[1]
     * (Value): string. The condition's path in the configured eligibility expression, starting at
     * $. anyOf[2] (Value): null.
     */
    "expression_path"?: ((string) | (null));
    /**
     * The eligibility fact evaluated by the condition. Buyer fact values are not included.
     * anyOf[1] (Value): string. The eligibility fact evaluated by the condition. Buyer fact values
     * are not included. anyOf[2] (Value): null.
     */
    "field"?: ((string) | (null));
    /**
     * Whether the condition matched inside a not expression and therefore rejected the method.
     * anyOf[1] (Value): boolean. Whether the condition matched inside a not expression and
     * therefore rejected the method. anyOf[2] (Value): null.
     */
    "negated"?: ((boolean) | (null));
};
/**
 * How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a
 * schedule window.
 */
export type DeliveryEstimateRule = {
    /**
     * Weekly schedule of delivery windows. Set only when `type` is `schedule_window`. Estimate
     * rule for a scheduled-window delivery method, defined by its `availability` schedule.
     */
    "schedule_window"?: DeliveryScheduleWindowRule;
    /**
     * Handling and transit time. Set only when `type` is `transit_time`. Estimate rule giving a
     * delivery method's handling time and transit time as ranges of business days.
     */
    "transit_time"?: DeliveryTransitTimeRule;
    /**
     * How Flint estimates timing. Set the property named by this value. Value enum: "none",
     * "transit_time", "schedule_window".
     */
    "type": "none" | "transit_time" | "schedule_window" | (string & {});
};
export type DeliveryEstimateRulePreviousAttributes = {
    /**
     * Weekly schedule of delivery windows. Set only when `type` is `schedule_window`. anyOf[1]
     * (Value): {@link DeliveryScheduleWindowRulePreviousAttributes}. anyOf[2] (Value): null.
     */
    "schedule_window"?: ((DeliveryScheduleWindowRulePreviousAttributes) | (null));
    /**
     * Handling and transit time. Set only when `type` is `transit_time`. anyOf[1] (Value): {@link
     * DeliveryTransitTimeRulePreviousAttributes}. anyOf[2] (Value): null.
     */
    "transit_time"?: ((DeliveryTransitTimeRulePreviousAttributes) | (null));
    /**
     * How Flint estimates timing. Set the property named by this value. Value enum: "none",
     * "transit_time", "schedule_window". anyOf[1] (Value): string. How Flint estimates timing. Set
     * the property named by this value. Value enum: "none", "transit_time", "schedule_window".
     * anyOf[2] (Value): null.
     */
    "type"?: (("none" | "transit_time" | "schedule_window" | (string & {})) | (null));
};
/**
 * The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit
 * time, or a schedule window.
 */
export type DeliveryEstimateRuleRequestInput = {
    /**
     * Weekly schedule of delivery windows. Set only when `type` is `schedule_window`.
     * Scheduled-window estimate rule you supply for a delivery method, defined by its
     * `availability` schedule.
     */
    "schedule_window"?: DeliveryScheduleWindowRuleRequestInput;
    /**
     * Handling and transit time. Set only when `type` is `transit_time`. Estimate rule giving a
     * delivery method's handling time and transit time as ranges of business days.
     */
    "transit_time"?: DeliveryTransitTimeRuleRequestInput;
    /**
     * How Flint estimates timing. Set the property named by this value. Value enum: "none",
     * "transit_time", "schedule_window".
     */
    "type": "none" | "transit_time" | "schedule_window";
};
/**
 * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
 * bounded by minimum and maximum fees by currency.
 */
export type DeliveryExternalPricingStrategy = {
    /**
     * ID of the delivery rate callback that supplies the price. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id"?: string;
    /**
     * ID of the rate callback revision the method uses. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     */
    "delivery_rate_callback_revision_id"?: string;
    /**
     * Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "maximum_fee_currency_options": Record<string, MoneyValue>;
    /**
     * Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "minimum_fee_currency_options": Record<string, MoneyValue>;
    /**
     * Whether delivery previews call the rate callback. Previews call it only when this setting
     * and the callback's `preview_enabled` setting are both `true`.
     */
    "preview_enabled"?: boolean;
};
export type DeliveryExternalPricingStrategyPreviousAttributes = {
    /**
     * ID of the delivery rate callback that supplies the price. anyOf[1] (Value): string. ID of
     * the delivery rate callback that supplies the price. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". anyOf[2] (Value): null.
     */
    "delivery_rate_callback_id"?: ((string) | (null));
    /**
     * ID of the rate callback revision the method uses. anyOf[1] (Value): string. ID of the rate
     * callback revision the method uses. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". anyOf[2]
     * (Value): null.
     */
    "delivery_rate_callback_revision_id"?: ((string) | (null));
    /**
     * Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * anyOf[1] (Value): Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "maximum_fee_currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * anyOf[1] (Value): Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "minimum_fee_currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * Whether delivery previews call the rate callback. Previews call it only when this setting
     * and the callback's `preview_enabled` setting are both `true`. anyOf[1] (Value): boolean.
     * Whether delivery previews call the rate callback. Previews call it only when this setting
     * and the callback's `preview_enabled` setting are both `true`. anyOf[2] (Value): null.
     */
    "preview_enabled"?: ((boolean) | (null));
};
/** A fixed delivery price, by currency. */
export type DeliveryFixedPricingStrategy = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
};
export type DeliveryFixedPricingStrategyPreviousAttributes = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value.
     * anyOf[1] (Value): Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
};
/** A fixed delivery price by currency, supplied for a delivery method. */
export type DeliveryFixedPricingStrategyRequestInput = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
};
/**
 * Details of a local delivery fulfillment: courier, timing window, instructions, and tracking.
 * Some fields are omitted for credentials that don't act for the verified customer.
 */
export type DeliveryFulfillmentDetails = {
    /** Carrier responsible for the local delivery. */
    "carrier"?: string;
    /**
     * Time at which the courier collected the order. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "courier_pickup_at"?: string;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number;
    /** Delivery network or merchant fleet provider handling the job. maxLength: 255. */
    "courier_provider_name"?: string;
    /** Buyer-safe support number for the courier or merchant fleet. maxLength: 30. */
    "courier_support_phone"?: string;
    /**
     * When the items were delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string;
    /**
     * Time by which the order should be delivered. Passing it does not change status or emit an
     * event automatically; the merchant decides how to follow up. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivery_due_at"?: string;
    /**
     * When the delivery was dispatched, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "dispatched_at"?: string;
    /**
     * Driver-facing notes for the final handoff. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. maxLength: 2048.
     */
    "dropoff_notes"?: string;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_delivery_id"?: string;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "instructions"?: string;
    /**
     * Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified.
     */
    "no_contact"?: boolean;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /**
     * Time at which the order became ready for courier pickup. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string;
    /** Delivery service area assigned to this fulfillment. Example: "boston-north". */
    "service_area_id"?: string;
    /** Timezone used to display the local delivery window. Uses an IANA time zone name. */
    "timezone"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     */
    "tracking_url"?: string;
    /**
     * End of the promised delivery window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the promised delivery window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
};
export type DeliveryFulfillmentDetailsPreviousAttributes = {
    /**
     * Carrier responsible for the local delivery. anyOf[1] (Value): string. Carrier responsible
     * for the local delivery. anyOf[2] (Value): null.
     */
    "carrier"?: ((string) | (null));
    /**
     * Time at which the courier collected the order. anyOf[1] (Value): string. Time at which the
     * courier collected the order. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
     * (Value): null.
     */
    "courier_pickup_at"?: ((string) | (null));
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. anyOf[1] (Value):
     * integer. Width of the promised courier pickup window, from 0 to 86400 seconds. Format:
     * int64. minimum: 0. maximum: 86400. anyOf[2] (Value): null.
     */
    "courier_pickup_window_duration_seconds"?: ((number) | (null));
    /**
     * Delivery network or merchant fleet provider handling the job. anyOf[1] (Value): string.
     * Delivery network or merchant fleet provider handling the job. maxLength: 255. anyOf[2]
     * (Value): null.
     */
    "courier_provider_name"?: ((string) | (null));
    /**
     * Buyer-safe support number for the courier or merchant fleet. anyOf[1] (Value): string.
     * Buyer-safe support number for the courier or merchant fleet. maxLength: 30. anyOf[2]
     * (Value): null.
     */
    "courier_support_phone"?: ((string) | (null));
    /**
     * When the items were delivered, in RFC3339 format. anyOf[1] (Value): string. When the items
     * were delivered, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * anyOf[2] (Value): null.
     */
    "delivered_at"?: ((string) | (null));
    /**
     * Time by which the order should be delivered. Passing it does not change status or emit an
     * event automatically; the merchant decides how to follow up. anyOf[1] (Value): string. Time
     * by which the order should be delivered. Passing it does not change status or emit an event
     * automatically; the merchant decides how to follow up. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "delivery_due_at"?: ((string) | (null));
    /**
     * When the delivery was dispatched, in RFC3339 format. anyOf[1] (Value): string. When the
     * delivery was dispatched, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "dispatched_at"?: ((string) | (null));
    /**
     * Driver-facing notes for the final handoff. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Driver-facing
     * notes for the final handoff. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. maxLength: 2048. anyOf[2] (Value): null.
     */
    "dropoff_notes"?: ((string) | (null));
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. anyOf[1] (Value):
     * string. Stable delivery job ID owned by the courier or merchant dispatch system. maxLength:
     * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_delivery_id"?: ((string) | (null));
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. anyOf[1] (Value): string. Omitted for a checkout session credential that doesn't
     * act for the customer the buyer verified. anyOf[2] (Value): null.
     */
    "instructions"?: ((string) | (null));
    /**
     * Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. anyOf[1] (Value): boolean. Whether the
     * buyer requested a no-contact handoff. Omitted for a checkout session credential that doesn't
     * act for the customer the buyer verified. anyOf[2] (Value): null.
     */
    "no_contact"?: ((boolean) | (null));
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. anyOf[1] (Value):
     * integer. Expected preparation time before courier pickup, from 0 to 86400 seconds. Format:
     * int64. minimum: 0. maximum: 86400. anyOf[2] (Value): null.
     */
    "prep_time_duration_seconds"?: ((number) | (null));
    /**
     * Time at which the order became ready for courier pickup. anyOf[1] (Value): string. Time at
     * which the order became ready for courier pickup. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "ready_at"?: ((string) | (null));
    /**
     * Delivery service area assigned to this fulfillment. anyOf[1] (Value): string. Delivery
     * service area assigned to this fulfillment. Example: "boston-north". anyOf[2] (Value): null.
     */
    "service_area_id"?: ((string) | (null));
    /**
     * Timezone used to display the local delivery window. Uses an IANA time zone name. anyOf[1]
     * (Value): string. Timezone used to display the local delivery window. Uses an IANA time zone
     * name. anyOf[2] (Value): null.
     */
    "timezone"?: ((string) | (null));
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. anyOf[1]
     * (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected.
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. anyOf[2] (Value): null.
     */
    "tracking_url"?: ((string) | (null));
    /**
     * End of the promised delivery window, in RFC3339 format. anyOf[1] (Value): string. End of the
     * promised delivery window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_end_at"?: ((string) | (null));
    /**
     * Start of the promised delivery window, in RFC3339 format. anyOf[1] (Value): string. Start of
     * the promised delivery window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_start_at"?: ((string) | (null));
};
/**
 * The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length
 * limits, supported countries, or offered time windows.
 */
export type DeliveryInputConstraint = {
    /** Values the input must be one of. [] (Value): string. */
    "allowed_values"?: Array<string>;
    /** Earliest time the input can name. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "earliest_at"?: string;
    /** Format the input must follow. */
    "format"?: string;
    /** Latest time the input can name. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "latest_at"?: string;
    /** Most characters the input can have. Format: int32. */
    "maximum_length"?: number;
    /** Fewest characters the input can have. Format: int32. */
    "minimum_length"?: number;
    /**
     * Delivery windows the buyer can choose from. [] (Value): {@link DeliveryWindowRequest}. A
     * time window a buyer can choose for a delivery, with its start, end, price, and the last
     * moment it can be chosen.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /**
     * Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility
     * and rate-table conditions. Only methods that need this address contribute countries.
     * Alternative methods are unioned within each choice group; intersect across groups and, for
     * automatic tax, order.tax.supported_countries. A listed country may still require state,
     * postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions
     * within UA and RU are excluded when address data identifies them. [] (Value): string.
     */
    "supported_countries"?: Array<string>;
    /**
     * Kind of input the requirement asks for. Value enum: "string", "address_field", "email",
     * "phone", "time_window", "coordinate", "caller_supplied_rate".
     */
    "type": "string"
        | "address_field"
        | "email"
        | "phone"
        | "time_window"
        | "coordinate"
        | "caller_supplied_rate"
        | (string & {});
};
export type DeliveryInputConstraintPreviousAttributes = {
    /**
     * Values the input must be one of. anyOf[1] (Value): Array of string. Values the input must be
     * one of. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     */
    "allowed_values"?: ((Array<string>) | (null));
    /**
     * Earliest time the input can name. anyOf[1] (Value): string. Earliest time the input can
     * name. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "earliest_at"?: ((string) | (null));
    /**
     * Format the input must follow. anyOf[1] (Value): string. Format the input must follow.
     * anyOf[2] (Value): null.
     */
    "format"?: ((string) | (null));
    /**
     * Latest time the input can name. anyOf[1] (Value): string. Latest time the input can name.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "latest_at"?: ((string) | (null));
    /**
     * Most characters the input can have. anyOf[1] (Value): integer. Most characters the input can
     * have. Format: int32. anyOf[2] (Value): null.
     */
    "maximum_length"?: ((number) | (null));
    /**
     * Fewest characters the input can have. anyOf[1] (Value): integer. Fewest characters the input
     * can have. Format: int32. anyOf[2] (Value): null.
     */
    "minimum_length"?: ((number) | (null));
    /**
     * Delivery windows the buyer can choose from. anyOf[1] (Value): Array of {@link
     * DeliveryWindowResourcePreviousAttributes}. Delivery windows the buyer can choose from.
     * anyOf[1][] (Value): {@link DeliveryWindowResourcePreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "offered_windows"?: ((Array<DeliveryWindowResourcePreviousAttributes>) | (null));
    /**
     * Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility
     * and rate-table conditions. Only methods that need this address contribute countries.
     * Alternative methods are unioned within each choice group; intersect across groups and, for
     * automatic tax, order.tax.supported_countries. A listed country may still require state,
     * postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions
     * within UA and RU are excluded when address data identifies them. anyOf[1] (Value): Array of
     * string. Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from
     * eligibility and rate-table conditions. Only methods that need this address contribute
     * countries. Alternative methods are unioned within each choice group; intersect across groups
     * and, for automatic tax, order.tax.supported_countries. A listed country may still require
     * state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned
     * regions within UA and RU are excluded when address data identifies them. anyOf[1][] (Value):
     * string. anyOf[2] (Value): null.
     */
    "supported_countries"?: ((Array<string>) | (null));
    /**
     * Kind of input the requirement asks for. Value enum: "string", "address_field", "email",
     * "phone", "time_window", "coordinate", "caller_supplied_rate". anyOf[1] (Value): string. Kind
     * of input the requirement asks for. Value enum: "string", "address_field", "email", "phone",
     * "time_window", "coordinate", "caller_supplied_rate". anyOf[2] (Value): null.
     */
    "type"?: (("string"
        | "address_field"
        | "email"
        | "phone"
        | "time_window"
        | "coordinate"
        | "caller_supplied_rate"
        | (string & {}))
        | (null));
};
/**
 * An input a delivery method needs, such as an address field or time window, with its
 * `field_path`, purpose, and constraint.
 */
export type DeliveryInputRequirement = {
    /**
     * The rules the input must follow. The rules for an input a delivery method needs, chosen by
     * `type`, such as allowed values, length limits, supported countries, or offered time windows.
     */
    "constraint": DeliveryInputConstraint;
    /**
     * Choice groups that need this input. [] (Value): string. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_ids"?: Array<string>;
    /**
     * Unique ID of this requirement. Example:
     * "req_24c2628d965d791d993ab70c2c9f77882cc189e3039ef9ef68bf935e59717580".
     */
    "delivery_input_requirement_id": string;
    /**
     * Delivery methods that need this input. [] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Delivery options that need this input. Omitted when the requirement applies to the choice
     * group or method as a whole. [] (Value): string. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923".
     */
    "delivery_option_ids"?: Array<string>;
    /**
     * Request property to fill in, using the same path as error params. Array templates use [] in
     * place of an index. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.country",
     * "destination_address.state", "destination_address.postal_code", "buyer_location",
     * "buyer_location.address.line1", "buyer_location.address.line2",
     * "buyer_location.address.city", "buyer_location.address.country",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.coordinate", "pickup_location_id", "recipient.name", "recipient.email",
     * "recipient.phone", "choices[].input.delivery_window_id", "method_results".
     */
    "field_path": "destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.country"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.country"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.coordinate"
        | "pickup_location_id"
        | "recipient.name"
        | "recipient.email"
        | "recipient.phone"
        | "choices[].input.delivery_window_id"
        | "method_results"
        | (string & {});
    /** When the input is needed. Value enum: "quote", "selection", "pickup_availability". */
    "purpose": "quote" | "selection" | "pickup_availability" | (string & {});
};
export type DeliveryInputRequirementPreviousAttributes = {
    /**
     * The rules the input must follow. anyOf[1] (Value): {@link
     * DeliveryInputConstraintPreviousAttributes}. anyOf[2] (Value): null.
     */
    "constraint"?: ((DeliveryInputConstraintPreviousAttributes) | (null));
    /**
     * Choice groups that need this input. anyOf[1] (Value): Array of string. Choice groups that
     * need this input. anyOf[1][] (Value): string. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * anyOf[2] (Value): null.
     */
    "delivery_choice_group_ids"?: ((Array<string>) | (null));
    /**
     * Unique ID of this requirement. anyOf[1] (Value): string. Unique ID of this requirement.
     * Example: "req_24c2628d965d791d993ab70c2c9f77882cc189e3039ef9ef68bf935e59717580". anyOf[2]
     * (Value): null.
     */
    "delivery_input_requirement_id"?: ((string) | (null));
    /**
     * Delivery methods that need this input. anyOf[1] (Value): Array of string. Delivery methods
     * that need this input. anyOf[1][] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
     */
    "delivery_method_ids"?: ((Array<string>) | (null));
    /**
     * Delivery options that need this input. Omitted when the requirement applies to the choice
     * group or method as a whole. anyOf[1] (Value): Array of string. Delivery options that need
     * this input. Omitted when the requirement applies to the choice group or method as a whole.
     * anyOf[1][] (Value): string. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". anyOf[2] (Value):
     * null.
     */
    "delivery_option_ids"?: ((Array<string>) | (null));
    /**
     * Request property to fill in, using the same path as error params. Array templates use [] in
     * place of an index. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.country",
     * "destination_address.state", "destination_address.postal_code", "buyer_location",
     * "buyer_location.address.line1", "buyer_location.address.line2",
     * "buyer_location.address.city", "buyer_location.address.country",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.coordinate", "pickup_location_id", "recipient.name", "recipient.email",
     * "recipient.phone", "choices[].input.delivery_window_id", "method_results". anyOf[1] (Value):
     * string. Request property to fill in, using the same path as error params. Array templates
     * use [] in place of an index. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.country",
     * "destination_address.state", "destination_address.postal_code", "buyer_location",
     * "buyer_location.address.line1", "buyer_location.address.line2",
     * "buyer_location.address.city", "buyer_location.address.country",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.coordinate", "pickup_location_id", "recipient.name", "recipient.email",
     * "recipient.phone", "choices[].input.delivery_window_id", "method_results". anyOf[2] (Value):
     * null.
     */
    "field_path"?: (("destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.country"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.country"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.coordinate"
        | "pickup_location_id"
        | "recipient.name"
        | "recipient.email"
        | "recipient.phone"
        | "choices[].input.delivery_window_id"
        | "method_results"
        | (string & {}))
        | (null));
    /**
     * When the input is needed. Value enum: "quote", "selection", "pickup_availability". anyOf[1]
     * (Value): string. When the input is needed. Value enum: "quote", "selection",
     * "pickup_availability". anyOf[2] (Value): null.
     */
    "purpose"?: (("quote" | "selection" | "pickup_availability" | (string & {})) | (null));
};
/**
 * Assigns a quantity of an inventory item at a location to a demand when creating a delivery
 * quote.
 */
export type DeliveryInventoryAssignmentRequest = {
    /** Key of the inventory demand this assignment serves. minLength: 1. */
    "demand_key": string;
    /**
     * ID of the inventory item assigned. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * ID of the Location the stock is assigned from. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/**
 * Assigns a quantity of an inventory item at a location to a demand when creating a delivery
 * quote.
 */
export type DeliveryInventoryAssignmentRequestInput = DeliveryInventoryAssignmentRequest;
/** The inventory reservation held for a delivery selection: its owner, status, and expiry. */
export type DeliveryInventoryReservationSummary = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at": string;
    /**
     * ID of the inventory reservation holding stock for the selection. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_id": string;
    /** Which kind of owner holds the reservation. Value enum: "order". */
    "owner_type": "order" | (string & {});
    /** Whether the reservation is still holding stock. Value enum: "active", "closed". */
    "status": "active" | "closed" | (string & {});
};
/** The locations available to a delivery method. */
export type DeliveryLocationSet = {
    /** Current member Locations. The location IDs in a delivery location set. */
    "configuration": DeliveryLocationSetConfiguration;
    /** Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". */
    "current_delivery_location_set_revision_id": string;
    /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
    "delivery_location_set_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing location set name. */
    "name": string;
    /** Current location set lifecycle status. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Time the location set last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1. */
    "version": number;
};
export type DeliveryLocationSetArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryLocationSetConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_location_set_revision_id"?: ((string) | (null));
            "delivery_location_set_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_location_set.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryLocationSetConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_location_set_revision_id"?: ((string) | (null));
            "delivery_location_set_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_location_set.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_location_set.archived";
});
/**
 * The `delivery_location_set.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryLocationSetArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations. The location IDs in a delivery
     * location set. object.created_at (Required): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.configuration (Optional): {@link
     * DeliveryLocationSetConfigurationPreviousAttributes} or null. Current member Locations.
     * previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryLocationSetConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. Time the location set was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.current_delivery_location_set_revision_id (Optional):
     * string or null. Immutable revision used for new quotes.
     * previous_attributes.current_delivery_location_set_revision_id.anyOf[1] (Value): string.
     * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     * previous_attributes.current_delivery_location_set_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_location_set_id (Optional): string or null. Stable delivery
     * location set ID. previous_attributes.delivery_location_set_id.anyOf[1] (Value): string.
     * Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     * previous_attributes.delivery_location_set_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing location set name. previous_attributes.name.anyOf[1]
     * (Value): string. Merchant-facing location set name. previous_attributes.name.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current location set
     * lifecycle status. Value enum: "active", "archived". previous_attributes.status.anyOf[1]
     * (Value): string. Current location set lifecycle status. Value enum: "active", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. Time the location set last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. Time the location set last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null.
     * Optimistic-concurrency version for location set writes. previous_attributes.version.anyOf[1]
     * (Value): integer. Optimistic-concurrency version for location set writes. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations. The location IDs in a delivery location set. created_at (Required): string.
         * Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_location_set_revision_id (Required): string. Immutable revision used
         * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". delivery_location_set_id
         * (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /** Current member Locations. The location IDs in a delivery location set. */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
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
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryLocationSetConfigurationPreviousAttributes} or null. Current member Locations.
         * configuration.anyOf[1] (Value): {@link
         * DeliveryLocationSetConfigurationPreviousAttributes}. configuration.anyOf[2] (Value):
         * null. created_at (Optional): string or null. Time the location set was created.
         * created_at.anyOf[1] (Value): string. Time the location set was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_location_set_revision_id (Optional): string or null. Immutable revision
         * used for new quotes. current_delivery_location_set_revision_id.anyOf[1] (Value): string.
         * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
         * current_delivery_location_set_revision_id.anyOf[2] (Value): null.
         * delivery_location_set_id (Optional): string or null. Stable delivery location set ID.
         * delivery_location_set_id.anyOf[1] (Value): string. Stable delivery location set ID.
         * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". delivery_location_set_id.anyOf[2] (Value):
         * null. external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing location set name. name.anyOf[1] (Value): string.
         * Merchant-facing location set name. name.anyOf[2] (Value): null. status (Optional):
         * string or null. Current location set lifecycle status. Value enum: "active", "archived".
         * status.anyOf[1] (Value): string. Current location set lifecycle status. Value enum:
         * "active", "archived". status.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. Time the location set last changed. updated_at.anyOf[1] (Value): string. Time the
         * location set last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null.
         * Optimistic-concurrency version for location set writes. version.anyOf[1] (Value):
         * integer. Optimistic-concurrency version for location set writes. Format: uint64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current member Locations. anyOf[1] (Value): {@link
             * DeliveryLocationSetConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryLocationSetConfigurationPreviousAttributes) | (null));
            /**
             * Time the location set was created. anyOf[1] (Value): string. Time the location set
             * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision used for new quotes. anyOf[1] (Value): string. Immutable revision
             * used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". anyOf[2] (Value):
             * null.
             */
            "current_delivery_location_set_revision_id"?: ((string) | (null));
            /**
             * Stable delivery location set ID. anyOf[1] (Value): string. Stable delivery location
             * set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". anyOf[2] (Value): null.
             */
            "delivery_location_set_id"?: ((string) | (null));
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
             * Merchant-facing location set name. anyOf[1] (Value): string. Merchant-facing
             * location set name. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Current location set lifecycle status. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Current location set lifecycle status. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * Time the location set last changed. anyOf[1] (Value): string. Time the location set
             * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for location set writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_location_set.archived". */
    "event_type"?: "delivery_location_set.archived";
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
 * The `delivery_location_set.archived` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryLocationSetArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations. The location IDs in a delivery
     * location set. object.created_at (Required): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.configuration (Optional): {@link
     * DeliveryLocationSetConfigurationPreviousAttributes} or null. Current member Locations.
     * previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryLocationSetConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. Time the location set was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.current_delivery_location_set_revision_id (Optional):
     * string or null. Immutable revision used for new quotes.
     * previous_attributes.current_delivery_location_set_revision_id.anyOf[1] (Value): string.
     * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     * previous_attributes.current_delivery_location_set_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_location_set_id (Optional): string or null. Stable delivery
     * location set ID. previous_attributes.delivery_location_set_id.anyOf[1] (Value): string.
     * Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     * previous_attributes.delivery_location_set_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing location set name. previous_attributes.name.anyOf[1]
     * (Value): string. Merchant-facing location set name. previous_attributes.name.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current location set
     * lifecycle status. Value enum: "active", "archived". previous_attributes.status.anyOf[1]
     * (Value): string. Current location set lifecycle status. Value enum: "active", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. Time the location set last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. Time the location set last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null.
     * Optimistic-concurrency version for location set writes. previous_attributes.version.anyOf[1]
     * (Value): integer. Optimistic-concurrency version for location set writes. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations. The location IDs in a delivery location set. created_at (Required): string.
         * Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_location_set_revision_id (Required): string. Immutable revision used
         * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". delivery_location_set_id
         * (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /** Current member Locations. The location IDs in a delivery location set. */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
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
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryLocationSetConfigurationPreviousAttributes} or null. Current member Locations.
         * configuration.anyOf[1] (Value): {@link
         * DeliveryLocationSetConfigurationPreviousAttributes}. configuration.anyOf[2] (Value):
         * null. created_at (Optional): string or null. Time the location set was created.
         * created_at.anyOf[1] (Value): string. Time the location set was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_location_set_revision_id (Optional): string or null. Immutable revision
         * used for new quotes. current_delivery_location_set_revision_id.anyOf[1] (Value): string.
         * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
         * current_delivery_location_set_revision_id.anyOf[2] (Value): null.
         * delivery_location_set_id (Optional): string or null. Stable delivery location set ID.
         * delivery_location_set_id.anyOf[1] (Value): string. Stable delivery location set ID.
         * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". delivery_location_set_id.anyOf[2] (Value):
         * null. external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing location set name. name.anyOf[1] (Value): string.
         * Merchant-facing location set name. name.anyOf[2] (Value): null. status (Optional):
         * string or null. Current location set lifecycle status. Value enum: "active", "archived".
         * status.anyOf[1] (Value): string. Current location set lifecycle status. Value enum:
         * "active", "archived". status.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. Time the location set last changed. updated_at.anyOf[1] (Value): string. Time the
         * location set last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null.
         * Optimistic-concurrency version for location set writes. version.anyOf[1] (Value):
         * integer. Optimistic-concurrency version for location set writes. Format: uint64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current member Locations. anyOf[1] (Value): {@link
             * DeliveryLocationSetConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryLocationSetConfigurationPreviousAttributes) | (null));
            /**
             * Time the location set was created. anyOf[1] (Value): string. Time the location set
             * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision used for new quotes. anyOf[1] (Value): string. Immutable revision
             * used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". anyOf[2] (Value):
             * null.
             */
            "current_delivery_location_set_revision_id"?: ((string) | (null));
            /**
             * Stable delivery location set ID. anyOf[1] (Value): string. Stable delivery location
             * set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". anyOf[2] (Value): null.
             */
            "delivery_location_set_id"?: ((string) | (null));
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
             * Merchant-facing location set name. anyOf[1] (Value): string. Merchant-facing
             * location set name. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Current location set lifecycle status. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Current location set lifecycle status. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * Time the location set last changed. anyOf[1] (Value): string. Time the location set
             * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for location set writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_location_set.archived". */
    "event_type"?: "delivery_location_set.archived";
});
/** The location IDs in a delivery location set. */
export type DeliveryLocationSetConfiguration = {
    /**
     * IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most
     * 25. [] (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
};
/** The location IDs in a delivery location set. */
export type DeliveryLocationSetConfigurationInput = DeliveryLocationSetConfiguration;
export type DeliveryLocationSetConfigurationPreviousAttributes = {
    /**
     * IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most
     * 25. anyOf[1] (Value): Array of string. IDs of the Locations in the set, from 1 to 1,000. An
     * allocated origin group accepts at most 25. anyOf[1][] (Value): string. minLength: 1.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "location_ids"?: ((Array<string>) | (null));
};
export type DeliveryLocationSetCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_location_set.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_location_set.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_location_set.created";
});
/**
 * The `delivery_location_set.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryLocationSetCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations. The location IDs in a delivery
     * location set. object.created_at (Required): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations. The location IDs in a delivery location set. created_at (Required): string.
         * Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_location_set_revision_id (Required): string. Immutable revision used
         * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". delivery_location_set_id
         * (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /** Current member Locations. The location IDs in a delivery location set. */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
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
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_location_set.created". */
    "event_type"?: "delivery_location_set.created";
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
 * The `delivery_location_set.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryLocationSetCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations. The location IDs in a delivery
     * location set. object.created_at (Required): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations. The location IDs in a delivery location set. created_at (Required): string.
         * Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_location_set_revision_id (Required): string. Immutable revision used
         * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". delivery_location_set_id
         * (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /** Current member Locations. The location IDs in a delivery location set. */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
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
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_location_set.created". */
    "event_type"?: "delivery_location_set.created";
});
/** A page of `DeliveryLocationSet` objects. */
export type DeliveryLocationSetListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * DeliveryLocationSet}. The locations available to a delivery method.
     */
    "data": Array<DeliveryLocationSet>;
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
/** A response containing `DeliveryLocationSet` data. */
export type DeliveryLocationSetResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The locations available
     * to a delivery method.
     */
    "data": DeliveryLocationSet;
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
export type DeliveryLocationSetUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryLocationSetConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_location_set_revision_id"?: ((string) | (null));
            "delivery_location_set_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_location_set.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryLocationSetConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_location_set_revision_id"?: ((string) | (null));
            "delivery_location_set_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_location_set.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_location_set.updated";
});
/**
 * The `delivery_location_set.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryLocationSetUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations. The location IDs in a delivery
     * location set. object.created_at (Required): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.configuration (Optional): {@link
     * DeliveryLocationSetConfigurationPreviousAttributes} or null. Current member Locations.
     * previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryLocationSetConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. Time the location set was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.current_delivery_location_set_revision_id (Optional):
     * string or null. Immutable revision used for new quotes.
     * previous_attributes.current_delivery_location_set_revision_id.anyOf[1] (Value): string.
     * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     * previous_attributes.current_delivery_location_set_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_location_set_id (Optional): string or null. Stable delivery
     * location set ID. previous_attributes.delivery_location_set_id.anyOf[1] (Value): string.
     * Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     * previous_attributes.delivery_location_set_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing location set name. previous_attributes.name.anyOf[1]
     * (Value): string. Merchant-facing location set name. previous_attributes.name.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current location set
     * lifecycle status. Value enum: "active", "archived". previous_attributes.status.anyOf[1]
     * (Value): string. Current location set lifecycle status. Value enum: "active", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. Time the location set last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. Time the location set last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null.
     * Optimistic-concurrency version for location set writes. previous_attributes.version.anyOf[1]
     * (Value): integer. Optimistic-concurrency version for location set writes. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations. The location IDs in a delivery location set. created_at (Required): string.
         * Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_location_set_revision_id (Required): string. Immutable revision used
         * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". delivery_location_set_id
         * (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /** Current member Locations. The location IDs in a delivery location set. */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
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
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryLocationSetConfigurationPreviousAttributes} or null. Current member Locations.
         * configuration.anyOf[1] (Value): {@link
         * DeliveryLocationSetConfigurationPreviousAttributes}. configuration.anyOf[2] (Value):
         * null. created_at (Optional): string or null. Time the location set was created.
         * created_at.anyOf[1] (Value): string. Time the location set was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_location_set_revision_id (Optional): string or null. Immutable revision
         * used for new quotes. current_delivery_location_set_revision_id.anyOf[1] (Value): string.
         * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
         * current_delivery_location_set_revision_id.anyOf[2] (Value): null.
         * delivery_location_set_id (Optional): string or null. Stable delivery location set ID.
         * delivery_location_set_id.anyOf[1] (Value): string. Stable delivery location set ID.
         * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". delivery_location_set_id.anyOf[2] (Value):
         * null. external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing location set name. name.anyOf[1] (Value): string.
         * Merchant-facing location set name. name.anyOf[2] (Value): null. status (Optional):
         * string or null. Current location set lifecycle status. Value enum: "active", "archived".
         * status.anyOf[1] (Value): string. Current location set lifecycle status. Value enum:
         * "active", "archived". status.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. Time the location set last changed. updated_at.anyOf[1] (Value): string. Time the
         * location set last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null.
         * Optimistic-concurrency version for location set writes. version.anyOf[1] (Value):
         * integer. Optimistic-concurrency version for location set writes. Format: uint64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current member Locations. anyOf[1] (Value): {@link
             * DeliveryLocationSetConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryLocationSetConfigurationPreviousAttributes) | (null));
            /**
             * Time the location set was created. anyOf[1] (Value): string. Time the location set
             * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision used for new quotes. anyOf[1] (Value): string. Immutable revision
             * used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". anyOf[2] (Value):
             * null.
             */
            "current_delivery_location_set_revision_id"?: ((string) | (null));
            /**
             * Stable delivery location set ID. anyOf[1] (Value): string. Stable delivery location
             * set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". anyOf[2] (Value): null.
             */
            "delivery_location_set_id"?: ((string) | (null));
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
             * Merchant-facing location set name. anyOf[1] (Value): string. Merchant-facing
             * location set name. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Current location set lifecycle status. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Current location set lifecycle status. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * Time the location set last changed. anyOf[1] (Value): string. Time the location set
             * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for location set writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_location_set.updated". */
    "event_type"?: "delivery_location_set.updated";
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
 * The `delivery_location_set.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryLocationSetUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations. The location IDs in a delivery
     * location set. object.created_at (Required): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.configuration (Optional): {@link
     * DeliveryLocationSetConfigurationPreviousAttributes} or null. Current member Locations.
     * previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryLocationSetConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. Time the location set was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.current_delivery_location_set_revision_id (Optional):
     * string or null. Immutable revision used for new quotes.
     * previous_attributes.current_delivery_location_set_revision_id.anyOf[1] (Value): string.
     * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     * previous_attributes.current_delivery_location_set_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_location_set_id (Optional): string or null. Stable delivery
     * location set ID. previous_attributes.delivery_location_set_id.anyOf[1] (Value): string.
     * Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     * previous_attributes.delivery_location_set_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing location set name. previous_attributes.name.anyOf[1]
     * (Value): string. Merchant-facing location set name. previous_attributes.name.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current location set
     * lifecycle status. Value enum: "active", "archived". previous_attributes.status.anyOf[1]
     * (Value): string. Current location set lifecycle status. Value enum: "active", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. Time the location set last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. Time the location set last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null.
     * Optimistic-concurrency version for location set writes. previous_attributes.version.anyOf[1]
     * (Value): integer. Optimistic-concurrency version for location set writes. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations. The location IDs in a delivery location set. created_at (Required): string.
         * Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_location_set_revision_id (Required): string. Immutable revision used
         * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". delivery_location_set_id
         * (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /** Current member Locations. The location IDs in a delivery location set. */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
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
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryLocationSetConfigurationPreviousAttributes} or null. Current member Locations.
         * configuration.anyOf[1] (Value): {@link
         * DeliveryLocationSetConfigurationPreviousAttributes}. configuration.anyOf[2] (Value):
         * null. created_at (Optional): string or null. Time the location set was created.
         * created_at.anyOf[1] (Value): string. Time the location set was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_location_set_revision_id (Optional): string or null. Immutable revision
         * used for new quotes. current_delivery_location_set_revision_id.anyOf[1] (Value): string.
         * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
         * current_delivery_location_set_revision_id.anyOf[2] (Value): null.
         * delivery_location_set_id (Optional): string or null. Stable delivery location set ID.
         * delivery_location_set_id.anyOf[1] (Value): string. Stable delivery location set ID.
         * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". delivery_location_set_id.anyOf[2] (Value):
         * null. external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing location set name. name.anyOf[1] (Value): string.
         * Merchant-facing location set name. name.anyOf[2] (Value): null. status (Optional):
         * string or null. Current location set lifecycle status. Value enum: "active", "archived".
         * status.anyOf[1] (Value): string. Current location set lifecycle status. Value enum:
         * "active", "archived". status.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. Time the location set last changed. updated_at.anyOf[1] (Value): string. Time the
         * location set last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null.
         * Optimistic-concurrency version for location set writes. version.anyOf[1] (Value):
         * integer. Optimistic-concurrency version for location set writes. Format: uint64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current member Locations. anyOf[1] (Value): {@link
             * DeliveryLocationSetConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryLocationSetConfigurationPreviousAttributes) | (null));
            /**
             * Time the location set was created. anyOf[1] (Value): string. Time the location set
             * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision used for new quotes. anyOf[1] (Value): string. Immutable revision
             * used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". anyOf[2] (Value):
             * null.
             */
            "current_delivery_location_set_revision_id"?: ((string) | (null));
            /**
             * Stable delivery location set ID. anyOf[1] (Value): string. Stable delivery location
             * set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". anyOf[2] (Value): null.
             */
            "delivery_location_set_id"?: ((string) | (null));
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
             * Merchant-facing location set name. anyOf[1] (Value): string. Merchant-facing
             * location set name. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Current location set lifecycle status. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Current location set lifecycle status. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * Time the location set last changed. anyOf[1] (Value): string. Time the location set
             * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for location set writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_location_set.updated". */
    "event_type"?: "delivery_location_set.updated";
});
export type DeliveryLocationSetsCreateParams = (InputValue<CreateDeliveryLocationSetRequestInput>)
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
export type DeliveryLocationSetsDeleteParams = {
    /**
     * Optional current resource version. The delete is rejected if the resource changed after this
     * version was read. Format: uint64. minimum: 1. maximum: 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
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
export type DeliveryLocationSetsGetParams = DisputesAcceptParams;
export type DeliveryLocationSetsListParams = {
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
     * Search across delivery_location_set_id, name, and external_reference_id. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as dls_01. maxLength: 255.
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
     * "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "active", "archived". anyOf[1][] (Value): string. Value enum: "active",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
    /**
     * Filter by an active current method that references this resource. pattern:
     * ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: InputValue<string>;
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
export type DeliveryLocationSetsUpdateParams = (UpdateDeliveryLocationSetRequestInput)
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
/** A pickup location shown on a delivery option: its name, address, instructions, and timezone. */
export type DeliveryLocationSummaryResource = {
    /**
     * Street address of the Location. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
    /** Buyer-visible pickup instructions for the Location. */
    "instructions"?: string;
    /** ID of the Location buyers can collect from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /** Name of the Location, as buyers see it when choosing pickup. */
    "name": string;
    /** Uses an IANA time zone name. */
    "timezone"?: string;
};
export type DeliveryLocationSummaryResourcePreviousAttributes = {
    /**
     * Street address of the Location. anyOf[1] (Value): {@link AddressPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "address"?: ((AddressPreviousAttributes) | (null));
    /**
     * Buyer-visible pickup instructions for the Location. anyOf[1] (Value): string. Buyer-visible
     * pickup instructions for the Location. anyOf[2] (Value): null.
     */
    "instructions"?: ((string) | (null));
    /**
     * ID of the Location buyers can collect from. anyOf[1] (Value): string. ID of the Location
     * buyers can collect from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * Name of the Location, as buyers see it when choosing pickup. anyOf[1] (Value): string. Name
     * of the Location, as buyers see it when choosing pickup. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Uses an IANA time zone name. anyOf[1] (Value): string. Uses an IANA time zone name. anyOf[2]
     * (Value): null.
     */
    "timezone"?: ((string) | (null));
};
/**
 * A merchant-only diagnostic explaining why a delivery method produced no option, with its
 * outcome, recommended action, and eligibility mismatches.
 */
export type DeliveryMerchantDiagnostic = {
    /**
     * Stable reason the method did not produce an option. - `eligibility_no_match`: The configured
     * eligibility expression excluded the method. - `method_unavailable`: The method was
     * unavailable for this evaluation. - `input_required`: The buyer or caller must provide more
     * information to evaluate the method. - `checkout_context_required`: A checkout session is
     * required to evaluate the method. - `dependency_failure`: Flint could not check whether the
     * method is available. - `dependency_revoked`: The method revision or a dependency was
     * revoked. Publish a corrected revision, rotate the callback signing secret, or choose another
     * method. Value enum: "eligibility_no_match", "method_unavailable", "input_required",
     * "checkout_context_required", "dependency_failure", "dependency_revoked".
     */
    "code": "eligibility_no_match"
        | "method_unavailable"
        | "input_required"
        | "checkout_context_required"
        | "dependency_failure"
        | "dependency_revoked"
        | (string & {});
    /**
     * ID of the method that was evaluated. Omitted when the diagnostic is about a Location.
     * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: string;
    /**
     * ID of the method revision that was evaluated. Omitted when the diagnostic is about a
     * Location. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id"?: string;
    /**
     * ID to quote when you ask Flint about this diagnostic. Example:
     * "ddiag_01KEZF7C002JPVD08857RGDGPC".
     */
    "diagnostic_id": string;
    /**
     * Configured eligibility predicates that conclusively rejected the method. Present only for
     * eligibility_no_match. [] (Value): {@link DeliveryEligibilityMismatch}. An eligibility
     * condition that rejected a delivery method, with its condition type, its path in the
     * expression, and the field tested.
     */
    "eligibility_mismatches"?: Array<DeliveryEligibilityMismatch>;
    /** Time Flint recorded this diagnostic. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * What happened when Flint evaluated the method or Location. Value enum: "unavailable",
     * "input_required", "cannot_calculate", "requires_checkout_context".
     */
    "outcome": "unavailable" | "input_required" | "cannot_calculate" | "requires_checkout_context" | (string & {});
    /**
     * What the merchant can do to get an option. Value enum: "review_configuration",
     * "provide_input", "create_checkout", "retry".
     */
    "recommended_action": "review_configuration" | "provide_input" | "create_checkout" | "retry" | (string & {});
    /** Whether trying again later can succeed. */
    "retryable": boolean;
    /** What the diagnostic is about. Value enum: "method". */
    "scope": "method" | (string & {});
    /** Plain-language explanation for the merchant. */
    "summary": string;
};
export type DeliveryMerchantDiagnosticPreviousAttributes = {
    /**
     * Stable reason the method did not produce an option. - `eligibility_no_match`: The configured
     * eligibility expression excluded the method. - `method_unavailable`: The method was
     * unavailable for this evaluation. - `input_required`: The buyer or caller must provide more
     * information to evaluate the method. - `checkout_context_required`: A checkout session is
     * required to evaluate the method. - `dependency_failure`: Flint could not check whether the
     * method is available. - `dependency_revoked`: The method revision or a dependency was
     * revoked. Publish a corrected revision, rotate the callback signing secret, or choose another
     * method. Value enum: "eligibility_no_match", "method_unavailable", "input_required",
     * "checkout_context_required", "dependency_failure", "dependency_revoked". anyOf[1] (Value):
     * string. Stable reason the method did not produce an option. - `eligibility_no_match`: The
     * configured eligibility expression excluded the method. - `method_unavailable`: The method
     * was unavailable for this evaluation. - `input_required`: The buyer or caller must provide
     * more information to evaluate the method. - `checkout_context_required`: A checkout session
     * is required to evaluate the method. - `dependency_failure`: Flint could not check whether
     * the method is available. - `dependency_revoked`: The method revision or a dependency was
     * revoked. Publish a corrected revision, rotate the callback signing secret, or choose another
     * method. Value enum: "eligibility_no_match", "method_unavailable", "input_required",
     * "checkout_context_required", "dependency_failure", "dependency_revoked". anyOf[2] (Value):
     * null.
     */
    "code"?: (("eligibility_no_match"
        | "method_unavailable"
        | "input_required"
        | "checkout_context_required"
        | "dependency_failure"
        | "dependency_revoked"
        | (string & {}))
        | (null));
    /**
     * ID of the method that was evaluated. Omitted when the diagnostic is about a Location.
     * anyOf[1] (Value): string. ID of the method that was evaluated. Omitted when the diagnostic
     * is about a Location. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
     */
    "delivery_method_id"?: ((string) | (null));
    /**
     * ID of the method revision that was evaluated. Omitted when the diagnostic is about a
     * Location. anyOf[1] (Value): string. ID of the method revision that was evaluated. Omitted
     * when the diagnostic is about a Location. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * anyOf[2] (Value): null.
     */
    "delivery_method_revision_id"?: ((string) | (null));
    /**
     * ID to quote when you ask Flint about this diagnostic. anyOf[1] (Value): string. ID to quote
     * when you ask Flint about this diagnostic. Example: "ddiag_01KEZF7C002JPVD08857RGDGPC".
     * anyOf[2] (Value): null.
     */
    "diagnostic_id"?: ((string) | (null));
    /**
     * Configured eligibility predicates that conclusively rejected the method. Present only for
     * eligibility_no_match. anyOf[1] (Value): Array of {@link
     * DeliveryEligibilityMismatchPreviousAttributes}. Configured eligibility predicates that
     * conclusively rejected the method. Present only for eligibility_no_match. anyOf[1][] (Value):
     * {@link DeliveryEligibilityMismatchPreviousAttributes}. anyOf[2] (Value): null.
     */
    "eligibility_mismatches"?: ((Array<DeliveryEligibilityMismatchPreviousAttributes>) | (null));
    /**
     * Time Flint recorded this diagnostic. anyOf[1] (Value): string. Time Flint recorded this
     * diagnostic. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "occurred_at"?: ((string) | (null));
    /**
     * What happened when Flint evaluated the method or Location. Value enum: "unavailable",
     * "input_required", "cannot_calculate", "requires_checkout_context". anyOf[1] (Value): string.
     * What happened when Flint evaluated the method or Location. Value enum: "unavailable",
     * "input_required", "cannot_calculate", "requires_checkout_context". anyOf[2] (Value): null.
     */
    "outcome"?: (("unavailable" | "input_required" | "cannot_calculate" | "requires_checkout_context" | (string & {}))
        | (null));
    /**
     * What the merchant can do to get an option. Value enum: "review_configuration",
     * "provide_input", "create_checkout", "retry". anyOf[1] (Value): string. What the merchant can
     * do to get an option. Value enum: "review_configuration", "provide_input", "create_checkout",
     * "retry". anyOf[2] (Value): null.
     */
    "recommended_action"?: (("review_configuration" | "provide_input" | "create_checkout" | "retry" | (string & {})) | (null));
    /**
     * Whether trying again later can succeed. anyOf[1] (Value): boolean. Whether trying again
     * later can succeed. anyOf[2] (Value): null.
     */
    "retryable"?: ((boolean) | (null));
    /**
     * What the diagnostic is about. Value enum: "method". anyOf[1] (Value): string. What the
     * diagnostic is about. Value enum: "method". anyOf[2] (Value): null.
     */
    "scope"?: (("method" | (string & {})) | (null));
    /**
     * Plain-language explanation for the merchant. anyOf[1] (Value): string. Plain-language
     * explanation for the merchant. anyOf[2] (Value): null.
     */
    "summary"?: ((string) | (null));
};
/** A configured shipping, pickup, or local delivery option. */
export type DeliveryMethod = {
    /**
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes.
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
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B".
     */
    "delivery_revocation_id": string | null;
    /** Optional buyer-facing description. */
    "description"?: string;
    /** Ascending display order among methods. Format: int32. */
    "display_position": number;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing method name. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * How many subscriptions use this method, by status. Delivery usage counts by stored status,
     * with separate subsets for active subscriptions that are canceling or on billing hold.
     */
    "subscription_counts": SubscriptionCounts;
    /** Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup". */
    "type": "shipment" | "local_delivery" | "pickup" | (string & {});
    /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
    "version": number;
};
export type DeliveryMethodActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    "event_type"?: "delivery_method.activated";
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
    "event_type"?: "delivery_method.activated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_method.activated";
});
/**
 * The `delivery_method.activated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryMethodActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "delivery_method.activated". */
    "event_type"?: "delivery_method.activated";
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
 * The `delivery_method.activated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type DeliveryMethodActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "delivery_method.activated". */
    "event_type"?: "delivery_method.activated";
});
export type DeliveryMethodArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    "event_type"?: "delivery_method.archived";
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
    "event_type"?: "delivery_method.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_method.archived";
});
/**
 * The `delivery_method.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryMethodArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "delivery_method.archived". */
    "event_type"?: "delivery_method.archived";
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
 * The `delivery_method.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryMethodArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "delivery_method.archived". */
    "event_type"?: "delivery_method.archived";
});
/**
 * How a delivery method works: its origin, pricing, eligibility, timing estimate, tax settings,
 * recipient requirements, and option lifetimes.
 */
export type DeliveryMethodConfiguration = {
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
     * store for pickup. `null` when the method inherits the default delivery tax category from
     * settings. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category": "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpression;
    /**
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. How a delivery method estimates timing, chosen by `type`: no estimate, a
     * transit time, or a schedule window.
     */
    "estimate": DeliveryEstimateRule;
    /**
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds": number;
    /**
     * Where delivery starts. A method can use a fixed location or a delivery location set;
     * origin.type determines allocation or buyer pickup behavior. Where a delivery method starts,
     * chosen by `type`: a fixed location, an allocated group of locations, or a collection of
     * pickup locations.
     */
    "origin": DeliveryMethodOriginSelector;
    /**
     * How Flint calculates the delivery charge. How a delivery method sets its price, selected by
     * `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`,
     * `callback`, or `caller_supplied`) is set.
     */
    "pricing": DeliveryPricingStrategy;
    /**
     * Buyer-visible structured details supplied by the merchant. instructions (Optional): string.
     * Buyer-visible instructions for this method. maxLength: 2048. pickup_mode (Optional): string.
     * Required for pickup methods and rejected for other method types. Value enum: "in_store",
     * "curbside", "locker", "other". service_level (Optional): string. Buyer-visible service
     * level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local
     * delivery accepts on_demand, same_day, scheduled. Value enum: "economy", "standard",
     * "expedited", "express", "overnight", "same_day", "on_demand", "scheduled".
     */
    "public_details"?: {
        /** Buyer-visible instructions for this method. maxLength: 2048. */
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
    "selection_guarantee_seconds": number;
    /**
     * Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable.
     * Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null
     * to clear it back to inheriting. `null` when the method inherits
     * `settings.tax.default_delivery_taxable`.
     */
    "taxable": boolean | null;
};
/**
 * The configuration you supply when creating a delivery method. `origin` and `pricing` are
 * required.
 */
export type DeliveryMethodConfigurationCreateRequest = ({
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
     * How Flint calculates the delivery charge. The pricing strategy you supply when creating a
     * delivery method. Set `type` and the matching property.
     */
    "pricing": DeliveryPricingStrategyCreateRequest;
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
     * Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable.
     * Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null
     * to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
/**
 * The configuration you supply when creating a delivery method. `origin` and `pricing` are
 * required.
 */
export type DeliveryMethodConfigurationCreateRequestInput = ({
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
     * How Flint calculates the delivery charge. The pricing strategy you supply when creating a
     * delivery method. Set `type` and the matching property.
     */
    "pricing": DeliveryPricingStrategyCreateRequestInput;
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
     * Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable.
     * Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null
     * to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
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
export type DeliveryMethodConfigurationPatchRequest = {
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
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Replaced as a whole: send every field you want to keep. Conditions that decide where this
     * method is offered. Null removes the conditions, so the method is offered everywhere the
     * merchant serves. anyOf[1] (Value): {@link DeliveryEligibilityExpressionRequest}. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes. anyOf[2] (Value): null.
     */
    "eligibility"?: ((DeliveryEligibilityExpressionRequest) | (null) | (unknown));
    /**
     * Replaced as a whole: send every field you want to keep. The buyer-visible delivery or pickup
     * estimate. Use type none when the merchant makes no timing promise. Null restores type none,
     * when the pricing type allows it. schedule_window (Optional): {@link
     * DeliveryScheduleWindowRule}. Weekly schedule of delivery windows. Set only when `type` is
     * `schedule_window`. Scheduled-window estimate rule you supply for a delivery method, defined
     * by its `availability` schedule. transit_time (Optional): {@link DeliveryTransitTimeRule}.
     * Handling and transit time. Set only when `type` is `transit_time`. Estimate rule giving a
     * delivery method's handling time and transit time as ranges of business days. type
     * (Required): string. How Flint estimates timing. Set the property named by this value. Value
     * enum: "none", "transit_time", "schedule_window".
     */
    "estimate"?: {
        /**
         * Weekly schedule of delivery windows. Set only when `type` is `schedule_window`.
         * Scheduled-window estimate rule you supply for a delivery method, defined by its
         * `availability` schedule.
         */
        "schedule_window"?: DeliveryScheduleWindowRule;
        /**
         * Handling and transit time. Set only when `type` is `transit_time`. Estimate rule giving
         * a delivery method's handling time and transit time as ranges of business days.
         */
        "transit_time"?: DeliveryTransitTimeRule;
        /**
         * How Flint estimates timing. Set the property named by this value. Value enum: "none",
         * "transit_time", "schedule_window".
         */
        "type": "none" | "transit_time" | "schedule_window" | (string & {});
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
    "origin"?: DeliveryMethodOriginSelectorRequest;
    /**
     * Replaced as a whole: send every field you want to keep. How Flint calculates the delivery
     * charge. Null is invalid. The pricing strategy you supply when updating a delivery method.
     * Set `type` and the matching property.
     */
    "pricing"?: DeliveryPricingStrategyRequest;
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
        | "buyer_location.coordinate"
        | (string & {})>;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Use [] to clear it. Null is invalid. [] (Value): {@link
     * DeliveryRecipientRequirement}. Says whether a recipient field (`name`, `email`, or `phone`)
     * is required for a delivery method, and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /**
     * How long after evaluation Flint guarantees a selected price, when that is later than the
     * option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table
     * prices for a cart without tracked inventory hold until the checkout's calculation expiry.
     * Null restores 0, which uses the option expiry. Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: number | null;
    /**
     * Whether the delivery charge is taxable. Null follows tax.default_delivery_taxable in the
     * merchant's settings.
     */
    "taxable"?: boolean | null;
};
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
     * Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable.
     * Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null
     * to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
