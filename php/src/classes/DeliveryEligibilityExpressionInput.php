<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<mixed> $all
 * @property-read list<mixed> $any
 * @property-read DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass $country
 * @property-read DeliveryCustomerGroupConditionInput|array<array-key, mixed>|\stdClass $customer_group
 * @property-read DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass $customer_has_email
 * @property-read DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass $customer_has_phone
 * @property-read DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass $customer_verified
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
    /** @return list<mixed>
     * @throws SdkError When all is omitted; use hasAll() or valueOrDefault().
     */
    public function getAll(): array { return $this->get('all'); }
    public function hasAll(): bool { return $this->has('all'); }
    /** @return list<mixed>
     * @throws SdkError When any is omitted; use hasAny() or valueOrDefault().
     */
    public function getAny(): array { return $this->get('any'); }
    public function hasAny(): bool { return $this->has('any'); }
    /** @return DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** @return DeliveryCustomerGroupConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_group is omitted; use hasCustomerGroup() or valueOrDefault().
     */
    public function getCustomerGroup(): mixed { return $this->get('customer_group'); }
    public function hasCustomerGroup(): bool { return $this->has('customer_group'); }
    /** @return DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_has_email is omitted; use hasCustomerHasEmail() or valueOrDefault().
     */
    public function getCustomerHasEmail(): mixed { return $this->get('customer_has_email'); }
    public function hasCustomerHasEmail(): bool { return $this->has('customer_has_email'); }
    /** @return DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_has_phone is omitted; use hasCustomerHasPhone() or valueOrDefault().
     */
    public function getCustomerHasPhone(): mixed { return $this->get('customer_has_phone'); }
    public function hasCustomerHasPhone(): bool { return $this->has('customer_has_phone'); }
    /** @return DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_verified is omitted; use hasCustomerVerified() or valueOrDefault().
     */
    public function getCustomerVerified(): mixed { return $this->get('customer_verified'); }
    public function hasCustomerVerified(): bool { return $this->has('customer_verified'); }
    /** @return mixed
     * @throws SdkError When not is omitted; use hasNot() or valueOrDefault().
     */
    public function getNot(): mixed { return $this->get('not'); }
    public function hasNot(): bool { return $this->has('not'); }
    /** @return DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When postal_code is omitted; use hasPostalCode() or valueOrDefault().
     */
    public function getPostalCode(): mixed { return $this->get('postal_code'); }
    public function hasPostalCode(): bool { return $this->has('postal_code'); }
    /** @return DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When radius is omitted; use hasRadius() or valueOrDefault().
     */
    public function getRadius(): mixed { return $this->get('radius'); }
    public function hasRadius(): bool { return $this->has('radius'); }
    /** @return DeliveryStateConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): mixed { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
    /** @return DeliveryCustomerBooleanConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_purchase is omitted; use hasSubscriptionPurchase() or valueOrDefault().
     */
    public function getSubscriptionPurchase(): mixed { return $this->get('subscription_purchase'); }
    public function hasSubscriptionPurchase(): bool { return $this->has('subscription_purchase'); }
    /** @return DeliveryWindowTimeConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When window_time is omitted; use hasWindowTime() or valueOrDefault().
     */
    public function getWindowTime(): mixed { return $this->get('window_time'); }
    public function hasWindowTime(): bool { return $this->has('window_time'); }
    /** @return DeliveryZoneConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When zone is omitted; use hasZone() or valueOrDefault().
     */
    public function getZone(): mixed { return $this->get('zone'); }
    public function hasZone(): bool { return $this->has('zone'); }
}
