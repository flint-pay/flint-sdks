import { d354 as c0 } from '../descriptors/data/21.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6744 as c1 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8357 as c2 } from '../descriptors/data/392.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d354 as d354 } from '../descriptors/data/21.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d354;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnRequest"]:c0(),["MetadataRequest"]:c1(),["ReturnLineItemRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
