<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $shipment_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ShipmentsGetInput extends Model {
    /** @param array{'shipment_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "order", "packages". Shape $[] (Value): string.  Value enum: "order", "packages".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
