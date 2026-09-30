<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $max_amounts
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $min_amounts
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLimitSettingsInput extends Model {
    /** @param array{'max_amounts'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'min_amounts'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLimitSettingsInput')); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When max_amounts is omitted; use hasMaxAmounts() or valueOrDefault().
     */
    public function getMaxAmounts(): array|object { return $this->get('max_amounts'); }
    public function hasMaxAmounts(): bool { return $this->has('max_amounts'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When min_amounts is omitted; use hasMinAmounts() or valueOrDefault().
     */
    public function getMinAmounts(): array|object { return $this->get('min_amounts'); }
    public function hasMinAmounts(): bool { return $this->has('min_amounts'); }
}
