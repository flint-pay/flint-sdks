import { d7452 as c0, d7456 as c1, d7457 as c3, d7458 as c4, d7459 as c5, d7460 as c6, d7461 as c7, d7462 as c8, d7463 as c9, d7464 as c10, d7465 as c11 } from '../descriptors/data/339.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c2 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7466 as c12, d7467 as c13 } from '../descriptors/data/340.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7452 as d7452 } from '../descriptors/data/339.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7452;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec161"]:c3(),["SharedCodec162"]:c4(),["SharedCodec163"]:c5(),["SharedCodec164"]:c6(),["SharedCodec165"]:c7(),["SharedCodec166"]:c8(),["SharedCodec167"]:c9(),["SharedCodec168"]:c10(),["SharedCodec169"]:c11(),["SharedCodec170"]:c12(),["SharedCodec171"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
