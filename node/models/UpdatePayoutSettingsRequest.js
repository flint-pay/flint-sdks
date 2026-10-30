import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6338 as c1, d6339 as c2, d6340 as c3, d6341 as c4 } from '../descriptors/data/297.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4555 as c5 } from '../descriptors/data/196.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4186 as c6 } from '../descriptors/data/174.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4186 as d4186 } from '../descriptors/data/174.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4186;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec1412"]:c1(),["SharedCodec1413"]:c2(),["SharedCodec1414"]:c3(),["SharedCodec1415"]:c4(),["SharedCodec62"]:c5(),["UpdatePayoutSettingsRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePayoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
