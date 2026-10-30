<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $partner_app_id
 * @property-read array{'expected_version'?: int, 'expire_previous_secret_at'?: string|\DateTimeInterface}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppsRotateSecretInput extends Model {
    /** @param array{'partner_app_id': string, 'body'?: array{'expected_version'?: int, 'expire_previous_secret_at'?: string|\DateTimeInterface}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppsRotateSecretInput')); }
    /** Flint partner app ID. Example: "papp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The request body for: Rotate partner app secret.
     * @return array{'expected_version'?: int, 'expire_previous_secret_at'?: string|\DateTimeInterface}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
