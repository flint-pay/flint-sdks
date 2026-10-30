import { d5072 as c0 } from '../descriptors/data/225.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5090 as c1, d5091 as c2, d5092 as c3, d5093 as c4, d5094 as c5 } from '../descriptors/data/226.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5072 as d5072 } from '../descriptors/data/225.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5072;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileOriginPolicyRequest"]:c0(),["SharedCodec472"]:c1(),["SharedCodec473"]:c2(),["SharedCodec474"]:c3(),["SharedCodec475"]:c4(),["SharedCodec476"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileOriginPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
