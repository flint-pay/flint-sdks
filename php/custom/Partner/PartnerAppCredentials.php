<?php
declare(strict_types=1);

namespace Flint\Partner;

use Flint\Client;
use Flint\Credential;
use Flint\CredentialProvider;
use Flint\SdkError;

/**
 * A cached partner app token (client_credentials) for one mode and, when bound, one
 * merchant. Pass it as a client's token. It mints with a fresh client assertion,
 * reuses the token until refreshBeforeSeconds before expiry (at most half its
 * lifetime), and drops it when the SDK reports a 401. Create it with
 * PartnerAppTokens. Handwritten; regeneration keeps it.
 */
final class PartnerAppCredentials implements CredentialProvider
{
    private ?Credential $cached = null;
    private float $lifetime = 0;

    /** @internal Use PartnerAppTokens::forMerchant() or PartnerAppTokens::app(). */
    public function __construct(
        private readonly Client $client,
        private readonly ClientAssertionProvider $clientAssertion,
        public readonly string $mode,
        public readonly ?string $merchantId,
        private readonly int $refreshBeforeSeconds,
    ) {}

    public function getCredential(): Credential
    {
        if ($this->cached !== null && $this->fresh($this->cached)) {
            return $this->cached;
        }
        $token = $this->client->oauth->exchangeToken(
            ['grant_type' => 'client_credentials', 'mode' => $this->mode] +
                ($this->merchantId === null ? [] : ['merchant_id' => $this->merchantId]) +
                OAuth::clientAuthentication($this->clientAssertion),
        );
        $value = $token->hasAccessToken() ? $token->getAccessToken() : '';
        $seconds = $token->getExpiresIn();
        if ($value === '' || $token->getTokenType() !== 'Bearer' || !is_int($seconds) || $seconds <= 0) {
            throw SdkError::create('configuration', 'The token endpoint returned no usable partner app token', 'not_sent', errorCode: 'credential_invalid');
        }
        $this->lifetime = $seconds;
        return $this->cached = new Credential($value, (new \DateTimeImmutable())->modify('+' . $seconds . ' seconds'));
    }

    /** Drop the cached token; the SDK calls this after a 401 and retries once. */
    public function invalidate(?Credential $credential = null): void
    {
        if ($credential === null || $credential === $this->cached) {
            $this->cached = null;
        }
    }

    /** @return array{mode: string, merchantId?: string} */
    public function __debugInfo(): array
    {
        return ['mode' => $this->mode] + ($this->merchantId === null ? [] : ['merchantId' => $this->merchantId]);
    }

    private function fresh(Credential $credential): bool
    {
        $remaining = $credential->expiresAt->getTimestamp() - time();
        return $remaining > min($this->refreshBeforeSeconds, $this->lifetime / 2);
    }
}
