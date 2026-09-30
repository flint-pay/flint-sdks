<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MerchantAccountSessionStripeCollectionOptions $collectionOptions
 * Presence-aware response; omitted fields throw when accessed. */
final class MerchantAccountSessionStripeComponentProps extends Model {
    /** @param array{'collectionOptions'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeComponentProps')); }
    /** @return MerchantAccountSessionStripeCollectionOptions
     * @throws SdkError When collectionOptions is omitted; use hasCollectionOptions() or valueOrDefault().
     */
    public function getCollectionOptions(): MerchantAccountSessionStripeCollectionOptions { return $this->get('collectionOptions'); }
    public function hasCollectionOptions(): bool { return $this->has('collectionOptions'); }
}
