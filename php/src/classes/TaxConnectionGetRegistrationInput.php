<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $tax_registration_id
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionGetRegistrationInput extends Model {
    /** @param array{'tax_registration_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionGetRegistrationInput')); }
    /** Flint tax registration ID. Example: "trg_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When tax_registration_id is omitted; use hasTaxRegistrationId() or valueOrDefault().
     */
    public function getTaxRegistrationId(): string { return $this->get('tax_registration_id'); }
    public function hasTaxRegistrationId(): bool { return $this->has('tax_registration_id'); }
}
