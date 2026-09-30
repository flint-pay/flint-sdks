<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $delay_minutes
 * @property-read bool $enabled
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutRecoveryEmailSettings extends Model {
    /** @param array{'delay_minutes'?: int, 'enabled'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutRecoveryEmailSettings')); }
    /** @return int
     * @throws SdkError When delay_minutes is omitted; use hasDelayMinutes() or valueOrDefault().
     */
    public function getDelayMinutes(): int { return $this->get('delay_minutes'); }
    public function hasDelayMinutes(): bool { return $this->has('delay_minutes'); }
    /** @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
