<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $partner_app_id
 * @property-read mixed $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppsUpdateInput extends Model {
    /** @param array{'partner_app_id': string, 'body': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppsUpdateInput')); }
    /** Flint partner app ID. Example: "papp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The request body for: Update partner app. minProperties: 1. Example: {"api_version":"2026-09-07","expected_api_version":"2026-09-07","expected_version":1}.
     * @return mixed
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
