import { d6279 as c0 } from '../descriptors/data/285.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7192 as c1, d7195 as c3, d7196 as c4, d7197 as c5, d7198 as c6, d7199 as c7 } from '../descriptors/data/335.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c2 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7200 as c8, d7201 as c9, d7202 as c10, d7203 as c11, d7204 as c12, d7205 as c13, d7206 as c14, d7207 as c15, d7208 as c16, d7209 as c17, d7210 as c18, d7211 as c19, d7212 as c20, d7213 as c21, d7214 as c22, d7215 as c23, d7216 as c24, d7217 as c25, d7218 as c26, d7219 as c27, d7224 as c33 } from '../descriptors/data/336.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6862 as c28 } from '../descriptors/data/319.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6117 as c29, d6118 as c30, d6119 as c31, d6120 as c32 } from '../descriptors/data/276.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7225 as c34 } from '../descriptors/data/337.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7202 as d7202 } from '../descriptors/data/336.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7202;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1094"]:c11(),["SharedCodec1095"]:c12(),["SharedCodec1096"]:c13(),["SharedCodec1097"]:c14(),["SharedCodec1098"]:c15(),["SharedCodec1099"]:c16(),["SharedCodec1100"]:c17(),["SharedCodec1101"]:c18(),["SharedCodec1102"]:c19(),["SharedCodec1103"]:c20(),["SharedCodec1104"]:c21(),["SharedCodec1105"]:c22(),["SharedCodec1106"]:c23(),["SharedCodec1107"]:c24(),["SharedCodec1108"]:c25(),["SharedCodec1109"]:c26(),["SharedCodec1110"]:c27(),["SharedCodec141"]:c28(),["SharedCodec488"]:c29(),["SharedCodec489"]:c30(),["SharedCodec490"]:c31(),["SharedCodec491"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
