<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $subject
 * @property-read list<DeliveryPostalCodeValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $values
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPostalCodeConditionPreviousAttributesInput extends Model {
    /** @param array{'subject'?: string|null, 'values'?: list<DeliveryPostalCodeValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPostalCodeConditionPreviousAttributesInput')); }
    /** Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Value enum: "destination_address", "buyer_location". anyOf[1] (Value): string. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: "destination_address". Value enum: "destination_address", "buyer_location". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): mixed { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
    /** Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. anyOf[1] (Value): Array of {@see DeliveryPostalCodeValuePreviousAttributesInput}. Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. anyOf[1][] (Value): {@see DeliveryPostalCodeValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryPostalCodeValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): mixed { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
