<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $default_delivery_profile_id
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class CatalogSettings extends Model {
    /** @param array{'default_delivery_profile_id': string, 'updated_at'?: string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CatalogSettings')); }
    /** @return string
     * @throws SdkError When default_delivery_profile_id is omitted; use hasDefaultDeliveryProfileId() or valueOrDefault().
     */
    public function getDefaultDeliveryProfileId(): string { return $this->get('default_delivery_profile_id'); }
    public function hasDefaultDeliveryProfileId(): bool { return $this->has('default_delivery_profile_id'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
