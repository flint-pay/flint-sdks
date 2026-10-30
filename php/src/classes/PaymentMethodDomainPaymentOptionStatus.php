<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_option
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class PaymentMethodDomainPaymentOptionStatus extends Model {
    /** @param array{'payment_option': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodDomainPaymentOptionStatus')); }
    /** Value enum: "apple_pay", "google_pay".
     * @return string
     */
    public function getPaymentOption(): string { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
    /** Value enum: "active", "inactive", "unavailable".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
