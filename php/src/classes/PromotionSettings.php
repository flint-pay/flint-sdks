<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $automatic_enabled
 * @property-read ?bool $codes_enabled
 * @property-read ?int $max_promotions_per_order
 * Presence-aware response; omitted optional fields return null. */
final class PromotionSettings extends Model {
    /** @param array{'automatic_enabled'?: bool, 'codes_enabled'?: bool, 'max_promotions_per_order'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionSettings')); }
    /** automatic_enabled
     * @return ?bool
     */
    public function getAutomaticEnabled(): ?bool { return $this->get('automatic_enabled'); }
    public function hasAutomaticEnabled(): bool { return $this->has('automatic_enabled'); }
    /** Merchant promotion code redemption policy. Explicit false rejects promotion-code application even when a checkout or payment link asks to show code entry.
     * @return ?bool
     */
    public function getCodesEnabled(): ?bool { return $this->get('codes_enabled'); }
    public function hasCodesEnabled(): bool { return $this->has('codes_enabled'); }
    /** Maximum promotion discounts on an order, from 1 to 10, default 2. Manual discounts do not count. See Promotion for the evaluation order. Format: int32. minimum: 1. maximum: 10. Default: 2.
     * @return ?int
     */
    public function getMaxPromotionsPerOrder(): ?int { return $this->get('max_promotions_per_order'); }
    public function hasMaxPromotionsPerOrder(): bool { return $this->has('max_promotions_per_order'); }
}
