<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<BuyerActionInput|array<array-key, mixed>|\stdClass> $buyer_actions
 * @property-read string|\DateTimeInterface $canceled_at
 * @property-read string $cancellation_reason
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read list<BuyerReturnCompletionBlockerInput|array<array-key, mixed>|\stdClass> $completion_blockers
 * @property-read string $completion_mode
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $decision_at
 * @property-read string $decision_status
 * @property-read ReturnFinancialSummaryInput|array<array-key, mixed>|\stdClass $financial_summary
 * @property-read list<BuyerReturnHandoffRequirementInput|array<array-key, mixed>|\stdClass> $handoff_requirements
 * @property-read string $initiated_by
 * @property-read list<BuyerReturnLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $merchandise_status
 * @property-read array<array-key, mixed>|\stdClass $metadata
 * @property-read string $order_id
 * @property-read string $resolution_status
 * @property-read string $return_id
 * @property-read string $return_number
 * @property-read list<string> $return_resolution_ids
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerReturnInput extends Model {
    /** @param array{'buyer_actions': list<BuyerActionInput|array<array-key, mixed>|\stdClass>, 'canceled_at'?: string|\DateTimeInterface, 'cancellation_reason'?: string, 'completed_at'?: string|\DateTimeInterface, 'completion_blockers': list<BuyerReturnCompletionBlockerInput|array<array-key, mixed>|\stdClass>, 'completion_mode'?: string, 'created_at': string|\DateTimeInterface, 'decision_at'?: string|\DateTimeInterface, 'decision_status': string, 'financial_summary': ReturnFinancialSummaryInput|array<array-key, mixed>|\stdClass, 'handoff_requirements': list<BuyerReturnHandoffRequirementInput|array<array-key, mixed>|\stdClass>, 'initiated_by': string, 'line_items': list<BuyerReturnLineItemInput|array<array-key, mixed>|\stdClass>, 'merchandise_status': string, 'metadata': array<array-key, mixed>|\stdClass, 'order_id': string, 'resolution_status': string, 'return_id': string, 'return_number': string, 'return_resolution_ids': list<string>, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnInput')); }
    /** What the buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all three every time; merchant reads and webhooks get an empty list. ship_items is required while handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is required while a resolution waits for the buyer's payment. Example: []. [] (Value): {@see BuyerActionInput}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When buyer_actions is omitted; use hasBuyerActions() or valueOrDefault().
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string|\DateTimeInterface { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Why the Return was canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * @return string
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** What is still owed before the Return can complete. Empty when nothing is. [] (Value): {@see BuyerReturnCompletionBlockerInput}. A condition the buyer can resolve before the Return can complete.
     * @return list<BuyerReturnCompletionBlockerInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When completion_blockers is omitted; use hasCompletionBlockers() or valueOrDefault().
     */
    public function getCompletionBlockers(): array { return $this->get('completion_blockers'); }
    public function hasCompletionBlockers(): bool { return $this->has('completion_blockers'); }
    /** automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum: "manual", "automatic".
     * @return string
     * @throws SdkError When completion_mode is omitted; use hasCompletionMode() or valueOrDefault().
     */
    public function getCompletionMode(): string { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When decision_at is omitted; use hasDecisionAt() or valueOrDefault().
     */
    public function getDecisionAt(): string|\DateTimeInterface { return $this->get('decision_at'); }
    public function hasDecisionAt(): bool { return $this->has('decision_at'); }
    /** Whether the requested units were approved. `pending` until one decision covers every line. Value enum: "pending", "approved", "partially_approved", "declined".
     * @return string
     * @throws SdkError When decision_status is omitted; use hasDecisionStatus() or valueOrDefault().
     */
    public function getDecisionStatus(): string { return $this->get('decision_status'); }
    public function hasDecisionStatus(): bool { return $this->has('decision_status'); }
    /** The Return's money in one place: the value of the returned lines, deductions and credits, and what has been refunded or collected. The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer.
     * @return ReturnFinancialSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When financial_summary is omitted; use hasFinancialSummary() or valueOrDefault().
     */
    public function getFinancialSummary(): mixed { return $this->get('financial_summary'); }
    public function hasFinancialSummary(): bool { return $this->has('financial_summary'); }
    /** What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value): {@see BuyerReturnHandoffRequirementInput}. The merchandise quantities the buyer must hand off, with their destination, instructions, and handoff status.
     * @return list<BuyerReturnHandoffRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When handoff_requirements is omitted; use hasHandoffRequirements() or valueOrDefault().
     */
    public function getHandoffRequirements(): array { return $this->get('handoff_requirements'); }
    public function hasHandoffRequirements(): bool { return $this->has('handoff_requirements'); }
    /** Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent. Value enum: "buyer", "merchant", "integration".
     * @return string
     * @throws SdkError When initiated_by is omitted; use hasInitiatedBy() or valueOrDefault().
     */
    public function getInitiatedBy(): string { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** The lines being returned. [] (Value): {@see BuyerReturnLineItemInput}. An item included in a return request.
     * @return list<BuyerReturnLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** On the Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception".
     * @return string
     * @throws SdkError When merchandise_status is omitted; use hasMerchandiseStatus() or valueOrDefault().
     */
    public function getMerchandiseStatus(): string { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
    /** Always empty for buyer credentials. maxProperties: 0.
     * @return array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. Value enum: "not_selected", "pending", "partially_completed", "requires_action", "completed", "failed".
     * @return string
     * @throws SdkError When resolution_status is omitted; use hasResolutionStatus() or valueOrDefault().
     */
    public function getResolutionStatus(): string { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** Unique identifier for this return, prefixed `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Human-readable number for the Return.
     * @return string
     * @throws SdkError When return_number is omitted; use hasReturnNumber() or valueOrDefault().
     */
    public function getReturnNumber(): string { return $this->get('return_number'); }
    public function hasReturnNumber(): bool { return $this->has('return_number'); }
    /** IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. [] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * @return list<string>
     * @throws SdkError When return_resolution_ids is omitted; use hasReturnResolutionIds() or valueOrDefault().
     */
    public function getReturnResolutionIds(): array { return $this->get('return_resolution_ids'); }
    public function hasReturnResolutionIds(): bool { return $this->has('return_resolution_ids'); }
    /** Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. Value enum: "requested", "open", "completed", "declined", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** [] enum: "cancel". [] (Value): string.  Value enum: "cancel".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
