<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValue> $max_amounts
 * @property-read array<array-key, MoneyValue> $min_amounts
 * Presence-aware response; omitted fields throw when accessed. */
final class PaymentLimitSettings extends Model {
    /** @param array{'max_amounts'?: \stdClass, 'min_amounts'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLimitSettings')); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When max_amounts is omitted; use hasMaxAmounts() or valueOrDefault().
     */
    public function getMaxAmounts(): array { return $this->get('max_amounts'); }
    public function hasMaxAmounts(): bool { return $this->has('max_amounts'); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When min_amounts is omitted; use hasMinAmounts() or valueOrDefault().
     */
    public function getMinAmounts(): array { return $this->get('min_amounts'); }
    public function hasMinAmounts(): bool { return $this->has('min_amounts'); }
}
