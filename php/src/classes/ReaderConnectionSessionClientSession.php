<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReaderConnectionSessionStripe $stripe
 * Presence-aware response; omitted optional fields return null. */
final class ReaderConnectionSessionClientSession extends Model {
    /** @param array{'stripe': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderConnectionSessionClientSession')); }
    /** Inputs for the Stripe Terminal SDK. Return `connection_token` from the SDK's `fetchConnectionToken` callback, and pass `location_id` to `TapToPayConnectionConfiguration`.
     * @return ReaderConnectionSessionStripe
     */
    public function getStripe(): ReaderConnectionSessionStripe { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
