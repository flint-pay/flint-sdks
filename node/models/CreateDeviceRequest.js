import { d241 as c0 } from '../descriptors/data/11.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c1 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d241 as d241 } from '../descriptors/data/11.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d241;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeviceRequest"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeviceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
