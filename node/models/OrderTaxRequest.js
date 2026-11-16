import { d8177 as c0 } from '../descriptors/data/359.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9084 as c1, d9087 as c3, d9088 as c4, d9089 as c5 } from '../descriptors/data/409.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c2 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9090 as c6, d9091 as c7, d9092 as c8, d9093 as c9, d9094 as c10, d9095 as c11, d9096 as c12, d9097 as c13, d9098 as c14, d9099 as c15, d9100 as c16, d9101 as c17, d9102 as c18, d9103 as c19, d9104 as c20, d9105 as c21, d9106 as c22, d9107 as c23, d9108 as c24, d9109 as c25, d9110 as c26, d9111 as c27 } from '../descriptors/data/410.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8754 as c28 } from '../descriptors/data/393.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8012 as c29, d8013 as c30, d8014 as c31, d8015 as c32 } from '../descriptors/data/350.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9116 as c33, d9117 as c34 } from '../descriptors/data/411.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9094 as d9094 } from '../descriptors/data/410.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9094;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1908"]:c11(),["SharedCodec1909"]:c12(),["SharedCodec1910"]:c13(),["SharedCodec1911"]:c14(),["SharedCodec1912"]:c15(),["SharedCodec1913"]:c16(),["SharedCodec1917"]:c17(),["SharedCodec1918"]:c18(),["SharedCodec1919"]:c19(),["SharedCodec1920"]:c20(),["SharedCodec1921"]:c21(),["SharedCodec1924"]:c22(),["SharedCodec1925"]:c23(),["SharedCodec1932"]:c24(),["SharedCodec1933"]:c25(),["SharedCodec1934"]:c26(),["SharedCodec1935"]:c27(),["SharedCodec211"]:c28(),["SharedCodec676"]:c29(),["SharedCodec677"]:c30(),["SharedCodec678"]:c31(),["SharedCodec679"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
