<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $token
 * Presence-aware input; omitted fields throw when accessed. */
final class EmailPreferenceLinksLookupParams extends Model {
    /** @param array{'token': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EmailPreferenceLinksLookupParams')); }
    /** The signed token from the email's preference link, as the `flint_email_preference_token` the hosted preference page receives. It points to one sent email, which fixes the email address, the preference, the merchant, and the mode. A token that is malformed, unrecognized, from a closed sandbox, or from another merchant or mode than the calling key returns 404. minLength: 1.
     * @return string
     * @throws SdkError When token is omitted; use hasToken() or valueOrDefault().
     */
    public function getToken(): string { return $this->get('token'); }
    public function hasToken(): bool { return $this->has('token'); }
}
