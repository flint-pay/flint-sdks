<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $handle
 * @property-read bool $is_note_required
 * @property-read string $name
 * @property-read string $return_reason_id
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnReasonSummary extends Model {
    /** @param array{'handle': string, 'is_note_required': bool, 'name': string, 'return_reason_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReasonSummary')); }
    /** @return string
     * @throws SdkError When handle is omitted; use hasHandle() or valueOrDefault().
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** @return bool
     * @throws SdkError When is_note_required is omitted; use hasIsNoteRequired() or valueOrDefault().
     */
    public function getIsNoteRequired(): bool { return $this->get('is_note_required'); }
    public function hasIsNoteRequired(): bool { return $this->has('is_note_required'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When return_reason_id is omitted; use hasReturnReasonId() or valueOrDefault().
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
}
