<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read DeliveryArrivalEstimatePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $arrival_estimate
 * @property-read BuyerInstructionsConfigPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $buyer_instructions
 * @property-read string|null $charge_tax_category
 * @property-read string|null $consumed_by_delivery_selection_id
 * @property-read string|null $delivery_method_id
 * @property-read string|null $delivery_method_revision_id
 * @property-read string|null $delivery_option_id
 * @property-read DeliveryPlanPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $delivery_plan
 * @property-read string|null $description
 * @property-read int|null $display_position
 * @property-read list<DeliveryQuoteExecutionLegResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $execution_legs
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read DeliveryLocalDeliveryDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $local_delivery
 * @property-read string|null $name
 * @property-read list<DeliveryWindowResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $offered_windows
 * @property-read DeliveryPickupDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $pickup
 * @property-read list<DeliveryRecipientRequirementPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $recipient_requirements
 * @property-read bool|null $recommended
 * @property-read DeliveryShipmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $shipment
 * @property-read bool|null $taxable
 * @property-read string|null $timezone
 * @property-read string|null $type
 * @property-read string|\DateTimeInterface|null $window_end_at
 * @property-read string|null $window_pricing
 * @property-read string|null $window_selection
 * @property-read string|\DateTimeInterface|null $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryOptionProjectionPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'arrival_estimate'?: DeliveryArrivalEstimatePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'buyer_instructions'?: BuyerInstructionsConfigPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'charge_tax_category'?: string|null, 'consumed_by_delivery_selection_id'?: string|null, 'delivery_method_id'?: string|null, 'delivery_method_revision_id'?: string|null, 'delivery_option_id'?: string|null, 'delivery_plan'?: DeliveryPlanPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'description'?: string|null, 'display_position'?: int|null, 'execution_legs'?: list<DeliveryQuoteExecutionLegResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'expires_at'?: string|\DateTimeInterface|null, 'local_delivery'?: DeliveryLocalDeliveryDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'name'?: string|null, 'offered_windows'?: list<DeliveryWindowResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'pickup'?: DeliveryPickupDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'recipient_requirements'?: list<DeliveryRecipientRequirementPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'recommended'?: bool|null, 'shipment'?: DeliveryShipmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'taxable'?: bool|null, 'timezone'?: string|null, 'type'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_pricing'?: string|null, 'window_selection'?: string|null, 'window_start_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryOptionProjectionPreviousAttributesInput')); }
    /** Delivery charge for this option. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Estimated arrival dates. Omitted when the method makes no timing promise. anyOf[1] (Value): {@see DeliveryArrivalEstimatePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryArrivalEstimatePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When arrival_estimate is omitted; use hasArrivalEstimate() or valueOrDefault().
     */
    public function getArrivalEstimate(): mixed { return $this->get('arrival_estimate'); }
    public function hasArrivalEstimate(): bool { return $this->has('arrival_estimate'); }
    /** The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. anyOf[1] (Value): {@see BuyerInstructionsConfigPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return BuyerInstructionsConfigPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When buyer_instructions is omitted; use hasBuyerInstructions() or valueOrDefault().
     */
    public function getBuyerInstructions(): mixed { return $this->get('buyer_instructions'); }
    public function hasBuyerInstructions(): bool { return $this->has('buyer_instructions'); }
    /** Flint charge tax category. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge". anyOf[1] (Value): string. Flint charge tax category. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When charge_tax_category is omitted; use hasChargeTaxCategory() or valueOrDefault().
     */
    public function getChargeTaxCategory(): mixed { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** ID of the delivery selection that chose this option. Omitted until a selection does. anyOf[1] (Value): string. ID of the delivery selection that chose this option. Omitted until a selection does. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When consumed_by_delivery_selection_id is omitted; use hasConsumedByDeliverySelectionId() or valueOrDefault().
     */
    public function getConsumedByDeliverySelectionId(): mixed { return $this->get('consumed_by_delivery_selection_id'); }
    public function hasConsumedByDeliverySelectionId(): bool { return $this->has('consumed_by_delivery_selection_id'); }
    /** ID of the delivery method that produced this option. anyOf[1] (Value): string. ID of the delivery method that produced this option. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): mixed { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** ID of the method revision this option was priced from. anyOf[1] (Value): string. ID of the method revision this option was priced from. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_method_revision_id is omitted; use hasDeliveryMethodRevisionId() or valueOrDefault().
     */
    public function getDeliveryMethodRevisionId(): mixed { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. anyOf[1] (Value): string. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_option_id is omitted; use hasDeliveryOptionId() or valueOrDefault().
     */
    public function getDeliveryOptionId(): mixed { return $this->get('delivery_option_id'); }
    public function hasDeliveryOptionId(): bool { return $this->has('delivery_option_id'); }
    /** How the option divides the items into deliveries. anyOf[1] (Value): {@see DeliveryPlanPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryPlanPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When delivery_plan is omitted; use hasDeliveryPlan() or valueOrDefault().
     */
    public function getDeliveryPlan(): mixed { return $this->get('delivery_plan'); }
    public function hasDeliveryPlan(): bool { return $this->has('delivery_plan'); }
    /** Buyer-visible description of the option. Omitted when the method has none. anyOf[1] (Value): string. Buyer-visible description of the option. Omitted when the method has none. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Position in which this option displays among the others. Lower values display first. anyOf[1] (Value): integer. Position in which this option displays among the others. Lower values display first. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When display_position is omitted; use hasDisplayPosition() or valueOrDefault().
     */
    public function getDisplayPosition(): mixed { return $this->get('display_position'); }
    public function hasDisplayPosition(): bool { return $this->has('display_position'); }
    /** Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. anyOf[1] (Value): Array of {@see DeliveryQuoteExecutionLegResourcePreviousAttributesInput}. Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. anyOf[1][] (Value): {@see DeliveryQuoteExecutionLegResourcePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryQuoteExecutionLegResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When execution_legs is omitted; use hasExecutionLegs() or valueOrDefault().
     */
    public function getExecutionLegs(): mixed { return $this->get('execution_legs'); }
    public function hasExecutionLegs(): bool { return $this->has('execution_legs'); }
    /** Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. anyOf[1] (Value): string. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): mixed { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Local delivery details. Set only when `type` is `local_delivery`. anyOf[1] (Value): {@see DeliveryLocalDeliveryDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryLocalDeliveryDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When local_delivery is omitted; use hasLocalDelivery() or valueOrDefault().
     */
    public function getLocalDelivery(): mixed { return $this->get('local_delivery'); }
    public function hasLocalDelivery(): bool { return $this->has('local_delivery'); }
    /** Buyer-visible name of the option. anyOf[1] (Value): string. Buyer-visible name of the option. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. anyOf[1] (Value): Array of {@see DeliveryWindowResourcePreviousAttributesInput}. Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. anyOf[1][] (Value): {@see DeliveryWindowResourcePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryWindowResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When offered_windows is omitted; use hasOfferedWindows() or valueOrDefault().
     */
    public function getOfferedWindows(): mixed { return $this->get('offered_windows'); }
    public function hasOfferedWindows(): bool { return $this->has('offered_windows'); }
    /** Pickup details. Set only when `type` is `pickup`. anyOf[1] (Value): {@see DeliveryPickupDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryPickupDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When pickup is omitted; use hasPickup() or valueOrDefault().
     */
    public function getPickup(): mixed { return $this->get('pickup'); }
    public function hasPickup(): bool { return $this->has('pickup'); }
    /** Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. anyOf[1] (Value): Array of {@see DeliveryRecipientRequirementPreviousAttributesInput}. Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. anyOf[1][] (Value): {@see DeliveryRecipientRequirementPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryRecipientRequirementPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When recipient_requirements is omitted; use hasRecipientRequirements() or valueOrDefault().
     */
    public function getRecipientRequirements(): mixed { return $this->get('recipient_requirements'); }
    public function hasRecipientRequirements(): bool { return $this->has('recipient_requirements'); }
    /** Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. anyOf[1] (Value): boolean. Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When recommended is omitted; use hasRecommended() or valueOrDefault().
     */
    public function getRecommended(): mixed { return $this->get('recommended'); }
    public function hasRecommended(): bool { return $this->has('recommended'); }
    /** Shipment details. Set only when `type` is `shipment`. anyOf[1] (Value): {@see DeliveryShipmentDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryShipmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): mixed { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
    /** Whether tax applies to the delivery charge. anyOf[1] (Value): boolean. Whether tax applies to the delivery charge. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): mixed { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** IANA timezone for displaying window_start_at, window_end_at, and any offered windows. anyOf[1] (Value): string. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. Example: "America/New_York". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): mixed { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Delivery type of this option. Value enum: "shipment", "pickup", "local_delivery". anyOf[1] (Value): string. Delivery type of this option. Value enum: "shipment", "pickup", "local_delivery". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. anyOf[1] (Value): string. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): mixed { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Whether the offered windows cost the same. Value enum: "uniform", "varies". anyOf[1] (Value): string. Whether the offered windows cost the same. Value enum: "uniform", "varies". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When window_pricing is omitted; use hasWindowPricing() or valueOrDefault().
     */
    public function getWindowPricing(): mixed { return $this->get('window_pricing'); }
    public function hasWindowPricing(): bool { return $this->has('window_pricing'); }
    /** Whether the buyer chooses a delivery window. Value enum: "none", "offered". anyOf[1] (Value): string. Whether the buyer chooses a delivery window. Value enum: "none", "offered". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When window_selection is omitted; use hasWindowSelection() or valueOrDefault().
     */
    public function getWindowSelection(): mixed { return $this->get('window_selection'); }
    public function hasWindowSelection(): bool { return $this->has('window_selection'); }
    /** Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. anyOf[1] (Value): string. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): mixed { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
