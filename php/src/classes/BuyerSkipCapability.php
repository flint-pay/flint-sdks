<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $enabled
 * @property-read ?int $max_consecutive_skips
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSkipCapability extends Model {
    /** @param array{'enabled'?: bool, 'max_consecutive_skips'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSkipCapability')); }
    /** Shape $ (Value): boolean. Whether buyers may skip a renewal. Merchant credentials may always skip an eligible cycle. Default: true.
     * @return ?bool
     */
    public function getEnabled(): ?bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Shape $ (Value): integer. Maximum consecutive cycles a buyer may skip. Omit it for no limit. The count resets after a paid renewal. Format: int32. minimum: 1. maximum: 12.
     * @return ?int
     */
    public function getMaxConsecutiveSkips(): ?int { return $this->get('max_consecutive_skips'); }
    public function hasMaxConsecutiveSkips(): bool { return $this->has('max_consecutive_skips'); }
}
