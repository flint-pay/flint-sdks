<?php
declare(strict_types=1);
namespace Flint;
/** Client environment, credentials and transport defaults. See RUNTIME.md#clientoptions. */
final class ClientOptions
{
    public function __construct(
        public readonly ?string $baseUrl = null,
        public readonly string|CredentialProvider|\Closure|Omitted|null $token = Omitted::Value,
        public readonly ?array $allowedOrigins = null,
        public readonly bool $allowInsecureHttp = false,
        public readonly ?int $timeoutMs = null,
        public readonly ?int $deadlineMs = null,
        // Keep fractions intact in weak-mode PHP so request validation can reject them.
        public readonly int|float|null $maxAttempts = null,
        public readonly ?\Closure $transport = null,
        public readonly ?\Closure $diagnostics = null,
        public readonly array $redactFields = [],
        public readonly ?string $authMode = null,
        public readonly array|string|Omitted|null $credentials = Omitted::Value,
        public readonly mixed $appInfo = Omitted::Value,
        public readonly string|CredentialProvider|\Closure|Omitted|null $apiKey = Omitted::Value,
        public readonly string|CredentialProvider|\Closure|Omitted|null $checkoutToken = Omitted::Value,
        public readonly string|CredentialProvider|\Closure|Omitted|null $customerToken = Omitted::Value,
        public readonly string|CredentialProvider|\Closure|Omitted|null $invoiceToken = Omitted::Value,
        public readonly string|CredentialProvider|\Closure|Omitted|null $onboardingToken = Omitted::Value,
        public readonly bool $ambientCredentials = true,
        public readonly ?object $credentialCache = null,
        mixed ...$unknown,
    ) { if ($unknown) throw new \Flint\Errors\ConfigurationError("Unknown client option " . array_key_first($unknown), code: "invalid_option"); }
    public function __debugInfo(): array
    {
        return ['baseUrl' => $this->baseUrl, 'token' => '[REDACTED]'];
    }
}
