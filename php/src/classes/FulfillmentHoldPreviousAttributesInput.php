<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $display_reason
 * @property-read string|null $held_by
 * @property-read string|null $initiated_by
 * @property-read string|null $previous_status
 * @property-read string|null $reason
 * @property-read string|null $reason_notes
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentHoldPreviousAttributesInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface|null, 'display_reason'?: string|null, 'held_by'?: string|null, 'initiated_by'?: string|null, 'previous_status'?: string|null, 'reason'?: string|null, 'reason_notes'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentHoldPreviousAttributesInput')); }
    /** Time the hold became active. anyOf[1] (Value): string. Time the hold became active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Explanation of the hold suitable for display to the merchant. anyOf[1] (Value): string. Explanation of the hold suitable for display to the merchant. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When display_reason is omitted; use hasDisplayReason() or valueOrDefault().
     */
    public function getDisplayReason(): mixed { return $this->get('display_reason'); }
    public function hasDisplayReason(): bool { return $this->has('display_reason'); }
    /** Actor that placed the fulfillment on hold. anyOf[1] (Value): string. Actor that placed the fulfillment on hold. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When held_by is omitted; use hasHeldBy() or valueOrDefault().
     */
    public function getHeldBy(): mixed { return $this->get('held_by'); }
    public function hasHeldBy(): bool { return $this->has('held_by'); }
    /** Who placed this hold: merchant for the merchant or its integration, or flint for a Flint payment hold. Value enum: "merchant", "flint". anyOf[1] (Value): string. Who placed this hold: merchant for the merchant or its integration, or flint for a Flint payment hold. Value enum: "merchant", "flint". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When initiated_by is omitted; use hasInitiatedBy() or valueOrDefault().
     */
    public function getInitiatedBy(): mixed { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** Status before this hold. Never on_hold or terminal. The release_hold action restores this status. Value enum: "pending", "accepted", "in_progress", "ready", "scheduled", "preparing", "picked", "packed", "dispatched". anyOf[1] (Value): string. Status before this hold. Never on_hold or terminal. The release_hold action restores this status. Value enum: "pending", "accepted", "in_progress", "ready", "scheduled", "preparing", "picked", "packed", "dispatched". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When previous_status is omitted; use hasPreviousStatus() or valueOrDefault().
     */
    public function getPreviousStatus(): mixed { return $this->get('previous_status'); }
    public function hasPreviousStatus(): bool { return $this->has('previous_status'); }
    /** Machine-readable reason fulfillment work is paused. Value enum: "payment_review", "inventory_issue", "address_issue", "customer_request", "provider_issue", "scheduling_issue", "fraud_review", "other". anyOf[1] (Value): string. Machine-readable reason fulfillment work is paused. Value enum: "payment_review", "inventory_issue", "address_issue", "customer_request", "provider_issue", "scheduling_issue", "fraud_review", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Additional notes explaining the hold. anyOf[1] (Value): string. Additional notes explaining the hold. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason_notes is omitted; use hasReasonNotes() or valueOrDefault().
     */
    public function getReasonNotes(): mixed { return $this->get('reason_notes'); }
    public function hasReasonNotes(): bool { return $this->has('reason_notes'); }
}
