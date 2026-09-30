<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $domain_name
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePaymentMethodDomainRequestInput extends Model {
    /** @param array{'domain_name': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePaymentMethodDomainRequestInput')); }
    /** @return string
     * @throws SdkError When domain_name is omitted; use hasDomainName() or valueOrDefault().
     */
    public function getDomainName(): string { return $this->get('domain_name'); }
    public function hasDomainName(): bool { return $this->has('domain_name'); }
}
