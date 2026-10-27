import { d902 as c0 } from '../descriptors/data/39.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d902 as d902 } from '../descriptors/data/39.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d902;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolveOrderInventoryExceptionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolveOrderInventoryExceptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
