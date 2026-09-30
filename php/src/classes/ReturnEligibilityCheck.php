<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $evaluated_at
 * @property-read list<ReturnEligibilityCheckLineItem> $line_items
 * @property-read string $order_id
 * @property-read ReturnPolicyEvaluation $policy_evaluation
 * @property-read ReturnEligibilityCheckSelectionAllRemainingFulfilled|ReturnEligibilityCheckSelectionLineItems|\stdClass $selection
 * @property-read string $status
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnEligibilityCheck extends Model {
    /** @param array{'evaluated_at': string, 'line_items': list<mixed>, 'order_id': string, 'policy_evaluation': mixed, 'selection': mixed, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnEligibilityCheck')); }
    /** @return string
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** @return list<ReturnEligibilityCheckLineItem>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return ReturnPolicyEvaluation
     * @throws SdkError When policy_evaluation is omitted; use hasPolicyEvaluation() or valueOrDefault().
     */
    public function getPolicyEvaluation(): ReturnPolicyEvaluation { return $this->get('policy_evaluation'); }
    public function hasPolicyEvaluation(): bool { return $this->has('policy_evaluation'); }
    /** @return ReturnEligibilityCheckSelectionAllRemainingFulfilled|ReturnEligibilityCheckSelectionLineItems|\stdClass
     * @throws SdkError When selection is omitted; use hasSelection() or valueOrDefault().
     */
    public function getSelection(): ReturnEligibilityCheckSelectionAllRemainingFulfilled|ReturnEligibilityCheckSelectionLineItems|\stdClass { return $this->get('selection'); }
    public function hasSelection(): bool { return $this->has('selection'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
