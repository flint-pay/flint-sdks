<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiVerifyOnboardingEmailInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', token: getenv('API_TOKEN') ?: null, allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiVerifyOnboardingEmailInput((array) json_decode('{"body":{"verification_code":"example","verification_token":"example"}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->verifyOnboardingEmail($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
