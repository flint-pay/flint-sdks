<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<BuyerAction> $buyer_actions
 * @property-read ?string $canceled_at
 * @property-read ?string $cancellation_reason
 * @property-read ?string $completed_at
 * @property-read list<BuyerReturnCompletionBlocker> $completion_blockers
 * @property-read ?string $completion_mode
 * @property-read string $created_at
 * @property-read ?string $decision_at
 * @property-read string $decision_status
 * @property-read ReturnFinancialSummary $financial_summary
 * @property-read list<BuyerReturnHandoffRequirement> $handoff_requirements
 * @property-read string $initiated_by
 * @property-read list<BuyerReturnLineItem> $line_items
 * @property-read string $merchandise_status
 * @property-read array<array-key, mixed> $metadata
 * @property-read string $order_id
 * @property-read string $resolution_status
 * @property-read string $return_id
 * @property-read string $return_number
 * @property-read list<string> $return_resolution_ids
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturn extends Model {
    /** @param array{'buyer_actions': list<mixed>, 'canceled_at'?: string, 'cancellation_reason'?: string, 'completed_at'?: string, 'completion_blockers': list<mixed>, 'completion_mode'?: string, 'created_at': string, 'decision_at'?: string, 'decision_status': string, 'financial_summary': mixed, 'handoff_requirements': list<mixed>, 'initiated_by': string, 'line_items': list<mixed>, 'merchandise_status': string, 'metadata': \stdClass, 'order_id': string, 'resolution_status': string, 'return_id': string, 'return_number': string, 'return_resolution_ids': list<string>, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturn')); }
    /** What the buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all three every time; merchant reads and webhooks get an empty list. ship_items is required while handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is required while a resolution waits for the buyer's payment. [] (Value): {@see BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerAction>
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCanceledAt(): ?string { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * @return ?string
     */
    public function getCancellationReason(): ?string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCompletedAt(): ?string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /**  [] (Value): {@see BuyerReturnCompletionBlocker}. A condition the buyer can resolve before the Return can complete.
     * @return list<BuyerReturnCompletionBlocker>
     */
    public function getCompletionBlockers(): array { return $this->get('completion_blockers'); }
    public function hasCompletionBlockers(): bool { return $this->has('completion_blockers'); }
    /** automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum: "manual", "automatic".
     * @return ?string
     */
    public function getCompletionMode(): ?string { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getDecisionAt(): ?string { return $this->get('decision_at'); }
    public function hasDecisionAt(): bool { return $this->has('decision_at'); }
    /** Value enum: "pending", "approved", "partially_approved", "declined".
     * @return string
     */
    public function getDecisionStatus(): string { return $this->get('decision_status'); }
    public function hasDecisionStatus(): bool { return $this->has('decision_status'); }
    /** The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer.
     * @return ReturnFinancialSummary
     */
    public function getFinancialSummary(): ReturnFinancialSummary { return $this->get('financial_summary'); }
    public function hasFinancialSummary(): bool { return $this->has('financial_summary'); }
    /**  [] (Value): {@see BuyerReturnHandoffRequirement}. The merchandise quantities the buyer must hand off, with their destination, instructions, and handoff status.
     * @return list<BuyerReturnHandoffRequirement>
     */
    public function getHandoffRequirements(): array { return $this->get('handoff_requirements'); }
    public function hasHandoffRequirements(): bool { return $this->has('handoff_requirements'); }
    /** Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent. Value enum: "buyer", "merchant", "integration".
     * @return string
     */
    public function getInitiatedBy(): string { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /**  [] (Value): {@see BuyerReturnLineItem}. An item included in a return request.
     * @return list<BuyerReturnLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** On the Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception".
     * @return string
     */
    public function getMerchandiseStatus(): string { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
    /** Always empty for buyer credentials. maxProperties: 0.
     * @return array<array-key, mixed>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** order_id
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * @return string
     */
    public function getResolutionStatus(): string { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** return_id
     * @return string
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** return_number
     * @return string
     */
    public function getReturnNumber(): string { return $this->get('return_number'); }
    public function hasReturnNumber(): bool { return $this->has('return_number'); }
    /** IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. [] (Value): string.
     * @return list<string>
     */
    public function getReturnResolutionIds(): array { return $this->get('return_resolution_ids'); }
    public function hasReturnResolutionIds(): bool { return $this->has('return_resolution_ids'); }
    /** Value enum: "requested", "open", "completed", "declined", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** [] enum: "cancel". [] (Value): string.  Value enum: "cancel".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Format: int64. minimum: 0.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
