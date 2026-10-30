<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $default_payment_method_id
 * @property-read int $expected_version
 * @property-read string|null $name
 * @property-read string|null $phone
 * Presence-aware input; omitted fields throw when accessed. */
final class MeUpdateParams extends Model {
    /** @param array{'default_payment_method_id'?: string|null, 'expected_version'?: int, 'name'?: string|null, 'phone'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeUpdateParams')); }
    /** The active off_session payment method to use by default. Omit to leave unchanged; null clears it. minLength: 1. Example: "pm_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string|null
     * @throws SdkError When default_payment_method_id is omitted; use hasDefaultPaymentMethodId() or valueOrDefault().
     */
    public function getDefaultPaymentMethodId(): string|null { return $this->get('default_payment_method_id'); }
    public function hasDefaultPaymentMethodId(): bool { return $this->has('default_payment_method_id'); }
    /** The customer version you read. A different version refuses the update. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** E.164 phone number. Send null to remove it. minLength: 1.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
}
