<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'country'?: string, 'profile'?: mixed, 'requested_capabilities'?: list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingAdvanceInput extends Model {
    /** @param array{'body': array{'country'?: string, 'profile'?: mixed, 'requested_capabilities'?: list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingAdvanceInput')); }
    /** The request body for: Advance onboarding flow. Example: {"country":"US","profile":{"support_email":"help@example.com","website_url":"https://withflintpay.com"},"requested_capabilities":["accept_card_payments","receive_payouts"]}.
     * @return array{'country'?: string, 'profile'?: mixed, 'requested_capabilities'?: list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
