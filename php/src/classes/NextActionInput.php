<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action_type
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read array{'collection_strategy'?: string, 'component': string, 'future_requirements'?: string, ...}|object $merchant_account_session
 * @property-read string $reason_code
 * @property-read string $reason_message
 * @property-read list<string> $required_fields
 * @property-read string $required_scope
 * @property-read bool $requires_human_confirmation
 * @property-read int $suggested_delay_milliseconds
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class NextActionInput extends Model {
    /** @param array{'action_type': string, 'expires_at'?: string|\DateTimeInterface, 'merchant_account_session'?: array{'collection_strategy'?: string, 'component': string, 'future_requirements'?: string, ...}|object, 'reason_code'?: string, 'reason_message'?: string, 'required_fields'?: list<string>, 'required_scope'?: string, 'requires_human_confirmation'?: bool, 'suggested_delay_milliseconds'?: int, 'url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('NextActionInput')); }
    /** @return string
     * @throws SdkError When action_type is omitted; use hasActionType() or valueOrDefault().
     */
    public function getActionType(): string { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return array{'collection_strategy'?: string, 'component': string, 'future_requirements'?: string, ...}|object
     * @throws SdkError When merchant_account_session is omitted; use hasMerchantAccountSession() or valueOrDefault().
     */
    public function getMerchantAccountSession(): array|object { return $this->get('merchant_account_session'); }
    public function hasMerchantAccountSession(): bool { return $this->has('merchant_account_session'); }
    /** @return string
     * @throws SdkError When reason_code is omitted; use hasReasonCode() or valueOrDefault().
     */
    public function getReasonCode(): string { return $this->get('reason_code'); }
    public function hasReasonCode(): bool { return $this->has('reason_code'); }
    /** @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** @return list<string>
     * @throws SdkError When required_fields is omitted; use hasRequiredFields() or valueOrDefault().
     */
    public function getRequiredFields(): array { return $this->get('required_fields'); }
    public function hasRequiredFields(): bool { return $this->has('required_fields'); }
    /** @return string
     * @throws SdkError When required_scope is omitted; use hasRequiredScope() or valueOrDefault().
     */
    public function getRequiredScope(): string { return $this->get('required_scope'); }
    public function hasRequiredScope(): bool { return $this->has('required_scope'); }
    /** @return bool
     * @throws SdkError When requires_human_confirmation is omitted; use hasRequiresHumanConfirmation() or valueOrDefault().
     */
    public function getRequiresHumanConfirmation(): bool { return $this->get('requires_human_confirmation'); }
    public function hasRequiresHumanConfirmation(): bool { return $this->has('requires_human_confirmation'); }
    /** @return int
     * @throws SdkError When suggested_delay_milliseconds is omitted; use hasSuggestedDelayMilliseconds() or valueOrDefault().
     */
    public function getSuggestedDelayMilliseconds(): int { return $this->get('suggested_delay_milliseconds'); }
    public function hasSuggestedDelayMilliseconds(): bool { return $this->has('suggested_delay_milliseconds'); }
    /** @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
