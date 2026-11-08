<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PromotionRefRequestInput|array<array-key, mixed>|\stdClass $promotion
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCheckoutSessionDiscountInput extends Model {
    /** @param array{'promotion': PromotionRefRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCheckoutSessionDiscountInput')); }
    /** The promotion selected by ID or code, subject to your account promotion settings. Identifies the promotion to apply, by promotion code or by promotion ID.
     * @return PromotionRefRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion is omitted; use hasPromotion() or valueOrDefault().
     */
    public function getPromotion(): mixed { return $this->get('promotion'); }
    public function hasPromotion(): bool { return $this->has('promotion'); }
}
