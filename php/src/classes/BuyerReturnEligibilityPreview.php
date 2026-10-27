<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $evaluated_at
 * @property-read list<BuyerReturnEligibilityPreviewLineItem> $line_items
 * @property-read string $order_id
 * @property-read BuyerReturnPolicyEvaluation $policy_evaluation
 * @property-read BuyerReturnEligibilityPreviewSelectionAllRemainingFulfilled|BuyerReturnEligibilityPreviewSelectionLineItems|\stdClass $selection
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnEligibilityPreview extends Model {
    /** @param array{'evaluated_at': string, 'line_items': list<mixed>, 'order_id': string, 'policy_evaluation': mixed, 'selection': mixed, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnEligibilityPreview')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** Shape $ (Value): Array of {@see BuyerReturnEligibilityPreviewLineItem}. Shape $[] (Value): {@see BuyerReturnEligibilityPreviewLineItem}. An order line item's Return eligibility, catalog details, and suggested return reasons shown to the buyer.
     * @return list<BuyerReturnEligibilityPreviewLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): {@see BuyerReturnPolicyEvaluation}. Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines.
     * @return BuyerReturnPolicyEvaluation
     */
    public function getPolicyEvaluation(): BuyerReturnPolicyEvaluation { return $this->get('policy_evaluation'); }
    public function hasPolicyEvaluation(): bool { return $this->has('policy_evaluation'); }
    /** Shape $ (Value): {@see ReturnEligibilitySelection}. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.
     * @return BuyerReturnEligibilityPreviewSelectionAllRemainingFulfilled|BuyerReturnEligibilityPreviewSelectionLineItems|\stdClass
     */
    public function getSelection(): BuyerReturnEligibilityPreviewSelectionAllRemainingFulfilled|BuyerReturnEligibilityPreviewSelectionLineItems|\stdClass { return $this->get('selection'); }
    public function hasSelection(): bool { return $this->has('selection'); }
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
