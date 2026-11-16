<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $location_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderHandoverPreviousAttributes extends Model {
    /** @param array{'location_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderHandoverPreviousAttributes')); }
    /** Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. anyOf[1] (Value): string. Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLocationId(): string|null { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
}
