<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read CreditNoteRefundRequestInput|array<array-key, mixed>|\stdClass $refund
 * Presence-aware input; omitted fields throw when accessed. */
final class IssueCreditNoteRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'refund'?: CreditNoteRefundRequestInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IssueCreditNoteRequestInput')); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return CreditNoteRefundRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refund is omitted; use hasRefund() or valueOrDefault().
     */
    public function getRefund(): mixed { return $this->get('refund'); }
    public function hasRefund(): bool { return $this->has('refund'); }
}
