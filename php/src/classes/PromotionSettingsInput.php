<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $automatic_enabled
 * @property-read bool $codes_enabled
 * @property-read int $max_promotions_per_order
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionSettingsInput extends Model {
    /** @param array{'automatic_enabled'?: bool, 'codes_enabled'?: bool, 'max_promotions_per_order'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionSettingsInput')); }
    /** @return bool
     * @throws SdkError When automatic_enabled is omitted; use hasAutomaticEnabled() or valueOrDefault().
     */
    public function getAutomaticEnabled(): bool { return $this->get('automatic_enabled'); }
    public function hasAutomaticEnabled(): bool { return $this->has('automatic_enabled'); }
    /** @return bool
     * @throws SdkError When codes_enabled is omitted; use hasCodesEnabled() or valueOrDefault().
     */
    public function getCodesEnabled(): bool { return $this->get('codes_enabled'); }
    public function hasCodesEnabled(): bool { return $this->has('codes_enabled'); }
    /** @return int
     * @throws SdkError When max_promotions_per_order is omitted; use hasMaxPromotionsPerOrder() or valueOrDefault().
     */
    public function getMaxPromotionsPerOrder(): int { return $this->get('max_promotions_per_order'); }
    public function hasMaxPromotionsPerOrder(): bool { return $this->has('max_promotions_per_order'); }
}
