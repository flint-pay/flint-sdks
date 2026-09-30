<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ManualDiscountRequestInput|array<array-key, mixed>|\stdClass $manual
 * @property-read PromotionRefRequestInput|array<array-key, mixed>|\stdClass $promotion
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateOrderDiscountInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateOrderDiscountInput')); }
    /** @return ManualDiscountRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When manual is omitted; use hasManual() or valueOrDefault().
     */
    public function getManual(): mixed { return $this->get('manual'); }
    public function hasManual(): bool { return $this->has('manual'); }
    /** @return PromotionRefRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion is omitted; use hasPromotion() or valueOrDefault().
     */
    public function getPromotion(): mixed { return $this->get('promotion'); }
    public function hasPromotion(): bool { return $this->has('promotion'); }
}
