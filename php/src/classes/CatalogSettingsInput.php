<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $default_delivery_profile_id
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class CatalogSettingsInput extends Model {
    /** @param array{'default_delivery_profile_id': string, 'updated_at'?: string|\DateTimeInterface, 'version': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CatalogSettingsInput')); }
    /** @return string
     * @throws SdkError When default_delivery_profile_id is omitted; use hasDefaultDeliveryProfileId() or valueOrDefault().
     */
    public function getDefaultDeliveryProfileId(): string { return $this->get('default_delivery_profile_id'); }
    public function hasDefaultDeliveryProfileId(): bool { return $this->has('default_delivery_profile_id'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
