import { d6915 as c0, d6918 as c2, d6919 as c3, d6920 as c4 } from '../descriptors/data/315.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c1 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6921 as c5, d6922 as c6, d6923 as c7, d6924 as c8, d6925 as c9, d6926 as c10, d6927 as c11, d6928 as c12, d6929 as c13, d6930 as c14, d6931 as c15, d6932 as c16, d6937 as c18, d6938 as c19 } from '../descriptors/data/316.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6581 as c17 } from '../descriptors/data/299.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6924 as d6924 } from '../descriptors/data/316.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6924;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryChargeTaxCalculationRequestModel"]:c0(),["MoneyValue"]:c1(),["OrderTaxCalculationRequest"]:c2(),["OrderTaxComponentRequest"]:c3(),["OrderTaxJurisdictionRequest"]:c4(),["OrderTaxLocationFullAddressRequest"]:c5(),["OrderTaxLocationPostalAddressRequest"]:c6(),["OrderTaxLocationRequest"]:c7(),["OrderTaxRequest"]:c8(),["SharedCodec1029"]:c9(),["SharedCodec1030"]:c10(),["SharedCodec1031"]:c11(),["SharedCodec1032"]:c12(),["SharedCodec1033"]:c13(),["SharedCodec1034"]:c14(),["SharedCodec1035"]:c15(),["SharedCodec1036"]:c16(),["SharedCodec258"]:c17(),["TaxComponentRequestModel"]:c18(),["TaxJurisdictionRequestModel"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
