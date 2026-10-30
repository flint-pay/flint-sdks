<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<string> $allowed_types
 * @property-read string $availability_status
 * @property-read array<array-key, DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailable|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailable|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequired|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculate|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContext|\stdClass> $candidate_outcomes
 * @property-read string $evaluation_status
 * @property-read ?list<DeliveryQuoteExecutionLegResource> $execution_legs
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read list<DeliveryQuoteLineItemResource> $line_items
 * @property-read list<DeliveryOptionProjection> $options
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResource extends Model {
    /** @param array{'allowed_types'?: list<string>, 'availability_status': string, 'candidate_outcomes': \stdClass, 'evaluation_status': string, 'execution_legs'?: list<mixed>, 'input_requirements': list<mixed>, 'line_items': list<mixed>, 'options': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResource')); }
    /**  [] (Value): string.
     * @return ?list<string>
     */
    public function getAllowedTypes(): ?array { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** Value enum: "ready", "needs_input", "needs_checkout_context", "unavailable".
     * @return string
     */
    public function getAvailabilityStatus(): string { return $this->get('availability_status'); }
    public function hasAvailabilityStatus(): bool { return $this->has('availability_status'); }
    /**  * (Value): {@see DeliveryCandidateOutcomeResource}. The result of evaluating one delivery method for a choice group, selected by `type`: available with an option, unavailable, input required, cannot calculate, or requires checkout context.
     * @return array<array-key, DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailable|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailable|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequired|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculate|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContext|\stdClass>
     */
    public function getCandidateOutcomes(): array { return $this->get('candidate_outcomes'); }
    public function hasCandidateOutcomes(): bool { return $this->has('candidate_outcomes'); }
    /** Value enum: "complete", "incomplete", "degraded".
     * @return string
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. [] (Value): {@see DeliveryQuoteExecutionLegResource}. One leg of a delivery choice group, identifying the origin Location the group's items leave from.
     * @return ?list<DeliveryQuoteExecutionLegResource>
     */
    public function getExecutionLegs(): ?array { return $this->get('execution_legs'); }
    public function hasExecutionLegs(): bool { return $this->has('execution_legs'); }
    /**  [] (Value): {@see DeliveryInputRequirement}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirement>
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /**  [] (Value): {@see DeliveryQuoteLineItemResource}. An order line item, or one bundle component of it, and the quantity covered by a delivery choice group.
     * @return list<DeliveryQuoteLineItemResource>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /**  [] (Value): {@see DeliveryOptionProjection}. A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.
     * @return list<DeliveryOptionProjection>
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
}
