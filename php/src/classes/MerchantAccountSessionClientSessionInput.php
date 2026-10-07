<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read MerchantAccountSessionStripeInput|array<array-key, mixed>|\stdClass $stripe
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionClientSessionInput extends Model {
    /** @param array{'expires_at': string|\DateTimeInterface, 'stripe': MerchantAccountSessionStripeInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionClientSessionInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return MerchantAccountSessionStripeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): mixed { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
