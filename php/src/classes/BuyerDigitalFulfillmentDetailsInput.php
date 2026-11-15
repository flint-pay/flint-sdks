<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $delivered_at
 * @property-read string|null $delivery_url
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerDigitalFulfillmentDetailsInput extends Model {
    /** @param array{'delivered_at'?: string|\DateTimeInterface, 'delivery_url'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerDigitalFulfillmentDetailsInput')); }
    /** When the digital goods were delivered, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string|\DateTimeInterface { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** URL where the buyer can access the delivered digital goods. Omitted when the merchant hasn't set one. `null` when the buyer no longer has download access, for example after the covered lines are refunded.
     * @return string|null
     * @throws SdkError When delivery_url is omitted; use hasDeliveryUrl() or valueOrDefault().
     */
    public function getDeliveryUrl(): string|null { return $this->get('delivery_url'); }
    public function hasDeliveryUrl(): bool { return $this->has('delivery_url'); }
}
