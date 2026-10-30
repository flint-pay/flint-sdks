import { d4408 as c0, d4409 as c1, d4398 as c4, d4400 as c11, d4401 as c12, d4399 as c13 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6364 as c2 } from '../descriptors/data/298.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6890 as c3, d6891 as c7, d6892 as c8, d6893 as c9, d6894 as c10 } from '../descriptors/data/327.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c5 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4603 as c6, d4602 as c31 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4424 as c14 } from '../descriptors/data/188.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4777 as c15 } from '../descriptors/data/209.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1473 as c16, d1474 as c17 } from '../descriptors/data/67.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1475 as c18 } from '../descriptors/data/68.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5028 as c19, d5029 as c20, d5030 as c21, d5031 as c22, d5032 as c24 } from '../descriptors/data/222.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5051 as c23, d5052 as c25, d5053 as c26 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5508 as c27, d5509 as c28, d5510 as c29 } from '../descriptors/data/247.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4606 as c30 } from '../descriptors/data/199.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4567 as c32 } from '../descriptors/data/197.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4330 as c33 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4221 as c34, d4222 as c35 } from '../descriptors/data/177.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4222 as d4222 } from '../descriptors/data/177.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4222;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTax"]:c6(),["SharedCodec1302"]:c7(),["SharedCodec1303"]:c8(),["SharedCodec1304"]:c9(),["SharedCodec1305"]:c10(),["SharedCodec1348"]:c11(),["SharedCodec1349"]:c12(),["SharedCodec1350"]:c13(),["SharedCodec1352"]:c14(),["SharedCodec1354"]:c15(),["SharedCodec1458"]:c16(),["SharedCodec1459"]:c17(),["SharedCodec1460"]:c18(),["SharedCodec250"]:c19(),["SharedCodec251"]:c20(),["SharedCodec252"]:c21(),["SharedCodec253"]:c22(),["SharedCodec254"]:c23(),["SharedCodec255"]:c24(),["SharedCodec256"]:c25(),["SharedCodec257"]:c26(),["SharedCodec672"]:c27(),["SharedCodec673"]:c28(),["SharedCodec674"]:c29(),["SharedCodec84"]:c30(),["SharedCodec85"]:c31(),["SubscriptionIntervalOption"]:c32(),["TextModifierRequest"]:c33(),["UpdateSubscriptionPlanLineItemRequest"]:c34(),["UpdateSubscriptionPlanRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
