<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivery_zone_id
 * @property-read string|null $subject
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryZoneConditionPreviousAttributesInput extends Model {
    /** @param array{'delivery_zone_id'?: string|null, 'subject'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneConditionPreviousAttributesInput')); }
    /** ID of the delivery zone the address must be inside. anyOf[1] (Value): string. ID of the delivery zone the address must be inside. minLength: 1. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_zone_id is omitted; use hasDeliveryZoneId() or valueOrDefault().
     */
    public function getDeliveryZoneId(): mixed { return $this->get('delivery_zone_id'); }
    public function hasDeliveryZoneId(): bool { return $this->has('delivery_zone_id'); }
    /** Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Value enum: "destination_address", "buyer_location". anyOf[1] (Value): string. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: "destination_address". Value enum: "destination_address", "buyer_location". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): mixed { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
