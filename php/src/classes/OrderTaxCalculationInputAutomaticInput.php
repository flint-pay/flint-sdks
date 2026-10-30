<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $mode
 * @property-read string $price_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxCalculationInputAutomaticInput extends Model {
    /** @param array{'mode': string, 'price_mode': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxCalculationInputAutomaticInput')); }
    /** Value enum: "automatic".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Value enum: "additive", "inclusive".
     * @return string
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
