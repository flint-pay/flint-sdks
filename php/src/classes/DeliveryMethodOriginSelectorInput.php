<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_location_set_id
 * @property-read string $delivery_location_set_revision_id
 * @property-read string $location_id
 * @property-read list<string> $location_ids
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryMethodOriginSelectorInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodOriginSelectorInput')); }
    /** @return string
     * @throws SdkError When delivery_location_set_id is omitted; use hasDeliveryLocationSetId() or valueOrDefault().
     */
    public function getDeliveryLocationSetId(): string { return $this->get('delivery_location_set_id'); }
    public function hasDeliveryLocationSetId(): bool { return $this->has('delivery_location_set_id'); }
    /** @return string
     * @throws SdkError When delivery_location_set_revision_id is omitted; use hasDeliveryLocationSetRevisionId() or valueOrDefault().
     */
    public function getDeliveryLocationSetRevisionId(): string { return $this->get('delivery_location_set_revision_id'); }
    public function hasDeliveryLocationSetRevisionId(): bool { return $this->has('delivery_location_set_revision_id'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return list<string>
     * @throws SdkError When location_ids is omitted; use hasLocationIds() or valueOrDefault().
     */
    public function getLocationIds(): array { return $this->get('location_ids'); }
    public function hasLocationIds(): bool { return $this->has('location_ids'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
