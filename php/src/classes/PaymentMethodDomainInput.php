<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $domain_name
 * @property-read string $payment_method_domain_id
 * @property-read list<PaymentMethodDomainPaymentOptionStatusInput|array<array-key, mixed>|\stdClass> $payment_option_statuses
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $validation_status
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentMethodDomainInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'domain_name': string, 'payment_method_domain_id': string, 'payment_option_statuses': list<PaymentMethodDomainPaymentOptionStatusInput|array<array-key, mixed>|\stdClass>, 'status': string, 'updated_at': string|\DateTimeInterface, 'validation_status': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodDomainInput')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The registered hostname, trimmed and lowercased. ASCII only, at least two labels, each up to 63 characters, 253 characters in total; no scheme, path, port, IP address, or wildcard.
     * @return string
     * @throws SdkError When domain_name is omitted; use hasDomainName() or valueOrDefault().
     */
    public function getDomainName(): string { return $this->get('domain_name'); }
    public function hasDomainName(): bool { return $this->has('domain_name'); }
    /** Flint payment method domain ID, starting with pmdom_.
     * @return string
     * @throws SdkError When payment_method_domain_id is omitted; use hasPaymentMethodDomainId() or valueOrDefault().
     */
    public function getPaymentMethodDomainId(): string { return $this->get('payment_method_domain_id'); }
    public function hasPaymentMethodDomainId(): bool { return $this->has('payment_method_domain_id'); }
    /** Availability and validation status of each payment option on this domain. [] (Value): {@see PaymentMethodDomainPaymentOptionStatusInput}. Whether a wallet payment option, Apple Pay or Google Pay, is active, inactive, or unavailable for a payment method domain.
     * @return list<PaymentMethodDomainPaymentOptionStatusInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When payment_option_statuses is omitted; use hasPaymentOptionStatuses() or valueOrDefault().
     */
    public function getPaymentOptionStatuses(): array { return $this->get('payment_option_statuses'); }
    public function hasPaymentOptionStatuses(): bool { return $this->has('payment_option_statuses'); }
    /** Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Value enum: "active", "action_required", "unavailable".
     * @return string
     * @throws SdkError When validation_status is omitted; use hasValidationStatus() or valueOrDefault().
     */
    public function getValidationStatus(): string { return $this->get('validation_status'); }
    public function hasValidationStatus(): bool { return $this->has('validation_status'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
