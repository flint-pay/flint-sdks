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
    /** automatic_enabled
     * @return ?bool
     */
    public function getAutomaticEnabled(): ?bool { return $this->get('automatic_enabled'); }
    public function hasAutomaticEnabled(): bool { return $this->has('automatic_enabled'); }
    /** Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Hosted checkout shows or hides code entry to match. Omit to inherit checkout.promotion_codes_enabled. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout.
     * @return bool|null
     */
    public function getCodesEnabled(): bool|null { return $this->get('codes_enabled'); }
    public function hasCodesEnabled(): bool { return $this->has('codes_enabled'); }
}
