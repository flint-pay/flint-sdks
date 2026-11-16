<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $notes
 * @property-read string|\DateTimeInterface|null $occurred_at
 * @property-read string|null $outcome_type
 * @property-read string|null $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentOutcomePreviousAttributesInput extends Model {
    /** @param array{'notes'?: string|null, 'occurred_at'?: string|\DateTimeInterface|null, 'outcome_type'?: string|null, 'reason'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentOutcomePreviousAttributesInput')); }
    /** Additional notes about the fulfillment outcome. anyOf[1] (Value): string. Additional notes about the fulfillment outcome. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When notes is omitted; use hasNotes() or valueOrDefault().
     */
    public function getNotes(): mixed { return $this->get('notes'); }
    public function hasNotes(): bool { return $this->has('notes'); }
    /** Time the terminal outcome occurred. anyOf[1] (Value): string. Time the terminal outcome occurred. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): mixed { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Recorded fulfillment outcome, such as a missed service appointment. Value enum: "no_show". anyOf[1] (Value): string. Recorded fulfillment outcome, such as a missed service appointment. Value enum: "no_show". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When outcome_type is omitted; use hasOutcomeType() or valueOrDefault().
     */
    public function getOutcomeType(): mixed { return $this->get('outcome_type'); }
    public function hasOutcomeType(): bool { return $this->has('outcome_type'); }
    /** Machine-readable reason for the recorded outcome. Value enum: "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other". anyOf[1] (Value): string. Machine-readable reason for the recorded outcome. Value enum: "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
