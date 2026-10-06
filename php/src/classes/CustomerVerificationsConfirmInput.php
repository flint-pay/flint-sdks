<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_verification_id
 * @property-read array{'code': string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerVerificationsConfirmInput extends Model {
    /** @param array{'customer_verification_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'code': string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerVerificationsConfirmInput')); }
    /** @return string
     * @throws SdkError When customer_verification_id is omitted; use hasCustomerVerificationId() or valueOrDefault().
     */
    public function getCustomerVerificationId(): string { return $this->get('customer_verification_id'); }
    public function hasCustomerVerificationId(): bool { return $this->has('customer_verification_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'code': string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
