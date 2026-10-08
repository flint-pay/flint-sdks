<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $active
 * @property-read string $past_due
 * @property-read string $paused
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionCounts extends Model {
    /** @param array{'active': string, 'past_due': string, 'paused': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCounts')); }
    /** @return string
     * @throws SdkError When active is omitted; use hasActive() or valueOrDefault().
     */
    public function getActive(): string { return $this->get('active'); }
    public function hasActive(): bool { return $this->has('active'); }
    /** @return string
     * @throws SdkError When past_due is omitted; use hasPastDue() or valueOrDefault().
     */
    public function getPastDue(): string { return $this->get('past_due'); }
    public function hasPastDue(): bool { return $this->has('past_due'); }
    /** @return string
     * @throws SdkError When paused is omitted; use hasPaused() or valueOrDefault().
     */
    public function getPaused(): string { return $this->get('paused'); }
    public function hasPaused(): bool { return $this->has('paused'); }
}
