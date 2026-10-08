<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $default_billing_schedule_owner
 * @property-read string $dunning_end_action
 * @property-read int $dunning_retry_days
 * @property-read string $external_dunning_end_action
 * @property-read bool $send_backordered_email
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionSettingsInput extends Model {
    /** @param array{'default_billing_schedule_owner'?: string, 'dunning_end_action'?: string, 'dunning_retry_days'?: int, 'external_dunning_end_action'?: string, 'send_backordered_email'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionSettingsInput')); }
    /** @return string
     * @throws SdkError When default_billing_schedule_owner is omitted; use hasDefaultBillingScheduleOwner() or valueOrDefault().
     */
    public function getDefaultBillingScheduleOwner(): string { return $this->get('default_billing_schedule_owner'); }
    public function hasDefaultBillingScheduleOwner(): bool { return $this->has('default_billing_schedule_owner'); }
    /** @return string
     * @throws SdkError When dunning_end_action is omitted; use hasDunningEndAction() or valueOrDefault().
     */
    public function getDunningEndAction(): string { return $this->get('dunning_end_action'); }
    public function hasDunningEndAction(): bool { return $this->has('dunning_end_action'); }
    /** @return int
     * @throws SdkError When dunning_retry_days is omitted; use hasDunningRetryDays() or valueOrDefault().
     */
    public function getDunningRetryDays(): int { return $this->get('dunning_retry_days'); }
    public function hasDunningRetryDays(): bool { return $this->has('dunning_retry_days'); }
    /** @return string
     * @throws SdkError When external_dunning_end_action is omitted; use hasExternalDunningEndAction() or valueOrDefault().
     */
    public function getExternalDunningEndAction(): string { return $this->get('external_dunning_end_action'); }
    public function hasExternalDunningEndAction(): bool { return $this->has('external_dunning_end_action'); }
    /** @return bool
     * @throws SdkError When send_backordered_email is omitted; use hasSendBackorderedEmail() or valueOrDefault().
     */
    public function getSendBackorderedEmail(): bool { return $this->get('send_backordered_email'); }
    public function hasSendBackorderedEmail(): bool { return $this->has('send_backordered_email'); }
}
