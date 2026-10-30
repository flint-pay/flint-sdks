import { d466 as c0 } from '../descriptors/data/25.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5072 as c1, d5081 as c2, d5082 as c3 } from '../descriptors/data/225.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5090 as c4, d5091 as c5, d5092 as c6, d5093 as c7, d5094 as c8 } from '../descriptors/data/226.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d466 as d466 } from '../descriptors/data/25.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d466;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec459"]:c2(),["SharedCodec460"]:c3(),["SharedCodec472"]:c4(),["SharedCodec473"]:c5(),["SharedCodec474"]:c6(),["SharedCodec475"]:c7(),["SharedCodec476"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
