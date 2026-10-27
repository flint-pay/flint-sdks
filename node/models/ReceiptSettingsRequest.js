import { d5056 as c0 } from '../descriptors/data/231.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5056 as d5056 } from '../descriptors/data/231.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5056;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReceiptSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiptSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
