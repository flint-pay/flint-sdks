<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_url
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCustomerAccessLinkRequestInput extends Model {
    /** @param array{'return_url'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCustomerAccessLinkRequestInput')); }
    /** Where the buyer can return to on your site. Kept for the browser session this link starts, until sign-out or session end. Absolute HTTPS URL without credentials; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Query strings and fragments are allowed. Omit it for no return destination. Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     * @return string
     * @throws SdkError When return_url is omitted; use hasReturnUrl() or valueOrDefault().
     */
    public function getReturnUrl(): string { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
}
