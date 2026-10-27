<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action_type
 * @property-read ?ReadinessMerchantAccountSession $merchant_account_session
 * @property-read string $owner
 * @property-read ?list<string> $required_fields
 * Presence-aware response; omitted optional fields return null. */
final class ReadinessAction extends Model {
    /** @param array{'action_type': string, 'merchant_account_session'?: mixed, 'owner': string, 'required_fields'?: list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadinessAction')); }
    /** Shape $ (Value): string.  Value enum: "advance_onboarding", "create_merchant_account_session", "wait_for_review", "settle_flint_balance", "set_tax_category", "contact_support", "other".
     * @return string
     */
    public function getActionType(): string { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** Shape $ (Value): {@see ReadinessMerchantAccountSession}. Settings for the merchant account session a `ReadinessAction` calls for: which components to show and which requirements to collect.
     * @return ?ReadinessMerchantAccountSession
     */
    public function getMerchantAccountSession(): ?ReadinessMerchantAccountSession { return $this->get('merchant_account_session'); }
    public function hasMerchantAccountSession(): bool { return $this->has('merchant_account_session'); }
    /** Shape $ (Value): string.  Value enum: "integrator", "merchant", "flint".
     * @return string
     */
    public function getOwner(): string { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getRequiredFields(): ?array { return $this->get('required_fields'); }
    public function hasRequiredFields(): bool { return $this->has('required_fields'); }
}
