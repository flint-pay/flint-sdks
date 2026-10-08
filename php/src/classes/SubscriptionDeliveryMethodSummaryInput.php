<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $description
 * @property-read string $name
 * @property-read string $price_type
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMethodSummaryInput extends Model {
    /** @param array{'description'?: string, 'name'?: string, 'price_type'?: string, 'type'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMethodSummaryInput')); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When price_type is omitted; use hasPriceType() or valueOrDefault().
     */
    public function getPriceType(): string { return $this->get('price_type'); }
    public function hasPriceType(): bool { return $this->has('price_type'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
