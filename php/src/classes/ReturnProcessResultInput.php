<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $idempotency_key
 * @property-read ReturnResourceInput|array<array-key, mixed>|\stdClass $return
 * @property-read list<ReturnDispositionInput|array<array-key, mixed>|\stdClass> $return_dispositions
 * @property-read list<ReturnInspectionInput|array<array-key, mixed>|\stdClass> $return_inspections
 * @property-read list<ReturnReceiptInput|array<array-key, mixed>|\stdClass> $return_receipts
 * @property-read list<ReturnResolutionInput|array<array-key, mixed>|\stdClass> $return_resolutions
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnProcessResultInput extends Model {
    /** @param array{'idempotency_key': string, 'return': ReturnResourceInput|array<array-key, mixed>|\stdClass, 'return_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'return_inspections': list<ReturnInspectionInput|array<array-key, mixed>|\stdClass>, 'return_receipts': list<ReturnReceiptInput|array<array-key, mixed>|\stdClass>, 'return_resolutions': list<ReturnResolutionInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnProcessResultInput')); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return ReturnResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When return is omitted; use hasReturn() or valueOrDefault().
     */
    public function getReturn(): mixed { return $this->get('return'); }
    public function hasReturn(): bool { return $this->has('return'); }
    /** @return list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_dispositions is omitted; use hasReturnDispositions() or valueOrDefault().
     */
    public function getReturnDispositions(): array { return $this->get('return_dispositions'); }
    public function hasReturnDispositions(): bool { return $this->has('return_dispositions'); }
    /** @return list<ReturnInspectionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_inspections is omitted; use hasReturnInspections() or valueOrDefault().
     */
    public function getReturnInspections(): array { return $this->get('return_inspections'); }
    public function hasReturnInspections(): bool { return $this->has('return_inspections'); }
    /** @return list<ReturnReceiptInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_receipts is omitted; use hasReturnReceipts() or valueOrDefault().
     */
    public function getReturnReceipts(): array { return $this->get('return_receipts'); }
    public function hasReturnReceipts(): bool { return $this->has('return_receipts'); }
    /** @return list<ReturnResolutionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_resolutions is omitted; use hasReturnResolutions() or valueOrDefault().
     */
    public function getReturnResolutions(): array { return $this->get('return_resolutions'); }
    public function hasReturnResolutions(): bool { return $this->has('return_resolutions'); }
}
