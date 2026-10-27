<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DisputeResponseSessionClientSessionInput|array<array-key, mixed>|\stdClass $client_session
 * @property-read string $dispute_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DisputeResponseSessionInput extends Model {
    /** @param array{'client_session': DisputeResponseSessionClientSessionInput|array<array-key, mixed>|\stdClass, 'dispute_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeResponseSessionInput')); }
    /** Shape $ (Value): {@see DisputeResponseSessionClientSessionInput}. Browser session for responding to a dispute, with its expiry and the Stripe details needed to load the embedded response component.
     * @return DisputeResponseSessionClientSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When client_session is omitted; use hasClientSession() or valueOrDefault().
     */
    public function getClientSession(): mixed { return $this->get('client_session'); }
    public function hasClientSession(): bool { return $this->has('client_session'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
}
