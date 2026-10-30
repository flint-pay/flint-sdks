<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $tax_registration_id
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionDeleteRegistrationInput extends Model {
    /** @param array{'tax_registration_id': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionDeleteRegistrationInput')); }
    /** Flint tax registration ID. Example: "trg_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When tax_registration_id is omitted; use hasTaxRegistrationId() or valueOrDefault().
     */
    public function getTaxRegistrationId(): string { return $this->get('tax_registration_id'); }
    public function hasTaxRegistrationId(): bool { return $this->has('tax_registration_id'); }
    /** Registration version last read by the caller. Omit to delete the current registration. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
