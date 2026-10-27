<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read OnboardingProfileRequestInput|array<array-key, mixed>|\stdClass $profile
 * @property-read list<string> $requested_capabilities
 * @property-read string $sandbox_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingAdvanceRequestInput extends Model {
    /** @param array{'country'?: string, 'profile'?: OnboardingProfileRequestInput|array<array-key, mixed>|\stdClass, 'requested_capabilities'?: list<string>, 'sandbox_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingAdvanceRequestInput')); }
    /** Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): {@see OnboardingProfileRequestInput}. Contact and website details you submit for a merchant during onboarding. Send null to clear a field.
     * @return OnboardingProfileRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When profile is omitted; use hasProfile() or valueOrDefault().
     */
    public function getProfile(): mixed { return $this->get('profile'); }
    public function hasProfile(): bool { return $this->has('profile'); }
    /** Shape $ (Value): Array of string. Exact initial Flint capability set. Include accept_card_payments and receive_payouts together. Optionally include accept_ach_debit_payments, or omit the field to use the card and payout default set. [] enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". Shape $.oneOf[1] (Value): Array of string. minItems: 2. maxItems: 2. uniqueItems: true. [] enum: "accept_card_payments", "receive_payouts". Shape $.oneOf[1][] (Value): string.  Value enum: "accept_card_payments", "receive_payouts". Shape $.oneOf[2] (Value): Array of string. minItems: 3. maxItems: 3. uniqueItems: true. [] enum: "accept_ach_debit_payments", "accept_card_payments", "receive_payouts". Shape $.oneOf[2][] (Value): string.  Value enum: "accept_ach_debit_payments", "accept_card_payments", "receive_payouts".
     * @return list<string>
     * @throws SdkError When requested_capabilities is omitted; use hasRequestedCapabilities() or valueOrDefault().
     */
    public function getRequestedCapabilities(): mixed { return $this->get('requested_capabilities'); }
    public function hasRequestedCapabilities(): bool { return $this->has('requested_capabilities'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
}
