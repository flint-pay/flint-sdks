import { d564 as c0, d565 as c1 } from '../descriptors/data/32.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d571 as c2, d572 as c3 } from '../descriptors/data/33.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c4 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7461 as c5, d7463 as c6, d7464 as c7 } from '../descriptors/data/339.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7467 as c8 } from '../descriptors/data/340.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6134 as c9, d6135 as c10, d6136 as c11, d6138 as c12, d6139 as c13, d6140 as c14 } from '../descriptors/data/265.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d571 as d571 } from '../descriptors/data/33.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d571;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationResponse"]:c2(),["DeliveryRateEvaluationWindow"]:c3(),["MoneyValue"]:c4(),["SharedCodec165"]:c5(),["SharedCodec167"]:c6(),["SharedCodec168"]:c7(),["SharedCodec171"]:c8(),["SharedCodec787"]:c9(),["SharedCodec788"]:c10(),["SharedCodec789"]:c11(),["SharedCodec790"]:c12(),["SharedCodec791"]:c13(),["SharedCodec792"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
