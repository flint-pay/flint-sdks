<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read DeliveryArrivalEstimate $arrival_estimate
 * @property-read BuyerInstructionsConfig $buyer_instructions
 * @property-read string $consumed_by_delivery_selection_id
 * @property-read string $delivery_method_id
 * @property-read string $delivery_option_id
 * @property-read DeliveryPlan $delivery_plan
 * @property-read string $description
 * @property-read int $display_position
 * @property-read string $expires_at
 * @property-read DeliveryShipmentDetails $local_delivery
 * @property-read string $name
 * @property-read list<DeliveryWindowResource> $offered_windows
 * @property-read DeliveryPickupDetails $pickup
 * @property-read list<DeliveryRecipientRequirement> $recipient_requirements
 * @property-read bool $recommended
 * @property-read DeliveryShipmentDetails $shipment
 * @property-read bool $taxable
 * @property-read string $timezone
 * @property-read string $type
 * @property-read string $window_end_at
 * @property-read string $window_pricing
 * @property-read string $window_selection
 * @property-read string $window_start_at
 * Presence-aware response; omitted fields throw when accessed. */
final class BuyerDeliveryOptionResource extends Model {
    /** @param array{'amount_money': mixed, 'arrival_estimate'?: mixed, 'buyer_instructions': mixed, 'consumed_by_delivery_selection_id'?: string, 'delivery_method_id': string, 'delivery_option_id'?: string, 'delivery_plan': mixed, 'description'?: string, 'display_position': int, 'expires_at'?: string, 'local_delivery'?: mixed, 'name': string, 'offered_windows'?: list<mixed>, 'pickup'?: mixed, 'recipient_requirements'?: list<mixed>, 'recommended': bool, 'shipment'?: mixed, 'taxable': bool, 'timezone'?: string, 'type': string, 'window_end_at'?: string, 'window_pricing'?: string, 'window_selection': string, 'window_start_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerDeliveryOptionResource')); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return DeliveryArrivalEstimate
     * @throws SdkError When arrival_estimate is omitted; use hasArrivalEstimate() or valueOrDefault().
     */
    public function getArrivalEstimate(): DeliveryArrivalEstimate { return $this->get('arrival_estimate'); }
    public function hasArrivalEstimate(): bool { return $this->has('arrival_estimate'); }
    /** @return BuyerInstructionsConfig
     * @throws SdkError When buyer_instructions is omitted; use hasBuyerInstructions() or valueOrDefault().
     */
    public function getBuyerInstructions(): BuyerInstructionsConfig { return $this->get('buyer_instructions'); }
    public function hasBuyerInstructions(): bool { return $this->has('buyer_instructions'); }
    /** @return string
     * @throws SdkError When consumed_by_delivery_selection_id is omitted; use hasConsumedByDeliverySelectionId() or valueOrDefault().
     */
    public function getConsumedByDeliverySelectionId(): string { return $this->get('consumed_by_delivery_selection_id'); }
    public function hasConsumedByDeliverySelectionId(): bool { return $this->has('consumed_by_delivery_selection_id'); }
    /** @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** @return string
     * @throws SdkError When delivery_option_id is omitted; use hasDeliveryOptionId() or valueOrDefault().
     */
    public function getDeliveryOptionId(): string { return $this->get('delivery_option_id'); }
    public function hasDeliveryOptionId(): bool { return $this->has('delivery_option_id'); }
    /** @return DeliveryPlan
     * @throws SdkError When delivery_plan is omitted; use hasDeliveryPlan() or valueOrDefault().
     */
    public function getDeliveryPlan(): DeliveryPlan { return $this->get('delivery_plan'); }
    public function hasDeliveryPlan(): bool { return $this->has('delivery_plan'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return int
     * @throws SdkError When display_position is omitted; use hasDisplayPosition() or valueOrDefault().
     */
    public function getDisplayPosition(): int { return $this->get('display_position'); }
    public function hasDisplayPosition(): bool { return $this->has('display_position'); }
    /** @return string
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return DeliveryShipmentDetails
     * @throws SdkError When local_delivery is omitted; use hasLocalDelivery() or valueOrDefault().
     */
    public function getLocalDelivery(): DeliveryShipmentDetails { return $this->get('local_delivery'); }
    public function hasLocalDelivery(): bool { return $this->has('local_delivery'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return list<DeliveryWindowResource>
     * @throws SdkError When offered_windows is omitted; use hasOfferedWindows() or valueOrDefault().
     */
    public function getOfferedWindows(): array { return $this->get('offered_windows'); }
    public function hasOfferedWindows(): bool { return $this->has('offered_windows'); }
    /** @return DeliveryPickupDetails
     * @throws SdkError When pickup is omitted; use hasPickup() or valueOrDefault().
     */
    public function getPickup(): DeliveryPickupDetails { return $this->get('pickup'); }
    public function hasPickup(): bool { return $this->has('pickup'); }
    /** @return list<DeliveryRecipientRequirement>
     * @throws SdkError When recipient_requirements is omitted; use hasRecipientRequirements() or valueOrDefault().
     */
    public function getRecipientRequirements(): array { return $this->get('recipient_requirements'); }
    public function hasRecipientRequirements(): bool { return $this->has('recipient_requirements'); }
    /** @return bool
     * @throws SdkError When recommended is omitted; use hasRecommended() or valueOrDefault().
     */
    public function getRecommended(): bool { return $this->get('recommended'); }
    public function hasRecommended(): bool { return $this->has('recommended'); }
    /** @return DeliveryShipmentDetails
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): DeliveryShipmentDetails { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
    /** @return bool
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** @return string
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): string { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** @return string
     * @throws SdkError When window_pricing is omitted; use hasWindowPricing() or valueOrDefault().
     */
    public function getWindowPricing(): string { return $this->get('window_pricing'); }
    public function hasWindowPricing(): bool { return $this->has('window_pricing'); }
    /** @return string
     * @throws SdkError When window_selection is omitted; use hasWindowSelection() or valueOrDefault().
     */
    public function getWindowSelection(): string { return $this->get('window_selection'); }
    public function hasWindowSelection(): bool { return $this->has('window_selection'); }
    /** @return string
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): string { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
