<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_quote_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryQuotesGetInput extends Model {
    /** @param array{'delivery_quote_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuotesGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When delivery_quote_id is omitted; use hasDeliveryQuoteId() or valueOrDefault().
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
}
