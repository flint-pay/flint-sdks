<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $description
 * @property-read ?string $name
 * @property-read ?string $price_type
 * @property-read ?string $type
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryMethodSummary extends Model {
    /** @param array{'description'?: string, 'name'?: string, 'price_type'?: string, 'type'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMethodSummary')); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** name
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Value enum: "fixed", "quoted".
     * @return ?string
     */
    public function getPriceType(): ?string { return $this->get('price_type'); }
    public function hasPriceType(): bool { return $this->has('price_type'); }
    /** Value enum: "shipment", "local_delivery".
     * @return ?string
     */
    public function getType(): ?string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
