import { d4398 as c0 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4603 as c2, d4602 as c12 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5028 as c3, d5029 as c4, d5030 as c5, d5031 as c6, d5032 as c8 } from '../descriptors/data/222.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5051 as c7, d5052 as c9, d5053 as c10 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4606 as c11 } from '../descriptors/data/199.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4092 as c13 } from '../descriptors/data/168.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4330 as c14 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4092 as d4092 } from '../descriptors/data/168.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4092;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec250"]:c3(),["SharedCodec251"]:c4(),["SharedCodec252"]:c5(),["SharedCodec253"]:c6(),["SharedCodec254"]:c7(),["SharedCodec255"]:c8(),["SharedCodec256"]:c9(),["SharedCodec257"]:c10(),["SharedCodec84"]:c11(),["SharedCodec85"]:c12(),["SubscriptionPlanLineItemInputCustom"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemInputCustom(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
