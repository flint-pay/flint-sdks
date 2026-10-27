<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
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
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryOptionInput extends Model {
    /** @param array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'availability': string, 'current': bool, 'delivery_method_id': string, 'description'?: string, 'failure_category'?: string, 'name': string, 'price_type': string, 'selectable': bool, 'type': string, 'unavailable_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryOptionInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string.  Value enum: "available", "unavailable", "cannot_calculate".
     * @return string
     * @throws SdkError When availability is omitted; use hasAvailability() or valueOrDefault().
     */
    public function getAvailability(): string { return $this->get('availability'); }
    public function hasAvailability(): bool { return $this->has('availability'); }
    /** Shape $ (Value): boolean. True when this is the subscription's saved preferred delivery method, including when unavailable.
     * @return bool
     * @throws SdkError When current is omitted; use hasCurrent() or valueOrDefault().
     */
    public function getCurrent(): bool { return $this->get('current'); }
    public function hasCurrent(): bool { return $this->has('current'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Reason the method cannot serve this subscription destination. Values can expand as delivery capabilities change. Value enum: "dependency_failure", "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open", "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure", "option_lifetime_too_short", "geography_failure", "routing_failure", "invalid_configuration", "invalid_buyer_input", "address_verification_failed", "address_could_not_be_verified".
     * @return string
     * @throws SdkError When failure_category is omitted; use hasFailureCategory() or valueOrDefault().
     */
    public function getFailureCategory(): string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.  Value enum: "fixed", "quoted".
     * @return string
     * @throws SdkError When price_type is omitted; use hasPriceType() or valueOrDefault().
     */
    public function getPriceType(): string { return $this->get('price_type'); }
    public function hasPriceType(): bool { return $this->has('price_type'); }
    /** Shape $ (Value): boolean. True when this method is offered, renewable, and currently serves the destination.
     * @return bool
     * @throws SdkError When selectable is omitted; use hasSelectable() or valueOrDefault().
     */
    public function getSelectable(): bool { return $this->get('selectable'); }
    public function hasSelectable(): bool { return $this->has('selectable'); }
    /** Shape $ (Value): string.  Value enum: "shipment", "local_delivery".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. Reason the method cannot serve this subscription destination. Values can expand as delivery capabilities change. Value enum: "destination_not_served", "pickup_unavailable", "no_window_available", "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable", "inventory_unavailable".
     * @return string
     * @throws SdkError When unavailable_reason is omitted; use hasUnavailableReason() or valueOrDefault().
     */
    public function getUnavailableReason(): string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
}
