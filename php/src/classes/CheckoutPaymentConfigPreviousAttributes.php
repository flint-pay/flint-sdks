<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $enabled_payment_options
 * @property-read string|null $payment_note
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutPaymentConfigPreviousAttributes extends Model {
    /** @param array{'enabled_payment_options'?: mixed, 'payment_note'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPaymentConfigPreviousAttributes')); }
    /** Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[1] (Value): Array of string. Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[1][] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getEnabledPaymentOptions(): array|null { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** A note shown to the buyer with the payment options. anyOf[1] (Value): string. A note shown to the buyer with the payment options. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentNote(): string|null { return $this->get('payment_note'); }
    public function hasPaymentNote(): bool { return $this->has('payment_note'); }
}
