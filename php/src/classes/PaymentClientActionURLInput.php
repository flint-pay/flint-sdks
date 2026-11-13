<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $type
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentClientActionURLInput extends Model {
    /** @param array{'type': string, 'url': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentClientActionURLInput')); }
    /** Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Value enum: "url".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. minLength: 1.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
