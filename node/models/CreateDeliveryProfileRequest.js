import { d195 as c0 } from '../descriptors/data/9.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5069 as c1 } from '../descriptors/data/224.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5072 as c2, d5081 as c4, d5082 as c5, d5083 as c6, d5084 as c7, d5085 as c8, d5086 as c9, d5087 as c10, d5088 as c11 } from '../descriptors/data/225.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c3 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5089 as c12, d5090 as c13, d5091 as c14, d5092 as c15, d5093 as c16, d5094 as c17 } from '../descriptors/data/226.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d195 as d195 } from '../descriptors/data/9.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d195;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec459"]:c4(),["SharedCodec460"]:c5(),["SharedCodec461"]:c6(),["SharedCodec462"]:c7(),["SharedCodec463"]:c8(),["SharedCodec464"]:c9(),["SharedCodec465"]:c10(),["SharedCodec466"]:c11(),["SharedCodec467"]:c12(),["SharedCodec472"]:c13(),["SharedCodec473"]:c14(),["SharedCodec474"]:c15(),["SharedCodec475"]:c16(),["SharedCodec476"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
