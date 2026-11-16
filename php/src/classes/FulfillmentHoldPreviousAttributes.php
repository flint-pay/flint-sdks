<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $display_reason
 * @property-read string|null $held_by
 * @property-read string|null $initiated_by
 * @property-read string|null $previous_status
 * @property-read string|null $reason
 * @property-read string|null $reason_notes
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentHoldPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'display_reason'?: mixed, 'held_by'?: mixed, 'initiated_by'?: mixed, 'previous_status'?: mixed, 'reason'?: mixed, 'reason_notes'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentHoldPreviousAttributes')); }
    /** Time the hold became active. anyOf[1] (Value): string. Time the hold became active. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Explanation of the hold suitable for display to the merchant. anyOf[1] (Value): string. Explanation of the hold suitable for display to the merchant. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisplayReason(): string|null { return $this->get('display_reason'); }
    public function hasDisplayReason(): bool { return $this->has('display_reason'); }
    /** Actor that placed the fulfillment on hold. anyOf[1] (Value): string. Actor that placed the fulfillment on hold. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getHeldBy(): string|null { return $this->get('held_by'); }
    public function hasHeldBy(): bool { return $this->has('held_by'); }
    /** Who placed this hold: merchant for the merchant or its integration, or flint for a Flint payment hold. Value enum: "merchant", "flint". anyOf[1] (Value): string. Who placed this hold: merchant for the merchant or its integration, or flint for a Flint payment hold. Value enum: "merchant", "flint". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInitiatedBy(): string|null { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** Status before this hold. Never on_hold or terminal. The release_hold action restores this status. Value enum: "pending", "accepted", "in_progress", "ready", "scheduled", "preparing", "picked", "packed", "dispatched". anyOf[1] (Value): string. Status before this hold. Never on_hold or terminal. The release_hold action restores this status. Value enum: "pending", "accepted", "in_progress", "ready", "scheduled", "preparing", "picked", "packed", "dispatched". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPreviousStatus(): string|null { return $this->get('previous_status'); }
    public function hasPreviousStatus(): bool { return $this->has('previous_status'); }
    /** Machine-readable reason fulfillment work is paused. Value enum: "payment_review", "inventory_issue", "address_issue", "customer_request", "provider_issue", "scheduling_issue", "fraud_review", "other". anyOf[1] (Value): string. Machine-readable reason fulfillment work is paused. Value enum: "payment_review", "inventory_issue", "address_issue", "customer_request", "provider_issue", "scheduling_issue", "fraud_review", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Additional notes explaining the hold. anyOf[1] (Value): string. Additional notes explaining the hold. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReasonNotes(): string|null { return $this->get('reason_notes'); }
    public function hasReasonNotes(): bool { return $this->has('reason_notes'); }
}
