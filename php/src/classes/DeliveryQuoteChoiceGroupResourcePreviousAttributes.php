<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryAddressAdvisoryResourcePreviousAttributes>|null $address_advisories
 * @property-read list<string>|null $allowed_types
 * @property-read string|null $availability_status
 * @property-read array<array-key, \stdClass>|null $candidate_outcomes
 * @property-read string|null $delivery_choice_group_id
 * @property-read string|null $evaluation_status
 * @property-read list<DeliveryQuoteExecutionLegResourcePreviousAttributes>|null $execution_legs
 * @property-read list<DeliveryInputRequirementPreviousAttributes>|null $input_requirements
 * @property-read list<DeliveryQuoteLineItemResourcePreviousAttributes>|null $line_items
 * @property-read list<string>|null $method_types
 * @property-read list<DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem>|null $options
 * @property-read string|null $previously_selected_delivery_method_id
 * @property-read string|null $stable_key
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryQuoteChoiceGroupResourcePreviousAttributes extends Model {
    /** @param array{'address_advisories'?: mixed, 'allowed_types'?: mixed, 'availability_status'?: mixed, 'candidate_outcomes'?: mixed, 'delivery_choice_group_id'?: mixed, 'evaluation_status'?: mixed, 'execution_legs'?: mixed, 'input_requirements'?: mixed, 'line_items'?: mixed, 'method_types'?: mixed, 'options'?: mixed, 'previously_selected_delivery_method_id'?: mixed, 'stable_key'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteChoiceGroupResourcePreviousAttributes')); }
    /** Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. anyOf[1] (Value): Array of {@see DeliveryAddressAdvisoryResourcePreviousAttributes}. Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. anyOf[1][] (Value): {@see DeliveryAddressAdvisoryResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryAddressAdvisoryResourcePreviousAttributes>|null
     */
    public function getAddressAdvisories(): array|null { return $this->get('address_advisories'); }
    public function hasAddressAdvisories(): bool { return $this->has('address_advisories'); }
    /** Delivery types permitted by this group's items. anyOf[1] (Value): Array of string. Delivery types permitted by this group's items. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getAllowedTypes(): array|null { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** Whether this group has a delivery option the buyer can choose. Value enum: "ready", "needs_input", "unavailable". anyOf[1] (Value): string. Whether this group has a delivery option the buyer can choose. Value enum: "ready", "needs_input", "unavailable". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAvailabilityStatus(): string|null { return $this->get('availability_status'); }
    public function hasAvailabilityStatus(): bool { return $this->has('availability_status'); }
    /** Evaluation result for each candidate delivery method, keyed by its method ID. anyOf[1] (Value): Map of {@see DeliveryCandidateOutcomeResourcePreviousAttributes}. anyOf[1].* (Value): {@see DeliveryCandidateOutcomeResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, \stdClass>|null
     */
    public function getCandidateOutcomes(): array|null { return $this->get('candidate_outcomes'); }
    public function hasCandidateOutcomes(): bool { return $this->has('candidate_outcomes'); }
    /** Identifier used to choose one option for this group. anyOf[1] (Value): string. Identifier used to choose one option for this group. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryChoiceGroupId(): string|null { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** How completely Flint evaluated the group's candidate delivery methods. Value enum: "complete", "incomplete", "degraded". anyOf[1] (Value): string. How completely Flint evaluated the group's candidate delivery methods. Value enum: "complete", "incomplete", "degraded". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEvaluationStatus(): string|null { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. anyOf[1] (Value): Array of {@see DeliveryQuoteExecutionLegResourcePreviousAttributes}. Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. anyOf[1][] (Value): {@see DeliveryQuoteExecutionLegResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryQuoteExecutionLegResourcePreviousAttributes>|null
     */
    public function getExecutionLegs(): array|null { return $this->get('execution_legs'); }
    public function hasExecutionLegs(): bool { return $this->has('execution_legs'); }
    /** Inputs this group's delivery methods need before they can be priced or selected. anyOf[1] (Value): Array of {@see DeliveryInputRequirementPreviousAttributes}. Inputs this group's delivery methods need before they can be priced or selected. anyOf[1][] (Value): {@see DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryInputRequirementPreviousAttributes>|null
     */
    public function getInputRequirements(): array|null { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Order line items, or bundle components, this group covers, with the quantity covered. anyOf[1] (Value): Array of {@see DeliveryQuoteLineItemResourcePreviousAttributes}. Order line items, or bundle components, this group covers, with the quantity covered. anyOf[1][] (Value): {@see DeliveryQuoteLineItemResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryQuoteLineItemResourcePreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. [] enum: "shipment", "pickup", "local_delivery". anyOf[1] (Value): Array of string. Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. [] enum: "shipment", "pickup", "local_delivery". anyOf[1][] (Value): string.  Value enum: "shipment", "pickup", "local_delivery". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getMethodTypes(): array|null { return $this->get('method_types'); }
    public function hasMethodTypes(): bool { return $this->has('method_types'); }
    /** Delivery options the buyer can choose now. anyOf[1] (Value): Array of {@see DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem}. Delivery options the buyer can choose now. anyOf[1][] (Value): {@see DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem}. A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details. anyOf[2] (Value): null.
     * @return list<DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem>|null
     */
    public function getOptions(): array|null { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Method chosen for this group in the previous selection. Omitted when there is none. anyOf[1] (Value): string. Method chosen for this group in the previous selection. Omitted when there is none. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPreviouslySelectedDeliveryMethodId(): string|null { return $this->get('previously_selected_delivery_method_id'); }
    public function hasPreviouslySelectedDeliveryMethodId(): bool { return $this->has('previously_selected_delivery_method_id'); }
    /** Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. anyOf[1] (Value): string. Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStableKey(): string|null { return $this->get('stable_key'); }
    public function hasStableKey(): bool { return $this->has('stable_key'); }
}
