<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<OrderTaxComponentRequestInput|array<array-key, mixed>|\stdClass> $components
 * @property-read string $components_source
 * @property-read string $mode
 * @property-read string $price_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxCalculationInputExternalInput extends Model {
    /** @param array{'components'?: list<OrderTaxComponentRequestInput|array<array-key, mixed>|\stdClass>, 'components_source'?: string, 'mode': string, 'price_mode': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxCalculationInputExternalInput')); }
    /** Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic` mode doesn't accept them. [] (Value): {@see OrderTaxComponentRequestInput}. One externally supplied order tax component, with its jurisdiction and either a flat amount or a percentage.
     * @return list<OrderTaxComponentRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Where external tax components come from. `provided` (the default): you send components for every line item and charge with an amount. `callback`: Flint asks the environment's selected tax calculation callback for them whenever tax would be recalculated, and refuses components, `line_item_calculations`, `charge_calculations`, and `delivery_charge_calculation` in requests. A request that needs an evaluation while no active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     * @return string
     * @throws SdkError When components_source is omitted; use hasComponentsSource() or valueOrDefault().
     */
    public function getComponentsSource(): string { return $this->get('components_source'); }
    public function hasComponentsSource(): bool { return $this->has('components_source'); }
    /** Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum: "external".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Whether prices already include tax. `automatic` mode and flat order taxes require `additive`. Value enum: "additive", "inclusive".
     * @return string
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
