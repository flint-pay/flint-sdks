<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $automatic_enabled
 * @property-read bool|null $codes_enabled
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutPromotionConfigInput extends Model {
    /** @param array{'automatic_enabled'?: bool, 'codes_enabled'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPromotionConfigInput')); }
    /** @return bool
     * @throws SdkError When automatic_enabled is omitted; use hasAutomaticEnabled() or valueOrDefault().
     */
    public function getAutomaticEnabled(): bool { return $this->get('automatic_enabled'); }
    public function hasAutomaticEnabled(): bool { return $this->has('automatic_enabled'); }
    /** @return bool|null
     * @throws SdkError When codes_enabled is omitted; use hasCodesEnabled() or valueOrDefault().
     */
    public function getCodesEnabled(): bool|null { return $this->get('codes_enabled'); }
    public function hasCodesEnabled(): bool { return $this->has('codes_enabled'); }
}
