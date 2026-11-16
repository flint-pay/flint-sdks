import { d226 as c0 } from '../descriptors/data/10.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7167 as c1 } from '../descriptors/data/323.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6744 as c2 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d226 as d226 } from '../descriptors/data/10.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d226;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryLocationSetRequest"]:c0(),["DeliveryLocationSetConfiguration"]:c1(),["MetadataRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryLocationSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
