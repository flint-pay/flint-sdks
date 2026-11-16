<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $notes
 * @property-read string|null $occurred_at
 * @property-read string|null $outcome_type
 * @property-read string|null $reason
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentOutcomePreviousAttributes extends Model {
    /** @param array{'notes'?: mixed, 'occurred_at'?: mixed, 'outcome_type'?: mixed, 'reason'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentOutcomePreviousAttributes')); }
    /** Additional notes about the fulfillment outcome. anyOf[1] (Value): string. Additional notes about the fulfillment outcome. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getNotes(): string|null { return $this->get('notes'); }
    public function hasNotes(): bool { return $this->has('notes'); }
    /** Time the terminal outcome occurred. anyOf[1] (Value): string. Time the terminal outcome occurred. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOccurredAt(): string|null { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Recorded fulfillment outcome, such as a missed service appointment. Value enum: "no_show". anyOf[1] (Value): string. Recorded fulfillment outcome, such as a missed service appointment. Value enum: "no_show". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOutcomeType(): string|null { return $this->get('outcome_type'); }
    public function hasOutcomeType(): bool { return $this->has('outcome_type'); }
    /** Machine-readable reason for the recorded outcome. Value enum: "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other". anyOf[1] (Value): string. Machine-readable reason for the recorded outcome. Value enum: "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
