<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'eligibility': mixed, 'mode': string, 'resolution'?: mixed}|object|array{'eligibility'?: mixed, 'mode': string, 'resolution': mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateReturnPreviewInput extends Model {
    /** @param array{'body': array{'eligibility': mixed, 'mode': string, 'resolution'?: mixed}|object|array{'eligibility'?: mixed, 'mode': string, 'resolution': mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewInput')); }
    /** The request body for: Preview Return eligibility or resolution amounts for the current buyer. Example: {"eligibility":{"order_id":"ord_01KEZF7C00RWKW7JDYTZ5A6ET0","selection":{"line_items":[{"order_line_item_id":"li_01KEZF7C00XM6VK5KNWVC3T907","requested_quantity":1,"return_reason_id":"rrsn_01KEZF7C005274REWXTZRJ4BM0"}],"selection_type":"line_items"}},"mode":"eligibility"}.
     * @return array{'eligibility': mixed, 'mode': string, 'resolution'?: mixed}|object|array{'eligibility'?: mixed, 'mode': string, 'resolution': mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
