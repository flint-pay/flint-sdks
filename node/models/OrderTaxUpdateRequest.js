import { d7154 as c0 } from '../descriptors/data/326.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8541 as c2 } from '../descriptors/data/406.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8549 as c3, d8551 as c11, d8559 as c25, d8560 as c26, d8561 as c27, d8562 as c28, d8563 as c29, d8564 as c30 } from '../descriptors/data/407.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8064 as c4 } from '../descriptors/data/376.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8065 as c5, d8066 as c6, d8067 as c7, d8068 as c8, d8069 as c9, d8070 as c10, d8072 as c12, d8073 as c13, d8074 as c14, d8075 as c15, d8076 as c16, d8077 as c17, d8078 as c18, d8079 as c19, d8080 as c20, d8081 as c21, d8082 as c22, d8083 as c23, d8084 as c24 } from '../descriptors/data/377.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7731 as c31 } from '../descriptors/data/360.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6989 as c32, d6990 as c33, d6991 as c34, d6992 as c35 } from '../descriptors/data/317.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8635 as c36 } from '../descriptors/data/410.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8093 as c37, d8094 as c38 } from '../descriptors/data/378.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8551 as d8551 } from '../descriptors/data/407.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8551;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1486"]:c12(),["SharedCodec1487"]:c13(),["SharedCodec1488"]:c14(),["SharedCodec1489"]:c15(),["SharedCodec1490"]:c16(),["SharedCodec1491"]:c17(),["SharedCodec1492"]:c18(),["SharedCodec1493"]:c19(),["SharedCodec1494"]:c20(),["SharedCodec1495"]:c21(),["SharedCodec1496"]:c22(),["SharedCodec1497"]:c23(),["SharedCodec1498"]:c24(),["SharedCodec1503"]:c25(),["SharedCodec1504"]:c26(),["SharedCodec1505"]:c27(),["SharedCodec1506"]:c28(),["SharedCodec1507"]:c29(),["SharedCodec1508"]:c30(),["SharedCodec175"]:c31(),["SharedCodec614"]:c32(),["SharedCodec615"]:c33(),["SharedCodec616"]:c34(),["SharedCodec617"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
