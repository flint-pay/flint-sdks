import { d6744 as c0 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c1 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6962 as c2 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7530 as c3, d7526 as c4 } from '../descriptors/data/343.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9526 as c5, d9527 as c6, d9528 as c7, d9529 as c8 } from '../descriptors/data/461.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9533 as c9, d9534 as c10, d9535 as c11 } from '../descriptors/data/462.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7412 as c12, d7413 as c13, d7414 as c14, d7415 as c15, d7416 as c16, d7417 as c17, d7418 as c18, d7419 as c19 } from '../descriptors/data/337.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6675 as c20 } from '../descriptors/data/295.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9551 as c21 } from '../descriptors/data/463.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9551 as d9551 } from '../descriptors/data/463.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9551;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec154"]:c3(),["SharedCodec155"]:c4(),["SharedCodec2312"]:c5(),["SharedCodec2313"]:c6(),["SharedCodec2314"]:c7(),["SharedCodec2315"]:c8(),["SharedCodec2535"]:c9(),["SharedCodec2536"]:c10(),["SharedCodec2537"]:c11(),["SharedCodec417"]:c12(),["SharedCodec418"]:c13(),["SharedCodec419"]:c14(),["SharedCodec420"]:c15(),["SharedCodec421"]:c16(),["SharedCodec433"]:c17(),["SharedCodec434"]:c18(),["SharedCodec435"]:c19(),["TextModifierRequest"]:c20(),["UpdateSubscriptionPlanLineItemRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
