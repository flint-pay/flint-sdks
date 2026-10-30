import { d4398 as c0 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4603 as c2, d4602 as c19 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6891 as c3, d6892 as c4, d6893 as c5, d6894 as c6 } from '../descriptors/data/327.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1473 as c7, d1474 as c8 } from '../descriptors/data/67.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1475 as c9 } from '../descriptors/data/68.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5028 as c10, d5029 as c11, d5030 as c12, d5031 as c13, d5032 as c15 } from '../descriptors/data/222.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5051 as c14, d5052 as c16, d5053 as c17 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4606 as c18 } from '../descriptors/data/199.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4330 as c20 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4221 as c21 } from '../descriptors/data/177.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4221 as d4221 } from '../descriptors/data/177.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4221;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec1302"]:c3(),["SharedCodec1303"]:c4(),["SharedCodec1304"]:c5(),["SharedCodec1305"]:c6(),["SharedCodec1458"]:c7(),["SharedCodec1459"]:c8(),["SharedCodec1460"]:c9(),["SharedCodec250"]:c10(),["SharedCodec251"]:c11(),["SharedCodec252"]:c12(),["SharedCodec253"]:c13(),["SharedCodec254"]:c14(),["SharedCodec255"]:c15(),["SharedCodec256"]:c16(),["SharedCodec257"]:c17(),["SharedCodec84"]:c18(),["SharedCodec85"]:c19(),["TextModifierRequest"]:c20(),["UpdateSubscriptionPlanLineItemRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
