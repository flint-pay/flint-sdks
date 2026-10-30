<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionAmountMoney $amount_money
 * @property-read ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionArrivalEstimate $arrival_estimate
 * @property-read DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionBuyerInstructions $buyer_instructions
 * @property-read ?string $charge_tax_category
 * @property-read ?string $consumed_by_delivery_selection_id
 * @property-read string $delivery_method_id
 * @property-read ?string $delivery_method_revision_id
 * @property-read ?string $delivery_option_id
 * @property-read DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionDeliveryPlan $delivery_plan
 * @property-read ?string $description
 * @property-read int $display_position
 * @property-read ?list<DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionExecutionLegsItem> $execution_legs
 * @property-read ?string $expires_at
 * @property-read ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionLocalDelivery $local_delivery
 * @property-read string $name
 * @property-read ?list<DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionOfferedWindowsItem> $offered_windows
 * @property-read ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickup $pickup
 * @property-read ?list<DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionRecipientRequirementsItem> $recipient_requirements
 * @property-read bool $recommended
 * @property-read ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionShipment $shipment
 * @property-read bool $taxable
 * @property-read ?string $timezone
 * @property-read string $type
 * @property-read ?string $window_end_at
 * @property-read ?string $window_pricing
 * @property-read string $window_selection
 * @property-read ?string $window_start_at
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOption extends Model {
    /** @param array{'amount_money': mixed, 'arrival_estimate'?: mixed, 'buyer_instructions': mixed, 'charge_tax_category'?: string, 'consumed_by_delivery_selection_id'?: string, 'delivery_method_id': string, 'delivery_method_revision_id'?: string, 'delivery_option_id'?: string, 'delivery_plan': mixed, 'description'?: string, 'display_position': int, 'execution_legs'?: list<mixed>, 'expires_at'?: string, 'local_delivery'?: mixed, 'name': string, 'offered_windows'?: list<mixed>, 'pickup'?: mixed, 'recipient_requirements'?: list<mixed>, 'recommended': bool, 'shipment'?: mixed, 'taxable': bool, 'timezone'?: string, 'type': string, 'window_end_at'?: string, 'window_pricing'?: string, 'window_selection': string, 'window_start_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOption')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionAmountMoney
     */
    public function getAmountMoney(): DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The estimated arrival date range for a delivery option, as calendar dates in the option's timezone.
     * @return ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionArrivalEstimate
     */
    public function getArrivalEstimate(): ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionArrivalEstimate { return $this->get('arrival_estimate'); }
    public function hasArrivalEstimate(): bool { return $this->has('arrival_estimate'); }
    /** Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection.
     * @return DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionBuyerInstructions
     */
    public function getBuyerInstructions(): DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionBuyerInstructions { return $this->get('buyer_instructions'); }
    public function hasBuyerInstructions(): bool { return $this->has('buyer_instructions'); }
    /** Flint charge tax category. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     * @return ?string
     */
    public function getChargeTaxCategory(): ?string { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** consumed_by_delivery_selection_id
     * @return ?string
     */
    public function getConsumedByDeliverySelectionId(): ?string { return $this->get('consumed_by_delivery_selection_id'); }
    public function hasConsumedByDeliverySelectionId(): bool { return $this->has('consumed_by_delivery_selection_id'); }
    /** delivery_method_id
     * @return string
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** delivery_method_revision_id
     * @return ?string
     */
    public function getDeliveryMethodRevisionId(): ?string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** delivery_option_id
     * @return ?string
     */
    public function getDeliveryOptionId(): ?string { return $this->get('delivery_option_id'); }
    public function hasDeliveryOptionId(): bool { return $this->has('delivery_option_id'); }
    /** Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count.
     * @return DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionDeliveryPlan
     */
    public function getDeliveryPlan(): DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionDeliveryPlan { return $this->get('delivery_plan'); }
    public function hasDeliveryPlan(): bool { return $this->has('delivery_plan'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Format: int32.
     * @return int
     */
    public function getDisplayPosition(): int { return $this->get('display_position'); }
    public function hasDisplayPosition(): bool { return $this->has('display_position'); }
    /** Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. [] (Value): {@see DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionExecutionLegsItem}. One leg of a delivery choice group, identifying the origin Location the group's items leave from.
     * @return ?list<DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionExecutionLegsItem>
     */
    public function getExecutionLegs(): ?array { return $this->get('execution_legs'); }
    public function hasExecutionLegs(): bool { return $this->has('execution_legs'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Details of a local delivery option: instructions and service level.
     * @return ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionLocalDelivery
     */
    public function getLocalDelivery(): ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionLocalDelivery { return $this->get('local_delivery'); }
    public function hasLocalDelivery(): bool { return $this->has('local_delivery'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /**  [] (Value): {@see DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionOfferedWindowsItem}. A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen.
     * @return ?list<DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionOfferedWindowsItem>
     */
    public function getOfferedWindows(): ?array { return $this->get('offered_windows'); }
    public function hasOfferedWindows(): bool { return $this->has('offered_windows'); }
    /** Pickup details of a delivery option: the pickup mode and the pickup location.
     * @return ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickup
     */
    public function getPickup(): ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickup { return $this->get('pickup'); }
    public function hasPickup(): bool { return $this->has('pickup'); }
    /** Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. [] (Value): {@see DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionRecipientRequirementsItem}. Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use.
     * @return ?list<DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionRecipientRequirementsItem>
     */
    public function getRecipientRequirements(): ?array { return $this->get('recipient_requirements'); }
    public function hasRecipientRequirements(): bool { return $this->has('recipient_requirements'); }
    /** recommended
     * @return bool
     */
    public function getRecommended(): bool { return $this->get('recommended'); }
    public function hasRecommended(): bool { return $this->has('recommended'); }
    /** Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`.
     * @return ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionShipment
     */
    public function getShipment(): ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionShipment { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
    /** taxable
     * @return bool
     */
    public function getTaxable(): bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** IANA timezone for displaying window_start_at, window_end_at, and any offered windows.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
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
    /** Value enum: "uniform", "varies".
     * @return ?string
     */
    public function getWindowPricing(): ?string { return $this->get('window_pricing'); }
    public function hasWindowPricing(): bool { return $this->has('window_pricing'); }
    /** Value enum: "none", "offered".
     * @return string
     */
    public function getWindowSelection(): string { return $this->get('window_selection'); }
    public function hasWindowSelection(): bool { return $this->has('window_selection'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getWindowStartAt(): ?string { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
