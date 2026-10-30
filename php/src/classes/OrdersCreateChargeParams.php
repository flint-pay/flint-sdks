<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'calculation_basis'?: string, 'calculation_type': string, 'description'?: string, 'fulfillment_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'percent'?: int|float, 'tax'?: OrderCalculatedChargeTaxInput|array<array-key, mixed>|\stdClass, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'calculation_basis'?: string, 'calculation_type': string, 'description'?: string, 'fulfillment_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'percent': int|float, 'tax'?: OrderCalculatedChargeTaxInput|array<array-key, mixed>|\stdClass, 'type': string}|object $charge
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersCreateChargeParams extends Model {
    /** @param array{'charge': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'calculation_basis'?: string, 'calculation_type': string, 'description'?: string, 'fulfillment_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'percent'?: int|float, 'tax'?: OrderCalculatedChargeTaxInput|array<array-key, mixed>|\stdClass, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'calculation_basis'?: string, 'calculation_type': string, 'description'?: string, 'fulfillment_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'percent': int|float, 'tax'?: OrderCalculatedChargeTaxInput|array<array-key, mixed>|\stdClass, 'type': string}|object, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersCreateChargeParams')); }
    /** A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a percentage with its tax settings.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'calculation_basis'?: string, 'calculation_type': string, 'description'?: string, 'fulfillment_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'percent'?: int|float, 'tax'?: OrderCalculatedChargeTaxInput|array<array-key, mixed>|\stdClass, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'calculation_basis'?: string, 'calculation_type': string, 'description'?: string, 'fulfillment_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'percent': int|float, 'tax'?: OrderCalculatedChargeTaxInput|array<array-key, mixed>|\stdClass, 'type': string}|object
     * @throws SdkError When charge is omitted; use hasCharge() or valueOrDefault().
     */
    public function getCharge(): mixed { return $this->get('charge'); }
    public function hasCharge(): bool { return $this->has('charge'); }
    /** Optional order version from the last order read. The mutation fails if the order changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
