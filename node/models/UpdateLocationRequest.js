import { d4232 as c0, d4233 as c1, d4234 as c2, d4235 as c3, d4236 as c4, d4237 as c5 } from '../descriptors/data/180.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2454 as c6 } from '../descriptors/data/98.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2454 as d2454 } from '../descriptors/data/98.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2454;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LocationAddressRequest"]:c0(),["LocationCoordinate"]:c1(),["SharedCodec1201"]:c2(),["SharedCodec1202"]:c3(),["SharedCodec1203"]:c4(),["SharedCodec1204"]:c5(),["UpdateLocationRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
