<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $url
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantSignupTermsInput extends Model {
    /** @param array{'url': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupTermsInput')); }
    /** Where the terms are published. Link to it beside the checkbox in your form.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** The terms version. Send it as `terms_acceptance.merchant_terms_version` on verify.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
