<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'line_items': list<mixed>, 'order_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateReturnInput extends Model {
    /** @param array{'body': array{'line_items': list<mixed>, 'order_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnInput')); }
    /** The request body for: Create a Return for the current buyer. Example: {"line_items":[{"buyer_note":"I changed my mind.","order_line_item_id":"li_01KEZF7C00XM6VK5KNWVC3T907","requested_quantity":1,"requested_resolution_type":"refund","return_reason_id":"rrsn_01KEZF7C005274REWXTZRJ4BM0"}],"order_id":"ord_01KEZF7C00RWKW7JDYTZ5A6ET0"}.
     * @return array{'line_items': list<mixed>, 'order_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
