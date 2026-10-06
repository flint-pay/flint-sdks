<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fields
 * @property-read string $future_requirements
 * @property-read array{'only': list<string>, ...}|object $requirements
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionStripeCollectionOptionsInput extends Model {
    /** @param array{'fields': string, 'future_requirements': string, 'requirements'?: array{'only': list<string>, ...}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeCollectionOptionsInput')); }
    /** @return string
     * @throws SdkError When fields is omitted; use hasFields() or valueOrDefault().
     */
    public function getFields(): string { return $this->get('fields'); }
    public function hasFields(): bool { return $this->has('fields'); }
    /** @return string
     * @throws SdkError When future_requirements is omitted; use hasFutureRequirements() or valueOrDefault().
     */
    public function getFutureRequirements(): string { return $this->get('future_requirements'); }
    public function hasFutureRequirements(): bool { return $this->has('future_requirements'); }
    /** @return array{'only': list<string>, ...}|object
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): array|object { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
}
