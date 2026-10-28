<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $tax_registration_id
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionGetRegistrationInput extends Model {
    /** @param array{'tax_registration_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionGetRegistrationInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When tax_registration_id is omitted; use hasTaxRegistrationId() or valueOrDefault().
     */
    public function getTaxRegistrationId(): string { return $this->get('tax_registration_id'); }
    public function hasTaxRegistrationId(): bool { return $this->has('tax_registration_id'); }
}
