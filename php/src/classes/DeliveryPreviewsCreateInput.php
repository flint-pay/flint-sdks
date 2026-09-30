<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'buyer_location'?: mixed, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: mixed, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'pickup_location_id'?: string, 'pricing_context'?: array<array-key, string>|\stdClass}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPreviewsCreateInput extends Model {
    /** @param array{'Flint-Version'?: string, 'body': array{'buyer_location'?: mixed, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: mixed, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'pickup_location_id'?: string, 'pricing_context'?: array<array-key, string>|\stdClass}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateInput')); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'buyer_location'?: mixed, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: mixed, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'pickup_location_id'?: string, 'pricing_context'?: array<array-key, string>|\stdClass}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
