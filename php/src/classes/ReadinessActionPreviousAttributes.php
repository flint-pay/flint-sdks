<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $action_type
 * @property-read ReadinessMerchantAccountSessionPreviousAttributes|null $merchant_account_session
 * @property-read string|null $owner
 * @property-read list<string>|null $required_fields
 * Presence-aware response; omitted optional fields return null. */
final class ReadinessActionPreviousAttributes extends Model {
    /** @param array{'action_type'?: mixed, 'merchant_account_session'?: mixed, 'owner'?: mixed, 'required_fields'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadinessActionPreviousAttributes')); }
    /** The kind of step to take. Each value says what the step is and who carries it out. Value enum: "advance_onboarding", "create_merchant_account_session", "wait_for_review", "settle_flint_balance", "set_tax_category", "update_payment_settings", "contact_support", "other". anyOf[1] (Value): string. The kind of step to take. Each value says what the step is and who carries it out. Value enum: "advance_onboarding", "create_merchant_account_session", "wait_for_review", "settle_flint_balance", "set_tax_category", "update_payment_settings", "contact_support", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getActionType(): string|null { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** Request body for `POST /v1/merchant-account-sessions`, on a `create_merchant_account_session` action. Send it unchanged. anyOf[1] (Value): {@see ReadinessMerchantAccountSessionPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReadinessMerchantAccountSessionPreviousAttributes|null
     */
    public function getMerchantAccountSession(): ReadinessMerchantAccountSessionPreviousAttributes|null { return $this->get('merchant_account_session'); }
    public function hasMerchantAccountSession(): bool { return $this->has('merchant_account_session'); }
    /** Who has to act on this step. Value enum: "integrator", "merchant", "flint". anyOf[1] (Value): string. Who has to act on this step. Value enum: "integrator", "merchant", "flint". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOwner(): string|null { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. anyOf[1] (Value): Array of string. Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getRequiredFields(): array|null { return $this->get('required_fields'); }
    public function hasRequiredFields(): bool { return $this->has('required_fields'); }
}
