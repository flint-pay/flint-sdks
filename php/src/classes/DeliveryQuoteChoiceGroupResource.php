<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<DeliveryAddressAdvisoryResource> $address_advisories
 * @property-read ?list<string> $allowed_types
 * @property-read string $availability_status
 * @property-read array<array-key, DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailable|DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailable|DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueInputRequired|DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculate|DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContext|\stdClass>|null $candidate_outcomes
 * @property-read string $delivery_choice_group_id
 * @property-read string $evaluation_status
 * @property-read ?list<DeliveryQuoteExecutionLegResource> $execution_legs
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read list<DeliveryQuoteLineItemResource> $line_items
 * @property-read list<string> $method_types
 * @property-read list<DeliveryQuoteChoiceGroupResourceOptionsItem> $options
 * @property-read ?string $previously_selected_delivery_method_id
 * @property-read string $stable_key
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryQuoteChoiceGroupResource extends Model {
    /** @param array{'address_advisories'?: list<mixed>, 'allowed_types'?: list<string>, 'availability_status': string, 'candidate_outcomes'?: \stdClass, 'delivery_choice_group_id': string, 'evaluation_status': string, 'execution_legs'?: list<mixed>, 'input_requirements': list<mixed>, 'line_items': list<mixed>, 'method_types': list<string>, 'options': list<object{'amount_money': mixed, 'arrival_estimate'?: mixed, 'buyer_instructions': mixed, 'charge_tax_category'?: string, 'consumed_by_delivery_selection_id'?: string, 'delivery_method_id': string, 'delivery_method_revision_id'?: string, 'delivery_option_id': string, 'delivery_plan': mixed, 'description'?: string, 'display_position': int, 'execution_legs'?: list<mixed>, 'expires_at'?: string, 'local_delivery'?: mixed, 'name': string, 'offered_windows'?: list<mixed>, 'pickup'?: mixed, 'recipient_requirements'?: list<mixed>, 'recommended': bool, 'shipment'?: mixed, 'taxable': bool, 'timezone'?: string, 'type': string, 'window_end_at'?: string, 'window_pricing'?: string, 'window_selection': string, 'window_start_at'?: string}>, 'previously_selected_delivery_method_id'?: string, 'stable_key': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteChoiceGroupResource')); }
    /** Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. [] (Value): {@see DeliveryAddressAdvisoryResource}. An address verification result for a delivery address or buyer location. `suggested_address` may offer a correction.
     * @return ?list<DeliveryAddressAdvisoryResource>
     */
    public function getAddressAdvisories(): ?array { return $this->get('address_advisories'); }
    public function hasAddressAdvisories(): bool { return $this->has('address_advisories'); }
    /** Delivery types permitted by this group's items. [] (Value): string.
     * @return ?list<string>
     */
    public function getAllowedTypes(): ?array { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** Whether this group has a delivery option the buyer can choose. Value enum: "ready", "needs_input", "unavailable".
     * @return string
     */
    public function getAvailabilityStatus(): string { return $this->get('availability_status'); }
    public function hasAvailabilityStatus(): bool { return $this->has('availability_status'); }
    /** Evaluation result for each candidate delivery method, keyed by its method ID. * (Value): {@see DeliveryCandidateOutcomeResource}. The result of evaluating one delivery method for a choice group, selected by `type`: available with an option, unavailable, input required, cannot calculate, or requires checkout context.
     * @return array<array-key, DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailable|DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailable|DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueInputRequired|DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculate|DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContext|\stdClass>|null
     */
    public function getCandidateOutcomes(): ?array { return $this->get('candidate_outcomes'); }
    public function hasCandidateOutcomes(): bool { return $this->has('candidate_outcomes'); }
    /** Identifier used to choose one option for this group.
     * @return string
     */
    public function getDeliveryChoiceGroupId(): string { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** How completely Flint evaluated the group's candidate delivery methods. Value enum: "complete", "incomplete", "degraded".
     * @return string
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. [] (Value): {@see DeliveryQuoteExecutionLegResource}. One leg of a delivery choice group, identifying the origin Location the group's items leave from.
     * @return ?list<DeliveryQuoteExecutionLegResource>
     */
    public function getExecutionLegs(): ?array { return $this->get('execution_legs'); }
    public function hasExecutionLegs(): bool { return $this->has('execution_legs'); }
    /** Inputs this group's delivery methods need before they can be priced or selected. [] (Value): {@see DeliveryInputRequirement}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirement>
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Order line items, or bundle components, this group covers, with the quantity covered. [] (Value): {@see DeliveryQuoteLineItemResource}. An order line item, or one bundle component of it, and the quantity covered by a delivery choice group.
     * @return list<DeliveryQuoteLineItemResource>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. [] enum: "shipment", "pickup", "local_delivery". [] (Value): string.  Value enum: "shipment", "pickup", "local_delivery".
     * @return list<string>
     */
    public function getMethodTypes(): array { return $this->get('method_types'); }
    public function hasMethodTypes(): bool { return $this->has('method_types'); }
    /** Delivery options the buyer can choose now. [] (Value): {@see DeliveryQuoteChoiceGroupResourceOptionsItem}. A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.
     * @return list<DeliveryQuoteChoiceGroupResourceOptionsItem>
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Method chosen for this group in the previous selection. Omitted when there is none.
     * @return ?string
     */
    public function getPreviouslySelectedDeliveryMethodId(): ?string { return $this->get('previously_selected_delivery_method_id'); }
    public function hasPreviouslySelectedDeliveryMethodId(): bool { return $this->has('previously_selected_delivery_method_id'); }
    /** Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change.
     * @return string
     */
    public function getStableKey(): string { return $this->get('stable_key'); }
    public function hasStableKey(): bool { return $this->has('stable_key'); }
}
