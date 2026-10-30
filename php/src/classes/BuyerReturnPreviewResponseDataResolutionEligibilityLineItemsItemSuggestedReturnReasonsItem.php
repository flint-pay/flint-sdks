<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $handle
 * @property-read bool $is_note_required
 * @property-read string $name
 * @property-read string $return_reason_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemSuggestedReturnReasonsItem extends Model {
    /** @param array{'handle': string, 'is_note_required': bool, 'name': string, 'return_reason_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemSuggestedReturnReasonsItem')); }
    /** handle
     * @return string
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** is_note_required
     * @return bool
     */
    public function getIsNoteRequired(): bool { return $this->get('is_note_required'); }
    public function hasIsNoteRequired(): bool { return $this->has('is_note_required'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** return_reason_id
     * @return string
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
}
