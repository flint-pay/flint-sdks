<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $notes
 * @property-read string $occurred_at
 * @property-read string $outcome_type
 * @property-read string $reason
 * Presence-aware response; omitted fields throw when accessed. */
final class FulfillmentOutcome extends Model {
    /** @param array{'notes'?: string, 'occurred_at': string, 'outcome_type': string, 'reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentOutcome')); }
    /** @return string
     * @throws SdkError When notes is omitted; use hasNotes() or valueOrDefault().
     */
    public function getNotes(): string { return $this->get('notes'); }
    public function hasNotes(): bool { return $this->has('notes'); }
    /** @return string
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** @return string
     * @throws SdkError When outcome_type is omitted; use hasOutcomeType() or valueOrDefault().
     */
    public function getOutcomeType(): string { return $this->get('outcome_type'); }
    public function hasOutcomeType(): bool { return $this->has('outcome_type'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
