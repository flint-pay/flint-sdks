<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_verification_id
 * @property-read array{'code': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerVerificationsConfirmInput extends Model {
    /** @param array{'customer_verification_id': string, 'body': array{'code': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerVerificationsConfirmInput')); }
    /** Flint customer verification ID. Example: "cver_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_verification_id is omitted; use hasCustomerVerificationId() or valueOrDefault().
     */
    public function getCustomerVerificationId(): string { return $this->get('customer_verification_id'); }
    public function hasCustomerVerificationId(): bool { return $this->has('customer_verification_id'); }
    /** The request body for: Confirm a customer email verification.
     * @return array{'code': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
