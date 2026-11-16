import { d7712 as c0 } from '../descriptors/data/356.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7712 as d7712 } from '../descriptors/data/356.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7712;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnShipmentLineItemAllocationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnShipmentLineItemAllocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
