<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $enabled
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutTaxConfig extends Model {
    /** @param array{'enabled'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutTaxConfig')); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getEnabled(): ?bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
