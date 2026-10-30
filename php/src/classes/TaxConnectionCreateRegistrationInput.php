<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'country'?: string, 'end_date'?: string|null, 'registration_number': string, 'start_date': string, 'state': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionCreateRegistrationInput extends Model {
    /** @param array{'body': array{'country'?: string, 'end_date'?: string|null, 'registration_number': string, 'start_date': string, 'state': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionCreateRegistrationInput')); }
    /** Register a US state where the seller collects tax.
     * @return array{'country'?: string, 'end_date'?: string|null, 'registration_number': string, 'start_date': string, 'state': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
