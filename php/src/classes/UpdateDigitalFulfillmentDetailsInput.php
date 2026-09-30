<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $delivered_at
 * @property-read string|null $delivery_url
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateDigitalFulfillmentDetailsInput extends Model {
    /** @param array{'delivered_at'?: string|\DateTimeInterface|null, 'delivery_url'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateDigitalFulfillmentDetailsInput')); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string|\DateTimeInterface|null { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** @return string|null
     * @throws SdkError When delivery_url is omitted; use hasDeliveryUrl() or valueOrDefault().
     */
    public function getDeliveryUrl(): string|null { return $this->get('delivery_url'); }
    public function hasDeliveryUrl(): bool { return $this->has('delivery_url'); }
}
