<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_url
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateOnboardingAccessLinkRequestInput extends Model {
    /** @param array{'return_url': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateOnboardingAccessLinkRequestInput')); }
    /** An absolute https URL without credentials, up to 2,048 characters. Query strings and fragments are allowed. For a partner app install token, its origin must be the origin of the app's merchant_action_url or of one of its redirect URIs. Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     * @return string
     * @throws SdkError When return_url is omitted; use hasReturnUrl() or valueOrDefault().
     */
    public function getReturnUrl(): string { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
}
