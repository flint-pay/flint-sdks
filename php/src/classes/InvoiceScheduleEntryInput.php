<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceScheduleAmountSpecificationInput|array<array-key, mixed>|\stdClass $amount_specification
 * @property-read InvoiceScheduleDueInput|array<array-key, mixed>|\stdClass $due
 * @property-read string $kind
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceScheduleEntryInput extends Model {
    /** @param array{'amount_specification': InvoiceScheduleAmountSpecificationInput|array<array-key, mixed>|\stdClass, 'due': InvoiceScheduleDueInput|array<array-key, mixed>|\stdClass, 'kind': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntryInput')); }
    /** @return InvoiceScheduleAmountSpecificationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_specification is omitted; use hasAmountSpecification() or valueOrDefault().
     */
    public function getAmountSpecification(): mixed { return $this->get('amount_specification'); }
    public function hasAmountSpecification(): bool { return $this->has('amount_specification'); }
    /** @return InvoiceScheduleDueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When due is omitted; use hasDue() or valueOrDefault().
     */
    public function getDue(): mixed { return $this->get('due'); }
    public function hasDue(): bool { return $this->has('due'); }
    /** @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
