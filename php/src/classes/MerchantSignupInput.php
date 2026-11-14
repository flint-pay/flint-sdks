<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $business_name
 * @property-read string|\DateTimeInterface $canceled_at
 * @property-read string|\DateTimeInterface $code_expires_at
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $external_reference_id
 * @property-read string $merchant_id
 * @property-read string $merchant_signup_id
 * @property-read MerchantSignupTermsInput|array<array-key, mixed>|\stdClass $merchant_terms
 * @property-read list<string> $modes
 * @property-read MerchantSignupOwnerInput|array<array-key, mixed>|\stdClass $owner
 * @property-read string $partner_app_id
 * @property-read string $partner_app_install_id
 * @property-read PlatformFeeCapInput|array<array-key, mixed>|\stdClass $platform_fee_cap
 * @property-read list<MerchantSignupPermissionInput|array<array-key, mixed>|\stdClass> $requested_permissions
 * @property-read string $sandbox_initial_onboarding
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read MerchantSignupTermsAcceptanceInput|array<array-key, mixed>|\stdClass $terms_acceptance
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantSignupInput extends Model {
    /** @param array{'business_name'?: string, 'canceled_at'?: string|\DateTimeInterface, 'code_expires_at'?: string|\DateTimeInterface, 'completed_at'?: string|\DateTimeInterface, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface, 'external_reference_id'?: string, 'merchant_id'?: string, 'merchant_signup_id': string, 'merchant_terms': MerchantSignupTermsInput|array<array-key, mixed>|\stdClass, 'modes': list<string>, 'owner': MerchantSignupOwnerInput|array<array-key, mixed>|\stdClass, 'partner_app_id': string, 'partner_app_install_id'?: string, 'platform_fee_cap'?: PlatformFeeCapInput|array<array-key, mixed>|\stdClass, 'requested_permissions': list<MerchantSignupPermissionInput|array<array-key, mixed>|\stdClass>, 'sandbox_initial_onboarding': string, 'status': string, 'supported_actions': list<string>, 'terms_acceptance'?: MerchantSignupTermsAcceptanceInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupInput')); }
    /** The new merchant's display name until onboarding sets its legal name. Absent when the request didn't send one: Flint then names the merchant from the owner's email.
     * @return string
     * @throws SdkError When business_name is omitted; use hasBusinessName() or valueOrDefault().
     */
    public function getBusinessName(): string { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** When the signup was canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string|\DateTimeInterface { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** When the current code expires, present while the signup is `pending` and its code still works. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When code_expires_at is omitted; use hasCodeExpiresAt() or valueOrDefault().
     */
    public function getCodeExpiresAt(): string|\DateTimeInterface { return $this->get('code_expires_at'); }
    public function hasCodeExpiresAt(): bool { return $this->has('code_expires_at'); }
    /** When the signup completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** When the signup was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When a `pending` signup expires: 24 hours after it was created. A signup Flint is completing never expires. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Your identifier for this business, as you sent it. Absent when you didn't send one. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** The merchant the signup created, present once it is `completed`. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Unique identifier for the merchant signup. Example: "msu_01KEZF7C00SRGYRMBPKRKW8V9J".
     * @return string
     * @throws SdkError When merchant_signup_id is omitted; use hasMerchantSignupId() or valueOrDefault().
     */
    public function getMerchantSignupId(): string { return $this->get('merchant_signup_id'); }
    public function hasMerchantSignupId(): bool { return $this->has('merchant_signup_id'); }
    /** Flint's merchant terms the owner must accept. Flint's merchant terms the owner accepts by entering the code, fixed when the signup was created.
     * @return MerchantSignupTermsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_terms is omitted; use hasMerchantTerms() or valueOrDefault().
     */
    public function getMerchantTerms(): mixed { return $this->get('merchant_terms'); }
    public function hasMerchantTerms(): bool { return $this->has('merchant_terms'); }
    /** The modes the signup installs the app in, one environment grant each, `test` first. [] enum: "test", "live". [] (Value): string.  Value enum: "test", "live".
     * @return list<string>
     * @throws SdkError When modes is omitted; use hasModes() or valueOrDefault().
     */
    public function getModes(): array { return $this->get('modes'); }
    public function hasModes(): bool { return $this->has('modes'); }
    /** The owner the code went to. The person who will own the new merchant, as the platform supplied them.
     * @return MerchantSignupOwnerInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): mixed { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** The partner app the signup installs on the new merchant. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The install the signup created, present once it is `completed`. Its `merchant_signup_id` names this signup. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     * @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The app's platform fee cap the code email showed, frozen at create. Absent when the app has none. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee.
     * @return PlatformFeeCapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform_fee_cap is omitted; use hasPlatformFeeCap() or valueOrDefault().
     */
    public function getPlatformFeeCap(): mixed { return $this->get('platform_fee_cap'); }
    public function hasPlatformFeeCap(): bool { return $this->has('platform_fee_cap'); }
    /** The permissions the code email asked the owner to approve, frozen at create: the requested ones, or the app's defaults, plus every required permission, in manifest order. At verify, each grant gets them narrowed to what the app's manifest still offers. [] (Value): {@see MerchantSignupPermissionInput}. A permission the code email asked the owner to approve, as the app's manifest stated it when the signup was created.
     * @return list<MerchantSignupPermissionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When requested_permissions is omitted; use hasRequestedPermissions() or valueOrDefault().
     */
    public function getRequestedPermissions(): array { return $this->get('requested_permissions'); }
    public function hasRequestedPermissions(): bool { return $this->has('requested_permissions'); }
    /** The onboarding state of the new merchant's default sandbox, which the test grant points at. Value enum: "complete", "not_started".
     * @return string
     * @throws SdkError When sandbox_initial_onboarding is omitted; use hasSandboxInitialOnboarding() or valueOrDefault().
     */
    public function getSandboxInitialOnboarding(): string { return $this->get('sandbox_initial_onboarding'); }
    public function hasSandboxInitialOnboarding(): bool { return $this->has('sandbox_initial_onboarding'); }
    /** Where the signup is. `completed`, `expired` and `canceled` are final. `expired` follows from `expires_at`, so it doesn't advance `version`. Value enum: "pending", "completed", "expired", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now: `verify` and `cancel` while `pending`, only `verify` while Flint is completing it after verify, `[]` otherwise. resend-code and rotate-authorization-codes are operations, not lifecycle actions, so they are never listed. [] enum: "cancel", "verify". [] (Value): string.  Value enum: "cancel", "verify".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** The owner's acceptance, present once the signup is `completed`. The owner's acceptance of Flint's merchant terms, recorded at verify. Flint also stores the IP address and user agent you reported; they aren't returned.
     * @return MerchantSignupTermsAcceptanceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When terms_acceptance is omitted; use hasTermsAcceptance() or valueOrDefault().
     */
    public function getTermsAcceptance(): mixed { return $this->get('terms_acceptance'); }
    public function hasTermsAcceptance(): bool { return $this->has('terms_acceptance'); }
    /** When the signup last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
