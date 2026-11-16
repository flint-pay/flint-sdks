<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $components_source
 * @property-read string|null $mode
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionTaxCalculationPreviousAttributesInput extends Model {
    /** @param array{'components_source'?: string|null, 'mode'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionTaxCalculationPreviousAttributesInput')); }
    /** Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Value enum: "callback". anyOf[1] (Value): string. Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Value enum: "callback". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When components_source is omitted; use hasComponentsSource() or valueOrDefault().
     */
    public function getComponentsSource(): mixed { return $this->get('components_source'); }
    public function hasComponentsSource(): bool { return $this->has('components_source'); }
    /** How the subscription's orders calculate tax. Value enum: "automatic", "external". anyOf[1] (Value): string. How the subscription's orders calculate tax. Value enum: "automatic", "external". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): mixed { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
}
