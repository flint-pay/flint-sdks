<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliverySelection|null $delivery_selection
 * @property-read bool $mutable
 * @property-read ?string $originating_checkout_session_id
 * @property-read string $source
 * Presence-aware response; omitted optional fields return null. */
final class EffectiveDeliverySelectionResource extends Model {
    /** @param array{'delivery_selection': mixed, 'mutable': bool, 'originating_checkout_session_id'?: string, 'source': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EffectiveDeliverySelectionResource')); }
    /** Shape $ (Value): {@see DeliverySelection} or null. Shape $.anyOf[1] (Value): {@see DeliverySelection}. The delivery choice selected for a checkout or order. Shape $.anyOf[2] (Value): null.
     * @return DeliverySelection|null
     */
    public function getDeliverySelection(): DeliverySelection|null { return $this->get('delivery_selection'); }
    public function hasDeliverySelection(): bool { return $this->has('delivery_selection'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getMutable(): bool { return $this->get('mutable'); }
    public function hasMutable(): bool { return $this->has('mutable'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOriginatingCheckoutSessionId(): ?string { return $this->get('originating_checkout_session_id'); }
    public function hasOriginatingCheckoutSessionId(): bool { return $this->has('originating_checkout_session_id'); }
    /** Shape $ (Value): string.  Value enum: "none", "provisional", "committed".
     * @return string
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
