<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read DeliveryArrivalEstimatePreviousAttributes|null $arrival_estimate
 * @property-read BuyerInstructionsConfigPreviousAttributes|null $buyer_instructions
 * @property-read string|null $charge_tax_category
 * @property-read string|null $consumed_by_delivery_selection_id
 * @property-read string|null $delivery_method_id
 * @property-read string|null $delivery_method_revision_id
 * @property-read string|null $delivery_option_id
 * @property-read DeliveryPlanPreviousAttributes|null $delivery_plan
 * @property-read string|null $description
 * @property-read int|null $display_position
 * @property-read list<DeliveryQuoteExecutionLegResourcePreviousAttributes>|null $execution_legs
 * @property-read string|null $expires_at
 * @property-read DeliveryLocalDeliveryDetailsPreviousAttributes|null $local_delivery
 * @property-read string|null $name
 * @property-read list<DeliveryWindowResourcePreviousAttributes>|null $offered_windows
 * @property-read DeliveryPickupDetailsPreviousAttributes|null $pickup
 * @property-read list<DeliveryRecipientRequirementPreviousAttributes>|null $recipient_requirements
 * @property-read bool|null $recommended
 * @property-read DeliveryShipmentDetailsPreviousAttributes|null $shipment
 * @property-read bool|null $taxable
 * @property-read string|null $timezone
 * @property-read string|null $type
 * @property-read string|null $window_end_at
 * @property-read string|null $window_pricing
 * @property-read string|null $window_selection
 * @property-read string|null $window_start_at
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem extends Model {
    /** @param array{'amount_money'?: mixed, 'arrival_estimate'?: mixed, 'buyer_instructions'?: mixed, 'charge_tax_category'?: mixed, 'consumed_by_delivery_selection_id'?: mixed, 'delivery_method_id'?: mixed, 'delivery_method_revision_id'?: mixed, 'delivery_option_id'?: mixed, 'delivery_plan'?: mixed, 'description'?: mixed, 'display_position'?: mixed, 'execution_legs'?: mixed, 'expires_at'?: mixed, 'local_delivery'?: mixed, 'name'?: mixed, 'offered_windows'?: mixed, 'pickup'?: mixed, 'recipient_requirements'?: mixed, 'recommended'?: mixed, 'shipment'?: mixed, 'taxable'?: mixed, 'timezone'?: mixed, 'type'?: mixed, 'window_end_at'?: mixed, 'window_pricing'?: mixed, 'window_selection'?: mixed, 'window_start_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem')); }
    /** Delivery charge for this option. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Estimated arrival dates. Omitted when the method makes no timing promise. anyOf[1] (Value): {@see DeliveryArrivalEstimatePreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryArrivalEstimatePreviousAttributes|null
     */
    public function getArrivalEstimate(): DeliveryArrivalEstimatePreviousAttributes|null { return $this->get('arrival_estimate'); }
    public function hasArrivalEstimate(): bool { return $this->has('arrival_estimate'); }
    /** The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. anyOf[1] (Value): {@see BuyerInstructionsConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return BuyerInstructionsConfigPreviousAttributes|null
     */
    public function getBuyerInstructions(): BuyerInstructionsConfigPreviousAttributes|null { return $this->get('buyer_instructions'); }
    public function hasBuyerInstructions(): bool { return $this->has('buyer_instructions'); }
    /** Flint charge tax category. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge". anyOf[1] (Value): string. Flint charge tax category. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getChargeTaxCategory(): string|null { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** ID of the delivery selection that chose this option. Omitted until a selection does. anyOf[1] (Value): string. ID of the delivery selection that chose this option. Omitted until a selection does. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getConsumedByDeliverySelectionId(): string|null { return $this->get('consumed_by_delivery_selection_id'); }
    public function hasConsumedByDeliverySelectionId(): bool { return $this->has('consumed_by_delivery_selection_id'); }
    /** ID of the delivery method that produced this option. anyOf[1] (Value): string. ID of the delivery method that produced this option. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryMethodId(): string|null { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** ID of the method revision this option was priced from. anyOf[1] (Value): string. ID of the method revision this option was priced from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryMethodRevisionId(): string|null { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. anyOf[1] (Value): string. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryOptionId(): string|null { return $this->get('delivery_option_id'); }
    public function hasDeliveryOptionId(): bool { return $this->has('delivery_option_id'); }
    /** How the option divides the items into deliveries. anyOf[1] (Value): {@see DeliveryPlanPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryPlanPreviousAttributes|null
     */
    public function getDeliveryPlan(): DeliveryPlanPreviousAttributes|null { return $this->get('delivery_plan'); }
    public function hasDeliveryPlan(): bool { return $this->has('delivery_plan'); }
    /** Buyer-visible description of the option. Omitted when the method has none. anyOf[1] (Value): string. Buyer-visible description of the option. Omitted when the method has none. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Position in which this option displays among the others. Lower values display first. anyOf[1] (Value): integer. Position in which this option displays among the others. Lower values display first. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDisplayPosition(): int|null { return $this->get('display_position'); }
    public function hasDisplayPosition(): bool { return $this->has('display_position'); }
    /** Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. anyOf[1] (Value): Array of {@see DeliveryQuoteExecutionLegResourcePreviousAttributes}. Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. anyOf[1][] (Value): {@see DeliveryQuoteExecutionLegResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryQuoteExecutionLegResourcePreviousAttributes>|null
     */
    public function getExecutionLegs(): array|null { return $this->get('execution_legs'); }
    public function hasExecutionLegs(): bool { return $this->has('execution_legs'); }
    /** Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. anyOf[1] (Value): string. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Local delivery details. Set only when `type` is `local_delivery`. anyOf[1] (Value): {@see DeliveryLocalDeliveryDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryLocalDeliveryDetailsPreviousAttributes|null
     */
    public function getLocalDelivery(): DeliveryLocalDeliveryDetailsPreviousAttributes|null { return $this->get('local_delivery'); }
    public function hasLocalDelivery(): bool { return $this->has('local_delivery'); }
    /** Buyer-visible name of the option. anyOf[1] (Value): string. Buyer-visible name of the option. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. anyOf[1] (Value): Array of {@see DeliveryWindowResourcePreviousAttributes}. Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. anyOf[1][] (Value): {@see DeliveryWindowResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryWindowResourcePreviousAttributes>|null
     */
    public function getOfferedWindows(): array|null { return $this->get('offered_windows'); }
    public function hasOfferedWindows(): bool { return $this->has('offered_windows'); }
    /** Pickup details. Set only when `type` is `pickup`. anyOf[1] (Value): {@see DeliveryPickupDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryPickupDetailsPreviousAttributes|null
     */
    public function getPickup(): DeliveryPickupDetailsPreviousAttributes|null { return $this->get('pickup'); }
    public function hasPickup(): bool { return $this->has('pickup'); }
    /** Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. anyOf[1] (Value): Array of {@see DeliveryRecipientRequirementPreviousAttributes}. Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. anyOf[1][] (Value): {@see DeliveryRecipientRequirementPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryRecipientRequirementPreviousAttributes>|null
     */
    public function getRecipientRequirements(): array|null { return $this->get('recipient_requirements'); }
    public function hasRecipientRequirements(): bool { return $this->has('recipient_requirements'); }
    /** Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. anyOf[1] (Value): boolean. Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRecommended(): bool|null { return $this->get('recommended'); }
    public function hasRecommended(): bool { return $this->has('recommended'); }
    /** Shipment details. Set only when `type` is `shipment`. anyOf[1] (Value): {@see DeliveryShipmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryShipmentDetailsPreviousAttributes|null
     */
    public function getShipment(): DeliveryShipmentDetailsPreviousAttributes|null { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
    /** Whether tax applies to the delivery charge. anyOf[1] (Value): boolean. Whether tax applies to the delivery charge. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getTaxable(): bool|null { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** IANA timezone for displaying window_start_at, window_end_at, and any offered windows. anyOf[1] (Value): string. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Delivery type of this option. Value enum: "shipment", "pickup", "local_delivery". anyOf[1] (Value): string. Delivery type of this option. Value enum: "shipment", "pickup", "local_delivery". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. anyOf[1] (Value): string. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWindowEndAt(): string|null { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Whether the offered windows cost the same. Value enum: "uniform", "varies". anyOf[1] (Value): string. Whether the offered windows cost the same. Value enum: "uniform", "varies". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWindowPricing(): string|null { return $this->get('window_pricing'); }
    public function hasWindowPricing(): bool { return $this->has('window_pricing'); }
    /** Whether the buyer chooses a delivery window. Value enum: "none", "offered". anyOf[1] (Value): string. Whether the buyer chooses a delivery window. Value enum: "none", "offered". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWindowSelection(): string|null { return $this->get('window_selection'); }
    public function hasWindowSelection(): bool { return $this->has('window_selection'); }
    /** Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. anyOf[1] (Value): string. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWindowStartAt(): string|null { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
