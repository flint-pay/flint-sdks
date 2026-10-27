import { d4194 as c0, d4191 as c3, d4195 as c4, d4196 as c5, d4197 as c6, d4198 as c8, d4199 as c9, d4200 as c10, d4201 as c11, d4202 as c12, d4203 as c13, d4204 as c14, d4205 as c15, d4192 as c24, d4193 as c25 } from '../descriptors/data/178.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c1 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4514 as c2, d4516 as c7 } from '../descriptors/data/198.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4206 as c16, d4207 as c17, d4209 as c22, d4210 as c23, d4211 as c26, d4212 as c27 } from '../descriptors/data/179.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4521 as c18 } from '../descriptors/data/199.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4542 as c19, d4543 as c20 } from '../descriptors/data/200.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3926 as c21 } from '../descriptors/data/166.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4572 as c28, d4573 as c29, d4574 as c30 } from '../descriptors/data/202.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3144 as c31, d3145 as c32, d3146 as c33 } from '../descriptors/data/123.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2452 as c34 } from '../descriptors/data/97.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2452 as d2452 } from '../descriptors/data/97.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2452;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderTip"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderDeliveryDestinationAddressRequest"]:c3(),["OrderDeliveryDestinationRecipientRequest"]:c4(),["OrderDeliveryDestinationRequest"]:c5(),["OrderInventoryRoutingSourceRequest"]:c6(),["OrderLineItemTaxAssignment"]:c7(),["OrderTaxCalculationRequest"]:c8(),["OrderTaxComponentRequest"]:c9(),["OrderTaxJurisdictionRequest"]:c10(),["OrderTaxLocationFullAddressRequest"]:c11(),["OrderTaxLocationInputFullAddress"]:c12(),["OrderTaxLocationInputInferredFullAddress"]:c13(),["OrderTaxLocationInputInferredPostalCode"]:c14(),["OrderTaxLocationInputPostalCode"]:c15(),["OrderTaxLocationPostalAddressRequest"]:c16(),["OrderTaxLocationRequest"]:c17(),["OrderTaxUpdateRequest"]:c18(),["SharedCodec1197"]:c19(),["SharedCodec1198"]:c20(),["SharedCodec134"]:c21(),["SharedCodec175"]:c22(),["SharedCodec176"]:c23(),["SharedCodec968"]:c24(),["SharedCodec969"]:c25(),["SharedCodec977"]:c26(),["SharedCodec978"]:c27(),["SharedCodec981"]:c28(),["SharedCodec982"]:c29(),["SharedCodec983"]:c30(),["TaxCalculationRequest"]:c31(),["TaxComponentRequest"]:c32(),["TaxJurisdiction"]:c33(),["UpdateOrderRequest"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
