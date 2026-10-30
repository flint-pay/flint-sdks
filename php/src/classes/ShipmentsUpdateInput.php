<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $shipment_id
 * @property-read array{'expected_version'?: int, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ShipmentsUpdateInput extends Model {
    /** @param array{'shipment_id': string, 'body': array{'expected_version'?: int, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentsUpdateInput')); }
    /** Flint shipment ID. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** The request body for: Update shipment. Example: {"expected_version":1,"metadata":{"route":"A7","warehouse":"east"}}.
     * @return array{'expected_version'?: int, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
