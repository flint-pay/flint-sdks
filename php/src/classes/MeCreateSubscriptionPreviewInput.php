<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'destination': mixed, 'mode': string, 'subscription_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateSubscriptionPreviewInput extends Model {
    /** @param array{'Flint-Version'?: string, 'body': array{'destination': mixed, 'mode': string, 'subscription_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateSubscriptionPreviewInput')); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'destination': mixed, 'mode': string, 'subscription_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
