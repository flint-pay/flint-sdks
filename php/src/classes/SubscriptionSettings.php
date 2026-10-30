<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $default_billing_schedule_owner
 * @property-read ?string $dunning_end_action
 * @property-read ?int $dunning_retry_days
 * @property-read ?string $external_dunning_end_action
 * @property-read ?bool $send_backordered_email
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionSettings extends Model {
    /** @param array{'default_billing_schedule_owner'?: string, 'dunning_end_action'?: string, 'dunning_retry_days'?: int, 'external_dunning_end_action'?: string, 'send_backordered_email'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionSettings')); }
    /** Value enum: "flint", "external".
     * @return ?string
     */
    public function getDefaultBillingScheduleOwner(): ?string { return $this->get('default_billing_schedule_owner'); }
    public function hasDefaultBillingScheduleOwner(): bool { return $this->has('default_billing_schedule_owner'); }
    /** Value enum: "cancel", "pause", "notify_only".
     * @return ?string
     */
    public function getDunningEndAction(): ?string { return $this->get('dunning_end_action'); }
    public function hasDunningEndAction(): bool { return $this->has('dunning_end_action'); }
    /** Format: int32.
     * @return ?int
     */
    public function getDunningRetryDays(): ?int { return $this->get('dunning_retry_days'); }
    public function hasDunningRetryDays(): bool { return $this->has('dunning_retry_days'); }
    /** Value enum: "cancel", "pause", "notify_only".
     * @return ?string
     */
    public function getExternalDunningEndAction(): ?string { return $this->get('external_dunning_end_action'); }
    public function hasExternalDunningEndAction(): bool { return $this->has('external_dunning_end_action'); }
    /** send_backordered_email
     * @return ?bool
     */
    public function getSendBackorderedEmail(): ?bool { return $this->get('send_backordered_email'); }
    public function hasSendBackorderedEmail(): bool { return $this->has('send_backordered_email'); }
}
