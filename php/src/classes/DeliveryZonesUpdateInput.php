<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $delivery_zone_id
 * @property-read mixed $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryZonesUpdateInput extends Model {
    /** @param array{'delivery_zone_id': string, 'body': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZonesUpdateInput')); }
    /** Flint delivery zone ID. Example: "dzone_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When delivery_zone_id is omitted; use hasDeliveryZoneId() or valueOrDefault().
     */
    public function getDeliveryZoneId(): string { return $this->get('delivery_zone_id'); }
    public function hasDeliveryZoneId(): bool { return $this->has('delivery_zone_id'); }
    /** The request body for: Update delivery zone.
     * @return mixed
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
