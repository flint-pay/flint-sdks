<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
$result = $client->creditNotes->getAllocation('example', 'example', [], new RequestOptions(maxAttempts: 1));
echo $result->credit_note_allocation_id . PHP_EOL;
echo $result->credit_note_id . PHP_EOL;
$client->close();
