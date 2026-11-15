<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $connection_token
 * @property-read string $location_id
 * Presence-aware response; omitted optional fields return null. */
final class ReaderConnectionSessionStripe extends Model {
    /** @param array{'connection_token': string, 'location_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderConnectionSessionStripe')); }
    /** Single-use Stripe Terminal connection token, scoped to the reader's Stripe location. Create another session when the SDK asks for a new token. minLength: 1.
     * @return string
     */
    public function getConnectionToken(): string { return $this->get('connection_token'); }
    public function hasConnectionToken(): bool { return $this->has('connection_token'); }
    /** The Stripe Terminal location ID the SDK's Tap to Pay connection requires. This is a Stripe ID, not a Flint location ID.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
}
