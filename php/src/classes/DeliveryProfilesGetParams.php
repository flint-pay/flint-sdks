<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $include_diagnostics
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfilesGetParams extends Model {
    /** @param array{'include_diagnostics'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfilesGetParams')); }
    /** Compute catalog and delivery-configuration diagnostics for this profile. Default: false.
     * @return bool
     * @throws SdkError When include_diagnostics is omitted; use hasIncludeDiagnostics() or valueOrDefault().
     */
    public function getIncludeDiagnostics(): bool { return $this->get('include_diagnostics'); }
    public function hasIncludeDiagnostics(): bool { return $this->has('include_diagnostics'); }
}
