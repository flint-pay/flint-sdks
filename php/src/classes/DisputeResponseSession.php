<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DisputeResponseSessionClientSession $client_session
 * @property-read string $dispute_id
 * Presence-aware response; omitted optional fields return null. */
final class DisputeResponseSession extends Model {
    /** @param array{'client_session': mixed, 'dispute_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeResponseSession')); }
    /** Browser session for responding to a dispute, with its expiry and the Stripe details needed to load the embedded response component.
     * @return DisputeResponseSessionClientSession
     */
    public function getClientSession(): DisputeResponseSessionClientSession { return $this->get('client_session'); }
    public function hasClientSession(): bool { return $this->has('client_session'); }
    /** dispute_id
     * @return string
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
}
