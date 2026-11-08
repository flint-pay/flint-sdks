<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read list<QuantityPriceBreakRequestInput|array<array-key, mixed>|\stdClass> $quantity_price_breaks
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePriceListPriceRequestInput extends Model {
    /** @param array{'expected_version'?: int, 'quantity_price_breaks'?: list<QuantityPriceBreakRequestInput|array<array-key, mixed>|\stdClass>, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePriceListPriceRequestInput')); }
    /** Version of this child price last read. Required when quantity_price_breaks is present. A mismatch returns VERSION_CONFLICT. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Replace the complete quantity schedule. Omit to preserve it; send [] to clear it. The resulting complete schedule must remain valid. Include expected_version whenever quantity_price_breaks is supplied. maxItems: 10. [] (Value): {@see QuantityPriceBreakRequestInput}. A net unit price that applies when one catalog line reaches minimum_quantity.
     * @return list<QuantityPriceBreakRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When quantity_price_breaks is omitted; use hasQuantityPriceBreaks() or valueOrDefault().
     */
    public function getQuantityPriceBreaks(): array { return $this->get('quantity_price_breaks'); }
    public function hasQuantityPriceBreaks(): bool { return $this->has('quantity_price_breaks'); }
    /** New positive base net unit price in the list's currency. The resulting complete schedule must remain valid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
