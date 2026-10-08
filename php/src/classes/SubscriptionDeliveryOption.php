<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $availability
 * @property-read bool $current
 * @property-read string $delivery_method_id
 * @property-read string $description
 * @property-read string $failure_category
 * @property-read string $name
 * @property-read string $price_type
 * @property-read bool $selectable
 * @property-read string $type
 * @property-read string $unavailable_reason
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionDeliveryOption extends Model {
    /** @param array{'amount_money'?: mixed, 'availability': string, 'current': bool, 'delivery_method_id': string, 'description'?: string, 'failure_category'?: string, 'name': string, 'price_type': string, 'selectable': bool, 'type': string, 'unavailable_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryOption')); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When availability is omitted; use hasAvailability() or valueOrDefault().
     */
    public function getAvailability(): string { return $this->get('availability'); }
    public function hasAvailability(): bool { return $this->has('availability'); }
    /** @return bool
     * @throws SdkError When current is omitted; use hasCurrent() or valueOrDefault().
     */
    public function getCurrent(): bool { return $this->get('current'); }
    public function hasCurrent(): bool { return $this->has('current'); }
    /** @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return string
     * @throws SdkError When failure_category is omitted; use hasFailureCategory() or valueOrDefault().
     */
    public function getFailureCategory(): string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When price_type is omitted; use hasPriceType() or valueOrDefault().
     */
    public function getPriceType(): string { return $this->get('price_type'); }
    public function hasPriceType(): bool { return $this->has('price_type'); }
    /** @return bool
     * @throws SdkError When selectable is omitted; use hasSelectable() or valueOrDefault().
     */
    public function getSelectable(): bool { return $this->get('selectable'); }
    public function hasSelectable(): bool { return $this->has('selectable'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** @return string
     * @throws SdkError When unavailable_reason is omitted; use hasUnavailableReason() or valueOrDefault().
     */
    public function getUnavailableReason(): string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
}
