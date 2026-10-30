<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'line_items': list<array{'buyer_note'?: string, 'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id': string}|object>, 'order_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateReturnInput extends Model {
    /** @param array{'body': array{'line_items': list<array{'buyer_note'?: string, 'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id': string}|object>, 'order_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnInput')); }
    /** The request body for: Create a Return for the current buyer.
     * @return array{'line_items': list<array{'buyer_note'?: string, 'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id': string}|object>, 'order_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
