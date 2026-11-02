import { d1293 as c0 } from '../descriptors/data/61.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5745 as c1, d5746 as c2, d5747 as c3, d5748 as c4, d5749 as c5 } from '../descriptors/data/264.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1293 as d1293 } from '../descriptors/data/61.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec1244"]:c1(),["SharedCodec1245"]:c2(),["SharedCodec1246"]:c3(),["SharedCodec1247"]:c4(),["SharedCodec1248"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
