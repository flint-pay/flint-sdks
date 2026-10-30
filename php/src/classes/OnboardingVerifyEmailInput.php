<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'merchant_id'?: string, 'verification_code': string, 'verification_token': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingVerifyEmailInput extends Model {
    /** @param array{'body': array{'merchant_id'?: string, 'verification_code': string, 'verification_token': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingVerifyEmailInput')); }
    /** The request body for: Verify onboarding email. Example: {"verification_code":"482193","verification_token":"example"}.
     * @return array{'merchant_id'?: string, 'verification_code': string, 'verification_token': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
