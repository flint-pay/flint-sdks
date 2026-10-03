<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_url
 * Presence-aware input; omitted fields throw when accessed. */
final class GetOrCreateReturnResolutionCheckoutSessionRequestInput extends Model {
    /** @param array{'return_url'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GetOrCreateReturnResolutionCheckoutSessionRequestInput')); }
    /** @return string
     * @throws SdkError When return_url is omitted; use hasReturnUrl() or valueOrDefault().
     */
    public function getReturnUrl(): string { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
}
