<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MerchantAccountSessionStripeCollectionOptionsInput|array<array-key, mixed>|\stdClass $collection_options
 * @property-read string $component
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionStripeComponentInput extends Model {
    /** @param array{'collection_options'?: MerchantAccountSessionStripeCollectionOptionsInput|array<array-key, mixed>|\stdClass, 'component': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeComponentInput')); }
    /** @return MerchantAccountSessionStripeCollectionOptionsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When collection_options is omitted; use hasCollectionOptions() or valueOrDefault().
     */
    public function getCollectionOptions(): mixed { return $this->get('collection_options'); }
    public function hasCollectionOptions(): bool { return $this->has('collection_options'); }
    /** @return string
     * @throws SdkError When component is omitted; use hasComponent() or valueOrDefault().
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
}
