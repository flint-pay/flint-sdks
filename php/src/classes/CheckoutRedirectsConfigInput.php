<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $cancel_redirect_url
 * @property-read string $on_load_redirect_url
 * @property-read string $success_redirect_url
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutRedirectsConfigInput extends Model {
    /** @param array{'cancel_redirect_url'?: string, 'on_load_redirect_url'?: string, 'success_redirect_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutRedirectsConfigInput')); }
    /** @return string
     * @throws SdkError When cancel_redirect_url is omitted; use hasCancelRedirectUrl() or valueOrDefault().
     */
    public function getCancelRedirectUrl(): string { return $this->get('cancel_redirect_url'); }
    public function hasCancelRedirectUrl(): bool { return $this->has('cancel_redirect_url'); }
    /** @return string
     * @throws SdkError When on_load_redirect_url is omitted; use hasOnLoadRedirectUrl() or valueOrDefault().
     */
    public function getOnLoadRedirectUrl(): string { return $this->get('on_load_redirect_url'); }
    public function hasOnLoadRedirectUrl(): bool { return $this->has('on_load_redirect_url'); }
    /** @return string
     * @throws SdkError When success_redirect_url is omitted; use hasSuccessRedirectUrl() or valueOrDefault().
     */
    public function getSuccessRedirectUrl(): string { return $this->get('success_redirect_url'); }
    public function hasSuccessRedirectUrl(): bool { return $this->has('success_redirect_url'); }
}
