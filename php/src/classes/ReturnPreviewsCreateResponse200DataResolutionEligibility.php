<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $evaluated_at
 * @property-read list<ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItem> $line_items
 * @property-read string $order_id
 * @property-read ReturnPreviewsCreateResponse200DataResolutionEligibilityPolicyEvaluation $policy_evaluation
 * @property-read ReturnPreviewsCreateResponse200DataResolutionEligibilitySelectionAllRemainingFulfilled|ReturnPreviewsCreateResponse200DataResolutionEligibilitySelectionLineItems|\stdClass $selection
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPreviewsCreateResponse200DataResolutionEligibility extends Model {
    /** @param array{'evaluated_at': string, 'line_items': list<mixed>, 'order_id': string, 'policy_evaluation': mixed, 'selection': mixed, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPreviewsCreateResponse200DataResolutionEligibility')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** Shape $ (Value): Array of ({@see ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItem} and {@see ReturnEligibilityPreviewLineItem}). Shape $[] (Value): {@see ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItem}. Return eligibility for one order line item, with the line's details, suggested return reasons, and whether self-service returns are enabled.
     * @return list<ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataResolutionEligibilityPolicyEvaluation}. How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results.
     * @return ReturnPreviewsCreateResponse200DataResolutionEligibilityPolicyEvaluation
     */
    public function getPolicyEvaluation(): ReturnPreviewsCreateResponse200DataResolutionEligibilityPolicyEvaluation { return $this->get('policy_evaluation'); }
    public function hasPolicyEvaluation(): bool { return $this->has('policy_evaluation'); }
    /** Shape $ (Value): {@see ReturnEligibilitySelection}. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. Shape $.line_items (Optional): Array of {@see ReturnEligibilityLineItemRequest}. Shape $.line_items[] (Value): {@see ReturnEligibilityLineItemRequest}. An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line. Shape $.selection_type (Required): string.  Value enum: "all_remaining_fulfilled", "line_items". Shape $.oneOf[1] (Value): {@see ReturnEligibilitySelectionAllRemainingFulfilled}. The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`. Shape $.oneOf[2] (Value): {@see ReturnEligibilitySelectionLineItems}. The `line_items` variant of `ReturnEligibilitySelection`.
     * @return ReturnPreviewsCreateResponse200DataResolutionEligibilitySelectionAllRemainingFulfilled|ReturnPreviewsCreateResponse200DataResolutionEligibilitySelectionLineItems|\stdClass
     */
    public function getSelection(): ReturnPreviewsCreateResponse200DataResolutionEligibilitySelectionAllRemainingFulfilled|ReturnPreviewsCreateResponse200DataResolutionEligibilitySelectionLineItems|\stdClass { return $this->get('selection'); }
    public function hasSelection(): bool { return $this->has('selection'); }
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
