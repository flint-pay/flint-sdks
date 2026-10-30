<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_inspection_id
 * @property-read string $return_inspection_line_item_id
 * @property-read array{'acceptance_decision_reason': string, 'acceptance_decision_reason_message'?: string, 'acceptance_status': string, 'expected_version'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnInspectionsDecideLineItemInput extends Model {
    /** @param array{'return_inspection_id': string, 'return_inspection_line_item_id': string, 'body': array{'acceptance_decision_reason': string, 'acceptance_decision_reason_message'?: string, 'acceptance_status': string, 'expected_version'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionsDecideLineItemInput')); }
    /** Flint return inspection id. Example: "retins_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_inspection_id is omitted; use hasReturnInspectionId() or valueOrDefault().
     */
    public function getReturnInspectionId(): string { return $this->get('return_inspection_id'); }
    public function hasReturnInspectionId(): bool { return $this->has('return_inspection_id'); }
    /** Flint return inspection line item id. Example: "retinli_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_inspection_line_item_id is omitted; use hasReturnInspectionLineItemId() or valueOrDefault().
     */
    public function getReturnInspectionLineItemId(): string { return $this->get('return_inspection_line_item_id'); }
    public function hasReturnInspectionLineItemId(): bool { return $this->has('return_inspection_line_item_id'); }
    /** The request body for: Decide return inspection line item.
     * @return array{'acceptance_decision_reason': string, 'acceptance_decision_reason_message'?: string, 'acceptance_status': string, 'expected_version'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
