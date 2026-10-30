import { d319 as c0 } from '../descriptors/data/19.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4408 as c1, d4409 as c2, d4398 as c5 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6364 as c3 } from '../descriptors/data/298.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6890 as c4, d6891 as c8, d6892 as c9, d6893 as c10, d6894 as c11 } from '../descriptors/data/327.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c6 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4603 as c7, d4602 as c27 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1452 as c12, d1453 as c13 } from '../descriptors/data/66.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1454 as c14 } from '../descriptors/data/67.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5028 as c15, d5029 as c16, d5030 as c17, d5031 as c18, d5032 as c20 } from '../descriptors/data/222.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5051 as c19, d5052 as c21, d5053 as c22 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5508 as c23, d5509 as c24, d5510 as c25 } from '../descriptors/data/247.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4606 as c26 } from '../descriptors/data/199.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4567 as c28 } from '../descriptors/data/197.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4094 as c29 } from '../descriptors/data/168.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4330 as c30 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d319 as d319 } from '../descriptors/data/19.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTax"]:c7(),["SharedCodec1302"]:c8(),["SharedCodec1303"]:c9(),["SharedCodec1304"]:c10(),["SharedCodec1305"]:c11(),["SharedCodec1306"]:c12(),["SharedCodec1307"]:c13(),["SharedCodec1308"]:c14(),["SharedCodec250"]:c15(),["SharedCodec251"]:c16(),["SharedCodec252"]:c17(),["SharedCodec253"]:c18(),["SharedCodec254"]:c19(),["SharedCodec255"]:c20(),["SharedCodec256"]:c21(),["SharedCodec257"]:c22(),["SharedCodec672"]:c23(),["SharedCodec673"]:c24(),["SharedCodec674"]:c25(),["SharedCodec84"]:c26(),["SharedCodec85"]:c27(),["SubscriptionIntervalOption"]:c28(),["SubscriptionPlanLineItemRequest"]:c29(),["TextModifierRequest"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
