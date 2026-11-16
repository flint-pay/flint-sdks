<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryEligibilityExpressionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $all
 * @property-read list<DeliveryEligibilityExpressionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $any
 * @property-read DeliveryCountryConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $country
 * @property-read DeliveryCustomerBooleanConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $customer_has_email
 * @property-read DeliveryCustomerBooleanConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $customer_has_phone
 * @property-read DeliveryCustomerBooleanConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $customer_merchant_verified
 * @property-read DeliveryCustomerSegmentConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $customer_segment
 * @property-read DeliveryEligibilityExpressionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $not
 * @property-read DeliveryPostalCodeConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $postal_code
 * @property-read DeliveryRadiusConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $radius
 * @property-read DeliveryStateConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $state
 * @property-read DeliveryCustomerBooleanConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $subscription_purchase
 * @property-read DeliveryWindowTimeConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $window_time
 * @property-read DeliveryZoneConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $zone
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryEligibilityExpressionPreviousAttributesInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryEligibilityExpressionPreviousAttributesInput')); }
    /** Matches when every nested expression matches. anyOf[1] (Value): Array of {@see DeliveryEligibilityExpressionPreviousAttributesInput}. Matches when every nested expression matches. minItems: 1. maxItems: 100. anyOf[1][] (Value): {@see DeliveryEligibilityExpressionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryEligibilityExpressionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When all is omitted; use hasAll() or valueOrDefault().
     */
    public function getAll(): mixed { return $this->get('all'); }
    public function hasAll(): bool { return $this->has('all'); }
    /** Matches when at least one nested expression matches. anyOf[1] (Value): Array of {@see DeliveryEligibilityExpressionPreviousAttributesInput}. Matches when at least one nested expression matches. minItems: 1. maxItems: 100. anyOf[1][] (Value): {@see DeliveryEligibilityExpressionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryEligibilityExpressionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When any is omitted; use hasAny() or valueOrDefault().
     */
    public function getAny(): mixed { return $this->get('any'); }
    public function hasAny(): bool { return $this->has('any'); }
    /** Matches when the address is in one of the listed countries. anyOf[1] (Value): {@see DeliveryCountryConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryCountryConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Matches when whether the customer has an email address equals `value`. anyOf[1] (Value): {@see DeliveryCustomerBooleanConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryCustomerBooleanConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When customer_has_email is omitted; use hasCustomerHasEmail() or valueOrDefault().
     */
    public function getCustomerHasEmail(): mixed { return $this->get('customer_has_email'); }
    public function hasCustomerHasEmail(): bool { return $this->has('customer_has_email'); }
    /** Matches when whether the customer has a phone number equals `value`. anyOf[1] (Value): {@see DeliveryCustomerBooleanConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryCustomerBooleanConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When customer_has_phone is omitted; use hasCustomerHasPhone() or valueOrDefault().
     */
    public function getCustomerHasPhone(): mixed { return $this->get('customer_has_phone'); }
    public function hasCustomerHasPhone(): bool { return $this->has('customer_has_phone'); }
    /** Matches the is_merchant_verified flag you set on the customer against value. anyOf[1] (Value): {@see DeliveryCustomerBooleanConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryCustomerBooleanConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When customer_merchant_verified is omitted; use hasCustomerMerchantVerified() or valueOrDefault().
     */
    public function getCustomerMerchantVerified(): mixed { return $this->get('customer_merchant_verified'); }
    public function hasCustomerMerchantVerified(): bool { return $this->has('customer_merchant_verified'); }
    /** Matches the free-form segment you assign to the customer against values. anyOf[1] (Value): {@see DeliveryCustomerSegmentConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryCustomerSegmentConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When customer_segment is omitted; use hasCustomerSegment() or valueOrDefault().
     */
    public function getCustomerSegment(): mixed { return $this->get('customer_segment'); }
    public function hasCustomerSegment(): bool { return $this->has('customer_segment'); }
    /** Matches when the nested expression does not match. anyOf[1] (Value): {@see DeliveryEligibilityExpressionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryEligibilityExpressionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When not is omitted; use hasNot() or valueOrDefault().
     */
    public function getNot(): mixed { return $this->get('not'); }
    public function hasNot(): bool { return $this->has('not'); }
    /** Matches when the address postal code matches one of the listed codes. anyOf[1] (Value): {@see DeliveryPostalCodeConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryPostalCodeConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When postal_code is omitted; use hasPostalCode() or valueOrDefault().
     */
    public function getPostalCode(): mixed { return $this->get('postal_code'); }
    public function hasPostalCode(): bool { return $this->has('postal_code'); }
    /** Matches when the address is within a set distance of an origin. anyOf[1] (Value): {@see DeliveryRadiusConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryRadiusConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When radius is omitted; use hasRadius() or valueOrDefault().
     */
    public function getRadius(): mixed { return $this->get('radius'); }
    public function hasRadius(): bool { return $this->has('radius'); }
    /** Matches when the address is in one of the listed states or provinces. anyOf[1] (Value): {@see DeliveryStateConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryStateConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): mixed { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
    /** Matches when whether the purchase is a subscription purchase equals `value`. anyOf[1] (Value): {@see DeliveryCustomerBooleanConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryCustomerBooleanConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When subscription_purchase is omitted; use hasSubscriptionPurchase() or valueOrDefault().
     */
    public function getSubscriptionPurchase(): mixed { return $this->get('subscription_purchase'); }
    public function hasSubscriptionPurchase(): bool { return $this->has('subscription_purchase'); }
    /** Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. anyOf[1] (Value): {@see DeliveryWindowTimeConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryWindowTimeConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When window_time is omitted; use hasWindowTime() or valueOrDefault().
     */
    public function getWindowTime(): mixed { return $this->get('window_time'); }
    public function hasWindowTime(): bool { return $this->has('window_time'); }
    /** Matches when the address is inside the delivery zone you name. anyOf[1] (Value): {@see DeliveryZoneConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryZoneConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When zone is omitted; use hasZone() or valueOrDefault().
     */
    public function getZone(): mixed { return $this->get('zone'); }
    public function hasZone(): bool { return $this->has('zone'); }
}
