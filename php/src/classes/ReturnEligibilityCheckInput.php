<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $evaluated_at
 * @property-read list<ReturnEligibilityCheckLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $order_id
 * @property-read ReturnPolicyEvaluationInput|array<array-key, mixed>|\stdClass $policy_evaluation
 * @property-read ReturnEligibilitySelectionInput|array<array-key, mixed>|\stdClass $selection
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnEligibilityCheckInput extends Model {
    /** @param array{'evaluated_at': string|\DateTimeInterface, 'line_items': list<ReturnEligibilityCheckLineItemInput|array<array-key, mixed>|\stdClass>, 'order_id': string, 'policy_evaluation': ReturnPolicyEvaluationInput|array<array-key, mixed>|\stdClass, 'selection': ReturnEligibilitySelectionInput|array<array-key, mixed>|\stdClass, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnEligibilityCheckInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string|\DateTimeInterface { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** @return list<ReturnEligibilityCheckLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return ReturnPolicyEvaluationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When policy_evaluation is omitted; use hasPolicyEvaluation() or valueOrDefault().
     */
    public function getPolicyEvaluation(): mixed { return $this->get('policy_evaluation'); }
    public function hasPolicyEvaluation(): bool { return $this->has('policy_evaluation'); }
    /** @return ReturnEligibilitySelectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When selection is omitted; use hasSelection() or valueOrDefault().
     */
    public function getSelection(): mixed { return $this->get('selection'); }
    public function hasSelection(): bool { return $this->has('selection'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
