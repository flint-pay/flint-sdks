import { d9042 as c0 } from '../descriptors/data/433.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8322 as c1, d8323 as c2, d8324 as c3, d8325 as c4, d8326 as c5 } from '../descriptors/data/391.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9042 as d9042 } from '../descriptors/data/433.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9042;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceRequest"]:c0(),["SharedCodec1885"]:c1(),["SharedCodec1886"]:c2(),["SharedCodec1887"]:c3(),["SharedCodec1888"]:c4(),["SharedCodec1889"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
