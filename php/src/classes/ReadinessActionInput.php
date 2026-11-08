<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action_type
 * @property-read ReadinessMerchantAccountSessionInput|array<array-key, mixed>|\stdClass $merchant_account_session
 * @property-read string $owner
 * @property-read list<string> $required_fields
 * Presence-aware input; omitted fields throw when accessed. */
final class ReadinessActionInput extends Model {
    /** @param array{'action_type': string, 'merchant_account_session'?: ReadinessMerchantAccountSessionInput|array<array-key, mixed>|\stdClass, 'owner': string, 'required_fields'?: list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadinessActionInput')); }
    /** The kind of step to take. Each value says what the step is and who carries it out. Value enum: "advance_onboarding", "create_api_key", "create_merchant_account_session", "wait_for_review", "settle_flint_balance", "set_tax_category", "contact_support", "other".
     * @return string
     * @throws SdkError When action_type is omitted; use hasActionType() or valueOrDefault().
     */
    public function getActionType(): string { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** Request body for `POST /v1/merchant-account-sessions`, on a `create_merchant_account_session` action. Send it unchanged. Shared request body for `create_merchant_account_session` next actions in readiness, onboarding, errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions; components and collection policy describe which requirements to collect.
     * @return ReadinessMerchantAccountSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_account_session is omitted; use hasMerchantAccountSession() or valueOrDefault().
     */
    public function getMerchantAccountSession(): mixed { return $this->get('merchant_account_session'); }
    public function hasMerchantAccountSession(): bool { return $this->has('merchant_account_session'); }
    /** Who has to act on this step. Value enum: "integrator", "merchant", "flint".
     * @return string
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): string { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. [] (Value): string.
     * @return list<string>
     * @throws SdkError When required_fields is omitted; use hasRequiredFields() or valueOrDefault().
     */
    public function getRequiredFields(): array { return $this->get('required_fields'); }
    public function hasRequiredFields(): bool { return $this->has('required_fields'); }
}
