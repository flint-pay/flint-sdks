<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $delivery_window_id
 * @property-read ?string $instructions
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionInstructionsRequest extends Model {
    /** @param array{'delivery_window_id'?: string, 'instructions'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionInstructionsRequest')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return ?string
     */
    public function getDeliveryWindowId(): ?string { return $this->get('delivery_window_id'); }
    public function hasDeliveryWindowId(): bool { return $this->has('delivery_window_id'); }
    /** Shape $ (Value): string. Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. minLength: 1. maxLength: 2000.
     * @return ?string
     */
    public function getInstructions(): ?string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
}
