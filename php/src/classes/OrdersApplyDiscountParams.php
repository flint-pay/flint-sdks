<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read ManualDiscountRequestInput|array<array-key, mixed>|\stdClass $manual
 * @property-read array{'promotion_code'?: string, 'promotion_id': string}|object|array{'promotion_code': string, 'promotion_id'?: string}|object $promotion
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersApplyDiscountParams extends Model {
    /** @param array{'expected_version'?: int, 'manual'?: ManualDiscountRequestInput|array<array-key, mixed>|\stdClass, 'promotion': array{'promotion_code'?: string, 'promotion_id': string}|object|array{'promotion_code': string, 'promotion_id'?: string}|object}|object|array{'expected_version'?: int, 'manual': ManualDiscountRequestInput|array<array-key, mixed>|\stdClass, 'promotion'?: array{'promotion_code'?: string, 'promotion_id': string}|object|array{'promotion_code': string, 'promotion_id'?: string}|object}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersApplyDiscountParams')); }
    /** Optional order version from the last order read. The mutation fails if the order changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to.
     * @return ManualDiscountRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When manual is omitted; use hasManual() or valueOrDefault().
     */
    public function getManual(): mixed { return $this->get('manual'); }
    public function hasManual(): bool { return $this->has('manual'); }
    /** Identifies the promotion to apply, by promotion code or by promotion ID.
     * @return array{'promotion_code'?: string, 'promotion_id': string}|object|array{'promotion_code': string, 'promotion_id'?: string}|object
     * @throws SdkError When promotion is omitted; use hasPromotion() or valueOrDefault().
     */
    public function getPromotion(): mixed { return $this->get('promotion'); }
    public function hasPromotion(): bool { return $this->has('promotion'); }
}
