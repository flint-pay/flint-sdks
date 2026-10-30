<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnResourceInput|array<array-key, mixed>|\stdClass $return
 * @property-read list<ReturnDispositionInput|array<array-key, mixed>|\stdClass> $return_dispositions
 * @property-read list<ReturnInspectionInput|array<array-key, mixed>|\stdClass> $return_inspections
 * @property-read list<ReturnReceiptInput|array<array-key, mixed>|\stdClass> $return_receipts
 * @property-read list<ReturnResolutionInput|array<array-key, mixed>|\stdClass> $return_resolutions
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnProcessResultInput extends Model {
    /** @param array{'return': ReturnResourceInput|array<array-key, mixed>|\stdClass, 'return_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'return_inspections': list<ReturnInspectionInput|array<array-key, mixed>|\stdClass>, 'return_receipts': list<ReturnReceiptInput|array<array-key, mixed>|\stdClass>, 'return_resolutions': list<ReturnResolutionInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnProcessResultInput')); }
    /** A request to send purchased items back.
     * @return ReturnResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When return is omitted; use hasReturn() or valueOrDefault().
     */
    public function getReturn(): mixed { return $this->get('return'); }
    public function hasReturn(): bool { return $this->has('return'); }
    /**  [] (Value): {@see ReturnDispositionInput}. A decision about how returned merchandise will be handled.
     * @return list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_dispositions is omitted; use hasReturnDispositions() or valueOrDefault().
     */
    public function getReturnDispositions(): array { return $this->get('return_dispositions'); }
    public function hasReturnDispositions(): bool { return $this->has('return_dispositions'); }
    /**  [] (Value): {@see ReturnInspectionInput}. An assessment of the condition of returned items.
     * @return list<ReturnInspectionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_inspections is omitted; use hasReturnInspections() or valueOrDefault().
     */
    public function getReturnInspections(): array { return $this->get('return_inspections'); }
    public function hasReturnInspections(): bool { return $this->has('return_inspections'); }
    /**  [] (Value): {@see ReturnReceiptInput}. A record of returned items arriving at a location.
     * @return list<ReturnReceiptInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_receipts is omitted; use hasReturnReceipts() or valueOrDefault().
     */
    public function getReturnReceipts(): array { return $this->get('return_receipts'); }
    public function hasReturnReceipts(): bool { return $this->has('return_receipts'); }
    /**  [] (Value): {@see ReturnResolutionInput}. The refund, exchange, or other outcome of a return.
     * @return list<ReturnResolutionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_resolutions is omitted; use hasReturnResolutions() or valueOrDefault().
     */
    public function getReturnResolutions(): array { return $this->get('return_resolutions'); }
    public function hasReturnResolutions(): bool { return $this->has('return_resolutions'); }
}
