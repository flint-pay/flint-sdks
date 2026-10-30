import { d4398 as c0, d4399 as c4 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4618 as c2 } from '../descriptors/data/199.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d945 as c3 } from '../descriptors/data/44.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4511 as c5, d4505 as c20, d4506 as c21, d4507 as c22 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6028 as c6, d6029 as c7, d6030 as c8, d6031 as c9, d6032 as c10, d6033 as c11, d6034 as c13 } from '../descriptors/data/278.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5967 as c12 } from '../descriptors/data/274.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5031 as c14, d5032 as c16 } from '../descriptors/data/222.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5051 as c15, d5052 as c17, d5053 as c18 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4547 as c19 } from '../descriptors/data/195.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4330 as c23 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4168 as c24 } from '../descriptors/data/172.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4168 as d4168 } from '../descriptors/data/172.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTax"]:c2(),["OrderLineItemModifierRequest"]:c3(),["SharedCodec1350"]:c4(),["SharedCodec1353"]:c5(),["SharedCodec1382"]:c6(),["SharedCodec1383"]:c7(),["SharedCodec1384"]:c8(),["SharedCodec1385"]:c9(),["SharedCodec1386"]:c10(),["SharedCodec1387"]:c11(),["SharedCodec1388"]:c12(),["SharedCodec1389"]:c13(),["SharedCodec253"]:c14(),["SharedCodec254"]:c15(),["SharedCodec255"]:c16(),["SharedCodec256"]:c17(),["SharedCodec257"]:c18(),["SharedCodec602"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxJurisdiction"]:c22(),["TextModifierRequest"]:c23(),["UpdateLineItemRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
