<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnHandoffDestinationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $destination
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string|null $instructions
 * @property-read list<ReturnHandoffRequirementLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $line_items
 * @property-read int|null $shipment_count
 * @property-read string|null $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnHandoffRequirementPreviousAttributesInput extends Model {
    /** @param array{'destination'?: ReturnHandoffDestinationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'expires_at'?: string|\DateTimeInterface|null, 'instructions'?: string|null, 'line_items'?: list<ReturnHandoffRequirementLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'shipment_count'?: int|null, 'status'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnHandoffRequirementPreviousAttributesInput')); }
    /** Where the buyer sends the merchandise. anyOf[1] (Value): {@see ReturnHandoffDestinationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnHandoffDestinationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): mixed { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): mixed { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Instructions for the buyer on sending the merchandise. anyOf[1] (Value): string. Instructions for the buyer on sending the merchandise. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): mixed { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Return lines and the quantities still expected. anyOf[1] (Value): Array of {@see ReturnHandoffRequirementLineItemPreviousAttributesInput}. Return lines and the quantities still expected. anyOf[1][] (Value): {@see ReturnHandoffRequirementLineItemPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ReturnHandoffRequirementLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): mixed { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Reserved. Flint doesn't set it today, so it's always omitted. anyOf[1] (Value): integer. Reserved. Flint doesn't set it today, so it's always omitted. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When shipment_count is omitted; use hasShipmentCount() or valueOrDefault().
     */
    public function getShipmentCount(): mixed { return $this->get('shipment_count'); }
    public function hasShipmentCount(): bool { return $this->has('shipment_count'); }
    /** Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Value enum: "pending", "in_progress". anyOf[1] (Value): string. Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Value enum: "pending", "in_progress". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
