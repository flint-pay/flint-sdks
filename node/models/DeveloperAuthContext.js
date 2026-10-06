import { d748 as c0, d744 as c1, d745 as c2, d746 as c3, d747 as c4, d230 as c5 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d748 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d748;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperAuthContext"]:c0(),["SharedCodec241"]:c1(),["SharedCodec242"]:c2(),["SharedCodec243"]:c3(),["SharedCodec244"]:c4(),["SharedCodec59"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperAuthContext(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
