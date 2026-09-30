<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $delivered_at
 * @property-read string $delivery_url
 * Presence-aware input; omitted fields throw when accessed. */
final class DigitalFulfillmentDetailsInput extends Model {
    /** @param array{'delivered_at'?: string|\DateTimeInterface, 'delivery_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DigitalFulfillmentDetailsInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string|\DateTimeInterface { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** @return string
     * @throws SdkError When delivery_url is omitted; use hasDeliveryUrl() or valueOrDefault().
     */
    public function getDeliveryUrl(): string { return $this->get('delivery_url'); }
    public function hasDeliveryUrl(): bool { return $this->has('delivery_url'); }
}
