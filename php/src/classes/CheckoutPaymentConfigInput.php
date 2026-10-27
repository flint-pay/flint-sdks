<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $enabled_payment_options
 * @property-read string $payment_note
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutPaymentConfigInput extends Model {
    /** @param array{'enabled_payment_options'?: list<string>, 'payment_note'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPaymentConfigInput')); }
    /** Shape $ (Value): Array of string.  [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return list<string>
     * @throws SdkError When enabled_payment_options is omitted; use hasEnabledPaymentOptions() or valueOrDefault().
     */
    public function getEnabledPaymentOptions(): array { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_note is omitted; use hasPaymentNote() or valueOrDefault().
     */
    public function getPaymentNote(): string { return $this->get('payment_note'); }
    public function hasPaymentNote(): bool { return $this->has('payment_note'); }
}
