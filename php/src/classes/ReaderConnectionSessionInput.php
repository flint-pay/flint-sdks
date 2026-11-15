<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReaderConnectionSessionClientSessionInput|array<array-key, mixed>|\stdClass $client_session
 * @property-read string $location_id
 * @property-read string $reader_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReaderConnectionSessionInput extends Model {
    /** @param array{'client_session': ReaderConnectionSessionClientSessionInput|array<array-key, mixed>|\stdClass, 'location_id': string, 'reader_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderConnectionSessionInput')); }
    /** What the Stripe Terminal SDK takes. Appears only in this response, never on the reader, in lists or in webhooks. Stripe Terminal SDK inputs for one connection.
     * @return ReaderConnectionSessionClientSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When client_session is omitted; use hasClientSession() or valueOrDefault().
     */
    public function getClientSession(): mixed { return $this->get('client_session'); }
    public function hasClientSession(): bool { return $this->has('client_session'); }
    /** The reader's Flint location. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** The Tap to Pay reader the session is for. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * @return string
     * @throws SdkError When reader_id is omitted; use hasReaderId() or valueOrDefault().
     */
    public function getReaderId(): string { return $this->get('reader_id'); }
    public function hasReaderId(): bool { return $this->has('reader_id'); }
}
