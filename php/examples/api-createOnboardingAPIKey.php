<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateOnboardingAPIKeyInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'onboarding', credentials: ['onboarding' => ['OnboardingSessionBearer' => getenv('API_ONBOARDING_ONBOARDINGSESSIONBEARER') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiCreateOnboardingAPIKeyInput((array) json_decode('{"body":{"name":"example"}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->createOnboardingAPIKey($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
