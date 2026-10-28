<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $evaluated_at
 * @property-read list<MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItem> $line_items
 * @property-read string $order_id
 * @property-read MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluation $policy_evaluation
 * @property-read MeCreateReturnPreviewResponse200DataEligibilityEligibilitySelectionAllRemainingFulfilled|MeCreateReturnPreviewResponse200DataEligibilityEligibilitySelectionLineItems|\stdClass $selection
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class MeCreateReturnPreviewResponse200DataEligibilityEligibility extends Model {
    /** @param array{'evaluated_at': string, 'line_items': list<mixed>, 'order_id': string, 'policy_evaluation': mixed, 'selection': mixed, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewResponse200DataEligibilityEligibility')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItem} and {@see BuyerReturnEligibilityPreviewLineItem}). Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItem}. An order line item's Return eligibility, catalog details, and suggested return reasons shown to the buyer.
     * @return list<MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluation}. Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines.
     * @return MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluation
     */
    public function getPolicyEvaluation(): MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluation { return $this->get('policy_evaluation'); }
    public function hasPolicyEvaluation(): bool { return $this->has('policy_evaluation'); }
    /** Shape $ (Value): {@see ReturnEligibilitySelection}. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. Shape $.line_items (Optional): Array of {@see ReturnEligibilityLineItemRequest}. Shape $.line_items[] (Value): {@see ReturnEligibilityLineItemRequest}. An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line. Shape $.selection_type (Required): string.  Value enum: "all_remaining_fulfilled", "line_items". Shape $.oneOf[1] (Value): {@see ReturnEligibilitySelectionAllRemainingFulfilled}. The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`. Shape $.oneOf[2] (Value): {@see ReturnEligibilitySelectionLineItems}. The `line_items` variant of `ReturnEligibilitySelection`.
     * @return MeCreateReturnPreviewResponse200DataEligibilityEligibilitySelectionAllRemainingFulfilled|MeCreateReturnPreviewResponse200DataEligibilityEligibilitySelectionLineItems|\stdClass
     */
    public function getSelection(): MeCreateReturnPreviewResponse200DataEligibilityEligibilitySelectionAllRemainingFulfilled|MeCreateReturnPreviewResponse200DataEligibilityEligibilitySelectionLineItems|\stdClass { return $this->get('selection'); }
    public function hasSelection(): bool { return $this->has('selection'); }
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
