<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppCredentialJWKSURLRequestInput extends Model {
    /** @param array{'url': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppCredentialJWKSURLRequestInput')); }
    /** Shape $ (Value): string. HTTPS URL with a DNS host, optional port 443, no userinfo or fragment, and an optional query. Flint API hosts and nonpublic destinations are rejected. The URL must serve a JSON Web Key Set with 1 to 10 supported public signing keys; unusable keys are ignored and don't count. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
