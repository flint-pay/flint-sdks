<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $components_source
 * @property-read string|null $mode
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionTaxCalculationPreviousAttributes extends Model {
    /** @param array{'components_source'?: mixed, 'mode'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionTaxCalculationPreviousAttributes')); }
    /** Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Value enum: "callback". anyOf[1] (Value): string. Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Value enum: "callback". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getComponentsSource(): string|null { return $this->get('components_source'); }
    public function hasComponentsSource(): bool { return $this->has('components_source'); }
    /** How the subscription's orders calculate tax. Value enum: "automatic", "external". anyOf[1] (Value): string. How the subscription's orders calculate tax. Value enum: "automatic", "external". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMode(): string|null { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
}
