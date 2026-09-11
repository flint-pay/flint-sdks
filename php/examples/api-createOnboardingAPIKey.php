<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateOnboardingAPIKeyInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'onboarding', credentials: ['onboarding' => ['OnboardingSessionBearer' => getenv('API_ONBOARDING_ONBOARDINGSESSIONBEARER') ?: '']],
));
$input = new ApiCreateOnboardingAPIKeyInput([
  'body' => (object) [
    'name' => 'example',
  ],
]);
$result = $client->api->createOnboardingAPIKey($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->api_key_id . PHP_EOL;
echo $result->data->data->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
