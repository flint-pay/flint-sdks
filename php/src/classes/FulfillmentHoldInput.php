<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $display_reason
 * @property-read string $held_by
 * @property-read string $previous_status
 * @property-read string $reason
 * @property-read string $reason_notes
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentHoldInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'display_reason'?: string, 'held_by'?: string, 'previous_status': string, 'reason': string, 'reason_notes'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentHoldInput')); }
    /** Shape $ (Value): string. Time the hold became active. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Explanation of the hold suitable for display to the merchant.
     * @return string
     * @throws SdkError When display_reason is omitted; use hasDisplayReason() or valueOrDefault().
     */
    public function getDisplayReason(): string { return $this->get('display_reason'); }
    public function hasDisplayReason(): bool { return $this->has('display_reason'); }
    /** Shape $ (Value): string. Actor that placed the fulfillment on hold.
     * @return string
     * @throws SdkError When held_by is omitted; use hasHeldBy() or valueOrDefault().
     */
    public function getHeldBy(): string { return $this->get('held_by'); }
    public function hasHeldBy(): bool { return $this->has('held_by'); }
    /** Shape $ (Value): string. Status before this hold. Never on_hold or terminal. The release_hold action restores this status. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * @return string
     * @throws SdkError When previous_status is omitted; use hasPreviousStatus() or valueOrDefault().
     */
    public function getPreviousStatus(): string { return $this->get('previous_status'); }
    public function hasPreviousStatus(): bool { return $this->has('previous_status'); }
    /** Shape $ (Value): string. Machine-readable reason fulfillment work is paused. Value enum: "payment_review", "inventory_issue", "address_issue", "customer_request", "provider_issue", "scheduling_issue", "fraud_review", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string. Additional notes explaining the hold.
     * @return string
     * @throws SdkError When reason_notes is omitted; use hasReasonNotes() or valueOrDefault().
     */
    public function getReasonNotes(): string { return $this->get('reason_notes'); }
    public function hasReasonNotes(): bool { return $this->has('reason_notes'); }
}
