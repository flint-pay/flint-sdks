<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $enabled_payment_options
 * @property-read string $external_reference_id
 * @property-read string $payment_note
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutPaymentConfig extends Model {
    /** @param array{'enabled_payment_options'?: list<string>, 'external_reference_id'?: string, 'payment_note'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPaymentConfig')); }
    /** @return list<string>
     * @throws SdkError When enabled_payment_options is omitted; use hasEnabledPaymentOptions() or valueOrDefault().
     */
    public function getEnabledPaymentOptions(): array { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When payment_note is omitted; use hasPaymentNote() or valueOrDefault().
     */
    public function getPaymentNote(): string { return $this->get('payment_note'); }
    public function hasPaymentNote(): bool { return $this->has('payment_note'); }
}
