<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $subject
 * @property-read list<string>|null $values
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryStateConditionPreviousAttributesInput extends Model {
    /** @param array{'subject'?: string|null, 'values'?: list<string>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryStateConditionPreviousAttributesInput')); }
    /** Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Value enum: "destination_address", "buyer_location". anyOf[1] (Value): string. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: "destination_address". Value enum: "destination_address", "buyer_location". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): mixed { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
    /** ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). anyOf[1] (Value): Array of string. ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). anyOf[1][] (Value): string. minLength: 1. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): mixed { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
