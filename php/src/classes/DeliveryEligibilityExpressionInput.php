<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<mixed> $all
 * @property-read list<mixed> $any
 * @property-read DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass $country
 * @property-read DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass $customer_has_email
 * @property-read DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass $customer_has_phone
 * @property-read DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass $customer_merchant_verified
 * @property-read DeliveryCustomerSegmentConditionInput|array<array-key, mixed>|\stdClass $customer_segment
 * @property-read mixed $not
 * @property-read DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass $postal_code
 * @property-read DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass $radius
 * @property-read DeliveryStateConditionInput|array<array-key, mixed>|\stdClass $state
 * @property-read DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass $subscription_purchase
 * @property-read DeliveryWindowTimeConditionInput|array<array-key, mixed>|\stdClass $window_time
 * @property-read DeliveryZoneConditionInput|array<array-key, mixed>|\stdClass $zone
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryEligibilityExpressionInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryEligibilityExpressionInput')); }
    /** Shape $ (Value): Array of {@see DeliveryEligibilityExpressionInput}. minItems: 1. maxItems: 100. Shape $[] (Value): {@see DeliveryEligibilityExpressionInput}. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * @return list<mixed>
     * @throws SdkError When all is omitted; use hasAll() or valueOrDefault().
     */
    public function getAll(): array { return $this->get('all'); }
    public function hasAll(): bool { return $this->has('all'); }
    /** Shape $ (Value): Array of {@see DeliveryEligibilityExpressionInput}. minItems: 1. maxItems: 100. Shape $[] (Value): {@see DeliveryEligibilityExpressionInput}. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * @return list<mixed>
     * @throws SdkError When any is omitted; use hasAny() or valueOrDefault().
     */
    public function getAny(): array { return $this->get('any'); }
    public function hasAny(): bool { return $this->has('any'); }
    /** Shape $ (Value): {@see DeliveryCountryConditionInput}. A delivery eligibility condition that matches when the address country is one of `values`.
     * @return DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): {@see DeliveryCustomerBooleanConditionInput}. A delivery eligibility condition that tests a true or false fact about the customer against `value`.
     * @return DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_has_email is omitted; use hasCustomerHasEmail() or valueOrDefault().
     */
    public function getCustomerHasEmail(): mixed { return $this->get('customer_has_email'); }
    public function hasCustomerHasEmail(): bool { return $this->has('customer_has_email'); }
    /** Shape $ (Value): {@see DeliveryCustomerBooleanConditionInput}. A delivery eligibility condition that tests a true or false fact about the customer against `value`.
     * @return DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_has_phone is omitted; use hasCustomerHasPhone() or valueOrDefault().
     */
    public function getCustomerHasPhone(): mixed { return $this->get('customer_has_phone'); }
    public function hasCustomerHasPhone(): bool { return $this->has('customer_has_phone'); }
    /** Shape $ (Value): {@see DeliveryCustomerBooleanConditionInput}. Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`.
     * @return DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_merchant_verified is omitted; use hasCustomerMerchantVerified() or valueOrDefault().
     */
    public function getCustomerMerchantVerified(): mixed { return $this->get('customer_merchant_verified'); }
    public function hasCustomerMerchantVerified(): bool { return $this->has('customer_merchant_verified'); }
    /** Shape $ (Value): {@see DeliveryCustomerSegmentConditionInput}. Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`).
     * @return DeliveryCustomerSegmentConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_segment is omitted; use hasCustomerSegment() or valueOrDefault().
     */
    public function getCustomerSegment(): mixed { return $this->get('customer_segment'); }
    public function hasCustomerSegment(): bool { return $this->has('customer_segment'); }
    /** Shape $ (Value): {@see DeliveryEligibilityExpressionInput}. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * @return mixed
     * @throws SdkError When not is omitted; use hasNot() or valueOrDefault().
     */
    public function getNot(): mixed { return $this->get('not'); }
    public function hasNot(): bool { return $this->has('not'); }
    /** Shape $ (Value): {@see DeliveryPostalCodeConditionInput}. A delivery eligibility condition that matches the address postal code against exact or prefix `values`.
     * @return DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When postal_code is omitted; use hasPostalCode() or valueOrDefault().
     */
    public function getPostalCode(): mixed { return $this->get('postal_code'); }
    public function hasPostalCode(): bool { return $this->has('postal_code'); }
    /** Shape $ (Value): {@see DeliveryRadiusConditionInput}. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line.
     * @return DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When radius is omitted; use hasRadius() or valueOrDefault().
     */
    public function getRadius(): mixed { return $this->get('radius'); }
    public function hasRadius(): bool { return $this->has('radius'); }
    /** Shape $ (Value): {@see DeliveryStateConditionInput}. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes.
     * @return DeliveryStateConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): mixed { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
    /** Shape $ (Value): {@see DeliveryCustomerBooleanConditionInput}. A delivery eligibility condition that tests a true or false fact about the customer against `value`.
     * @return DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_purchase is omitted; use hasSubscriptionPurchase() or valueOrDefault().
     */
    public function getSubscriptionPurchase(): mixed { return $this->get('subscription_purchase'); }
    public function hasSubscriptionPurchase(): bool { return $this->has('subscription_purchase'); }
    /** Shape $ (Value): {@see DeliveryWindowTimeConditionInput}. Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`.
     * @return DeliveryWindowTimeConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When window_time is omitted; use hasWindowTime() or valueOrDefault().
     */
    public function getWindowTime(): mixed { return $this->get('window_time'); }
    public function hasWindowTime(): bool { return $this->has('window_time'); }
    /** Shape $ (Value): {@see DeliveryZoneConditionInput}. Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`.
     * @return DeliveryZoneConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When zone is omitted; use hasZone() or valueOrDefault().
     */
    public function getZone(): mixed { return $this->get('zone'); }
    public function hasZone(): bool { return $this->has('zone'); }
}
