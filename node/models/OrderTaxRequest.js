import { d7154 as c0 } from '../descriptors/data/326.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8061 as c1, d8064 as c3 } from '../descriptors/data/376.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c2 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8065 as c4, d8066 as c5, d8067 as c6, d8068 as c7, d8069 as c8, d8070 as c9, d8071 as c10, d8072 as c11, d8073 as c12, d8074 as c13, d8075 as c14, d8076 as c15, d8077 as c16, d8078 as c17, d8079 as c18, d8080 as c19, d8081 as c20, d8082 as c21, d8083 as c22, d8084 as c23 } from '../descriptors/data/377.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8085 as c24, d8086 as c25, d8087 as c26, d8088 as c27, d8093 as c33, d8094 as c34 } from '../descriptors/data/378.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7731 as c28 } from '../descriptors/data/360.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6989 as c29, d6990 as c30, d6991 as c31, d6992 as c32 } from '../descriptors/data/317.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8071 as d8071 } from '../descriptors/data/377.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8071;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1486"]:c11(),["SharedCodec1487"]:c12(),["SharedCodec1488"]:c13(),["SharedCodec1489"]:c14(),["SharedCodec1490"]:c15(),["SharedCodec1491"]:c16(),["SharedCodec1492"]:c17(),["SharedCodec1493"]:c18(),["SharedCodec1494"]:c19(),["SharedCodec1495"]:c20(),["SharedCodec1496"]:c21(),["SharedCodec1497"]:c22(),["SharedCodec1498"]:c23(),["SharedCodec1499"]:c24(),["SharedCodec1500"]:c25(),["SharedCodec1501"]:c26(),["SharedCodec1502"]:c27(),["SharedCodec175"]:c28(),["SharedCodec614"]:c29(),["SharedCodec615"]:c30(),["SharedCodec616"]:c31(),["SharedCodec617"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
