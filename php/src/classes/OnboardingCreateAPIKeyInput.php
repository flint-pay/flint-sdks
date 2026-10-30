<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'name': string, 'scopes'?: list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingCreateAPIKeyInput extends Model {
    /** @param array{'body': array{'name': string, 'scopes'?: list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingCreateAPIKeyInput')); }
    /** The request body for: Create onboarding API key. Example: {"name":"First backend integration","scopes":["commerce.orders.read","commerce.orders.write","customers.read","customers.write"]}.
     * @return array{'name': string, 'scopes'?: list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
