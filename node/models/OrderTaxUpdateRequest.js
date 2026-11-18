import { d8428 as c0 } from '../descriptors/data/369.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c1 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9860 as c2 } from '../descriptors/data/451.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9868 as c3, d9870 as c11 } from '../descriptors/data/452.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9332 as c4, d9333 as c5, d9334 as c6, d9335 as c7, d9336 as c8, d9337 as c9, d9338 as c10, d9340 as c12, d9341 as c13, d9342 as c14, d9343 as c15, d9344 as c16, d9345 as c17, d9346 as c18, d9347 as c19, d9348 as c20, d9349 as c21, d9350 as c22 } from '../descriptors/data/419.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9351 as c23, d9352 as c24, d9361 as c37, d9362 as c38 } from '../descriptors/data/420.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9878 as c25, d9879 as c26, d9880 as c27, d9881 as c28, d9882 as c29, d9883 as c30 } from '../descriptors/data/453.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8994 as c31 } from '../descriptors/data/402.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8261 as c32, d8262 as c33, d8263 as c34, d8264 as c35 } from '../descriptors/data/360.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9954 as c36 } from '../descriptors/data/456.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9870 as d9870 } from '../descriptors/data/452.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9870;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1971"]:c12(),["SharedCodec1972"]:c13(),["SharedCodec1973"]:c14(),["SharedCodec1974"]:c15(),["SharedCodec1975"]:c16(),["SharedCodec1976"]:c17(),["SharedCodec1980"]:c18(),["SharedCodec1981"]:c19(),["SharedCodec1982"]:c20(),["SharedCodec1983"]:c21(),["SharedCodec1984"]:c22(),["SharedCodec1987"]:c23(),["SharedCodec1988"]:c24(),["SharedCodec2000"]:c25(),["SharedCodec2001"]:c26(),["SharedCodec2002"]:c27(),["SharedCodec2003"]:c28(),["SharedCodec2004"]:c29(),["SharedCodec2005"]:c30(),["SharedCodec216"]:c31(),["SharedCodec682"]:c32(),["SharedCodec683"]:c33(),["SharedCodec684"]:c34(),["SharedCodec685"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
