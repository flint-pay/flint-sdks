<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $domain_name
 * @property-read string $payment_method_domain_id
 * @property-read list<PaymentMethodDomainPaymentOptionStatus> $payment_option_statuses
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $validation_status
 * Presence-aware response; omitted optional fields return null. */
final class PaymentMethodDomain extends Model {
    /** @param array{'created_at': string, 'domain_name': string, 'payment_method_domain_id': string, 'payment_option_statuses': list<mixed>, 'status': string, 'updated_at': string, 'validation_status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodDomain')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDomainName(): string { return $this->get('domain_name'); }
    public function hasDomainName(): bool { return $this->has('domain_name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPaymentMethodDomainId(): string { return $this->get('payment_method_domain_id'); }
    public function hasPaymentMethodDomainId(): bool { return $this->has('payment_method_domain_id'); }
    /** Shape $ (Value): Array of {@see PaymentMethodDomainPaymentOptionStatus}. Availability and validation status of each payment option on this domain. Shape $[] (Value): {@see PaymentMethodDomainPaymentOptionStatus}. Whether a wallet payment option, Apple Pay or Google Pay, is active, inactive, or unavailable for a payment method domain.
     * @return list<PaymentMethodDomainPaymentOptionStatus>
     */
    public function getPaymentOptionStatuses(): array { return $this->get('payment_option_statuses'); }
    public function hasPaymentOptionStatuses(): bool { return $this->has('payment_option_statuses'); }
    /** Shape $ (Value): string.  Value enum: "active", "inactive".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string.  Value enum: "active", "action_required", "unavailable".
     * @return string
     */
    public function getValidationStatus(): string { return $this->get('validation_status'); }
    public function hasValidationStatus(): bool { return $this->has('validation_status'); }
}
