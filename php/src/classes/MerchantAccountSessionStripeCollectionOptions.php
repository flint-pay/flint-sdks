<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fields
 * @property-read string $futureRequirements
 * @property-read MerchantAccountSessionStripeRequirements $requirements
 * Presence-aware response; omitted fields throw when accessed. */
final class MerchantAccountSessionStripeCollectionOptions extends Model {
    /** @param array{'fields': string, 'futureRequirements': string, 'requirements'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeCollectionOptions')); }
    /** @return string
     * @throws SdkError When fields is omitted; use hasFields() or valueOrDefault().
     */
    public function getFields(): string { return $this->get('fields'); }
    public function hasFields(): bool { return $this->has('fields'); }
    /** @return string
     * @throws SdkError When futureRequirements is omitted; use hasFutureRequirements() or valueOrDefault().
     */
    public function getFutureRequirements(): string { return $this->get('futureRequirements'); }
    public function hasFutureRequirements(): bool { return $this->has('futureRequirements'); }
    /** @return MerchantAccountSessionStripeRequirements
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): MerchantAccountSessionStripeRequirements { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
}
