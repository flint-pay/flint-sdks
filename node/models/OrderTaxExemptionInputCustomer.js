import { d1061 as c0 } from '../descriptors/data/52.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8074 as c1, d8075 as c2, d8076 as c3 } from '../descriptors/data/374.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1061 as d1061 } from '../descriptors/data/52.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxExemptionInputCustomer"]:c0(),["SharedCodec1488"]:c1(),["SharedCodec1489"]:c2(),["SharedCodec1490"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputCustomer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
