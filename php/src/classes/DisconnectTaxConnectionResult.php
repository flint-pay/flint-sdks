<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Settings $settings
 * @property-read TaxConnection $tax_connection
 * Presence-aware response; omitted optional fields return null. */
final class DisconnectTaxConnectionResult extends Model {
    /** @param array{'settings': mixed, 'tax_connection': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisconnectTaxConnectionResult')); }
    /** Shape $ (Value): {@see Settings}. Merchant settings, as returned by GET /v1/settings. The settings for one scope (organization, merchant, location, or device), grouped by area such as checkout, tax, receipts, and tipping.
     * @return Settings
     */
    public function getSettings(): Settings { return $this->get('settings'); }
    public function hasSettings(): bool { return $this->has('settings'); }
    /** Shape $ (Value): {@see TaxConnection}. The connection changed by this operation. Its version is the expected_version target. The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook.
     * @return TaxConnection
     */
    public function getTaxConnection(): TaxConnection { return $this->get('tax_connection'); }
    public function hasTaxConnection(): bool { return $this->has('tax_connection'); }
}
