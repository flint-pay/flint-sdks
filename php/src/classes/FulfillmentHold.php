<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $display_reason
 * @property-read string $held_by
 * @property-read string $reason
 * @property-read string $reason_notes
 * Presence-aware response; omitted fields throw when accessed. */
final class FulfillmentHold extends Model {
    /** @param array{'created_at': string, 'display_reason'?: string, 'held_by'?: string, 'reason': string, 'reason_notes'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentHold')); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When display_reason is omitted; use hasDisplayReason() or valueOrDefault().
     */
    public function getDisplayReason(): string { return $this->get('display_reason'); }
    public function hasDisplayReason(): bool { return $this->has('display_reason'); }
    /** @return string
     * @throws SdkError When held_by is omitted; use hasHeldBy() or valueOrDefault().
     */
    public function getHeldBy(): string { return $this->get('held_by'); }
    public function hasHeldBy(): bool { return $this->has('held_by'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string
     * @throws SdkError When reason_notes is omitted; use hasReasonNotes() or valueOrDefault().
     */
    public function getReasonNotes(): string { return $this->get('reason_notes'); }
    public function hasReasonNotes(): bool { return $this->has('reason_notes'); }
}
