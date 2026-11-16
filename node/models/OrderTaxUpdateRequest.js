import { d8177 as c0 } from '../descriptors/data/359.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c1 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9564 as c2 } from '../descriptors/data/439.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9572 as c3, d9574 as c11, d9582 as c25, d9583 as c26, d9584 as c27, d9585 as c28, d9586 as c29, d9587 as c30 } from '../descriptors/data/440.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9087 as c4, d9088 as c5, d9089 as c6 } from '../descriptors/data/409.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9090 as c7, d9091 as c8, d9092 as c9, d9093 as c10, d9095 as c12, d9096 as c13, d9097 as c14, d9098 as c15, d9099 as c16, d9100 as c17, d9101 as c18, d9102 as c19, d9103 as c20, d9104 as c21, d9105 as c22, d9106 as c23, d9107 as c24 } from '../descriptors/data/410.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8754 as c31 } from '../descriptors/data/393.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8012 as c32, d8013 as c33, d8014 as c34, d8015 as c35 } from '../descriptors/data/350.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9658 as c36 } from '../descriptors/data/444.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9116 as c37, d9117 as c38 } from '../descriptors/data/411.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9574 as d9574 } from '../descriptors/data/440.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9574;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1908"]:c12(),["SharedCodec1909"]:c13(),["SharedCodec1910"]:c14(),["SharedCodec1911"]:c15(),["SharedCodec1912"]:c16(),["SharedCodec1913"]:c17(),["SharedCodec1917"]:c18(),["SharedCodec1918"]:c19(),["SharedCodec1919"]:c20(),["SharedCodec1920"]:c21(),["SharedCodec1921"]:c22(),["SharedCodec1924"]:c23(),["SharedCodec1925"]:c24(),["SharedCodec1936"]:c25(),["SharedCodec1937"]:c26(),["SharedCodec1938"]:c27(),["SharedCodec1939"]:c28(),["SharedCodec1940"]:c29(),["SharedCodec1941"]:c30(),["SharedCodec211"]:c31(),["SharedCodec676"]:c32(),["SharedCodec677"]:c33(),["SharedCodec678"]:c34(),["SharedCodec679"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
