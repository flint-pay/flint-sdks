<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $action_type
 * @property-read ReadinessMerchantAccountSessionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $merchant_account_session
 * @property-read string|null $owner
 * @property-read list<string>|null $required_fields
 * Presence-aware input; omitted fields throw when accessed. */
final class ReadinessActionPreviousAttributesInput extends Model {
    /** @param array{'action_type'?: string|null, 'merchant_account_session'?: ReadinessMerchantAccountSessionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'owner'?: string|null, 'required_fields'?: list<string>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadinessActionPreviousAttributesInput')); }
    /** The kind of step to take. Each value says what the step is and who carries it out. Value enum: "advance_onboarding", "create_merchant_account_session", "wait_for_review", "settle_flint_balance", "set_tax_category", "update_payment_settings", "contact_support", "other". anyOf[1] (Value): string. The kind of step to take. Each value says what the step is and who carries it out. Value enum: "advance_onboarding", "create_merchant_account_session", "wait_for_review", "settle_flint_balance", "set_tax_category", "update_payment_settings", "contact_support", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When action_type is omitted; use hasActionType() or valueOrDefault().
     */
    public function getActionType(): mixed { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** Request body for `POST /v1/merchant-account-sessions`, on a `create_merchant_account_session` action. Send it unchanged. anyOf[1] (Value): {@see ReadinessMerchantAccountSessionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReadinessMerchantAccountSessionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When merchant_account_session is omitted; use hasMerchantAccountSession() or valueOrDefault().
     */
    public function getMerchantAccountSession(): mixed { return $this->get('merchant_account_session'); }
    public function hasMerchantAccountSession(): bool { return $this->has('merchant_account_session'); }
    /** Who has to act on this step. Value enum: "integrator", "merchant", "flint". anyOf[1] (Value): string. Who has to act on this step. Value enum: "integrator", "merchant", "flint". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): mixed { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. anyOf[1] (Value): Array of string. Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When required_fields is omitted; use hasRequiredFields() or valueOrDefault().
     */
    public function getRequiredFields(): mixed { return $this->get('required_fields'); }
    public function hasRequiredFields(): bool { return $this->has('required_fields'); }
}
