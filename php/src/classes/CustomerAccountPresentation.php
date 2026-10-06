<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $account_name
 * @property-read string|null $custom_domain
 * Presence-aware response; omitted fields throw when accessed. */
final class CustomerAccountPresentation extends Model {
    /** @param array{'account_name'?: string, 'custom_domain'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountPresentation')); }
    /** @return string
     * @throws SdkError When account_name is omitted; use hasAccountName() or valueOrDefault().
     */
    public function getAccountName(): string { return $this->get('account_name'); }
    public function hasAccountName(): bool { return $this->has('account_name'); }
    /** @return string|null
     * @throws SdkError When custom_domain is omitted; use hasCustomDomain() or valueOrDefault().
     */
    public function getCustomDomain(): string|null { return $this->get('custom_domain'); }
    public function hasCustomDomain(): bool { return $this->has('custom_domain'); }
}
