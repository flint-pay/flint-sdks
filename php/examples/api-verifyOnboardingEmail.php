<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiVerifyOnboardingEmailInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
));
$input = new ApiVerifyOnboardingEmailInput([
  'body' => (object) [
    'verification_code' => 'example',
    'verification_token' => 'example',
  ],
]);
$result = $client->api->verifyOnboardingEmail($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->merchant->merchant_id . PHP_EOL;
echo $result->data->data->merchant->payments->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
