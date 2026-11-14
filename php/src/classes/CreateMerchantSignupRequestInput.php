<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $business_name
 * @property-read string $code_challenge
 * @property-read string $code_challenge_method
 * @property-read string $external_reference_id
 * @property-read list<string> $modes
 * @property-read MerchantSignupOwnerRequestInput|array<array-key, mixed>|\stdClass $owner
 * @property-read string $partner_app_id
 * @property-read list<string> $requested_permission_ids
 * @property-read string $sandbox_initial_onboarding
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateMerchantSignupRequestInput extends Model {
    /** @param array{'business_name'?: string, 'code_challenge': string, 'code_challenge_method': string, 'external_reference_id'?: string, 'modes': list<string>, 'owner': MerchantSignupOwnerRequestInput|array<array-key, mixed>|\stdClass, 'partner_app_id': string, 'requested_permission_ids'?: list<string>, 'sandbox_initial_onboarding'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateMerchantSignupRequestInput')); }
    /** The new merchant's display name until onboarding sets its legal name, 1 to 100 characters, without links or email addresses: the code email shows it. Without it, Flint names the merchant from the owner's email. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When business_name is omitted; use hasBusinessName() or valueOrDefault().
     */
    public function getBusinessName(): string { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** The PKCE S256 challenge: base64url SHA-256 of a verifier you keep. The authorization codes verify returns are bound to it. minLength: 43. maxLength: 43. pattern: ^[A-Za-z0-9_-]{43}$.
     * @return string
     * @throws SdkError When code_challenge is omitted; use hasCodeChallenge() or valueOrDefault().
     */
    public function getCodeChallenge(): string { return $this->get('code_challenge'); }
    public function hasCodeChallenge(): bool { return $this->has('code_challenge'); }
    /** Must be `S256`. Value enum: "S256".
     * @return string
     * @throws SdkError When code_challenge_method is omitted; use hasCodeChallengeMethod() or valueOrDefault().
     */
    public function getCodeChallengeMethod(): string { return $this->get('code_challenge_method'); }
    public function hasCodeChallengeMethod(): bool { return $this->has('code_challenge_method'); }
    /** Your identifier for this business, such as your account ID. List signups by it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** The modes to install the app in. `live` needs the app's live `create_merchants` capability. Until it is active, a signup may install only in `test`, and only for an owner on your merchant's team (plus-addresses included). minItems: 1. maxItems: 2. uniqueItems: true. [] enum: "test", "live". [] (Value): string.  Value enum: "test", "live".
     * @return list<string>
     * @throws SdkError When modes is omitted; use hasModes() or valueOrDefault().
     */
    public function getModes(): array { return $this->get('modes'); }
    public function hasModes(): bool { return $this->has('modes'); }
    /** The owner Flint emails the code to. The person who will own the new merchant. Flint emails the code to this address.
     * @return MerchantSignupOwnerRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): mixed { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** Your partner app to install on the new merchant. It must be active and have a `merchant_action_url`. minLength: 1. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Optional manifest permissions to request besides the required ones. Defaults to the app's `default_requested_permissions`. Send `[]` to request only the required permissions. uniqueItems: true. [] (Value): string. minLength: 1. Example: "manage_orders".
     * @return list<string>
     * @throws SdkError When requested_permission_ids is omitted; use hasRequestedPermissionIds() or valueOrDefault().
     */
    public function getRequestedPermissionIds(): array { return $this->get('requested_permission_ids'); }
    public function hasRequestedPermissionIds(): bool { return $this->has('requested_permission_ids'); }
    /** The onboarding state of the new merchant's default sandbox, which the test grant points at. Send `not_started` to rehearse verification in test mode. Default: "complete". Value enum: "complete", "not_started".
     * @return string
     * @throws SdkError When sandbox_initial_onboarding is omitted; use hasSandboxInitialOnboarding() or valueOrDefault().
     */
    public function getSandboxInitialOnboarding(): string { return $this->get('sandbox_initial_onboarding'); }
    public function hasSandboxInitialOnboarding(): bool { return $this->has('sandbox_initial_onboarding'); }
}
