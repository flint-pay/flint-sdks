import { d6279 as c0 } from '../descriptors/data/285.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c1 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7670 as c2 } from '../descriptors/data/365.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7678 as c3, d7682 as c11, d7696 as c25, d7697 as c26 } from '../descriptors/data/366.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7195 as c4, d7196 as c5, d7197 as c6, d7198 as c7, d7199 as c8 } from '../descriptors/data/335.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7200 as c9, d7201 as c10, d7203 as c12, d7204 as c13, d7205 as c14, d7206 as c15, d7207 as c16, d7208 as c17, d7209 as c18, d7210 as c19, d7211 as c20, d7212 as c21, d7213 as c22, d7214 as c23, d7215 as c24, d7224 as c37 } from '../descriptors/data/336.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7698 as c27, d7699 as c28, d7700 as c29, d7701 as c30 } from '../descriptors/data/367.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6862 as c31 } from '../descriptors/data/319.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6117 as c32, d6118 as c33, d6119 as c34, d6120 as c35 } from '../descriptors/data/276.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7776 as c36 } from '../descriptors/data/370.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7225 as c38 } from '../descriptors/data/337.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7682 as d7682 } from '../descriptors/data/366.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7682;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1094"]:c12(),["SharedCodec1095"]:c13(),["SharedCodec1096"]:c14(),["SharedCodec1097"]:c15(),["SharedCodec1098"]:c16(),["SharedCodec1099"]:c17(),["SharedCodec1100"]:c18(),["SharedCodec1101"]:c19(),["SharedCodec1102"]:c20(),["SharedCodec1103"]:c21(),["SharedCodec1104"]:c22(),["SharedCodec1105"]:c23(),["SharedCodec1106"]:c24(),["SharedCodec1111"]:c25(),["SharedCodec1112"]:c26(),["SharedCodec1113"]:c27(),["SharedCodec1114"]:c28(),["SharedCodec1115"]:c29(),["SharedCodec1116"]:c30(),["SharedCodec141"]:c31(),["SharedCodec488"]:c32(),["SharedCodec489"]:c33(),["SharedCodec490"]:c34(),["SharedCodec491"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
