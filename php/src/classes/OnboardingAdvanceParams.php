<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read OnboardingProfileRequestInput|array<array-key, mixed>|\stdClass $profile
 * @property-read list<string> $requested_capabilities
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingAdvanceParams extends Model {
    /** @param array{'country'?: string, 'profile'?: OnboardingProfileRequestInput|array<array-key, mixed>|\stdClass, 'requested_capabilities'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingAdvanceParams')); }
    /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Contact and website details you submit for a merchant during onboarding. Send null to clear a field.
     * @return OnboardingProfileRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When profile is omitted; use hasProfile() or valueOrDefault().
     */
    public function getProfile(): mixed { return $this->get('profile'); }
    public function hasProfile(): bool { return $this->has('profile'); }
    /** Exact initial Flint capability set. Include accept_card_payments and receive_payouts together. Optionally include accept_ach_debit_payments, or omit the field to use the card and payout default set. minItems: 2. maxItems: 3. uniqueItems: true. [] enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". [] (Value): string.  Value enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments".
     * @return list<string>
     * @throws SdkError When requested_capabilities is omitted; use hasRequestedCapabilities() or valueOrDefault().
     */
    public function getRequestedCapabilities(): array { return $this->get('requested_capabilities'); }
    public function hasRequestedCapabilities(): bool { return $this->has('requested_capabilities'); }
}
