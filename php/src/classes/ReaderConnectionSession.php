<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReaderConnectionSessionClientSession $client_session
 * @property-read string $location_id
 * @property-read string $reader_id
 * Presence-aware response; omitted optional fields return null. */
final class ReaderConnectionSession extends Model {
    /** @param array{'client_session': mixed, 'location_id': string, 'reader_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderConnectionSession')); }
    /** What the Stripe Terminal SDK takes. Appears only in this response, never on the reader, in lists or in webhooks. Stripe Terminal SDK inputs for one connection.
     * @return ReaderConnectionSessionClientSession
     */
    public function getClientSession(): ReaderConnectionSessionClientSession { return $this->get('client_session'); }
    public function hasClientSession(): bool { return $this->has('client_session'); }
    /** The reader's Flint location.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** The Tap to Pay reader the session is for.
     * @return string
     */
    public function getReaderId(): string { return $this->get('reader_id'); }
    public function hasReaderId(): bool { return $this->has('reader_id'); }
}
