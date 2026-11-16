<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $delivery_choice_group_id
 * @property-read string|null $delivery_method_id
 * @property-read string|null $delivery_option_id
 * @property-read DeliveryPlanPreviousAttributes|null $delivery_plan
 * @property-read string|null $delivery_window_id
 * @property-read string|null $description
 * @property-read MoneyValuePreviousAttributes|null $discount_money
 * @property-read DeliverySelectionInstructionsRequestPreviousAttributes|null $input
 * @property-read DeliveryLocalDeliveryDetailsPreviousAttributes|null $local_delivery
 * @property-read string|null $merchant_reference
 * @property-read string|null $name
 * @property-read string|null $order_charge_id
 * @property-read string|null $order_id
 * @property-read DeliveryPickupDetailsPreviousAttributes|null $pickup
 * @property-read DeliveryShipmentDetailsPreviousAttributes|null $shipment
 * @property-read string|null $stable_key
 * @property-read MoneyValuePreviousAttributes|null $tax_money
 * @property-read string|null $timezone
 * @property-read MoneyValuePreviousAttributes|null $total_money
 * @property-read string|null $type
 * @property-read string|null $window_end_at
 * @property-read string|null $window_start_at
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionChoiceResourcePreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'delivery_choice_group_id'?: mixed, 'delivery_method_id'?: mixed, 'delivery_option_id'?: mixed, 'delivery_plan'?: mixed, 'delivery_window_id'?: mixed, 'description'?: mixed, 'discount_money'?: mixed, 'input'?: mixed, 'local_delivery'?: mixed, 'merchant_reference'?: mixed, 'name'?: mixed, 'order_charge_id'?: mixed, 'order_id'?: mixed, 'pickup'?: mixed, 'shipment'?: mixed, 'stable_key'?: mixed, 'tax_money'?: mixed, 'timezone'?: mixed, 'total_money'?: mixed, 'type'?: mixed, 'window_end_at'?: mixed, 'window_start_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionChoiceResourcePreviousAttributes')); }
    /** Delivery price before discounts and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** ID of the quote choice group these items belong to. anyOf[1] (Value): string. ID of the quote choice group these items belong to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryChoiceGroupId(): string|null { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** ID of the delivery method providing this choice. anyOf[1] (Value): string. ID of the delivery method providing this choice. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryMethodId(): string|null { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** ID of the option chosen from the quote. anyOf[1] (Value): string. ID of the option chosen from the quote. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryOptionId(): string|null { return $this->get('delivery_option_id'); }
    public function hasDeliveryOptionId(): bool { return $this->has('delivery_option_id'); }
    /** Whether this choice delivers the items together or in separate shipments. anyOf[1] (Value): {@see DeliveryPlanPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryPlanPreviousAttributes|null
     */
    public function getDeliveryPlan(): DeliveryPlanPreviousAttributes|null { return $this->get('delivery_plan'); }
    public function hasDeliveryPlan(): bool { return $this->has('delivery_plan'); }
    /** ID of the chosen offered window. Omitted when no offered window was chosen. anyOf[1] (Value): string. ID of the chosen offered window. Omitted when no offered window was chosen. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryWindowId(): string|null { return $this->get('delivery_window_id'); }
    public function hasDeliveryWindowId(): bool { return $this->has('delivery_window_id'); }
    /** Buyer-facing description captured from the chosen method. Omitted when the method had none. anyOf[1] (Value): string. Buyer-facing description captured from the chosen method. Omitted when the method had none. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Always present with an API key or dashboard credential. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDiscountMoney(): MoneyValuePreviousAttributes|null { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Window choice and buyer instructions stored with this selection. Omitted when neither was supplied. anyOf[1] (Value): {@see DeliverySelectionInstructionsRequestPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliverySelectionInstructionsRequestPreviousAttributes|null
     */
    public function getInput(): DeliverySelectionInstructionsRequestPreviousAttributes|null { return $this->get('input'); }
    public function hasInput(): bool { return $this->has('input'); }
    /** Local delivery service details, present for local_delivery choices. anyOf[1] (Value): {@see DeliveryLocalDeliveryDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryLocalDeliveryDetailsPreviousAttributes|null
     */
    public function getLocalDelivery(): DeliveryLocalDeliveryDetailsPreviousAttributes|null { return $this->get('local_delivery'); }
    public function hasLocalDelivery(): bool { return $this->has('local_delivery'); }
    /** Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. anyOf[1] (Value): string. Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantReference(): string|null { return $this->get('merchant_reference'); }
    public function hasMerchantReference(): bool { return $this->has('merchant_reference'); }
    /** Buyer-facing name captured from the chosen method. anyOf[1] (Value): string. Buyer-facing name captured from the chosen method. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Always present with an API key or dashboard credential. Null when the choice has no order charge. anyOf[1] (Value): string. Always present with an API key or dashboard credential. Null when the choice has no order charge. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderChargeId(): string|null { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. anyOf[1] (Value): string. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Pickup Location and collection details, present for pickup choices. anyOf[1] (Value): {@see DeliveryPickupDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryPickupDetailsPreviousAttributes|null
     */
    public function getPickup(): DeliveryPickupDetailsPreviousAttributes|null { return $this->get('pickup'); }
    public function hasPickup(): bool { return $this->has('pickup'); }
    /** Shipping service details, present for shipment choices. anyOf[1] (Value): {@see DeliveryShipmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryShipmentDetailsPreviousAttributes|null
     */
    public function getShipment(): DeliveryShipmentDetailsPreviousAttributes|null { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
    /** Key identifying the same items and allowed delivery types across quotes. anyOf[1] (Value): string. Key identifying the same items and allowed delivery types across quotes. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStableKey(): string|null { return $this->get('stable_key'); }
    public function hasStableKey(): bool { return $this->has('stable_key'); }
    /** Always present with an API key or dashboard credential. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTaxMoney(): MoneyValuePreviousAttributes|null { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** IANA timezone for displaying window_start_at and window_end_at. anyOf[1] (Value): string. IANA timezone for displaying window_start_at and window_end_at. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Delivery price after discounts and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** How this choice delivers the items. Value enum: "shipment", "pickup", "local_delivery". anyOf[1] (Value): string. How this choice delivers the items. Value enum: "shipment", "pickup", "local_delivery". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWindowEndAt(): string|null { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWindowStartAt(): string|null { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
