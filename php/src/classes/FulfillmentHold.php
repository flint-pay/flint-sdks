<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read ?string $display_reason
 * @property-read ?string $held_by
 * @property-read string $previous_status
 * @property-read string $reason
 * @property-read ?string $reason_notes
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentHold extends Model {
    /** @param array{'created_at': string, 'display_reason'?: string, 'held_by'?: string, 'previous_status': string, 'reason': string, 'reason_notes'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentHold')); }
    /** Time the hold became active. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Explanation of the hold suitable for display to the merchant.
     * @return ?string
     */
    public function getDisplayReason(): ?string { return $this->get('display_reason'); }
    public function hasDisplayReason(): bool { return $this->has('display_reason'); }
    /** Actor that placed the fulfillment on hold.
     * @return ?string
     */
    public function getHeldBy(): ?string { return $this->get('held_by'); }
    public function hasHeldBy(): bool { return $this->has('held_by'); }
    /** Status before this hold. Never on_hold or terminal. The release_hold action restores this status. Value enum: "pending", "accepted", "in_progress", "ready", "scheduled", "preparing", "picked", "packed", "dispatched".
     * @return string
     */
    public function getPreviousStatus(): string { return $this->get('previous_status'); }
    public function hasPreviousStatus(): bool { return $this->has('previous_status'); }
    /** Machine-readable reason fulfillment work is paused. Value enum: "payment_review", "inventory_issue", "address_issue", "customer_request", "provider_issue", "scheduling_issue", "fraud_review", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Additional notes explaining the hold.
     * @return ?string
     */
    public function getReasonNotes(): ?string { return $this->get('reason_notes'); }
    public function hasReasonNotes(): bool { return $this->has('reason_notes'); }
}
