<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?int $delay_seconds
 * @property-read ?bool $enabled
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutRecoveryEmailSettings extends Model {
    /** @param array{'delay_seconds'?: int, 'enabled'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutRecoveryEmailSettings')); }
    /** Shape $ (Value): integer. Seconds to wait after the buyer last changed their email or phone before sending the reminder. Must be a multiple of 60. Defaults to 3600. Format: int32. minimum: 900. maximum: 86400. multipleOf: 60. Default: 3600.
     * @return ?int
     */
    public function getDelaySeconds(): ?int { return $this->get('delay_seconds'); }
    public function hasDelaySeconds(): bool { return $this->has('delay_seconds'); }
    /** Shape $ (Value): boolean. Whether Flint sends checkout reminders. Turning them on requires a business address on the merchant, which the reminder prints; without one the update returns ACTION_NOT_ALLOWED with reason configuration_required and the merchant reference.
     * @return ?bool
     */
    public function getEnabled(): ?bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
