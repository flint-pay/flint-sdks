<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read MerchantSignupTermsAcceptanceRequestInput|array<array-key, mixed>|\stdClass $terms_acceptance
 * @property-read string $verification_code
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantSignupsVerifyParams extends Model {
    /** @param array{'expected_version'?: int, 'terms_acceptance': MerchantSignupTermsAcceptanceRequestInput|array<array-key, mixed>|\stdClass, 'verification_code': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupsVerifyParams')); }
    /** Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** The owner's acceptance of Flint's merchant terms. Your statement that the owner ticked Flint's terms checkbox in your form, with Flint's wording. The platform terms oblige you to show it and to report real values.
     * @return MerchantSignupTermsAcceptanceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When terms_acceptance is omitted; use hasTermsAcceptance() or valueOrDefault().
     */
    public function getTermsAcceptance(): mixed { return $this->get('terms_acceptance'); }
    public function hasTermsAcceptance(): bool { return $this->has('terms_acceptance'); }
    /** The 8-character code Flint emailed the owner, such as `K7QM-4TXD`, with or without the hyphen, in either case. Request logs redact it. minLength: 8. maxLength: 9.
     * @return string
     * @throws SdkError When verification_code is omitted; use hasVerificationCode() or valueOrDefault().
     */
    public function getVerificationCode(): string { return $this->get('verification_code'); }
    public function hasVerificationCode(): bool { return $this->has('verification_code'); }
}
