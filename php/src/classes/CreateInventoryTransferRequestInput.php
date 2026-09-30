<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $destination_location_id
 * @property-read string $external_reference
 * @property-read list<InventoryTransferLineRequestInput|array<array-key, mixed>|\stdClass> $lines
 * @property-read string $note
 * @property-read string $origin_location_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateInventoryTransferRequestInput extends Model {
    /** @param array{'destination_location_id': string, 'external_reference'?: string, 'lines': list<InventoryTransferLineRequestInput|array<array-key, mixed>|\stdClass>, 'note'?: string, 'origin_location_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateInventoryTransferRequestInput')); }
    /** @return string
     * @throws SdkError When destination_location_id is omitted; use hasDestinationLocationId() or valueOrDefault().
     */
    public function getDestinationLocationId(): string { return $this->get('destination_location_id'); }
    public function hasDestinationLocationId(): bool { return $this->has('destination_location_id'); }
    /** @return string
     * @throws SdkError When external_reference is omitted; use hasExternalReference() or valueOrDefault().
     */
    public function getExternalReference(): string { return $this->get('external_reference'); }
    public function hasExternalReference(): bool { return $this->has('external_reference'); }
    /** @return list<InventoryTransferLineRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** @return string
     * @throws SdkError When note is omitted; use hasNote() or valueOrDefault().
     */
    public function getNote(): string { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** @return string
     * @throws SdkError When origin_location_id is omitted; use hasOriginLocationId() or valueOrDefault().
     */
    public function getOriginLocationId(): string { return $this->get('origin_location_id'); }
    public function hasOriginLocationId(): bool { return $this->has('origin_location_id'); }
}
