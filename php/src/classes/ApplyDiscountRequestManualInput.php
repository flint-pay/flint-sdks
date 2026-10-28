<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read ManualDiscountRequestInput|array<array-key, mixed>|\stdClass $manual
 * @property-read PromotionRefRequestInput|array<array-key, mixed>|\stdClass $promotion
 * Presence-aware input; omitted fields throw when accessed. */
final class ApplyDiscountRequestManualInput extends Model {
    /** @param array{'expected_version'?: string, 'manual': ManualDiscountRequestInput|array<array-key, mixed>|\stdClass, 'promotion'?: PromotionRefRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ApplyDiscountRequestManualInput')); }
    /** Shape $ (Value): integer string. Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): {@see ManualDiscountRequestInput}. A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to.
     * @return ManualDiscountRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When manual is omitted; use hasManual() or valueOrDefault().
     */
    public function getManual(): mixed { return $this->get('manual'); }
    public function hasManual(): bool { return $this->has('manual'); }
    /** Shape $ (Value): {@see PromotionRefRequestInput}. Identifies the promotion to apply, by promotion code or by promotion ID.
     * @return PromotionRefRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion is omitted; use hasPromotion() or valueOrDefault().
     */
    public function getPromotion(): mixed { return $this->get('promotion'); }
    public function hasPromotion(): bool { return $this->has('promotion'); }
}
