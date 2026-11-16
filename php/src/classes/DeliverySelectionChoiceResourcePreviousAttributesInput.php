<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $delivery_choice_group_id
 * @property-read string|null $delivery_method_id
 * @property-read string|null $delivery_option_id
 * @property-read DeliveryPlanPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $delivery_plan
 * @property-read string|null $delivery_window_id
 * @property-read string|null $description
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $discount_money
 * @property-read DeliverySelectionInstructionsRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $input
 * @property-read DeliveryLocalDeliveryDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $local_delivery
 * @property-read string|null $merchant_reference
 * @property-read string|null $name
 * @property-read string|null|null $order_charge_id
 * @property-read string|null $order_id
 * @property-read DeliveryPickupDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $pickup
 * @property-read DeliveryShipmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $shipment
 * @property-read string|null $stable_key
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax_money
 * @property-read string|null $timezone
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $total_money
 * @property-read string|null $type
 * @property-read string|\DateTimeInterface|null $window_end_at
 * @property-read string|\DateTimeInterface|null $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionChoiceResourcePreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'delivery_choice_group_id'?: string|null, 'delivery_method_id'?: string|null, 'delivery_option_id'?: string|null, 'delivery_plan'?: DeliveryPlanPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'delivery_window_id'?: string|null, 'description'?: string|null, 'discount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'input'?: DeliverySelectionInstructionsRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'local_delivery'?: DeliveryLocalDeliveryDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'merchant_reference'?: string|null, 'name'?: string|null, 'order_charge_id'?: string|null|null, 'order_id'?: string|null, 'pickup'?: DeliveryPickupDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'shipment'?: DeliveryShipmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'stable_key'?: string|null, 'tax_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'timezone'?: string|null, 'total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionChoiceResourcePreviousAttributesInput')); }
    /** Delivery price before discounts and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** ID of the quote choice group these items belong to. anyOf[1] (Value): string. ID of the quote choice group these items belong to. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_choice_group_id is omitted; use hasDeliveryChoiceGroupId() or valueOrDefault().
     */
    public function getDeliveryChoiceGroupId(): mixed { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** ID of the delivery method providing this choice. anyOf[1] (Value): string. ID of the delivery method providing this choice. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): mixed { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** ID of the option chosen from the quote. anyOf[1] (Value): string. ID of the option chosen from the quote. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_option_id is omitted; use hasDeliveryOptionId() or valueOrDefault().
     */
    public function getDeliveryOptionId(): mixed { return $this->get('delivery_option_id'); }
    public function hasDeliveryOptionId(): bool { return $this->has('delivery_option_id'); }
    /** Whether this choice delivers the items together or in separate shipments. anyOf[1] (Value): {@see DeliveryPlanPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryPlanPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When delivery_plan is omitted; use hasDeliveryPlan() or valueOrDefault().
     */
    public function getDeliveryPlan(): mixed { return $this->get('delivery_plan'); }
    public function hasDeliveryPlan(): bool { return $this->has('delivery_plan'); }
    /** ID of the chosen offered window. Omitted when no offered window was chosen. anyOf[1] (Value): string. ID of the chosen offered window. Omitted when no offered window was chosen. Example: "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_window_id is omitted; use hasDeliveryWindowId() or valueOrDefault().
     */
    public function getDeliveryWindowId(): mixed { return $this->get('delivery_window_id'); }
    public function hasDeliveryWindowId(): bool { return $this->has('delivery_window_id'); }
    /** Buyer-facing description captured from the chosen method. Omitted when the method had none. anyOf[1] (Value): string. Buyer-facing description captured from the chosen method. Omitted when the method had none. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Always present with an API key or dashboard credential. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Window choice and buyer instructions stored with this selection. Omitted when neither was supplied. anyOf[1] (Value): {@see DeliverySelectionInstructionsRequestPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliverySelectionInstructionsRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When input is omitted; use hasInput() or valueOrDefault().
     */
    public function getInput(): mixed { return $this->get('input'); }
    public function hasInput(): bool { return $this->has('input'); }
    /** Local delivery service details, present for local_delivery choices. anyOf[1] (Value): {@see DeliveryLocalDeliveryDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryLocalDeliveryDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When local_delivery is omitted; use hasLocalDelivery() or valueOrDefault().
     */
    public function getLocalDelivery(): mixed { return $this->get('local_delivery'); }
    public function hasLocalDelivery(): bool { return $this->has('local_delivery'); }
    /** Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. anyOf[1] (Value): string. Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When merchant_reference is omitted; use hasMerchantReference() or valueOrDefault().
     */
    public function getMerchantReference(): mixed { return $this->get('merchant_reference'); }
    public function hasMerchantReference(): bool { return $this->has('merchant_reference'); }
    /** Buyer-facing name captured from the chosen method. anyOf[1] (Value): string. Buyer-facing name captured from the chosen method. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Always present with an API key or dashboard credential. Null when the choice has no order charge. anyOf[1] (Value): string or null. Always present with an API key or dashboard credential. Null when the choice has no order charge. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): mixed { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. anyOf[1] (Value): string. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Pickup Location and collection details, present for pickup choices. anyOf[1] (Value): {@see DeliveryPickupDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryPickupDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When pickup is omitted; use hasPickup() or valueOrDefault().
     */
    public function getPickup(): mixed { return $this->get('pickup'); }
    public function hasPickup(): bool { return $this->has('pickup'); }
    /** Shipping service details, present for shipment choices. anyOf[1] (Value): {@see DeliveryShipmentDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryShipmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): mixed { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
    /** Key identifying the same items and allowed delivery types across quotes. anyOf[1] (Value): string. Key identifying the same items and allowed delivery types across quotes. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When stable_key is omitted; use hasStableKey() or valueOrDefault().
     */
    public function getStableKey(): mixed { return $this->get('stable_key'); }
    public function hasStableKey(): bool { return $this->has('stable_key'); }
    /** Always present with an API key or dashboard credential. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** IANA timezone for displaying window_start_at and window_end_at. anyOf[1] (Value): string. IANA timezone for displaying window_start_at and window_end_at. Example: "America/New_York". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): mixed { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Delivery price after discounts and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** How this choice delivers the items. Value enum: "shipment", "pickup", "local_delivery". anyOf[1] (Value): string. How this choice delivers the items. Value enum: "shipment", "pickup", "local_delivery". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): mixed { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): mixed { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
