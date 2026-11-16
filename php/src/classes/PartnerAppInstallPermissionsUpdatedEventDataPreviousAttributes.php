<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read list<PartnerEnvironmentGrantPreviousAttributes>|null $environment_grants
 * @property-read string|null $installed_by_user_id
 * @property-read string|null $merchant_id
 * @property-read string|null $merchant_signup_id
 * @property-read string|null $partner_app_id
 * @property-read string|null $partner_app_install_id
 * @property-read string|null $partner_app_name
 * @property-read string|null $revoked_at
 * @property-read string|null $revoked_by
 * @property-read string|null $revoked_by_user_id
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'environment_grants'?: mixed, 'installed_by_user_id'?: mixed, 'merchant_id'?: mixed, 'merchant_signup_id'?: mixed, 'partner_app_id'?: mixed, 'partner_app_install_id'?: mixed, 'partner_app_name'?: mixed, 'revoked_at'?: mixed, 'revoked_by'?: mixed, 'revoked_by_user_id'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none. anyOf[1] (Value): Array of {@see PartnerEnvironmentGrantPreviousAttributes}. The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none. anyOf[1][] (Value): {@see PartnerEnvironmentGrantPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<PartnerEnvironmentGrantPreviousAttributes>|null
     */
    public function getEnvironmentGrants(): array|null { return $this->get('environment_grants'); }
    public function hasEnvironmentGrants(): bool { return $this->has('environment_grants'); }
    /** ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. anyOf[1] (Value): string. ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInstalledByUserId(): string|null { return $this->get('installed_by_user_id'); }
    public function hasInstalledByUserId(): bool { return $this->has('installed_by_user_id'); }
    /** ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the merchant this resource belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. anyOf[1] (Value): string. The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantSignupId(): string|null { return $this->get('merchant_signup_id'); }
    public function hasMerchantSignupId(): bool { return $this->has('merchant_signup_id'); }
    /** ID of the partner app the merchant installed. anyOf[1] (Value): string. ID of the partner app the merchant installed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppId(): string|null { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Unique identifier for this partner app install, prefixed `pinst_`. anyOf[1] (Value): string. Unique identifier for this partner app install, prefixed `pinst_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppInstallId(): string|null { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The app’s current name. anyOf[1] (Value): string. The app’s current name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppName(): string|null { return $this->get('partner_app_name'); }
    public function hasPartnerAppName(): bool { return $this->has('partner_app_name'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRevokedAt(): string|null { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again. Value enum: "merchant", "partner_app". anyOf[1] (Value): string. Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again. Value enum: "merchant", "partner_app". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRevokedBy(): string|null { return $this->get('revoked_by'); }
    public function hasRevokedBy(): bool { return $this->has('revoked_by'); }
    /** ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. anyOf[1] (Value): string. ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRevokedByUserId(): string|null { return $this->get('revoked_by_user_id'); }
    public function hasRevokedByUserId(): bool { return $this->has('revoked_by_user_id'); }
    /** Where the install is in its lifecycle. Value enum: "pending_exchange", "active", "revoked". anyOf[1] (Value): string. Where the install is in its lifecycle. Value enum: "pending_exchange", "active", "revoked". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. [] enum: "revoke". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. [] enum: "revoke". anyOf[1][] (Value): string.  Value enum: "revoke". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
