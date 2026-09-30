<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_components_updated
 * @property-read string $delivery_profile_id
 * @property-read string $product_variants_updated
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfileAssignmentInput extends Model {
    /** @param array{'bundle_components_updated': string, 'delivery_profile_id': string, 'product_variants_updated': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileAssignmentInput')); }
    /** @return string
     * @throws SdkError When bundle_components_updated is omitted; use hasBundleComponentsUpdated() or valueOrDefault().
     */
    public function getBundleComponentsUpdated(): string { return $this->get('bundle_components_updated'); }
    public function hasBundleComponentsUpdated(): bool { return $this->has('bundle_components_updated'); }
    /** @return string
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** @return string
     * @throws SdkError When product_variants_updated is omitted; use hasProductVariantsUpdated() or valueOrDefault().
     */
    public function getProductVariantsUpdated(): string { return $this->get('product_variants_updated'); }
    public function hasProductVariantsUpdated(): bool { return $this->has('product_variants_updated'); }
}
