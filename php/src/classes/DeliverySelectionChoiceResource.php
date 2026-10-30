<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $delivery_choice_group_id
 * @property-read string $delivery_method_id
 * @property-read string $delivery_option_id
 * @property-read DeliveryPlan $delivery_plan
 * @property-read ?string $delivery_window_id
 * @property-read ?string $description
 * @property-read ?MoneyValue $discount_money
 * @property-read ?DeliverySelectionInstructionsRequest $input
 * @property-read ?DeliveryLocalDeliveryDetails $local_delivery
 * @property-read ?string $merchant_reference
 * @property-read string $name
 * @property-read string|null $order_charge_id
 * @property-read ?DeliveryPickupDetails $pickup
 * @property-read ?DeliveryShipmentDetails $shipment
 * @property-read string $stable_key
 * @property-read ?MoneyValue $tax_money
 * @property-read ?string $timezone
 * @property-read MoneyValue $total_money
 * @property-read string $type
 * @property-read ?string $window_end_at
 * @property-read ?string $window_start_at
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionChoiceResource extends Model {
    /** @param array{'amount_money': mixed, 'delivery_choice_group_id': string, 'delivery_method_id': string, 'delivery_option_id': string, 'delivery_plan': mixed, 'delivery_window_id'?: string, 'description'?: string, 'discount_money'?: mixed, 'input'?: mixed, 'local_delivery'?: mixed, 'merchant_reference'?: string, 'name': string, 'order_charge_id'?: string|null, 'pickup'?: mixed, 'shipment'?: mixed, 'stable_key': string, 'tax_money'?: mixed, 'timezone'?: string, 'total_money': mixed, 'type': string, 'window_end_at'?: string, 'window_start_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionChoiceResource')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** delivery_choice_group_id
     * @return string
     */
    public function getDeliveryChoiceGroupId(): string { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** delivery_method_id
     * @return string
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** delivery_option_id
     * @return string
     */
    public function getDeliveryOptionId(): string { return $this->get('delivery_option_id'); }
    public function hasDeliveryOptionId(): bool { return $this->has('delivery_option_id'); }
    /** Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count.
     * @return DeliveryPlan
     */
    public function getDeliveryPlan(): DeliveryPlan { return $this->get('delivery_plan'); }
    public function hasDeliveryPlan(): bool { return $this->has('delivery_plan'); }
    /** delivery_window_id
     * @return ?string
     */
    public function getDeliveryWindowId(): ?string { return $this->get('delivery_window_id'); }
    public function hasDeliveryWindowId(): bool { return $this->has('delivery_window_id'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Always present with an API key or dashboard credential. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getDiscountMoney(): ?MoneyValue { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Buyer input for a selected delivery option: a `delivery_window_id` where the option uses delivery windows, and optional `instructions`.
     * @return ?DeliverySelectionInstructionsRequest
     */
    public function getInput(): ?DeliverySelectionInstructionsRequest { return $this->get('input'); }
    public function hasInput(): bool { return $this->has('input'); }
    /** Details of a local delivery option: instructions and service level.
     * @return ?DeliveryLocalDeliveryDetails
     */
    public function getLocalDelivery(): ?DeliveryLocalDeliveryDetails { return $this->get('local_delivery'); }
    public function hasLocalDelivery(): bool { return $this->has('local_delivery'); }
    /** merchant_reference
     * @return ?string
     */
    public function getMerchantReference(): ?string { return $this->get('merchant_reference'); }
    public function hasMerchantReference(): bool { return $this->has('merchant_reference'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Always present with an API key or dashboard credential. Null when the choice has no order charge.
     * @return string|null
     */
    public function getOrderChargeId(): string|null { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** Pickup details of a delivery option: the pickup mode and the pickup location.
     * @return ?DeliveryPickupDetails
     */
    public function getPickup(): ?DeliveryPickupDetails { return $this->get('pickup'); }
    public function hasPickup(): bool { return $this->has('pickup'); }
    /** Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`.
     * @return ?DeliveryShipmentDetails
     */
    public function getShipment(): ?DeliveryShipmentDetails { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
    /** stable_key
     * @return string
     */
    public function getStableKey(): string { return $this->get('stable_key'); }
    public function hasStableKey(): bool { return $this->has('stable_key'); }
    /** Always present with an API key or dashboard credential. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getTaxMoney(): ?MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** IANA timezone for displaying window_start_at and window_end_at.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Value enum: "shipment", "pickup", "local_delivery".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getWindowEndAt(): ?string { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getWindowStartAt(): ?string { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
