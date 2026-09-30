<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $account_name
 * @property-read string $custom_domain
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerAccountPresentationInput extends Model {
    /** @param array{'account_name'?: string, 'custom_domain'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountPresentationInput')); }
    /** @return string
     * @throws SdkError When account_name is omitted; use hasAccountName() or valueOrDefault().
     */
    public function getAccountName(): string { return $this->get('account_name'); }
    public function hasAccountName(): bool { return $this->has('account_name'); }
    /** @return string
     * @throws SdkError When custom_domain is omitted; use hasCustomDomain() or valueOrDefault().
     */
    public function getCustomDomain(): string { return $this->get('custom_domain'); }
    public function hasCustomDomain(): bool { return $this->has('custom_domain'); }
}
