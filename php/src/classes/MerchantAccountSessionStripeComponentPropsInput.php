<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MerchantAccountSessionStripeCollectionOptionsInput|array<array-key, mixed>|\stdClass $collectionOptions
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionStripeComponentPropsInput extends Model {
    /** @param array{'collectionOptions'?: MerchantAccountSessionStripeCollectionOptionsInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeComponentPropsInput')); }
    /** @return MerchantAccountSessionStripeCollectionOptionsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When collectionOptions is omitted; use hasCollectionOptions() or valueOrDefault().
     */
    public function getCollectionOptions(): mixed { return $this->get('collectionOptions'); }
    public function hasCollectionOptions(): bool { return $this->has('collectionOptions'); }
}
