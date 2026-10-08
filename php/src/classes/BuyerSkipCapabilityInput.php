<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $enabled
 * @property-read int $max_consecutive_skips
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerSkipCapabilityInput extends Model {
    /** @param array{'enabled'?: bool, 'max_consecutive_skips'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSkipCapabilityInput')); }
    /** @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** @return int
     * @throws SdkError When max_consecutive_skips is omitted; use hasMaxConsecutiveSkips() or valueOrDefault().
     */
    public function getMaxConsecutiveSkips(): int { return $this->get('max_consecutive_skips'); }
    public function hasMaxConsecutiveSkips(): bool { return $this->has('max_consecutive_skips'); }
}
