import { d7451 as c0 } from '../descriptors/data/338.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7452 as c1, d7456 as c2, d7457 as c4, d7458 as c5, d7459 as c6, d7460 as c7, d7461 as c8, d7462 as c9, d7463 as c10, d7464 as c11, d7465 as c12 } from '../descriptors/data/339.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c3 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7466 as c13, d7467 as c14 } from '../descriptors/data/340.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7451 as d7451 } from '../descriptors/data/338.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7451;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec161"]:c4(),["SharedCodec162"]:c5(),["SharedCodec163"]:c6(),["SharedCodec164"]:c7(),["SharedCodec165"]:c8(),["SharedCodec166"]:c9(),["SharedCodec167"]:c10(),["SharedCodec168"]:c11(),["SharedCodec169"]:c12(),["SharedCodec170"]:c13(),["SharedCodec171"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
