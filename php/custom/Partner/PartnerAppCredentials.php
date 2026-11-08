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
 * lifetime), keeps serving it for a few seconds at a time if a refresh fails before
 * it expires, and drops it when the SDK reports a 401 on a replay-safe request.
 * Create it with PartnerAppTokens. Handwritten; regeneration keeps it.
 */
final class PartnerAppCredentials implements CredentialProvider
{
    // After a failed refresh, keep serving the unexpired token and wait before minting again.
    private const REFRESH_RETRY_SECONDS = 5;

    private ?Credential $cached = null;
    private float $lifetime = 0;
    private float $retryAt = 0;

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
        $cached = $this->cached;
        if ($cached !== null && ($this->fresh($cached) || (microtime(true) < $this->retryAt && $this->unexpired($cached)))) {
            return $cached;
        }
        try {
            return $this->mint();
        } catch (\Throwable $error) {
            if ($cached === null || $cached !== $this->cached || !$this->unexpired($cached)) {
                throw $error;
            }
            $this->retryAt = microtime(true) + self::REFRESH_RETRY_SECONDS;
            return $cached;
        }
    }

    /** Drop the cached token; the SDK calls this after a 401 on a replay-safe request and retries once. */
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

    private function mint(): Credential
    {
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
        $this->retryAt = 0;
        return $this->cached = new Credential($value, (new \DateTimeImmutable())->modify('+' . $seconds . ' seconds'));
    }

    private function unexpired(Credential $credential): bool
    {
        return $credential->expiresAt->getTimestamp() > time();
    }

    private function fresh(Credential $credential): bool
    {
        $remaining = $credential->expiresAt->getTimestamp() - time();
        return $remaining > min($this->refreshBeforeSeconds, $this->lifetime / 2);
    }
}
