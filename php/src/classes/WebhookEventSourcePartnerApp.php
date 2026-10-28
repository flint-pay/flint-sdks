<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $merchant_id
 * @property-read string $partner_app_install_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventSourcePartnerApp extends Model {
    /** @param array{'merchant_id': string, 'partner_app_install_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventSourcePartnerApp')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** Shape $ (Value): string.  Value enum: "partner_app".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
