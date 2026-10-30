<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnResource $return
 * @property-read list<ReturnDisposition> $return_dispositions
 * @property-read list<ReturnInspection> $return_inspections
 * @property-read list<ReturnReceipt> $return_receipts
 * @property-read list<ReturnResolution> $return_resolutions
 * Presence-aware response; omitted optional fields return null. */
final class ReturnProcessResult extends Model {
    /** @param array{'return': mixed, 'return_dispositions': list<mixed>, 'return_inspections': list<mixed>, 'return_receipts': list<mixed>, 'return_resolutions': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnProcessResult')); }
    /** A request to send purchased items back.
     * @return ReturnResource
     */
    public function getReturn(): ReturnResource { return $this->get('return'); }
    public function hasReturn(): bool { return $this->has('return'); }
    /**  [] (Value): {@see ReturnDisposition}. A decision about how returned merchandise will be handled.
     * @return list<ReturnDisposition>
     */
    public function getReturnDispositions(): array { return $this->get('return_dispositions'); }
    public function hasReturnDispositions(): bool { return $this->has('return_dispositions'); }
    /**  [] (Value): {@see ReturnInspection}. An assessment of the condition of returned items.
     * @return list<ReturnInspection>
     */
    public function getReturnInspections(): array { return $this->get('return_inspections'); }
    public function hasReturnInspections(): bool { return $this->has('return_inspections'); }
    /**  [] (Value): {@see ReturnReceipt}. A record of returned items arriving at a location.
     * @return list<ReturnReceipt>
     */
    public function getReturnReceipts(): array { return $this->get('return_receipts'); }
    public function hasReturnReceipts(): bool { return $this->has('return_receipts'); }
    /**  [] (Value): {@see ReturnResolution}. The refund, exchange, or other outcome of a return.
     * @return list<ReturnResolution>
     */
    public function getReturnResolutions(): array { return $this->get('return_resolutions'); }
    public function hasReturnResolutions(): bool { return $this->has('return_resolutions'); }
}
