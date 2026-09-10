<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiUpdateSubscriptionBillingScheduleInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiUpdateSubscriptionBillingScheduleInput((array) json_decode('{"subscription_id":"example","body":{"owner":"flint","initiated_by":"buyer","next_billing_at":"2026-01-01T00:00:00Z"}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->updateSubscriptionBillingSchedule($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
