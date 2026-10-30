<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $evaluated_at
 * @property-read list<BuyerReturnPreviewResponseDataEligibilityEligibilityLineItemsItem> $line_items
 * @property-read string $order_id
 * @property-read BuyerReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluation $policy_evaluation
 * @property-read BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionAllRemainingFulfilled|BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionLineItems|\stdClass $selection
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnPreviewResponseDataEligibilityEligibility extends Model {
    /** @param array{'evaluated_at': string, 'line_items': list<mixed>, 'order_id': string, 'policy_evaluation': mixed, 'selection': mixed, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnPreviewResponseDataEligibilityEligibility')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /**  [] (Value): {@see BuyerReturnPreviewResponseDataEligibilityEligibilityLineItemsItem}. An order line item's Return eligibility, catalog details, and suggested return reasons shown to the buyer.
     * @return list<BuyerReturnPreviewResponseDataEligibilityEligibilityLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** order_id
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines.
     * @return BuyerReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluation
     */
    public function getPolicyEvaluation(): BuyerReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluation { return $this->get('policy_evaluation'); }
    public function hasPolicyEvaluation(): bool { return $this->has('policy_evaluation'); }
    /** Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. line_items (Optional): Array of {@see ReturnEligibilityLineItemRequest}. line_items[] (Value): {@see ReturnEligibilityLineItemRequest}. An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line. selection_type (Required): string.  Value enum: "all_remaining_fulfilled", "line_items". oneOf[1] (Value): {@see ReturnEligibilitySelectionAllRemainingFulfilled}. The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`. oneOf[2] (Value): {@see ReturnEligibilitySelectionLineItems}. The `line_items` variant of `ReturnEligibilitySelection`.
     * @return BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionAllRemainingFulfilled|BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionLineItems|\stdClass
     */
    public function getSelection(): BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionAllRemainingFulfilled|BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionLineItems|\stdClass { return $this->get('selection'); }
    public function hasSelection(): bool { return $this->has('selection'); }
    /** Value enum: "eligible", "ineligible", "review_required".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
