import { d5556 as c0 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7354 as c1 } from '../descriptors/data/343.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7359 as c2, d7363 as c9, d7374 as c14, d7375 as c15, d7376 as c16, d7377 as c17, d7378 as c18, d7379 as c19 } from '../descriptors/data/344.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6918 as c3, d6919 as c4, d6920 as c5 } from '../descriptors/data/315.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6921 as c6, d6922 as c7, d6923 as c8, d6925 as c10, d6926 as c11, d6927 as c12, d6928 as c13, d6937 as c22, d6938 as c23 } from '../descriptors/data/316.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6581 as c20 } from '../descriptors/data/299.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7448 as c21 } from '../descriptors/data/349.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7363 as d7363 } from '../descriptors/data/344.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7363;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderChargeTaxAssignment"]:c1(),["OrderLineItemTaxAssignment"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxJurisdictionRequest"]:c5(),["OrderTaxLocationFullAddressRequest"]:c6(),["OrderTaxLocationPostalAddressRequest"]:c7(),["OrderTaxLocationRequest"]:c8(),["OrderTaxUpdateRequest"]:c9(),["SharedCodec1029"]:c10(),["SharedCodec1030"]:c11(),["SharedCodec1031"]:c12(),["SharedCodec1032"]:c13(),["SharedCodec1037"]:c14(),["SharedCodec1038"]:c15(),["SharedCodec1039"]:c16(),["SharedCodec1040"]:c17(),["SharedCodec1041"]:c18(),["SharedCodec1042"]:c19(),["SharedCodec258"]:c20(),["TaxCalculationRequestModel"]:c21(),["TaxComponentRequestModel"]:c22(),["TaxJurisdictionRequestModel"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
