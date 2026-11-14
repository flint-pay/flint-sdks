<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $evaluated_at
 * @property-read list<BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItem> $line_items
 * @property-read string $order_id
 * @property-read BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluation $policy_evaluation
 * @property-read ReturnRefundEstimate|null $refund_estimate
 * @property-read BuyerReturnPreviewResponseDataResolutionEligibilitySelectionAllRemainingFulfilled|BuyerReturnPreviewResponseDataResolutionEligibilitySelectionLineItems|\stdClass $selection
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnPreviewResponseDataResolutionEligibility extends Model {
    /** @param array{'evaluated_at': string, 'line_items': list<mixed>, 'order_id': string, 'policy_evaluation': mixed, 'refund_estimate': mixed, 'selection': mixed, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnPreviewResponseDataResolutionEligibility')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** Eligibility of each line asked about. [] (Value): {@see BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItem}. An order line item's Return eligibility, catalog details, and suggested return reasons shown to the buyer.
     * @return list<BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** ID of the Order the units come from.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** How the active return policies judged the lines. Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines.
     * @return BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluation
     */
    public function getPolicyEvaluation(): BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluation { return $this->get('policy_evaluation'); }
    public function hasPolicyEvaluation(): bool { return $this->has('policy_evaluation'); }
    /**  anyOf[1] (Value): {@see ReturnRefundEstimate}. Estimate for selected eligible quantities requested as refund, or with no requested resolution when refund is allowed. Also includes explicitly requested eligible store credit. Null when no selected line qualifies for refund or store credit. The store's inspection and its final decision can change the refund. Nothing is reserved. anyOf[2] (Value): null.
     * @return ReturnRefundEstimate|null
     */
    public function getRefundEstimate(): ReturnRefundEstimate|null { return $this->get('refund_estimate'); }
    public function hasRefundEstimate(): bool { return $this->has('refund_estimate'); }
    /** The selection the preview was run for. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. line_items (Optional): Array of {@see ReturnEligibilityLineItemRequest}. The lines to check or return, each naming an order line item. line_items[] (Value): {@see ReturnEligibilityLineItemRequest}. An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line. selection_type (Required): string. How the selection picks units. Value enum: "all_remaining_fulfilled", "line_items". oneOf[1] (Value): {@see ReturnEligibilitySelectionAllRemainingFulfilled}. The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`. oneOf[2] (Value): {@see ReturnEligibilitySelectionLineItems}. The `line_items` variant of `ReturnEligibilitySelection`.
     * @return BuyerReturnPreviewResponseDataResolutionEligibilitySelectionAllRemainingFulfilled|BuyerReturnPreviewResponseDataResolutionEligibilitySelectionLineItems|\stdClass
     */
    public function getSelection(): BuyerReturnPreviewResponseDataResolutionEligibilitySelectionAllRemainingFulfilled|BuyerReturnPreviewResponseDataResolutionEligibilitySelectionLineItems|\stdClass { return $this->get('selection'); }
    public function hasSelection(): bool { return $this->has('selection'); }
    /** Overall result for the selection. `review_required` when the lines differ. Value enum: "eligible", "ineligible", "review_required".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
