<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_types
 * @property-read string $availability_status
 * @property-read array<array-key, DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailable|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailable|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequired|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculate|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContext|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnsupportedInPreview|\stdClass> $candidate_outcomes
 * @property-read string $evaluation_status
 * @property-read list<DeliveryQuoteExecutionLegResource> $execution_legs
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read list<DeliveryQuoteLineItemResource> $line_items
 * @property-read list<DeliveryOptionProjection> $options
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryPreviewChoiceGroupResource extends Model {
    /** @param array{'allowed_types'?: list<string>, 'availability_status': string, 'candidate_outcomes': \stdClass, 'evaluation_status': string, 'execution_legs'?: list<mixed>, 'input_requirements': list<mixed>, 'line_items': list<mixed>, 'options': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResource')); }
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
    /** @return array<array-key, DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailable|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailable|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequired|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculate|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContext|DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnsupportedInPreview|\stdClass>
     * @throws SdkError When candidate_outcomes is omitted; use hasCandidateOutcomes() or valueOrDefault().
     */
    public function getCandidateOutcomes(): array { return $this->get('candidate_outcomes'); }
    public function hasCandidateOutcomes(): bool { return $this->has('candidate_outcomes'); }
    /** @return string
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** @return list<DeliveryQuoteExecutionLegResource>
     * @throws SdkError When execution_legs is omitted; use hasExecutionLegs() or valueOrDefault().
     */
    public function getExecutionLegs(): array { return $this->get('execution_legs'); }
    public function hasExecutionLegs(): bool { return $this->has('execution_legs'); }
    /** @return list<DeliveryInputRequirement>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** @return list<DeliveryQuoteLineItemResource>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return list<DeliveryOptionProjection>
     * @throws SdkError When options is omitted; use hasOptions() or valueOrDefault().
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
}
