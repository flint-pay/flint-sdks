import { d5069 as c0 } from '../descriptors/data/224.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5072 as c1, d5081 as c5, d5082 as c6, d5083 as c7, d5084 as c8, d5085 as c9, d5086 as c10, d5087 as c11, d5088 as c12 } from '../descriptors/data/225.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4399 as c2 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4511 as c3 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4842 as c4 } from '../descriptors/data/212.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5089 as c13, d5090 as c14, d5091 as c15, d5092 as c16, d5093 as c17, d5094 as c18 } from '../descriptors/data/226.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4153 as c19 } from '../descriptors/data/171.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4153 as d4153 } from '../descriptors/data/171.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4153;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1350"]:c2(),["SharedCodec1353"]:c3(),["SharedCodec1360"]:c4(),["SharedCodec459"]:c5(),["SharedCodec460"]:c6(),["SharedCodec461"]:c7(),["SharedCodec462"]:c8(),["SharedCodec463"]:c9(),["SharedCodec464"]:c10(),["SharedCodec465"]:c11(),["SharedCodec466"]:c12(),["SharedCodec467"]:c13(),["SharedCodec472"]:c14(),["SharedCodec473"]:c15(),["SharedCodec474"]:c16(),["SharedCodec475"]:c17(),["SharedCodec476"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
