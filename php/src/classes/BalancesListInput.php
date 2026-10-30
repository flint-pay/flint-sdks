<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $currency
 * Presence-aware input; omitted fields throw when accessed. */
final class BalancesListInput extends Model {
    /** @param array{'currency'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalancesListInput')); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
}
