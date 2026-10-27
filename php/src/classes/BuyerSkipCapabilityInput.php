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
    /** Shape $ (Value): boolean. Whether buyers may skip a renewal. Merchant credentials may always skip an eligible cycle. Default: true.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Shape $ (Value): integer. Maximum consecutive cycles a buyer may skip. Omit it for no limit. The count resets after a paid renewal. Format: int32. minimum: 1. maximum: 12.
     * @return int
     * @throws SdkError When max_consecutive_skips is omitted; use hasMaxConsecutiveSkips() or valueOrDefault().
     */
    public function getMaxConsecutiveSkips(): int { return $this->get('max_consecutive_skips'); }
    public function hasMaxConsecutiveSkips(): bool { return $this->has('max_consecutive_skips'); }
}
