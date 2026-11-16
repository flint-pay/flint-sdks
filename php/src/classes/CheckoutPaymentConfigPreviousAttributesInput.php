<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $enabled_payment_options
 * @property-read string|null $payment_note
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutPaymentConfigPreviousAttributesInput extends Model {
    /** @param array{'enabled_payment_options'?: list<string>|null, 'payment_note'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPaymentConfigPreviousAttributesInput')); }
    /** Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[1] (Value): Array of string. Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[1][] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When enabled_payment_options is omitted; use hasEnabledPaymentOptions() or valueOrDefault().
     */
    public function getEnabledPaymentOptions(): mixed { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** A note shown to the buyer with the payment options. anyOf[1] (Value): string. A note shown to the buyer with the payment options. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_note is omitted; use hasPaymentNote() or valueOrDefault().
     */
    public function getPaymentNote(): mixed { return $this->get('payment_note'); }
    public function hasPaymentNote(): bool { return $this->has('payment_note'); }
}
