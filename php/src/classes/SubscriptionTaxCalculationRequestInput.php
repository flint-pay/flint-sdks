<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $components_source
 * @property-read string $mode
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionTaxCalculationRequestInput extends Model {
    /** @param array{'components_source'?: string, 'mode': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionTaxCalculationRequestInput')); }
    /** Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Value enum: "callback".
     * @return string
     * @throws SdkError When components_source is omitted; use hasComponentsSource() or valueOrDefault().
     */
    public function getComponentsSource(): string { return $this->get('components_source'); }
    public function hasComponentsSource(): bool { return $this->has('components_source'); }
    /** How the subscription's orders calculate tax. Value enum: "automatic", "external".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
}
