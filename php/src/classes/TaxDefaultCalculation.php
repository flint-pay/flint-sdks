<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $components_source
 * @property-read string $mode
 * Presence-aware response; omitted optional fields return null. */
final class TaxDefaultCalculation extends Model {
    /** @param array{'components_source'?: string, 'mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxDefaultCalculation')); }
    /** Where an external order's components come from: `provided` (the default) when you send them, or `callback` when Flint asks the selected tax calculation callback. Present only with mode `external`. Value enum: "provided", "callback".
     * @return ?string
     */
    public function getComponentsSource(): ?string { return $this->get('components_source'); }
    public function hasComponentsSource(): bool { return $this->has('components_source'); }
    /** `automatic` calculates tax through the tax connection. `external` uses tax components from `components_source`. Value enum: "automatic", "external".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
}
