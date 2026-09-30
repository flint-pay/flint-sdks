<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $default_for
 * Presence-aware input; omitted fields throw when accessed. */
final class SetDefaultCustomerAddressRequestInput extends Model {
    /** @param array{'default_for': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SetDefaultCustomerAddressRequestInput')); }
    /** @return string
     * @throws SdkError When default_for is omitted; use hasDefaultFor() or valueOrDefault().
     */
    public function getDefaultFor(): string { return $this->get('default_for'); }
    public function hasDefaultFor(): bool { return $this->has('default_for'); }
}
