<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_id
 * @property-read array{'completion_mode'?: string, 'expected_version'?: int, 'line_items': list<array{'decision'?: mixed, 'disposition'?: mixed, 'inspection'?: mixed, 'received_quantity'?: int, 'resolution'?: array{'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'metadata'?: mixed, 'pricing_basis'?: string, 'quantity': int, 'replacement_line_items'?: list<array{'bundle_id'?: string, 'description'?: string, 'name'?: string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: mixed, 'variant_id': string}|object|array{'bundle_id': string, 'description'?: string, 'name'?: string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: mixed, 'variant_id'?: string}|object|array{'bundle_id'?: string, 'description'?: string, 'name': string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: mixed, 'variant_id'?: string}|object>, 'resolution_type': string}|object, 'return_line_item_id': string}|object>, 'receipt'?: array{'external_actor_id'?: string, 'external_reference_id'?: string, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'source_system'?: mixed}|object}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsProcessInput extends Model {
    /** @param array{'return_id': string, 'body': array{'completion_mode'?: string, 'expected_version'?: int, 'line_items': list<array{'decision'?: mixed, 'disposition'?: mixed, 'inspection'?: mixed, 'received_quantity'?: int, 'resolution'?: array{'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'metadata'?: mixed, 'pricing_basis'?: string, 'quantity': int, 'replacement_line_items'?: list<array{'bundle_id'?: string, 'description'?: string, 'name'?: string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: mixed, 'variant_id': string}|object|array{'bundle_id': string, 'description'?: string, 'name'?: string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: mixed, 'variant_id'?: string}|object|array{'bundle_id'?: string, 'description'?: string, 'name': string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: mixed, 'variant_id'?: string}|object>, 'resolution_type': string}|object, 'return_line_item_id': string}|object>, 'receipt'?: array{'external_actor_id'?: string, 'external_reference_id'?: string, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'source_system'?: mixed}|object}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsProcessInput')); }
    /** Flint return id. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** The request body for: Process existing return.
     * @return array{'completion_mode'?: string, 'expected_version'?: int, 'line_items': list<array{'decision'?: mixed, 'disposition'?: mixed, 'inspection'?: mixed, 'received_quantity'?: int, 'resolution'?: array{'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'metadata'?: mixed, 'pricing_basis'?: string, 'quantity': int, 'replacement_line_items'?: list<array{'bundle_id'?: string, 'description'?: string, 'name'?: string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: mixed, 'variant_id': string}|object|array{'bundle_id': string, 'description'?: string, 'name'?: string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: mixed, 'variant_id'?: string}|object|array{'bundle_id'?: string, 'description'?: string, 'name': string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: mixed, 'variant_id'?: string}|object>, 'resolution_type': string}|object, 'return_line_item_id': string}|object>, 'receipt'?: array{'external_actor_id'?: string, 'external_reference_id'?: string, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'source_system'?: mixed}|object}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
