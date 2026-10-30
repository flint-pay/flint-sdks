import { d469 as c0 } from '../descriptors/data/25.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5072 as c1, d5081 as c2, d5082 as c3, d5085 as c4, d5086 as c5, d5087 as c6 } from '../descriptors/data/225.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5090 as c7, d5091 as c8, d5092 as c9, d5093 as c10, d5094 as c11 } from '../descriptors/data/226.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d469 as d469 } from '../descriptors/data/25.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d469;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec459"]:c2(),["SharedCodec460"]:c3(),["SharedCodec463"]:c4(),["SharedCodec464"]:c5(),["SharedCodec465"]:c6(),["SharedCodec472"]:c7(),["SharedCodec473"]:c8(),["SharedCodec474"]:c9(),["SharedCodec475"]:c10(),["SharedCodec476"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
