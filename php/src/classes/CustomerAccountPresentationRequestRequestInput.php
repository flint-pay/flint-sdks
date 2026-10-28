<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $account_name
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerAccountPresentationRequestRequestInput extends Model {
    /** @param array{'account_name'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountPresentationRequestRequestInput')); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When account_name is omitted; use hasAccountName() or valueOrDefault().
     */
    public function getAccountName(): string|null { return $this->get('account_name'); }
    public function hasAccountName(): bool { return $this->has('account_name'); }
}
