<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RefundDestinationsInput|array<array-key, mixed>|\stdClass $destinations
 * Presence-aware input; omitted fields throw when accessed. */
final class RetryOrderEditRefundRequestInput extends Model {
    /** @param array{'destinations'?: RefundDestinationsInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RetryOrderEditRefundRequestInput')); }
    /** Refund destinations, with the same shape as on create. Omit to reuse the destinations frozen on the edit. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted.
     * @return RefundDestinationsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destinations is omitted; use hasDestinations() or valueOrDefault().
     */
    public function getDestinations(): mixed { return $this->get('destinations'); }
    public function hasDestinations(): bool { return $this->has('destinations'); }
}
