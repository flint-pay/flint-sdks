<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_id
 * @property-read string $return_line_item_id
 * @property-read array{'expected_version'?: int, 'reason': string, 'reason_message'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsWaiveLineItemInspectionInput extends Model {
    /** @param array{'return_id': string, 'return_line_item_id': string, 'body': array{'expected_version'?: int, 'reason': string, 'reason_message'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsWaiveLineItemInspectionInput')); }
    /** Flint return id. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Flint return line item id. Example: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** The request body for: Waive return line inspection.
     * @return array{'expected_version'?: int, 'reason': string, 'reason_message'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
