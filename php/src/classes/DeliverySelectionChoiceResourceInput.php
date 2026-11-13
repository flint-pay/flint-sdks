<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $delivery_choice_group_id
 * @property-read string $delivery_method_id
 * @property-read string $delivery_option_id
 * @property-read DeliveryPlanInput|array<array-key, mixed>|\stdClass $delivery_plan
 * @property-read string $delivery_window_id
 * @property-read string $description
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $discount_money
 * @property-read DeliverySelectionInstructionsRequestInput|array<array-key, mixed>|\stdClass $input
 * @property-read DeliveryLocalDeliveryDetailsInput|array<array-key, mixed>|\stdClass $local_delivery
 * @property-read string $merchant_reference
 * @property-read string $name
 * @property-read string|null $order_charge_id
 * @property-read string $order_id
 * @property-read DeliveryPickupDetailsInput|array<array-key, mixed>|\stdClass $pickup
 * @property-read DeliveryShipmentDetailsInput|array<array-key, mixed>|\stdClass $shipment
 * @property-read string $stable_key
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tax_money
 * @property-read string $timezone
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * @property-read string $type
 * @property-read string|\DateTimeInterface $window_end_at
 * @property-read string|\DateTimeInterface $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionChoiceResourceInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'delivery_choice_group_id': string, 'delivery_method_id': string, 'delivery_option_id': string, 'delivery_plan': DeliveryPlanInput|array<array-key, mixed>|\stdClass, 'delivery_window_id'?: string, 'description'?: string, 'discount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'input'?: DeliverySelectionInstructionsRequestInput|array<array-key, mixed>|\stdClass, 'local_delivery'?: DeliveryLocalDeliveryDetailsInput|array<array-key, mixed>|\stdClass, 'merchant_reference'?: string, 'name': string, 'order_charge_id'?: string|null, 'order_id': string, 'pickup'?: DeliveryPickupDetailsInput|array<array-key, mixed>|\stdClass, 'shipment'?: DeliveryShipmentDetailsInput|array<array-key, mixed>|\stdClass, 'stable_key': string, 'tax_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'timezone'?: string, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'type': string, 'window_end_at'?: string|\DateTimeInterface, 'window_start_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionChoiceResourceInput')); }
    /** Delivery price before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** ID of the quote choice group these items belong to. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * @return string
     * @throws SdkError When delivery_choice_group_id is omitted; use hasDeliveryChoiceGroupId() or valueOrDefault().
     */
    public function getDeliveryChoiceGroupId(): string { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** ID of the delivery method providing this choice. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** ID of the option chosen from the quote. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923".
     * @return string
     * @throws SdkError When delivery_option_id is omitted; use hasDeliveryOptionId() or valueOrDefault().
     */
    public function getDeliveryOptionId(): string { return $this->get('delivery_option_id'); }
    public function hasDeliveryOptionId(): bool { return $this->has('delivery_option_id'); }
    /** Whether this choice delivers the items together or in separate shipments. Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count.
     * @return DeliveryPlanInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_plan is omitted; use hasDeliveryPlan() or valueOrDefault().
     */
    public function getDeliveryPlan(): mixed { return $this->get('delivery_plan'); }
    public function hasDeliveryPlan(): bool { return $this->has('delivery_plan'); }
    /** ID of the chosen offered window. Omitted when no offered window was chosen. Example: "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d".
     * @return string
     * @throws SdkError When delivery_window_id is omitted; use hasDeliveryWindowId() or valueOrDefault().
     */
    public function getDeliveryWindowId(): string { return $this->get('delivery_window_id'); }
    public function hasDeliveryWindowId(): bool { return $this->has('delivery_window_id'); }
    /** Buyer-facing description captured from the chosen method. Omitted when the method had none.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Always present with an API key or dashboard credential. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Window choice and buyer instructions stored with this selection. Omitted when neither was supplied. Buyer input for a selected delivery option: a `delivery_window_id` where the option uses delivery windows, and optional `instructions`.
     * @return DeliverySelectionInstructionsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When input is omitted; use hasInput() or valueOrDefault().
     */
    public function getInput(): mixed { return $this->get('input'); }
    public function hasInput(): bool { return $this->has('input'); }
    /** Local delivery service details, present for local_delivery choices. Details of a local delivery option: instructions and service level.
     * @return DeliveryLocalDeliveryDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When local_delivery is omitted; use hasLocalDelivery() or valueOrDefault().
     */
    public function getLocalDelivery(): mixed { return $this->get('local_delivery'); }
    public function hasLocalDelivery(): bool { return $this->has('local_delivery'); }
    /** Reference supplied by the merchant's rate service for this option. Omitted when none was supplied.
     * @return string
     * @throws SdkError When merchant_reference is omitted; use hasMerchantReference() or valueOrDefault().
     */
    public function getMerchantReference(): string { return $this->get('merchant_reference'); }
    public function hasMerchantReference(): bool { return $this->has('merchant_reference'); }
    /** Buyer-facing name captured from the chosen method.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Always present with an API key or dashboard credential. Null when the choice has no order charge. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     * @return string|null
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string|null { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Pickup Location and collection details, present for pickup choices. Pickup details of a delivery option: the pickup mode and the pickup location.
     * @return DeliveryPickupDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pickup is omitted; use hasPickup() or valueOrDefault().
     */
    public function getPickup(): mixed { return $this->get('pickup'); }
    public function hasPickup(): bool { return $this->has('pickup'); }
    /** Shipping service details, present for shipment choices. Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`.
     * @return DeliveryShipmentDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): mixed { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
    /** Key identifying the same items and allowed delivery types across quotes.
     * @return string
     * @throws SdkError When stable_key is omitted; use hasStableKey() or valueOrDefault().
     */
    public function getStableKey(): string { return $this->get('stable_key'); }
    public function hasStableKey(): bool { return $this->has('stable_key'); }
    /** Always present with an API key or dashboard credential. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** IANA timezone for displaying window_start_at and window_end_at. Example: "America/New_York".
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Delivery price after discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** How this choice delivers the items. Value enum: "shipment", "pickup", "local_delivery".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): string|\DateTimeInterface { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): string|\DateTimeInterface { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
