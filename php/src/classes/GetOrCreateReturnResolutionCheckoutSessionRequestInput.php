<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'cancel_redirect_url'?: string, 'success_redirect_url'?: string}|object $redirects
 * @property-read string $return_url
 * @property-read string $surface
 * Presence-aware input; omitted fields throw when accessed. */
final class GetOrCreateReturnResolutionCheckoutSessionRequestInput extends Model {
    /** @param array{'redirects'?: array{'cancel_redirect_url'?: string, 'success_redirect_url'?: string}|object, 'return_url'?: string, 'surface'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GetOrCreateReturnResolutionCheckoutSessionRequestInput')); }
    /** @return array{'cancel_redirect_url'?: string, 'success_redirect_url'?: string}|object
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): array|object { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** @return string
     * @throws SdkError When return_url is omitted; use hasReturnUrl() or valueOrDefault().
     */
    public function getReturnUrl(): string { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
    /** @return string
     * @throws SdkError When surface is omitted; use hasSurface() or valueOrDefault().
     */
    public function getSurface(): string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
}
