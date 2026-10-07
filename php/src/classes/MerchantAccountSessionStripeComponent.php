<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MerchantAccountSessionStripeCollectionOptions $collection_options
 * @property-read string $component
 * Presence-aware response; omitted fields throw when accessed. */
final class MerchantAccountSessionStripeComponent extends Model {
    /** @param array{'collection_options'?: mixed, 'component': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeComponent')); }
    /** @return MerchantAccountSessionStripeCollectionOptions
     * @throws SdkError When collection_options is omitted; use hasCollectionOptions() or valueOrDefault().
     */
    public function getCollectionOptions(): MerchantAccountSessionStripeCollectionOptions { return $this->get('collection_options'); }
    public function hasCollectionOptions(): bool { return $this->has('collection_options'); }
    /** @return string
     * @throws SdkError When component is omitted; use hasComponent() or valueOrDefault().
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
}
