<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $tax_breakdown_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tax_money
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundTaxBreakdownRefundInInput extends Model {
    /** @param array{'tax_breakdown_id': string, 'tax_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundTaxBreakdownRefundInInput')); }
    /** @return string
     * @throws SdkError When tax_breakdown_id is omitted; use hasTaxBreakdownId() or valueOrDefault().
     */
    public function getTaxBreakdownId(): string { return $this->get('tax_breakdown_id'); }
    public function hasTaxBreakdownId(): bool { return $this->has('tax_breakdown_id'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
}
