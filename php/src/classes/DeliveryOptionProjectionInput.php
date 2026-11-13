<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read DeliveryArrivalEstimateInput|array<array-key, mixed>|\stdClass $arrival_estimate
 * @property-read BuyerInstructionsConfigInput|array<array-key, mixed>|\stdClass $buyer_instructions
 * @property-read string $charge_tax_category
 * @property-read string $consumed_by_delivery_selection_id
 * @property-read string $delivery_method_id
 * @property-read string $delivery_method_revision_id
 * @property-read string $delivery_option_id
 * @property-read DeliveryPlanInput|array<array-key, mixed>|\stdClass $delivery_plan
 * @property-read string $description
 * @property-read int $display_position
 * @property-read list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass> $execution_legs
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read DeliveryLocalDeliveryDetailsInput|array<array-key, mixed>|\stdClass $local_delivery
 * @property-read string $name
 * @property-read list<DeliveryWindowResourceInput|array<array-key, mixed>|\stdClass> $offered_windows
 * @property-read DeliveryPickupDetailsInput|array<array-key, mixed>|\stdClass $pickup
 * @property-read list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass> $recipient_requirements
 * @property-read bool $recommended
 * @property-read DeliveryShipmentDetailsInput|array<array-key, mixed>|\stdClass $shipment
 * @property-read bool $taxable
 * @property-read string $timezone
 * @property-read string $type
 * @property-read string|\DateTimeInterface $window_end_at
 * @property-read string $window_pricing
 * @property-read string $window_selection
 * @property-read string|\DateTimeInterface $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryOptionProjectionInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'arrival_estimate'?: DeliveryArrivalEstimateInput|array<array-key, mixed>|\stdClass, 'buyer_instructions': BuyerInstructionsConfigInput|array<array-key, mixed>|\stdClass, 'charge_tax_category'?: string, 'consumed_by_delivery_selection_id'?: string, 'delivery_method_id': string, 'delivery_method_revision_id'?: string, 'delivery_option_id'?: string, 'delivery_plan': DeliveryPlanInput|array<array-key, mixed>|\stdClass, 'description'?: string, 'display_position': int, 'execution_legs'?: list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass>, 'expires_at'?: string|\DateTimeInterface, 'local_delivery'?: DeliveryLocalDeliveryDetailsInput|array<array-key, mixed>|\stdClass, 'name': string, 'offered_windows'?: list<DeliveryWindowResourceInput|array<array-key, mixed>|\stdClass>, 'pickup'?: DeliveryPickupDetailsInput|array<array-key, mixed>|\stdClass, 'recipient_requirements'?: list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass>, 'recommended': bool, 'shipment'?: DeliveryShipmentDetailsInput|array<array-key, mixed>|\stdClass, 'taxable': bool, 'timezone'?: string, 'type': string, 'window_end_at'?: string|\DateTimeInterface, 'window_pricing'?: string, 'window_selection': string, 'window_start_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryOptionProjectionInput')); }
    /** Delivery charge for this option. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Estimated arrival dates. Omitted when the method makes no timing promise. The estimated arrival date range for a delivery option, as calendar dates in the option's timezone.
     * @return DeliveryArrivalEstimateInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When arrival_estimate is omitted; use hasArrivalEstimate() or valueOrDefault().
     */
    public function getArrivalEstimate(): mixed { return $this->get('arrival_estimate'); }
    public function hasArrivalEstimate(): bool { return $this->has('arrival_estimate'); }
    /** The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection.
     * @return BuyerInstructionsConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_instructions is omitted; use hasBuyerInstructions() or valueOrDefault().
     */
    public function getBuyerInstructions(): mixed { return $this->get('buyer_instructions'); }
    public function hasBuyerInstructions(): bool { return $this->has('buyer_instructions'); }
    /** Flint charge tax category. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     * @return string
     * @throws SdkError When charge_tax_category is omitted; use hasChargeTaxCategory() or valueOrDefault().
     */
    public function getChargeTaxCategory(): string { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** ID of the delivery selection that chose this option. Omitted until a selection does. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * @return string
     * @throws SdkError When consumed_by_delivery_selection_id is omitted; use hasConsumedByDeliverySelectionId() or valueOrDefault().
     */
    public function getConsumedByDeliverySelectionId(): string { return $this->get('consumed_by_delivery_selection_id'); }
    public function hasConsumedByDeliverySelectionId(): bool { return $this->has('consumed_by_delivery_selection_id'); }
    /** ID of the delivery method that produced this option. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** ID of the method revision this option was priced from. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * @return string
     * @throws SdkError When delivery_method_revision_id is omitted; use hasDeliveryMethodRevisionId() or valueOrDefault().
     */
    public function getDeliveryMethodRevisionId(): string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923".
     * @return string
     * @throws SdkError When delivery_option_id is omitted; use hasDeliveryOptionId() or valueOrDefault().
     */
    public function getDeliveryOptionId(): string { return $this->get('delivery_option_id'); }
    public function hasDeliveryOptionId(): bool { return $this->has('delivery_option_id'); }
    /** How the option divides the items into deliveries. Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count.
     * @return DeliveryPlanInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_plan is omitted; use hasDeliveryPlan() or valueOrDefault().
     */
    public function getDeliveryPlan(): mixed { return $this->get('delivery_plan'); }
    public function hasDeliveryPlan(): bool { return $this->has('delivery_plan'); }
    /** Buyer-visible description of the option. Omitted when the method has none.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Position in which this option displays among the others. Lower values display first. Format: int32.
     * @return int
     * @throws SdkError When display_position is omitted; use hasDisplayPosition() or valueOrDefault().
     */
    public function getDisplayPosition(): int { return $this->get('display_position'); }
    public function hasDisplayPosition(): bool { return $this->has('display_position'); }
    /** Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. [] (Value): {@see DeliveryQuoteExecutionLegResourceInput}. One leg of a delivery choice group, identifying the origin Location the group's items leave from.
     * @return list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When execution_legs is omitted; use hasExecutionLegs() or valueOrDefault().
     */
    public function getExecutionLegs(): array { return $this->get('execution_legs'); }
    public function hasExecutionLegs(): bool { return $this->has('execution_legs'); }
    /** Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Local delivery details. Set only when `type` is `local_delivery`. Details of a local delivery option: instructions and service level.
     * @return DeliveryLocalDeliveryDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When local_delivery is omitted; use hasLocalDelivery() or valueOrDefault().
     */
    public function getLocalDelivery(): mixed { return $this->get('local_delivery'); }
    public function hasLocalDelivery(): bool { return $this->has('local_delivery'); }
    /** Buyer-visible name of the option.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. [] (Value): {@see DeliveryWindowResourceInput}. A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen.
     * @return list<DeliveryWindowResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When offered_windows is omitted; use hasOfferedWindows() or valueOrDefault().
     */
    public function getOfferedWindows(): array { return $this->get('offered_windows'); }
    public function hasOfferedWindows(): bool { return $this->has('offered_windows'); }
    /** Pickup details. Set only when `type` is `pickup`. Pickup details of a delivery option: the pickup mode and the pickup location.
     * @return DeliveryPickupDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pickup is omitted; use hasPickup() or valueOrDefault().
     */
    public function getPickup(): mixed { return $this->get('pickup'); }
    public function hasPickup(): bool { return $this->has('pickup'); }
    /** Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. [] (Value): {@see DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use.
     * @return list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When recipient_requirements is omitted; use hasRecipientRequirements() or valueOrDefault().
     */
    public function getRecipientRequirements(): array { return $this->get('recipient_requirements'); }
    public function hasRecipientRequirements(): bool { return $this->has('recipient_requirements'); }
    /** Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`.
     * @return bool
     * @throws SdkError When recommended is omitted; use hasRecommended() or valueOrDefault().
     */
    public function getRecommended(): bool { return $this->get('recommended'); }
    public function hasRecommended(): bool { return $this->has('recommended'); }
    /** Shipment details. Set only when `type` is `shipment`. Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`.
     * @return DeliveryShipmentDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): mixed { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
    /** Whether tax applies to the delivery charge.
     * @return bool
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** IANA timezone for displaying window_start_at, window_end_at, and any offered windows. Example: "America/New_York".
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Delivery type of this option. Value enum: "shipment", "pickup", "local_delivery".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): string|\DateTimeInterface { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Whether the offered windows cost the same. Value enum: "uniform", "varies".
     * @return string
     * @throws SdkError When window_pricing is omitted; use hasWindowPricing() or valueOrDefault().
     */
    public function getWindowPricing(): string { return $this->get('window_pricing'); }
    public function hasWindowPricing(): bool { return $this->has('window_pricing'); }
    /** Whether the buyer chooses a delivery window. Value enum: "none", "offered".
     * @return string
     * @throws SdkError When window_selection is omitted; use hasWindowSelection() or valueOrDefault().
     */
    public function getWindowSelection(): string { return $this->get('window_selection'); }
    public function hasWindowSelection(): bool { return $this->has('window_selection'); }
    /** Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): string|\DateTimeInterface { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
