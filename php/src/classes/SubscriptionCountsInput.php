<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $active
 * @property-read int $past_due
 * @property-read int $paused
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionCountsInput extends Model {
    /** @param array{'active': int, 'past_due': int, 'paused': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCountsInput')); }
    /** Format: int64.
     * @return int
     * @throws SdkError When active is omitted; use hasActive() or valueOrDefault().
     */
    public function getActive(): int { return $this->get('active'); }
    public function hasActive(): bool { return $this->has('active'); }
    /** Format: int64.
     * @return int
     * @throws SdkError When past_due is omitted; use hasPastDue() or valueOrDefault().
     */
    public function getPastDue(): int { return $this->get('past_due'); }
    public function hasPastDue(): bool { return $this->has('past_due'); }
    /** Format: int64.
     * @return int
     * @throws SdkError When paused is omitted; use hasPaused() or valueOrDefault().
     */
    public function getPaused(): int { return $this->get('paused'); }
    public function hasPaused(): bool { return $this->has('paused'); }
}
