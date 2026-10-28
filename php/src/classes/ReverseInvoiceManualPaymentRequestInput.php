<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read string $reversal_note
 * @property-read string|\DateTimeInterface $reversed_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ReverseInvoiceManualPaymentRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'reversal_note'?: string, 'reversed_at'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReverseInvoiceManualPaymentRequestInput')); }
    /** Shape $ (Value): integer string. Expected version of the invoice. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 4096.
     * @return string
     * @throws SdkError When reversal_note is omitted; use hasReversalNote() or valueOrDefault().
     */
    public function getReversalNote(): string { return $this->get('reversal_note'); }
    public function hasReversalNote(): bool { return $this->has('reversal_note'); }
    /** Shape $ (Value): string. When the payment was reversed. Defaults to now and must not precede received_at. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When reversed_at is omitted; use hasReversedAt() or valueOrDefault().
     */
    public function getReversedAt(): string|\DateTimeInterface { return $this->get('reversed_at'); }
    public function hasReversedAt(): bool { return $this->has('reversed_at'); }
}
