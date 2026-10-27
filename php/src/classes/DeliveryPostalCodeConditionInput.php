<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subject
 * @property-read list<DeliveryPostalCodeValueInput|array<array-key, mixed>|\stdClass> $values
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPostalCodeConditionInput extends Model {
    /** @param array{'subject'?: string, 'values': list<DeliveryPostalCodeValueInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPostalCodeConditionInput')); }
    /** Shape $ (Value): string. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: "destination_address". Value enum: "destination_address", "buyer_location".
     * @return string
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): string { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
    /** Shape $ (Value): Array of {@see DeliveryPostalCodeValueInput}. Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. Shape $[] (Value): {@see DeliveryPostalCodeValueInput}. A postal code or postal code prefix with its country, used in a postal code condition.
     * @return list<DeliveryPostalCodeValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
