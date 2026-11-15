<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReaderConnectionSessionStripeInput|array<array-key, mixed>|\stdClass $stripe
 * Presence-aware input; omitted fields throw when accessed. */
final class ReaderConnectionSessionClientSessionInput extends Model {
    /** @param array{'stripe': ReaderConnectionSessionStripeInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderConnectionSessionClientSessionInput')); }
    /** Inputs for the Stripe Terminal SDK. Return `connection_token` from the SDK's `fetchConnectionToken` callback, and pass `location_id` to `TapToPayConnectionConfiguration`.
     * @return ReaderConnectionSessionStripeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): mixed { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
