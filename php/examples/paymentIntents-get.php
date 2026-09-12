<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
$result = $client->paymentIntents->get('pi_replace_with_your_payment_intent_id', [], new RequestOptions(maxAttempts: 1));
echo $result->payment_intent_id . PHP_EOL;
echo $result->status . PHP_EOL;
$client->close();
