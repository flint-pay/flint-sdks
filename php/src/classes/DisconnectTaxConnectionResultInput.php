<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SettingsInput|array<array-key, mixed>|\stdClass $settings
 * @property-read TaxConnectionInput|array<array-key, mixed>|\stdClass $tax_connection
 * Presence-aware input; omitted fields throw when accessed. */
final class DisconnectTaxConnectionResultInput extends Model {
    /** @param array{'settings': SettingsInput|array<array-key, mixed>|\stdClass, 'tax_connection': TaxConnectionInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisconnectTaxConnectionResultInput')); }
    /** Merchant settings, as returned by GET /v1/settings. The settings for one scope (organization, merchant, location, or device), grouped by area such as checkout, tax, receipts, and tipping.
     * @return SettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When settings is omitted; use hasSettings() or valueOrDefault().
     */
    public function getSettings(): mixed { return $this->get('settings'); }
    public function hasSettings(): bool { return $this->has('settings'); }
    /** The connection changed by this operation. Its version is the expected_version target. The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook.
     * @return TaxConnectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_connection is omitted; use hasTaxConnection() or valueOrDefault().
     */
    public function getTaxConnection(): mixed { return $this->get('tax_connection'); }
    public function hasTaxConnection(): bool { return $this->has('tax_connection'); }
}
