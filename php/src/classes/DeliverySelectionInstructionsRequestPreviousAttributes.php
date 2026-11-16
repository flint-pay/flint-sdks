<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivery_window_id
 * @property-read string|null $instructions
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionInstructionsRequestPreviousAttributes extends Model {
    /** @param array{'delivery_window_id'?: mixed, 'instructions'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionInstructionsRequestPreviousAttributes')); }
    /** ID from the option's offered_windows. Required when window_selection is offered; omit it otherwise. anyOf[1] (Value): string. ID from the option's offered_windows. Required when window_selection is offered; omit it otherwise. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryWindowId(): string|null { return $this->get('delivery_window_id'); }
    public function hasDeliveryWindowId(): bool { return $this->has('delivery_window_id'); }
    /** Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. minLength: 1. maxLength: 2000. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInstructions(): string|null { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
}
