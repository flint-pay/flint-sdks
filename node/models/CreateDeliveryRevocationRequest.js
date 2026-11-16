import { d236 as c0 } from '../descriptors/data/11.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7494 as c1, d7501 as c2, d7502 as c3, d7503 as c4 } from '../descriptors/data/341.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7504 as c5 } from '../descriptors/data/342.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d236 as d236 } from '../descriptors/data/11.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d236;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRevocationRequest"]:c0(),["CreateDeliveryRevocationTarget"]:c1(),["SharedCodec345"]:c2(),["SharedCodec346"]:c3(),["SharedCodec347"]:c4(),["SharedCodec348"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRevocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
