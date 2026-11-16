import { d8267 as c0 } from '../descriptors/data/362.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c1 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9654 as c2 } from '../descriptors/data/442.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9662 as c3, d9664 as c11, d9672 as c25, d9673 as c26, d9674 as c27, d9675 as c28, d9676 as c29, d9677 as c30 } from '../descriptors/data/443.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9177 as c4, d9178 as c5, d9179 as c6 } from '../descriptors/data/412.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9180 as c7, d9181 as c8, d9182 as c9, d9183 as c10, d9185 as c12, d9186 as c13, d9187 as c14, d9188 as c15, d9189 as c16, d9190 as c17, d9191 as c18, d9192 as c19, d9193 as c20, d9194 as c21, d9195 as c22, d9196 as c23, d9197 as c24 } from '../descriptors/data/413.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8844 as c31 } from '../descriptors/data/396.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8102 as c32, d8103 as c33, d8104 as c34, d8105 as c35 } from '../descriptors/data/353.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9748 as c36 } from '../descriptors/data/447.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9206 as c37, d9207 as c38 } from '../descriptors/data/414.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9664 as d9664 } from '../descriptors/data/443.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9664;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1953"]:c12(),["SharedCodec1954"]:c13(),["SharedCodec1955"]:c14(),["SharedCodec1956"]:c15(),["SharedCodec1957"]:c16(),["SharedCodec1958"]:c17(),["SharedCodec1962"]:c18(),["SharedCodec1963"]:c19(),["SharedCodec1964"]:c20(),["SharedCodec1965"]:c21(),["SharedCodec1966"]:c22(),["SharedCodec1969"]:c23(),["SharedCodec1970"]:c24(),["SharedCodec1981"]:c25(),["SharedCodec1982"]:c26(),["SharedCodec1983"]:c27(),["SharedCodec1984"]:c28(),["SharedCodec1985"]:c29(),["SharedCodec1986"]:c30(),["SharedCodec221"]:c31(),["SharedCodec699"]:c32(),["SharedCodec700"]:c33(),["SharedCodec701"]:c34(),["SharedCodec702"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
