<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subject
 * @property-read list<string> $values
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryStateConditionInput extends Model {
    /** @param array{'subject'?: string, 'values': list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryStateConditionInput')); }
    /** Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: "destination_address". Value enum: "destination_address", "buyer_location".
     * @return string
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): string { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
    /** ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
