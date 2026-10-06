<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $domain_type
 * @property-read string $previous_status
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomDomainStatusChangeInput extends Model {
    /** @param array{'domain_type': string, 'previous_status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomDomainStatusChangeInput')); }
    /** @return string
     * @throws SdkError When domain_type is omitted; use hasDomainType() or valueOrDefault().
     */
    public function getDomainType(): string { return $this->get('domain_type'); }
    public function hasDomainType(): bool { return $this->has('domain_type'); }
    /** @return string
     * @throws SdkError When previous_status is omitted; use hasPreviousStatus() or valueOrDefault().
     */
    public function getPreviousStatus(): string { return $this->get('previous_status'); }
    public function hasPreviousStatus(): bool { return $this->has('previous_status'); }
}
