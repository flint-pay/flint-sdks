<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_types
 * @property-read string $availability_status
 * @property-read array<array-key, DeliveryCandidateOutcomeResourceInput|array<array-key, mixed>|\stdClass>|\stdClass $candidate_outcomes
 * @property-read string $delivery_choice_group_id
 * @property-read string $evaluation_status
 * @property-read list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass> $execution_legs
 * @property-read list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass> $input_requirements
 * @property-read list<DeliveryQuoteLineItemResourceInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read list<string> $method_types
 * @property-read list<DeliveryOptionProjectionInput|array<array-key, mixed>|\stdClass> $options
 * @property-read string $previously_selected_delivery_method_id
 * @property-read string $stable_key
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryQuoteChoiceGroupResourceInput extends Model {
    /** @param array{'allowed_types'?: list<string>, 'availability_status': string, 'candidate_outcomes'?: array<array-key, DeliveryCandidateOutcomeResourceInput|array<array-key, mixed>|\stdClass>|\stdClass, 'delivery_choice_group_id': string, 'evaluation_status': string, 'execution_legs'?: list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass>, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'line_items': list<DeliveryQuoteLineItemResourceInput|array<array-key, mixed>|\stdClass>, 'method_types': list<string>, 'options': list<DeliveryOptionProjectionInput|array<array-key, mixed>|\stdClass>, 'previously_selected_delivery_method_id'?: string, 'stable_key': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteChoiceGroupResourceInput')); }
    /** @return list<string>
     * @throws SdkError When allowed_types is omitted; use hasAllowedTypes() or valueOrDefault().
     */
    public function getAllowedTypes(): array { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** @return string
     * @throws SdkError When availability_status is omitted; use hasAvailabilityStatus() or valueOrDefault().
     */
    public function getAvailabilityStatus(): string { return $this->get('availability_status'); }
    public function hasAvailabilityStatus(): bool { return $this->has('availability_status'); }
    /** @return array<array-key, DeliveryCandidateOutcomeResourceInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When candidate_outcomes is omitted; use hasCandidateOutcomes() or valueOrDefault().
     */
    public function getCandidateOutcomes(): array|object { return $this->get('candidate_outcomes'); }
    public function hasCandidateOutcomes(): bool { return $this->has('candidate_outcomes'); }
    /** @return string
     * @throws SdkError When delivery_choice_group_id is omitted; use hasDeliveryChoiceGroupId() or valueOrDefault().
     */
    public function getDeliveryChoiceGroupId(): string { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** @return string
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** @return list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When execution_legs is omitted; use hasExecutionLegs() or valueOrDefault().
     */
    public function getExecutionLegs(): array { return $this->get('execution_legs'); }
    public function hasExecutionLegs(): bool { return $this->has('execution_legs'); }
    /** @return list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** @return list<DeliveryQuoteLineItemResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return list<string>
     * @throws SdkError When method_types is omitted; use hasMethodTypes() or valueOrDefault().
     */
    public function getMethodTypes(): array { return $this->get('method_types'); }
    public function hasMethodTypes(): bool { return $this->has('method_types'); }
    /** @return list<DeliveryOptionProjectionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When options is omitted; use hasOptions() or valueOrDefault().
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** @return string
     * @throws SdkError When previously_selected_delivery_method_id is omitted; use hasPreviouslySelectedDeliveryMethodId() or valueOrDefault().
     */
    public function getPreviouslySelectedDeliveryMethodId(): string { return $this->get('previously_selected_delivery_method_id'); }
    public function hasPreviouslySelectedDeliveryMethodId(): bool { return $this->has('previously_selected_delivery_method_id'); }
    /** @return string
     * @throws SdkError When stable_key is omitted; use hasStableKey() or valueOrDefault().
     */
    public function getStableKey(): string { return $this->get('stable_key'); }
    public function hasStableKey(): bool { return $this->has('stable_key'); }
}
