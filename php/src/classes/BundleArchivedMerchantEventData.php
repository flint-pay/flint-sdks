<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BundleArchivedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class BundleArchivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundleArchivedMerchantEventData')); }
    /** Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category.
     * @return BundleArchivedMerchantEventDataObject
     */
    public function getObject(): BundleArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
