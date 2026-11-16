<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnHandoffDestinationPreviousAttributes|null $destination
 * @property-read string|null $expires_at
 * @property-read string|null $instructions
 * @property-read list<ReturnHandoffRequirementLineItemPreviousAttributes>|null $line_items
 * @property-read int|null $shipment_count
 * @property-read string|null $status
 * Presence-aware response; omitted optional fields return null. */
final class ReturnHandoffRequirementPreviousAttributes extends Model {
    /** @param array{'destination'?: mixed, 'expires_at'?: mixed, 'instructions'?: mixed, 'line_items'?: mixed, 'shipment_count'?: mixed, 'status'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnHandoffRequirementPreviousAttributes')); }
    /** Where the buyer sends the merchandise. anyOf[1] (Value): {@see ReturnHandoffDestinationPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnHandoffDestinationPreviousAttributes|null
     */
    public function getDestination(): ReturnHandoffDestinationPreviousAttributes|null { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Instructions for the buyer on sending the merchandise. anyOf[1] (Value): string. Instructions for the buyer on sending the merchandise. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInstructions(): string|null { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Return lines and the quantities still expected. anyOf[1] (Value): Array of {@see ReturnHandoffRequirementLineItemPreviousAttributes}. Return lines and the quantities still expected. anyOf[1][] (Value): {@see ReturnHandoffRequirementLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnHandoffRequirementLineItemPreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Reserved. Flint doesn't set it today, so it's always omitted. anyOf[1] (Value): integer. Reserved. Flint doesn't set it today, so it's always omitted. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getShipmentCount(): int|null { return $this->get('shipment_count'); }
    public function hasShipmentCount(): bool { return $this->has('shipment_count'); }
    /** Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Value enum: "pending", "in_progress". anyOf[1] (Value): string. Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Value enum: "pending", "in_progress". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
