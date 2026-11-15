<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read string $delivery_method_revision_id
 * @property-read list<DeliveryRateEvaluationExecutionLegInput|array<array-key, mixed>|\stdClass> $execution_legs
 * @property-read DeliveryRateEvaluationPricingInput|array<array-key, mixed>|\stdClass $pricing
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateEvaluationCandidateInput extends Model {
    /** @param array{'delivery_method_id': string, 'delivery_method_revision_id': string, 'execution_legs': list<DeliveryRateEvaluationExecutionLegInput|array<array-key, mixed>|\stdClass>, 'pricing': DeliveryRateEvaluationPricingInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateEvaluationCandidateInput')); }
    /** The method being priced. It stays the same when the method is edited, so use it to choose a service or price list. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** The exact method revision being priced. Echo it in the method's result. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * @return string
     * @throws SdkError When delivery_method_revision_id is omitted; use hasDeliveryMethodRevisionId() or valueOrDefault().
     */
    public function getDeliveryMethodRevisionId(): string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** One entry per origin Location the items leave from. [] (Value): {@see DeliveryRateEvaluationExecutionLegInput}. Items that leave from one origin Location in a delivery rate evaluation.
     * @return list<DeliveryRateEvaluationExecutionLegInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When execution_legs is omitted; use hasExecutionLegs() or valueOrDefault().
     */
    public function getExecutionLegs(): array { return $this->get('execution_legs'); }
    public function hasExecutionLegs(): bool { return $this->has('execution_legs'); }
    /** Totals for the choice group that a rate calculation reads. Totals for a choice group that a delivery rate calculation reads.
     * @return DeliveryRateEvaluationPricingInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pricing is omitted; use hasPricing() or valueOrDefault().
     */
    public function getPricing(): mixed { return $this->get('pricing'); }
    public function hasPricing(): bool { return $this->has('pricing'); }
}
