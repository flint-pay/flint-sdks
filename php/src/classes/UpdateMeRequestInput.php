<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $default_payment_method_id
 * @property-read string $expected_version
 * @property-read string|null $name
 * @property-read string|null $phone
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateMeRequestInput extends Model {
    /** @param array{'default_payment_method_id'?: string|null, 'expected_version'?: string, 'name'?: string|null, 'phone'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateMeRequestInput')); }
    /** Shape $ (Value): string or null. The active off_session payment method to use by default. Omit to leave unchanged; null clears it. minLength: 1.
     * @return string|null
     * @throws SdkError When default_payment_method_id is omitted; use hasDefaultPaymentMethodId() or valueOrDefault().
     */
    public function getDefaultPaymentMethodId(): string|null { return $this->get('default_payment_method_id'); }
    public function hasDefaultPaymentMethodId(): bool { return $this->has('default_payment_method_id'); }
    /** Shape $ (Value): integer string. The customer version you read. A different version refuses the update. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string or null. E.164 phone number. Send null to remove it. minLength: 1.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
}
