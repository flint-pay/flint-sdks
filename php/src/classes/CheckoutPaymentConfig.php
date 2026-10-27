<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<string> $enabled_payment_options
 * @property-read ?string $payment_note
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutPaymentConfig extends Model {
    /** @param array{'enabled_payment_options'?: list<string>, 'payment_note'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPaymentConfig')); }
    /** Shape $ (Value): Array of string.  [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return ?list<string>
     */
    public function getEnabledPaymentOptions(): ?array { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPaymentNote(): ?string { return $this->get('payment_note'); }
    public function hasPaymentNote(): bool { return $this->has('payment_note'); }
}
