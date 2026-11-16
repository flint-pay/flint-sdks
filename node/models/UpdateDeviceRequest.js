import { d6746 as c0, d6747 as c1, d6745 as c2 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6476 as c3 } from '../descriptors/data/280.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6476 as d6476 } from '../descriptors/data/280.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6476;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2404"]:c0(),["SharedCodec2405"]:c1(),["SharedCodec2406"]:c2(),["UpdateDeviceRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeviceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
