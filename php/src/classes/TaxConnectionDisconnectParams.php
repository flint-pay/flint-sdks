<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read string $tax_default_behavior
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionDisconnectParams extends Model {
    /** @param array{'expected_version'?: int, 'tax_default_behavior': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionDisconnectParams')); }
    /** Resource version last read by the caller. Omit to apply the change to the current resource. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Choose turn_off to stop adding tax to new orders that inherit the default, or keep to leave the default unchanged. Keep refuses those orders and holds subscription renewals until automatic tax is reconnected or the default is turned off. Neither choice turns tax on. Value enum: "turn_off", "keep".
     * @return string
     * @throws SdkError When tax_default_behavior is omitted; use hasTaxDefaultBehavior() or valueOrDefault().
     */
    public function getTaxDefaultBehavior(): string { return $this->get('tax_default_behavior'); }
    public function hasTaxDefaultBehavior(): bool { return $this->has('tax_default_behavior'); }
}
