import type {
    DeliveryCountryConditionInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryEligibilityExpression
} from './types-14.js';
import type {
    DeliveryPostalCodeConditionInput,
    DeliveryPricingStrategy,
    DeliveryMethodOriginSelectorRequest,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryMethodOriginSelectorPickupLocationCollection
} from './types-16.js';
import type { DeliveryRadiusConditionInput, DeliveryRecipientRequirement, DeliveryRecipientRequirementInput } from './types-18.js';
import type {
    DeliveryStateConditionInput,
    DeliveryWindowTimeConditionInput,
    DeliveryZoneConditionInput,
    DeliveryScheduleWindowRule,
    DeliveryTransitTimeRule,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryTransitTimeRuleRequestInput,
    DeliveryWindowRequest
} from './types-19.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryLocationSetRequestInput } from './types-7.js';
import type { UpdateDeliveryLocationSetRequestInput } from './types-58.js';
import type { Address } from './types-0.js';
import type { SubscriptionCounts } from './types-54.js';
import type { BuyerInstructionsConfig, BuyerInstructionsConfigRequestInput } from './types-2.js';
import type {
    DeliveryPricingStrategyCreateRequest,
    DeliveryPricingStrategyCreateRequestInput,
    DeliveryPricingStrategyRequest,
    DeliveryPricingStrategyRequestInput
} from './types-17.js';
/**
 * A boolean expression containing exactly one operator or typed condition at each node.
 * Expressions support at most 8 levels and 100 total nodes.
 */
export type DeliveryEligibilityExpressionInput = {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all": Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any": Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not": DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone": DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country": DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code": DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius": DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time": DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email": DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
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
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase": DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionInput;
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
/**
 * How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a
 * schedule window.
 */
export type DeliveryEstimateRule = {
    /**
     * Estimate rule for a scheduled-window delivery method, defined by its `availability`
     * schedule.
     */
    "schedule_window"?: DeliveryScheduleWindowRule;
    /**
     * Estimate rule giving a delivery method's handling time and transit time as ranges of
     * business days.
     */
    "transit_time"?: DeliveryTransitTimeRule;
    /** Value enum: "none", "transit_time", "schedule_window". */
    "type": "none" | "transit_time" | "schedule_window" | (string & {});
};
/**
 * The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit
 * time, or a schedule window.
 */
export type DeliveryEstimateRuleRequestInput = {
    /**
     * Scheduled-window estimate rule you supply for a delivery method, defined by its
     * `availability` schedule.
     */
    "schedule_window"?: DeliveryScheduleWindowRuleRequestInput;
    /**
     * Estimate rule giving a delivery method's handling time and transit time as ranges of
     * business days.
     */
    "transit_time"?: DeliveryTransitTimeRuleRequestInput;
    /** Value enum: "none", "transit_time", "schedule_window". */
    "type": "none" | "transit_time" | "schedule_window";
};
/**
 * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
 * bounded by minimum and maximum fees by currency.
 */
export type DeliveryExternalPricingStrategy = {
    "delivery_rate_callback_id"?: string;
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
    "preview_enabled"?: boolean;
};
/** A fixed delivery price, by currency. */
export type DeliveryFixedPricingStrategy = {
    /**
     *  * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
};
/** A fixed delivery price by currency, supplied for a delivery method. */
export type DeliveryFixedPricingStrategyRequestInput = {
    /**
     *  * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
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
    /** Time at which the courier collected the order. Format: date-time. */
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
    /** When the items were delivered, in RFC3339 format. Format: date-time. */
    "delivered_at"?: string;
    /** When the delivery was dispatched, in RFC3339 format. Format: date-time. */
    "dispatched_at"?: string;
    /**
     * Driver-facing notes for the final handoff. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. maxLength: 2048.
     */
    "dropoff_notes"?: string;
    /** Deadline after which an undelivered job should enter merchant review. Format: date-time. */
    "expires_at"?: string;
    /** Stable delivery job ID owned by the courier or merchant dispatch system. maxLength: 255. */
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
    /** Time at which the order became ready for courier pickup. Format: date-time. */
    "ready_at"?: string;
    /** Delivery service area assigned to this fulfillment. */
    "service_area_id"?: string;
    /** Timezone used to display the local delivery window. */
    "timezone"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     */
    "tracking_url"?: string;
    /** End of the promised delivery window, in RFC3339 format. Format: date-time. */
    "window_end_at"?: string;
    /** Start of the promised delivery window, in RFC3339 format. Format: date-time. */
    "window_start_at"?: string;
};
/**
 * The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length
 * limits, supported countries, or offered time windows.
 */
export type DeliveryInputConstraint = {
    /**  [] (Value): string. */
    "allowed_values"?: Array<string>;
    /** RFC3339 timestamp. Format: date-time. */
    "earliest_at"?: string;
    "format"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "latest_at"?: string;
    /** Format: int32. */
    "maximum_length"?: number;
    /** Format: int32. */
    "minimum_length"?: number;
    /**
     *  [] (Value): {@link DeliveryWindowRequest}. A time window a buyer can choose for a delivery,
     * with its start, end, price, and the last moment it can be chosen.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /**  [] (Value): string. */
    "supported_countries"?: Array<string>;
    /**
     * Value enum: "string", "address_field", "email", "phone", "time_window", "coordinate",
     * "caller_supplied_rate".
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
/**
 * An input a delivery method needs, such as an address field or time window, with its
 * `field_path`, purpose, and constraint.
 */
export type DeliveryInputRequirement = {
    /**
     * The rules for an input a delivery method needs, chosen by `type`, such as allowed values,
     * length limits, supported countries, or offered time windows.
     */
    "constraint": DeliveryInputConstraint;
    /**  [] (Value): string. */
    "delivery_choice_group_ids"?: Array<string>;
    "delivery_input_requirement_id": string;
    /**  [] (Value): string. */
    "delivery_method_ids"?: Array<string>;
    /**  [] (Value): string. */
    "delivery_option_ids"?: Array<string>;
    /**
     * Value enum: "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.country", "destination_address.state",
     * "destination_address.postal_code", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.country",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.coordinate",
     * "recipient.name", "recipient.email", "recipient.phone",
     * "choices[].input.delivery_window_id", "caller_supplied_rates".
     */
    "field_path": "destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.country"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.country"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.coordinate"
        | "recipient.name"
        | "recipient.email"
        | "recipient.phone"
        | "choices[].input.delivery_window_id"
        | "caller_supplied_rates"
        | (string & {});
    /** Value enum: "quote", "selection", "pickup_availability". */
    "purpose": "quote" | "selection" | "pickup_availability" | (string & {});
};
/**
 * Assigns a quantity of an inventory item at a location to a demand when creating a delivery
 * quote.
 */
export type DeliveryInventoryAssignmentRequest = {
    /** minLength: 1. */
    "demand_key": string;
    /** minLength: 1. */
    "inventory_item_id": string;
    /** minLength: 1. */
    "location_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/**
 * Assigns a quantity of an inventory item at a location to a demand when creating a delivery
 * quote.
 */
export type DeliveryInventoryAssignmentRequestInput = DeliveryInventoryAssignmentRequest;
/**
 * The inventory reservation held for a delivery selection: its owner, status, expiry, and the next
 * action required.
 */
export type DeliveryInventoryReservationSummary = {
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    "inventory_reservation_id": string;
    /** Value enum: "delivery_selection", "payment_attempt", "order_balance_hold". */
    "owner_type": "delivery_selection" | "payment_attempt" | "order_balance_hold" | (string & {});
    /** Value enum: "none", "retry_payment", "replace_selection", "contact_merchant". */
    "required_next_action"?: "none" | "retry_payment" | "replace_selection" | "contact_merchant" | (string & {});
    /** Value enum: "active", "closed". */
    "status": "active" | "closed" | (string & {});
};
/** The locations available to a delivery method. */
export type DeliveryLocationSet = {
    /**
     * Current member Locations and selection rules. The location IDs in a delivery location set.
     */
    "configuration": DeliveryLocationSetConfiguration;
    /** Time the location set was created. Format: date-time. */
    "created_at": string;
    /** Immutable revision used for new quotes. */
    "current_delivery_location_set_revision_id": string;
    /** Stable delivery location set ID. */
    "delivery_location_set_id": string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
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
    /** Time the location set last changed. Format: date-time. */
    "updated_at": string;
    /** Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1. */
    "version": number;
};
export type DeliveryLocationSetActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.activated";
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
    "event_type": "delivery_location_set.activated";
});
/**
 * The `delivery_location_set.activated` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type DeliveryLocationSetActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryLocationSet}. The locations available to a delivery
     * method.
     */
    "data"?: {
        /** The locations available to a delivery method. */
        "object": DeliveryLocationSet;
    };
    /** Value enum: "delivery_location_set.activated". */
    "event_type"?: "delivery_location_set.activated";
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
 * The `delivery_location_set.activated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryLocationSetActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryLocationSet}. The locations available to a delivery
     * method.
     */
    "data"?: {
        /** The locations available to a delivery method. */
        "object": DeliveryLocationSet;
    };
    /** Value enum: "delivery_location_set.activated". */
    "event_type"?: "delivery_location_set.activated";
});
export type DeliveryLocationSetArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.archived";
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
    "event_type": "delivery_location_set.archived";
});
/**
 * The `delivery_location_set.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryLocationSetArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryLocationSet}. The locations available to a delivery
     * method.
     */
    "data"?: {
        /** The locations available to a delivery method. */
        "object": DeliveryLocationSet;
    };
    /** Value enum: "delivery_location_set.archived". */
    "event_type"?: "delivery_location_set.archived";
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
 * The `delivery_location_set.archived` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryLocationSetArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryLocationSet}. The locations available to a delivery
     * method.
     */
    "data"?: {
        /** The locations available to a delivery method. */
        "object": DeliveryLocationSet;
    };
    /** Value enum: "delivery_location_set.archived". */
    "event_type"?: "delivery_location_set.archived";
});
/** The location IDs in a delivery location set. */
export type DeliveryLocationSetConfiguration = {
    /**  [] (Value): string. minLength: 1. */
    "location_ids": Array<string>;
};
/** The location IDs in a delivery location set. */
export type DeliveryLocationSetConfigurationInput = DeliveryLocationSetConfiguration;
export type DeliveryLocationSetCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.created";
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
    "event_type": "delivery_location_set.created";
});
/**
 * The `delivery_location_set.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryLocationSetCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryLocationSet}. The locations available to a delivery
     * method.
     */
    "data"?: {
        /** The locations available to a delivery method. */
        "object": DeliveryLocationSet;
    };
    /** Value enum: "delivery_location_set.created". */
    "event_type"?: "delivery_location_set.created";
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
 * The `delivery_location_set.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryLocationSetCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryLocationSet}. The locations available to a delivery
     * method.
     */
    "data"?: {
        /** The locations available to a delivery method. */
        "object": DeliveryLocationSet;
    };
    /** Value enum: "delivery_location_set.created". */
    "event_type"?: "delivery_location_set.created";
});
export type DeliveryLocationSetDeactivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.deactivated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.deactivated";
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
    "event_type": "delivery_location_set.deactivated";
});
/**
 * The `delivery_location_set.deactivated` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type DeliveryLocationSetDeactivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryLocationSet}. The locations available to a delivery
     * method.
     */
    "data"?: {
        /** The locations available to a delivery method. */
        "object": DeliveryLocationSet;
    };
    /** Value enum: "delivery_location_set.deactivated". */
    "event_type"?: "delivery_location_set.deactivated";
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
 * The `delivery_location_set.deactivated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryLocationSetDeactivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryLocationSet}. The locations available to a delivery
     * method.
     */
    "data"?: {
        /** The locations available to a delivery method. */
        "object": DeliveryLocationSet;
    };
    /** Value enum: "delivery_location_set.deactivated". */
    "event_type"?: "delivery_location_set.deactivated";
});
/** A page of `DeliveryLocationSet` objects. */
export type DeliveryLocationSetListResponse = {
    /**  [] (Value): {@link DeliveryLocationSet}. The locations available to a delivery method. */
    "data": Array<DeliveryLocationSet>;
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
/** A response containing `DeliveryLocationSet` data. */
export type DeliveryLocationSetResponse = {
    /** The locations available to a delivery method. */
    "data": DeliveryLocationSet;
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
export type DeliveryLocationSetUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.updated";
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
    "event_type": "delivery_location_set.updated";
});
/**
 * The `delivery_location_set.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryLocationSetUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryLocationSet}. The locations available to a delivery
     * method.
     */
    "data"?: {
        /** The locations available to a delivery method. */
        "object": DeliveryLocationSet;
    };
    /** Value enum: "delivery_location_set.updated". */
    "event_type"?: "delivery_location_set.updated";
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
 * The `delivery_location_set.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryLocationSetUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryLocationSet}. The locations available to a delivery
     * method.
     */
    "data"?: {
        /** The locations available to a delivery method. */
        "object": DeliveryLocationSet;
    };
    /** Value enum: "delivery_location_set.updated". */
    "event_type"?: "delivery_location_set.updated";
});
export type DeliveryLocationSetsCreateParams = (InputValue<CreateDeliveryLocationSetRequestInput>);
export type DeliveryLocationSetsDeleteParams = {
    /**
     * Optional current resource version. The delete is rejected if the resource changed after this
     * version was read. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
export type DeliveryLocationSetsGetParams = {};
export type DeliveryLocationSetsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
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
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "archived". Value enum: "active", "archived".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "archived". anyOf[1][]
     * (Value): string. Value enum: "active", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
    /**
     * Filter by an active current method that references this resource. Example:
     * "dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "delivery_method_id"?: InputValue<string>;
};
export type DeliveryLocationSetsUpdateParams = (UpdateDeliveryLocationSetRequestInput);
/** A pickup location shown on a delivery option: its name, address, instructions, and timezone. */
export type DeliveryLocationSummaryResource = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    "instructions"?: string;
    "location_id": string;
    "name": string;
    "timezone"?: string;
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
     * method is available. Value enum: "eligibility_no_match", "method_unavailable",
     * "input_required", "checkout_context_required", "dependency_failure".
     */
    "code": "eligibility_no_match"
        | "method_unavailable"
        | "input_required"
        | "checkout_context_required"
        | "dependency_failure"
        | (string & {});
    "delivery_method_id"?: string;
    "delivery_method_revision_id"?: string;
    "diagnostic_id": string;
    /**
     * Configured eligibility predicates that conclusively rejected the method. Present only for
     * eligibility_no_match. [] (Value): {@link DeliveryEligibilityMismatch}. An eligibility
     * condition that rejected a delivery method, with its condition type, its path in the
     * expression, and the field tested.
     */
    "eligibility_mismatches"?: Array<DeliveryEligibilityMismatch>;
    /** RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Value enum: "unavailable", "input_required", "cannot_calculate",
     * "requires_checkout_context".
     */
    "outcome": "unavailable" | "input_required" | "cannot_calculate" | "requires_checkout_context" | (string & {});
    /** Value enum: "review_configuration", "provide_input", "create_checkout", "retry". */
    "recommended_action": "review_configuration" | "provide_input" | "create_checkout" | "retry" | (string & {});
    "retryable": boolean;
    /** Value enum: "method". */
    "scope": "method" | (string & {});
    "summary": string;
};
/** A configured shipping, pickup, local delivery, or service option. */
export type DeliveryMethod = {
    /**
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes.
     */
    "configuration": DeliveryMethodConfiguration;
    /** Time the method was created. Format: date-time. */
    "created_at": string;
    /** Immutable revision currently used for new quotes. */
    "current_delivery_method_revision_id": string;
    /** Stable delivery method ID. */
    "delivery_method_id": string;
    /** Optional buyer-facing description. */
    "description"?: string;
    /** Ascending display order among methods. Format: int32. */
    "display_position": number;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
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
    /** Counts of subscriptions by status: active, past due, and paused. */
    "subscription_counts": SubscriptionCounts;
    /** Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup". */
    "type": "shipment" | "local_delivery" | "pickup" | (string & {});
    /** Time the method last changed. Format: date-time. */
    "updated_at": string;
    /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
    "version": number;
};
export type DeliveryMethodActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.activated";
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
    "event_type": "delivery_method.activated";
});
/**
 * The `delivery_method.activated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryMethodActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
     * or service option.
     */
    "data"?: {
        /** A configured shipping, pickup, local delivery, or service option. */
        "object": DeliveryMethod;
    };
    /** Value enum: "delivery_method.activated". */
    "event_type"?: "delivery_method.activated";
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
 * The `delivery_method.activated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type DeliveryMethodActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
     * or service option.
     */
    "data"?: {
        /** A configured shipping, pickup, local delivery, or service option. */
        "object": DeliveryMethod;
    };
    /** Value enum: "delivery_method.activated". */
    "event_type"?: "delivery_method.activated";
});
export type DeliveryMethodArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.archived";
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
    "event_type": "delivery_method.archived";
});
/**
 * The `delivery_method.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryMethodArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
     * or service option.
     */
    "data"?: {
        /** A configured shipping, pickup, local delivery, or service option. */
        "object": DeliveryMethod;
    };
    /** Value enum: "delivery_method.archived". */
    "event_type"?: "delivery_method.archived";
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
 * The `delivery_method.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryMethodArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
     * or service option.
     */
    "data"?: {
        /** A configured shipping, pickup, local delivery, or service option. */
        "object": DeliveryMethod;
    };
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
     * send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery
     * categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED.
     * Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
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
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". []
     * (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
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
     * to clear it back to inheriting.
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
     * send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery
     * categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED.
     * Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpression;
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
     * The pricing strategy you supply when creating a delivery method. Set `type` and the matching
     * property.
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
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". []
     * (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
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
     * send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery
     * categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED.
     * Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpressionInput;
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
     * The pricing strategy you supply when creating a delivery method. Set `type` and the matching
     * property.
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
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". []
     * (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
        | "buyer_location.coordinate">;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. [] (Value): {@link DeliveryRecipientRequirementInput}. Says whether
     * a recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirementInput>;
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
 * Only the keys you send change; keys you leave out keep their current values. Each key you send
 * replaces that part of the configuration whole. Null removes an optional key, as each field
 * describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
 * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate,
 * leave out the ID to create one, and leave out a rate to remove it. The result must be a
 * configuration you could create, including pickup_mode for pickup methods. Requires
 * expected_version. An empty configuration is invalid. minProperties: 1.
 */
export type DeliveryMethodConfigurationPatchRequest = {
    /**
     * Controls whether checkout collects buyer instructions for this method. Null disables
     * instruction collection. enabled (Required): boolean. Whether checkout collects buyer
     * instructions. label (Optional): string. Checkout field label, without leading or trailing
     * whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength: 255.
     * placeholder (Optional): string. Checkout field placeholder, without leading or trailing
     * whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength: 500.
     * required (Required): boolean. Whether the buyer must enter instructions before selecting the
     * option. Requires enabled=true.
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
     * records and reporting. Automatic tax calculates the shipping and delivery categories at the
     * general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Null uses
     * settings.tax.default_delivery_tax_category, or, when that is unset, shipping for shipment,
     * delivery for local_delivery, or service_fee for pickup. Value enum: "service_fee",
     * "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Conditions that decide where this method is offered. Null removes the conditions, so the
     * method is offered everywhere the merchant serves. anyOf[1] (Value): {@link
     * DeliveryEligibilityExpression}. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * anyOf[2] (Value): null.
     */
    "eligibility"?: ((DeliveryEligibilityExpression) | (null) | (unknown));
    /**
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. Null restores type none, when the pricing type allows it. schedule_window
     * (Optional): {@link DeliveryScheduleWindowRule}. Scheduled-window estimate rule you supply
     * for a delivery method, defined by its `availability` schedule. transit_time (Optional):
     * {@link DeliveryTransitTimeRule}. Estimate rule giving a delivery method's handling time and
     * transit time as ranges of business days. type (Required): string. Value enum: "none",
     * "transit_time", "schedule_window".
     */
    "estimate"?: {
        /**
         * Scheduled-window estimate rule you supply for a delivery method, defined by its
         * `availability` schedule.
         */
        "schedule_window"?: DeliveryScheduleWindowRule;
        /**
         * Estimate rule giving a delivery method's handling time and transit time as ranges of
         * business days.
         */
        "transit_time"?: DeliveryTransitTimeRule;
        /** Value enum: "none", "transit_time", "schedule_window". */
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
     * Where delivery starts. A method can use a fixed location or a delivery location set;
     * origin.type determines allocation or buyer pickup behavior. Null is invalid. The origin you
     * supply for a delivery method, chosen by `type`: a fixed location, or locations from a
     * delivery location set or an inline list.
     */
    "origin"?: DeliveryMethodOriginSelectorRequest;
    /**
     * How Flint calculates the delivery charge. Null is invalid. The pricing strategy you supply
     * when updating a delivery method. Set `type` and the matching property.
     */
    "pricing"?: DeliveryPricingStrategyRequest;
    /**
     * Buyer-visible structured details supplied by the merchant. Null removes the public details;
     * pickup methods still require pickup_mode. minProperties: 1. instructions (Optional): string.
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
    }
        | null;
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive. Use []
     * to clear it. Null is invalid. maxItems: 12. uniqueItems: true. [] enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". []
     * (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
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
 * Only the keys you send change; keys you leave out keep their current values. Each key you send
 * replaces that part of the configuration whole. Null removes an optional key, as each field
 * describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
 * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate,
 * leave out the ID to create one, and leave out a rate to remove it. The result must be a
 * configuration you could create, including pickup_mode for pickup methods. Requires
 * expected_version. An empty configuration is invalid. minProperties: 1.
 */
export type DeliveryMethodConfigurationPatchRequestInput = {
    /**
     * Controls whether checkout collects buyer instructions for this method. Null disables
     * instruction collection. enabled (Required): boolean. Whether checkout collects buyer
     * instructions. label (Optional): string. Checkout field label, without leading or trailing
     * whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength: 255.
     * placeholder (Optional): string. Checkout field placeholder, without leading or trailing
     * whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength: 500.
     * required (Required): boolean. Whether the buyer must enter instructions before selecting the
     * option. Requires enabled=true.
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
     * records and reporting. Automatic tax calculates the shipping and delivery categories at the
     * general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Null uses
     * settings.tax.default_delivery_tax_category, or, when that is unset, shipping for shipment,
     * delivery for local_delivery, or service_fee for pickup. Value enum: "service_fee",
     * "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Conditions that decide where this method is offered. Null removes the conditions, so the
     * method is offered everywhere the merchant serves. anyOf[1] (Value): {@link
     * DeliveryEligibilityExpressionInput}. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * anyOf[2] (Value): null.
     */
    "eligibility"?: ((DeliveryEligibilityExpressionInput) | (null));
    /**
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. Null restores type none, when the pricing type allows it. schedule_window
     * (Optional): {@link DeliveryScheduleWindowRuleRequestInput}. Scheduled-window estimate rule
     * you supply for a delivery method, defined by its `availability` schedule. transit_time
     * (Optional): {@link DeliveryTransitTimeRuleRequestInput}. Estimate rule giving a delivery
     * method's handling time and transit time as ranges of business days. type (Required): string.
     * Value enum: "none", "transit_time", "schedule_window".
     */
    "estimate"?: {
        /**
         * Scheduled-window estimate rule you supply for a delivery method, defined by its
         * `availability` schedule.
         */
        "schedule_window"?: DeliveryScheduleWindowRuleRequestInput;
        /**
         * Estimate rule giving a delivery method's handling time and transit time as ranges of
         * business days.
         */
        "transit_time"?: DeliveryTransitTimeRuleRequestInput;
        /** Value enum: "none", "transit_time", "schedule_window". */
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
     * Where delivery starts. A method can use a fixed location or a delivery location set;
     * origin.type determines allocation or buyer pickup behavior. Null is invalid. The origin you
     * supply for a delivery method, chosen by `type`: a fixed location, or locations from a
     * delivery location set or an inline list.
     */
    "origin"?: DeliveryMethodOriginSelectorRequestInput;
    /**
     * How Flint calculates the delivery charge. Null is invalid. The pricing strategy you supply
     * when updating a delivery method. Set `type` and the matching property.
     */
    "pricing"?: DeliveryPricingStrategyRequestInput;
    /**
     * Buyer-visible structured details supplied by the merchant. Null removes the public details;
     * pickup methods still require pickup_mode. minProperties: 1. instructions (Optional): string.
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
    }
        | null;
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive. Use []
     * to clear it. Null is invalid. maxItems: 12. uniqueItems: true. [] enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". []
     * (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
        | "buyer_location.coordinate">;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Use [] to clear it. Null is invalid. [] (Value): {@link
     * DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or
     * `phone`) is required for a delivery method, and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirementInput>;
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
     * send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery
     * categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED.
     * Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpression;
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
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". []
     * (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
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
     * send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery
     * categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED.
     * Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpressionInput;
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
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". []
     * (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
        | "buyer_location.coordinate">;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. [] (Value): {@link DeliveryRecipientRequirementInput}. Says whether
     * a recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirementInput>;
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
export type DeliveryMethodCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.created";
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
    "event_type": "delivery_method.created";
});
/**
 * The `delivery_method.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryMethodCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
     * or service option.
     */
    "data"?: {
        /** A configured shipping, pickup, local delivery, or service option. */
        "object": DeliveryMethod;
    };
    /** Value enum: "delivery_method.created". */
    "event_type"?: "delivery_method.created";
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
 * The `delivery_method.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryMethodCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
     * or service option.
     */
    "data"?: {
        /** A configured shipping, pickup, local delivery, or service option. */
        "object": DeliveryMethod;
    };
    /** Value enum: "delivery_method.created". */
    "event_type"?: "delivery_method.created";
});
export type DeliveryMethodDeactivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.deactivated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.deactivated";
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
    "event_type": "delivery_method.deactivated";
});
/**
 * The `delivery_method.deactivated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryMethodDeactivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
     * or service option.
     */
    "data"?: {
        /** A configured shipping, pickup, local delivery, or service option. */
        "object": DeliveryMethod;
    };
    /** Value enum: "delivery_method.deactivated". */
    "event_type"?: "delivery_method.deactivated";
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
 * The `delivery_method.deactivated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type DeliveryMethodDeactivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
     * or service option.
     */
    "data"?: {
        /** A configured shipping, pickup, local delivery, or service option. */
        "object": DeliveryMethod;
    };
    /** Value enum: "delivery_method.deactivated". */
    "event_type"?: "delivery_method.deactivated";
});
/** A page of `DeliveryMethod` objects. */
export type DeliveryMethodListResponse = {
    /**
     *  [] (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery, or
     * service option.
     */
    "data": Array<DeliveryMethod>;
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
 * Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of
 * locations, or a collection of pickup locations.
 */
export type DeliveryMethodOriginSelector = ({
    "delivery_location_set_id"?: string;
    "delivery_location_set_revision_id"?: string;
    "location_id"?: string;
    /**  [] (Value): string. */
    "location_ids"?: Array<string>;
    /** Value enum: "fixed_location", "allocated_origin_group", "pickup_location_collection". */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection" | (string & {});
})
    & ((Exclude<DeliveryMethodOriginSelectorFixedLocation & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorAllocatedOriginGroup & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorPickupLocationCollection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `allocated_origin_group` variant of `DeliveryMethodOriginSelector`. */
export type DeliveryMethodOriginSelectorAllocatedOriginGroup = ({
    "delivery_location_set_id"?: string;
    "delivery_location_set_revision_id"?: string;
    "location_id"?: string;
    /**  [] (Value): string. */
    "location_ids"?: Array<string>;
    /** Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
})
    & (({
    /** minItems: 1. maxItems: 25. uniqueItems: true. [] (Value): string. */
    "location_ids"?: Array<string>;
    /** Value enum: "allocated_origin_group". */
    "type": unknown;
})
    & (({
    "delivery_location_set_id": string;
})
    | ({
    /** minItems: 1. maxItems: 25. uniqueItems: true. [] (Value): string. */
    "location_ids": (Array<string>) & (Array<string>);
})
    | (Record<string, unknown>)));
/** The `fixed_location` variant of `DeliveryMethodOriginSelector`. */
export type DeliveryMethodOriginSelectorFixedLocation = ({
    "delivery_location_set_id"?: string;
    "delivery_location_set_revision_id"?: string;
    "location_id": string;
    /**  [] (Value): string. */
    "location_ids"?: Array<string>;
    /** Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & (({
    /** Value enum: "fixed_location". */
    "type": unknown;
    "location_id": string;
}));
