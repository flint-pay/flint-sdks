<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_types
 * @property-read string $availability_status
 * @property-read array<array-key, DeliveryCandidateOutcomeResourceInput|array<array-key, mixed>|\stdClass>|\stdClass $candidate_outcomes
 * @property-read string $evaluation_status
 * @property-read list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass> $execution_legs
 * @property-read list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass> $input_requirements
 * @property-read list<DeliveryQuoteLineItemResourceInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read list<DeliveryOptionProjectionInput|array<array-key, mixed>|\stdClass> $options
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPreviewChoiceGroupResourceInput extends Model {
    /** @param array{'allowed_types'?: list<string>, 'availability_status': string, 'candidate_outcomes': array<array-key, DeliveryCandidateOutcomeResourceInput|array<array-key, mixed>|\stdClass>|\stdClass, 'evaluation_status': string, 'execution_legs'?: list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass>, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'line_items': list<DeliveryQuoteLineItemResourceInput|array<array-key, mixed>|\stdClass>, 'options': list<DeliveryOptionProjectionInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceInput')); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When allowed_types is omitted; use hasAllowedTypes() or valueOrDefault().
     */
    public function getAllowedTypes(): array { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** Shape $ (Value): string.  Value enum: "ready", "needs_input", "needs_checkout_context", "unavailable".
     * @return string
     * @throws SdkError When availability_status is omitted; use hasAvailabilityStatus() or valueOrDefault().
     */
    public function getAvailabilityStatus(): string { return $this->get('availability_status'); }
    public function hasAvailabilityStatus(): bool { return $this->has('availability_status'); }
    /** Shape $ (Value): Map of {@see DeliveryCandidateOutcomeResourceInput}. Shape $.* (Value): {@see DeliveryCandidateOutcomeResourceInput}. The result of evaluating one delivery method for a choice group, selected by `type`: available with an option, unavailable, input required, cannot calculate, or requires checkout context.
     * @return array<array-key, DeliveryCandidateOutcomeResourceInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When candidate_outcomes is omitted; use hasCandidateOutcomes() or valueOrDefault().
     */
    public function getCandidateOutcomes(): array|object { return $this->get('candidate_outcomes'); }
    public function hasCandidateOutcomes(): bool { return $this->has('candidate_outcomes'); }
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded".
     * @return string
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** Shape $ (Value): Array of {@see DeliveryQuoteExecutionLegResourceInput}. Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. Shape $[] (Value): {@see DeliveryQuoteExecutionLegResourceInput}. One leg of a delivery choice group, identifying the origin Location the group's items leave from.
     * @return list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When execution_legs is omitted; use hasExecutionLegs() or valueOrDefault().
     */
    public function getExecutionLegs(): array { return $this->get('execution_legs'); }
    public function hasExecutionLegs(): bool { return $this->has('execution_legs'); }
    /** Shape $ (Value): Array of {@see DeliveryInputRequirementInput}. Shape $[] (Value): {@see DeliveryInputRequirementInput}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Shape $ (Value): Array of {@see DeliveryQuoteLineItemResourceInput}. Shape $[] (Value): {@see DeliveryQuoteLineItemResourceInput}. An order line item, or one bundle component of it, and the quantity covered by a delivery choice group.
     * @return list<DeliveryQuoteLineItemResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): Array of {@see DeliveryOptionProjectionInput}. Shape $[] (Value): {@see DeliveryOptionProjectionInput}. A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.
     * @return list<DeliveryOptionProjectionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When options is omitted; use hasOptions() or valueOrDefault().
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
}
