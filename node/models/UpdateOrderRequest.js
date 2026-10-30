import { d4510 as c0, d4508 as c14, d4509 as c15, d4511 as c17 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c1, d4399 as c16 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c2 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d933 as c3 } from '../descriptors/data/43.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5648 as c4, d5650 as c7, d5651 as c8, d5652 as c9, d5653 as c10, d5654 as c11, d5655 as c12, d5657 as c23, d5658 as c24, d5659 as c25, d5660 as c26, d5661 as c27, d5662 as c28, d5663 as c29, d5664 as c30 } from '../descriptors/data/255.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5575 as c5 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d946 as c6 } from '../descriptors/data/44.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d968 as c13 } from '../descriptors/data/45.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6035 as c18, d6036 as c19, d6037 as c20, d6038 as c21 } from '../descriptors/data/278.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5350 as c22 } from '../descriptors/data/240.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6104 as c31, d6105 as c32, d6106 as c33, d6107 as c34, d6109 as c35, d6110 as c36, d6111 as c37 } from '../descriptors/data/282.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4177 as c38 } from '../descriptors/data/173.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4177 as d4177 } from '../descriptors/data/173.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4177;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderChargeTaxAssignment"]:c3(),["OrderDeliveryDestinationRecipientRequest"]:c4(),["OrderInventoryRoutingSourceRequest"]:c5(),["OrderLineItemTaxAssignment"]:c6(),["OrderTaxCalculationRequest"]:c7(),["OrderTaxComponentRequest"]:c8(),["OrderTaxJurisdictionRequest"]:c9(),["OrderTaxLocationFullAddressRequest"]:c10(),["OrderTaxLocationPostalAddressRequest"]:c11(),["OrderTaxLocationRequest"]:c12(),["OrderTaxUpdateRequest"]:c13(),["SharedCodec0"]:c14(),["SharedCodec1"]:c15(),["SharedCodec1350"]:c16(),["SharedCodec1353"]:c17(),["SharedCodec1399"]:c18(),["SharedCodec1400"]:c19(),["SharedCodec1401"]:c20(),["SharedCodec1402"]:c21(),["SharedCodec219"]:c22(),["SharedCodec272"]:c23(),["SharedCodec273"]:c24(),["SharedCodec274"]:c25(),["SharedCodec275"]:c26(),["SharedCodec910"]:c27(),["SharedCodec911"]:c28(),["SharedCodec912"]:c29(),["SharedCodec913"]:c30(),["SharedCodec917"]:c31(),["SharedCodec918"]:c32(),["SharedCodec919"]:c33(),["SharedCodec920"]:c34(),["TaxCalculationRequestModel"]:c35(),["TaxComponentRequestModel"]:c36(),["TaxJurisdictionRequest"]:c37(),["UpdateOrderRequest"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
