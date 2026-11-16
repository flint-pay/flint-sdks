import { d7956 as c0, d7957 as c1, d7958 as c2 } from '../descriptors/data/368.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6485 as c3 } from '../descriptors/data/280.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6485 as d6485 } from '../descriptors/data/280.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6485;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2435"]:c0(),["SharedCodec2436"]:c1(),["SharedCodec2437"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
