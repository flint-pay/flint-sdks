<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $location_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderHandover extends Model {
    /** @param array{'location_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderHandover')); }
    /** Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
}
