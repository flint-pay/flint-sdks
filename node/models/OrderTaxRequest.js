import { d8267 as c0 } from '../descriptors/data/362.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9174 as c1, d9177 as c3, d9178 as c4, d9179 as c5 } from '../descriptors/data/412.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c2 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9180 as c6, d9181 as c7, d9182 as c8, d9183 as c9, d9184 as c10, d9185 as c11, d9186 as c12, d9187 as c13, d9188 as c14, d9189 as c15, d9190 as c16, d9191 as c17, d9192 as c18, d9193 as c19, d9194 as c20, d9195 as c21, d9196 as c22, d9197 as c23, d9198 as c24, d9199 as c25, d9200 as c26, d9201 as c27 } from '../descriptors/data/413.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8844 as c28 } from '../descriptors/data/396.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8102 as c29, d8103 as c30, d8104 as c31, d8105 as c32 } from '../descriptors/data/353.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9206 as c33, d9207 as c34 } from '../descriptors/data/414.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9184 as d9184 } from '../descriptors/data/413.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9184;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1953"]:c11(),["SharedCodec1954"]:c12(),["SharedCodec1955"]:c13(),["SharedCodec1956"]:c14(),["SharedCodec1957"]:c15(),["SharedCodec1958"]:c16(),["SharedCodec1962"]:c17(),["SharedCodec1963"]:c18(),["SharedCodec1964"]:c19(),["SharedCodec1965"]:c20(),["SharedCodec1966"]:c21(),["SharedCodec1969"]:c22(),["SharedCodec1970"]:c23(),["SharedCodec1977"]:c24(),["SharedCodec1978"]:c25(),["SharedCodec1979"]:c26(),["SharedCodec1980"]:c27(),["SharedCodec221"]:c28(),["SharedCodec699"]:c29(),["SharedCodec700"]:c30(),["SharedCodec701"]:c31(),["SharedCodec702"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
