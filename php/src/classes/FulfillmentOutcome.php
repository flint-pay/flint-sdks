<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $notes
 * @property-read string $occurred_at
 * @property-read string $outcome_type
 * @property-read string $reason
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentOutcome extends Model {
    /** @param array{'notes'?: string, 'occurred_at': string, 'outcome_type': string, 'reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentOutcome')); }
    /** Shape $ (Value): string. Additional notes about the fulfillment outcome.
     * @return ?string
     */
    public function getNotes(): ?string { return $this->get('notes'); }
    public function hasNotes(): bool { return $this->has('notes'); }
    /** Shape $ (Value): string. Time the terminal outcome occurred. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Shape $ (Value): string. Recorded fulfillment outcome, such as a missed service appointment. Value enum: "no_show".
     * @return string
     */
    public function getOutcomeType(): string { return $this->get('outcome_type'); }
    public function hasOutcomeType(): bool { return $this->has('outcome_type'); }
    /** Shape $ (Value): string. Machine-readable reason for the recorded outcome. Value enum: "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
