<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnHandoffDestinationInput|array<array-key, mixed>|\stdClass $destination
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $instructions
 * @property-read list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $shipment_count
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnHandoffRequirementInput extends Model {
    /** @param array{'destination': ReturnHandoffDestinationInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'instructions'?: string, 'line_items': list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, 'shipment_count'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnHandoffRequirementInput')); }
    /** @return ReturnHandoffDestinationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): mixed { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return string
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** @return list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return string
     * @throws SdkError When shipment_count is omitted; use hasShipmentCount() or valueOrDefault().
     */
    public function getShipmentCount(): string { return $this->get('shipment_count'); }
    public function hasShipmentCount(): bool { return $this->has('shipment_count'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
