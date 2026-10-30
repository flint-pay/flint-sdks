<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $account_name
 * Presence-aware response; omitted optional fields return null. */
final class CustomerAccountPresentation extends Model {
    /** @param array{'account_name'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountPresentation')); }
    /** Name shown at the top of the Flint-hosted customer account, up to 100 characters. Without one, the account shows your business name. Send null to clear it. minLength: 1.
     * @return string|null
     */
    public function getAccountName(): string|null { return $this->get('account_name'); }
    public function hasAccountName(): bool { return $this->has('account_name'); }
}
