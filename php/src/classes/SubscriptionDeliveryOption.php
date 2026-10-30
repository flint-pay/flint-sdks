<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?MoneyValue $amount_money
 * @property-read string $availability
 * @property-read bool $current
 * @property-read string $delivery_method_id
 * @property-read ?string $description
 * @property-read ?string $failure_category
 * @property-read string $name
 * @property-read string $price_type
 * @property-read bool $selectable
 * @property-read string $type
 * @property-read ?string $unavailable_reason
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryOption extends Model {
    /** @param array{'amount_money'?: mixed, 'availability': string, 'current': bool, 'delivery_method_id': string, 'description'?: string, 'failure_category'?: string, 'name': string, 'price_type': string, 'selectable': bool, 'type': string, 'unavailable_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryOption')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getAmountMoney(): ?MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Value enum: "available", "unavailable", "cannot_calculate".
     * @return string
     */
    public function getAvailability(): string { return $this->get('availability'); }
    public function hasAvailability(): bool { return $this->has('availability'); }
    /** True when this is the subscription's saved preferred delivery method, including when unavailable.
     * @return bool
     */
    public function getCurrent(): bool { return $this->get('current'); }
    public function hasCurrent(): bool { return $this->has('current'); }
    /** delivery_method_id
     * @return string
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Reason the method cannot serve this subscription destination. Values can expand as delivery capabilities change. Value enum: "dependency_failure", "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open", "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure", "option_lifetime_too_short", "geography_failure", "routing_failure", "invalid_configuration", "invalid_buyer_input", "address_verification_failed", "address_could_not_be_verified".
     * @return ?string
     */
    public function getFailureCategory(): ?string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Value enum: "fixed", "quoted".
     * @return string
     */
    public function getPriceType(): string { return $this->get('price_type'); }
    public function hasPriceType(): bool { return $this->has('price_type'); }
    /** True when this method is offered, renewable, and currently serves the destination.
     * @return bool
     */
    public function getSelectable(): bool { return $this->get('selectable'); }
    public function hasSelectable(): bool { return $this->has('selectable'); }
    /** Value enum: "shipment", "local_delivery".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Reason the method cannot serve this subscription destination. Values can expand as delivery capabilities change. Value enum: "destination_not_served", "pickup_unavailable", "no_window_available", "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable", "inventory_unavailable".
     * @return ?string
     */
    public function getUnavailableReason(): ?string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
}
