<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $earliest_available_at
 * @property-read string|\DateTimeInterface $latest_reconciled_at
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class MoneyMovementHistoryMetaInput extends Model {
    /** @param array{'earliest_available_at'?: string|\DateTimeInterface, 'latest_reconciled_at'?: string|\DateTimeInterface, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MoneyMovementHistoryMetaInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When earliest_available_at is omitted; use hasEarliestAvailableAt() or valueOrDefault().
     */
    public function getEarliestAvailableAt(): string|\DateTimeInterface { return $this->get('earliest_available_at'); }
    public function hasEarliestAvailableAt(): bool { return $this->has('earliest_available_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When latest_reconciled_at is omitted; use hasLatestReconciledAt() or valueOrDefault().
     */
    public function getLatestReconciledAt(): string|\DateTimeInterface { return $this->get('latest_reconciled_at'); }
    public function hasLatestReconciledAt(): bool { return $this->has('latest_reconciled_at'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
