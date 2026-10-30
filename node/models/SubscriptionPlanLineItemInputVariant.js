import { d4398 as c0 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4603 as c2 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6893 as c3, d6894 as c4 } from '../descriptors/data/327.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5028 as c5, d5029 as c6, d5030 as c7, d5031 as c8, d5032 as c10 } from '../descriptors/data/222.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5051 as c9, d5052 as c11, d5053 as c12 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4093 as c13 } from '../descriptors/data/168.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4330 as c14 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4093 as d4093 } from '../descriptors/data/168.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4093;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec1304"]:c3(),["SharedCodec1305"]:c4(),["SharedCodec250"]:c5(),["SharedCodec251"]:c6(),["SharedCodec252"]:c7(),["SharedCodec253"]:c8(),["SharedCodec254"]:c9(),["SharedCodec255"]:c10(),["SharedCodec256"]:c11(),["SharedCodec257"]:c12(),["SubscriptionPlanLineItemInputVariant"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
