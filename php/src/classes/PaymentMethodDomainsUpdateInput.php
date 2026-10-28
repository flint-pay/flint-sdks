<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_method_domain_id
 * @property-read array{'expected_version'?: string, 'status': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentMethodDomainsUpdateInput extends Model {
    /** @param array{'payment_method_domain_id': string, 'Idempotency-Key'?: string, 'body': array{'expected_version'?: string, 'status': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodDomainsUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_method_domain_id is omitted; use hasPaymentMethodDomainId() or valueOrDefault().
     */
    public function getPaymentMethodDomainId(): string { return $this->get('payment_method_domain_id'); }
    public function hasPaymentMethodDomainId(): bool { return $this->has('payment_method_domain_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update payment method domain.
     * @return array{'expected_version'?: string, 'status': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
