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
final class SubscriptionSettingsRequestInput extends Model {
    /** @param array{'default_billing_schedule_owner'?: string, 'dunning_end_action'?: string, 'dunning_retry_days'?: int, 'external_dunning_end_action'?: string, 'send_backordered_email'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionSettingsRequestInput')); }
    /** Who sets billing dates for a new subscription that doesn't send `billing_schedule`. Defaults to `flint`. Value enum: "flint", "external".
     * @return string
     * @throws SdkError When default_billing_schedule_owner is omitted; use hasDefaultBillingScheduleOwner() or valueOrDefault().
     */
    public function getDefaultBillingScheduleOwner(): string { return $this->get('default_billing_schedule_owner'); }
    public function hasDefaultBillingScheduleOwner(): bool { return $this->has('default_billing_schedule_owner'); }
    /** What happens to a subscription that Flint bills when every payment retry has failed. Defaults to `cancel`. Value enum: "cancel", "pause", "notify_only".
     * @return string
     * @throws SdkError When dunning_end_action is omitted; use hasDunningEndAction() or valueOrDefault().
     */
    public function getDunningEndAction(): string { return $this->get('dunning_end_action'); }
    public function hasDunningEndAction(): bool { return $this->has('dunning_end_action'); }
    /** Days automatic payment retries run after a renewal fails, from 1 to 90. Defaults to 16. Format: int32. minimum: 1. maximum: 90. Default: 16.
     * @return int
     * @throws SdkError When dunning_retry_days is omitted; use hasDunningRetryDays() or valueOrDefault().
     */
    public function getDunningRetryDays(): int { return $this->get('dunning_retry_days'); }
    public function hasDunningRetryDays(): bool { return $this->has('dunning_retry_days'); }
    /** What happens to a subscription with an external billing schedule when every payment retry has failed. Defaults to `notify_only`. Value enum: "cancel", "pause", "notify_only".
     * @return string
     * @throws SdkError When external_dunning_end_action is omitted; use hasExternalDunningEndAction() or valueOrDefault().
     */
    public function getExternalDunningEndAction(): string { return $this->get('external_dunning_end_action'); }
    public function hasExternalDunningEndAction(): bool { return $this->has('external_dunning_end_action'); }
    /** Whether Flint emails the buyer when a renewal waits on stock. Defaults to false.
     * @return bool
     * @throws SdkError When send_backordered_email is omitted; use hasSendBackorderedEmail() or valueOrDefault().
     */
    public function getSendBackorderedEmail(): bool { return $this->get('send_backordered_email'); }
    public function hasSendBackorderedEmail(): bool { return $this->has('send_backordered_email'); }
}
