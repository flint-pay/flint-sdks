import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4514 as c1, d4516 as c2 } from '../descriptors/data/198.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4198 as c3, d4199 as c4, d4200 as c5, d4201 as c6, d4202 as c7, d4203 as c8, d4204 as c9, d4205 as c10 } from '../descriptors/data/178.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4206 as c11, d4207 as c12, d4211 as c15, d4212 as c16 } from '../descriptors/data/179.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4521 as c13 } from '../descriptors/data/199.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3926 as c14 } from '../descriptors/data/166.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4572 as c17, d4573 as c18, d4574 as c19 } from '../descriptors/data/202.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3144 as c20, d3145 as c21, d3146 as c22 } from '../descriptors/data/123.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4521 as d4521 } from '../descriptors/data/199.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4521;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderChargeTaxAssignment"]:c1(),["OrderLineItemTaxAssignment"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxJurisdictionRequest"]:c5(),["OrderTaxLocationFullAddressRequest"]:c6(),["OrderTaxLocationInputFullAddress"]:c7(),["OrderTaxLocationInputInferredFullAddress"]:c8(),["OrderTaxLocationInputInferredPostalCode"]:c9(),["OrderTaxLocationInputPostalCode"]:c10(),["OrderTaxLocationPostalAddressRequest"]:c11(),["OrderTaxLocationRequest"]:c12(),["OrderTaxUpdateRequest"]:c13(),["SharedCodec134"]:c14(),["SharedCodec977"]:c15(),["SharedCodec978"]:c16(),["SharedCodec981"]:c17(),["SharedCodec982"]:c18(),["SharedCodec983"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxJurisdiction"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
