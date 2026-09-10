<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiPublishReturnPolicyRevisionInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiPublishReturnPolicyRevisionInput((array) json_decode('{"return_policy_id":"example","body":{"expected_current_return_policy_revision_id":"example","revision":{"approval_mode":"automatic","eligibility_result":"ineligible","is_merchandise_return_required":true,"priority":1,"scope":{}}}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->publishReturnPolicyRevision($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
