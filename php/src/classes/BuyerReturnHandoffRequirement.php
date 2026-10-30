<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerReturnHandoffDestination $destination
 * @property-read ?string $expires_at
 * @property-read ?string $instructions
 * @property-read list<ReturnHandoffRequirementLineItem> $line_items
 * @property-read ?int $shipment_count
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnHandoffRequirement extends Model {
    /** @param array{'destination': mixed, 'expires_at'?: string, 'instructions'?: string, 'line_items': list<mixed>, 'shipment_count'?: int, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnHandoffRequirement')); }
    /** The destination name, address, and type shown to the buyer for returning merchandise.
     * @return BuyerReturnHandoffDestination
     */
    public function getDestination(): BuyerReturnHandoffDestination { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** instructions
     * @return ?string
     */
    public function getInstructions(): ?string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /**  [] (Value): {@see ReturnHandoffRequirementLineItem}. A return line and the quantity the buyer must hand back.
     * @return list<ReturnHandoffRequirementLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Format: int64.
     * @return ?int
     */
    public function getShipmentCount(): ?int { return $this->get('shipment_count'); }
    public function hasShipmentCount(): bool { return $this->has('shipment_count'); }
    /** Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Value enum: "pending", "in_progress".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
