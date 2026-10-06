<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $delay_seconds
 * @property-read bool $enabled
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutRecoveryEmailSettingsInput extends Model {
    /** @param array{'delay_seconds'?: int, 'enabled'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutRecoveryEmailSettingsInput')); }
    /** @return int
     * @throws SdkError When delay_seconds is omitted; use hasDelaySeconds() or valueOrDefault().
     */
    public function getDelaySeconds(): int { return $this->get('delay_seconds'); }
    public function hasDelaySeconds(): bool { return $this->has('delay_seconds'); }
    /** @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
