<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_url
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDigitalFulfillmentDetailsInput extends Model {
    /** @param array{'delivery_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDigitalFulfillmentDetailsInput')); }
    /** @return string
     * @throws SdkError When delivery_url is omitted; use hasDeliveryUrl() or valueOrDefault().
     */
    public function getDeliveryUrl(): string { return $this->get('delivery_url'); }
    public function hasDeliveryUrl(): bool { return $this->has('delivery_url'); }
}
