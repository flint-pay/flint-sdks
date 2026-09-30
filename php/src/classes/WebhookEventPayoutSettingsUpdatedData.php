<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payout_settings_id
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventPayoutSettingsUpdatedData extends Model {
    /** @param array{'payout_settings_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutSettingsUpdatedData')); }
    /** @return string
     * @throws SdkError When payout_settings_id is omitted; use hasPayoutSettingsId() or valueOrDefault().
     */
    public function getPayoutSettingsId(): string { return $this->get('payout_settings_id'); }
    public function hasPayoutSettingsId(): bool { return $this->has('payout_settings_id'); }
}
