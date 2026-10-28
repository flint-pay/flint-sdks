import { d3013 as c0 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4531 as c1, d4533 as c2 } from '../descriptors/data/199.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4213 as c3, d4214 as c4, d4215 as c5, d4216 as c6, d4217 as c7, d4218 as c8, d4219 as c9, d4220 as c10 } from '../descriptors/data/179.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4221 as c11, d4222 as c12, d4226 as c15, d4227 as c16 } from '../descriptors/data/180.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4537 as c13 } from '../descriptors/data/200.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3941 as c14 } from '../descriptors/data/167.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4585 as c17, d4586 as c18, d4587 as c19 } from '../descriptors/data/203.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3158 as c20, d3159 as c21, d3160 as c22 } from '../descriptors/data/125.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4537 as d4537 } from '../descriptors/data/200.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4537;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderChargeTaxAssignment"]:c1(),["OrderLineItemTaxAssignment"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxJurisdictionRequest"]:c5(),["OrderTaxLocationFullAddressRequest"]:c6(),["OrderTaxLocationInputFullAddress"]:c7(),["OrderTaxLocationInputInferredFullAddress"]:c8(),["OrderTaxLocationInputInferredPostalCode"]:c9(),["OrderTaxLocationInputPostalCode"]:c10(),["OrderTaxLocationPostalAddressRequest"]:c11(),["OrderTaxLocationRequest"]:c12(),["OrderTaxUpdateRequest"]:c13(),["SharedCodec139"]:c14(),["SharedCodec982"]:c15(),["SharedCodec983"]:c16(),["SharedCodec986"]:c17(),["SharedCodec987"]:c18(),["SharedCodec988"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxJurisdiction"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
