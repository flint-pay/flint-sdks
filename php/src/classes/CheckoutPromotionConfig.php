<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $automatic_enabled
 * @property-read bool|null $codes_enabled
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutPromotionConfig extends Model {
    /** @param array{'automatic_enabled'?: bool, 'codes_enabled'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPromotionConfig')); }
    /** Whether automatic promotions apply to this checkout. Send false to stop them here. True can't turn them back on when your promotion settings have them off.
     * @return ?bool
     */
    public function getAutomaticEnabled(): ?bool { return $this->get('automatic_enabled'); }
    public function hasAutomaticEnabled(): bool { return $this->has('automatic_enabled'); }
    /** Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all are unset, hosted checkout offers code entry only while an active code promotion exists in this environment; read can_apply_promotion_code on the session. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. `null` when this checkout inherits checkout.promotion_codes_enabled.
     * @return bool|null
     */
    public function getCodesEnabled(): bool|null { return $this->get('codes_enabled'); }
    public function hasCodesEnabled(): bool { return $this->has('codes_enabled'); }
}
