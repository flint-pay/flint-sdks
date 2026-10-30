<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'email': string, 'first_name': string, 'last_name': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingStartInput extends Model {
    /** @param array{'body': array{'email': string, 'first_name': string, 'last_name': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingStartInput')); }
    /** The request body for: Start onboarding flow. Example: {"email":"owner@example.com","first_name":"Jane","last_name":"Doe"}.
     * @return array{'email': string, 'first_name': string, 'last_name': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
