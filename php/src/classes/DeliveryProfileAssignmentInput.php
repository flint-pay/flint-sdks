<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $bundle_components_updated
 * @property-read string $delivery_profile_id
 * @property-read int $product_variants_updated
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfileAssignmentInput extends Model {
    /** @param array{'bundle_components_updated': int, 'delivery_profile_id': string, 'product_variants_updated': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileAssignmentInput')); }
    /** Number of previously unconfigured catalog records updated. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When bundle_components_updated is omitted; use hasBundleComponentsUpdated() or valueOrDefault().
     */
    public function getBundleComponentsUpdated(): int { return $this->get('bundle_components_updated'); }
    public function hasBundleComponentsUpdated(): bool { return $this->has('bundle_components_updated'); }
    /** Delivery profile assigned to each updated catalog item.
     * @return string
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Number of previously unconfigured catalog records updated. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When product_variants_updated is omitted; use hasProductVariantsUpdated() or valueOrDefault().
     */
    public function getProductVariantsUpdated(): int { return $this->get('product_variants_updated'); }
    public function hasProductVariantsUpdated(): bool { return $this->has('product_variants_updated'); }
}
