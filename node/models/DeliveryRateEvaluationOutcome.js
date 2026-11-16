import { d565 as c0 } from '../descriptors/data/32.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d572 as c1 } from '../descriptors/data/33.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c2 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7461 as c3, d7463 as c4, d7464 as c5 } from '../descriptors/data/339.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7467 as c6 } from '../descriptors/data/340.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6134 as c7, d6135 as c8, d6136 as c9, d6138 as c10, d6139 as c11, d6140 as c12 } from '../descriptors/data/265.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d565 as d565 } from '../descriptors/data/32.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d565;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec165"]:c3(),["SharedCodec167"]:c4(),["SharedCodec168"]:c5(),["SharedCodec171"]:c6(),["SharedCodec787"]:c7(),["SharedCodec788"]:c8(),["SharedCodec789"]:c9(),["SharedCodec790"]:c10(),["SharedCodec791"]:c11(),["SharedCodec792"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
