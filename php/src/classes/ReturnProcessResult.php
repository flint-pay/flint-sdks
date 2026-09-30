<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $idempotency_key
 * @property-read ReturnResource $return
 * @property-read list<ReturnDisposition> $return_dispositions
 * @property-read list<ReturnInspection> $return_inspections
 * @property-read list<ReturnReceipt> $return_receipts
 * @property-read list<ReturnResolution> $return_resolutions
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnProcessResult extends Model {
    /** @param array{'idempotency_key': string, 'return': mixed, 'return_dispositions': list<mixed>, 'return_inspections': list<mixed>, 'return_receipts': list<mixed>, 'return_resolutions': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnProcessResult')); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return ReturnResource
     * @throws SdkError When return is omitted; use hasReturn() or valueOrDefault().
     */
    public function getReturn(): ReturnResource { return $this->get('return'); }
    public function hasReturn(): bool { return $this->has('return'); }
    /** @return list<ReturnDisposition>
     * @throws SdkError When return_dispositions is omitted; use hasReturnDispositions() or valueOrDefault().
     */
    public function getReturnDispositions(): array { return $this->get('return_dispositions'); }
    public function hasReturnDispositions(): bool { return $this->has('return_dispositions'); }
    /** @return list<ReturnInspection>
     * @throws SdkError When return_inspections is omitted; use hasReturnInspections() or valueOrDefault().
     */
    public function getReturnInspections(): array { return $this->get('return_inspections'); }
    public function hasReturnInspections(): bool { return $this->has('return_inspections'); }
    /** @return list<ReturnReceipt>
     * @throws SdkError When return_receipts is omitted; use hasReturnReceipts() or valueOrDefault().
     */
    public function getReturnReceipts(): array { return $this->get('return_receipts'); }
    public function hasReturnReceipts(): bool { return $this->has('return_receipts'); }
    /** @return list<ReturnResolution>
     * @throws SdkError When return_resolutions is omitted; use hasReturnResolutions() or valueOrDefault().
     */
    public function getReturnResolutions(): array { return $this->get('return_resolutions'); }
    public function hasReturnResolutions(): bool { return $this->has('return_resolutions'); }
}
