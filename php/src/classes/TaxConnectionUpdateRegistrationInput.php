<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $tax_registration_id
 * @property-read mixed $body
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionUpdateRegistrationInput extends Model {
    /** @param array{'tax_registration_id': string, 'Idempotency-Key'?: string, 'body': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionUpdateRegistrationInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When tax_registration_id is omitted; use hasTaxRegistrationId() or valueOrDefault().
     */
    public function getTaxRegistrationId(): string { return $this->get('tax_registration_id'); }
    public function hasTaxRegistrationId(): bool { return $this->has('tax_registration_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object and Alternative shapes (see declared variants). Update at least one of registration_number, start_date or end_date. Pending and rejected registrations allow all three fields; registration_number and start_date require a connection that is not active. Scheduled and active registrations allow only end_date. A pending or rejected registration whose tax-account copy exists or may have been created cannot change start_date; delete it and create it again. Ended registrations cannot be changed. A version fence by itself is not a change.
     * @return mixed
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
