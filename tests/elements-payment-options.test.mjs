import test from 'node:test';
import assert from 'node:assert/strict';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {makePaymentCollectionStripeElements} from '../node/index.js';
const exec=promisify(execFile);
const elements={mode:'payment',next_step:'create_confirmation_token',payment_method_creation:'manual',payment_method_types:['us_bank_account'],submit_to:'pay_order',payment_method_options:{us_bank_account:{verification_method:'instant',financial_connections:{permissions:['payment_method']}}}};

test('Node preserves nested Stripe Elements payment options',()=>{
 const model=makePaymentCollectionStripeElements(elements);
 assert.deepEqual(model.toJSON(),elements);
 assert.throws(()=>makePaymentCollectionStripeElements({...elements,payment_method_options:'invalid'}));
});

test('PHP preserves nested Stripe Elements payment options',async()=>{
 const script=String.raw`
 require 'php/src/Runtime.php';
 require 'php/src/Client.php';
 $input=json_decode($argv[1],false,512,JSON_THROW_ON_ERROR);
 $model=new \Flint\PaymentCollectionStripeElements($input);
 $actual=json_decode(json_encode($model,JSON_THROW_ON_ERROR),true,512,JSON_THROW_ON_ERROR);
 if ($actual!==json_decode($argv[1],true,512,JSON_THROW_ON_ERROR)) throw new \RuntimeException('Provider options changed');
 `;
 await exec('php',['-r',script,JSON.stringify(elements)],{cwd:new URL('..',import.meta.url),timeout:30000});
});
