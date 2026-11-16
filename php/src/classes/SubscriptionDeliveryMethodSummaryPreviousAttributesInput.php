<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $description
 * @property-read string|null $name
 * @property-read string|null $price_type
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMethodSummaryPreviousAttributesInput extends Model {
    /** @param array{'description'?: string|null, 'name'?: string|null, 'price_type'?: string|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMethodSummaryPreviousAttributesInput')); }
    /** Buyer-facing description of the delivery method. Omitted when the method has none. anyOf[1] (Value): string. Buyer-facing description of the delivery method. Omitted when the method has none. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Buyer-facing name of the delivery method. anyOf[1] (Value): string. Buyer-facing name of the delivery method. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Whether the method charges a flat price or Flint works the price out for each delivery. Value enum: "fixed", "quoted". anyOf[1] (Value): string. Whether the method charges a flat price or Flint works the price out for each delivery. Value enum: "fixed", "quoted". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When price_type is omitted; use hasPriceType() or valueOrDefault().
     */
    public function getPriceType(): mixed { return $this->get('price_type'); }
    public function hasPriceType(): bool { return $this->has('price_type'); }
    /** How the method delivers the items. Value enum: "shipment", "local_delivery". anyOf[1] (Value): string. How the method delivers the items. Value enum: "shipment", "local_delivery". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
