<?php
declare(strict_types=1);
namespace Flint;
/** Per-call overrides, passed as the final argument. See RUNTIME.md#requestoptions. */
final class RequestOptions
{
    public function __construct(
        public readonly array $headers = [],
        public readonly ?string $idempotencyKey = null,
        public readonly ?string $ifMatch = null,
        public readonly ?int $timeoutMs = null,
        public readonly ?int $deadlineMs = null,
        // Keep fractions intact in weak-mode PHP so request validation can reject them.
        public readonly int|float|null $maxAttempts = null,
        public readonly ?Cancellation $cancellation = null,
        public readonly ?int $maxPages = null,
        public readonly ?int $maxItems = null,
        public readonly ?string $authMode = null,
        public readonly ?array $credentials = null,
        public readonly ?int $streamIdleTimeoutMs = null,
        public readonly ?int $streamLifetimeMs = null,
        public readonly string|CredentialProvider|\Closure|null $apiKey = null,
        public readonly string|CredentialProvider|\Closure|null $checkoutToken = null,
        public readonly string|CredentialProvider|\Closure|null $customerToken = null,
        public readonly string|CredentialProvider|\Closure|null $invoiceToken = null,
        public readonly string|CredentialProvider|\Closure|null $onboardingToken = null,
        public readonly string|CredentialProvider|\Closure|null $token = null,
        public readonly ?string $client_request_id = null,
    ) {}
    public function __debugInfo(): array
    {
        return [
            'authMode' => $this->authMode,
            'credentials' => '[REDACTED]',
            'headers' => '[REDACTED]',
        ];
    }
    public function withDeadline(int $remaining): self
    {
        return new self(
            $this->headers,
            $this->idempotencyKey,
            $this->ifMatch,
            $this->timeoutMs,
            $remaining,
            $this->maxAttempts,
            $this->cancellation,
            $this->maxPages,
            $this->maxItems,
            $this->authMode,
            $this->credentials,
            $this->streamIdleTimeoutMs,
            $this->streamLifetimeMs,
            $this->apiKey,
            $this->checkoutToken,
            $this->customerToken,
            $this->invoiceToken,
            $this->onboardingToken,
            $this->token,
            $this->client_request_id,
        );
    }
}
