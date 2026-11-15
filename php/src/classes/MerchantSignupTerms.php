<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $url
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class MerchantSignupTerms extends Model {
    /** @param array{'url': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupTerms')); }
    /** Where the terms are published. Link to it beside the checkbox in your form.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** The terms version. Send it as `terms_acceptance.merchant_terms_version` on verify.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
