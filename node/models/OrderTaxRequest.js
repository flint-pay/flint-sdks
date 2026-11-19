import { d8461 as c0 } from '../descriptors/data/375.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9370 as c1, d9374 as c3, d9375 as c4, d9376 as c5, d9377 as c6, d9378 as c7, d9379 as c8, d9380 as c9, d9381 as c10 } from '../descriptors/data/425.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c2 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9382 as c11, d9383 as c12, d9384 as c13, d9385 as c14, d9386 as c15, d9387 as c16, d9388 as c17, d9389 as c18, d9390 as c19, d9391 as c20, d9392 as c21, d9393 as c22, d9394 as c23, d9395 as c24, d9396 as c25, d9397 as c26, d9398 as c27, d9403 as c33, d9404 as c34 } from '../descriptors/data/426.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9028 as c28 } from '../descriptors/data/408.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8296 as c29, d8297 as c30, d8298 as c31, d8299 as c32 } from '../descriptors/data/366.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9381 as d9381 } from '../descriptors/data/425.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9381;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1966"]:c11(),["SharedCodec1967"]:c12(),["SharedCodec1968"]:c13(),["SharedCodec1969"]:c14(),["SharedCodec1970"]:c15(),["SharedCodec1971"]:c16(),["SharedCodec1975"]:c17(),["SharedCodec1976"]:c18(),["SharedCodec1977"]:c19(),["SharedCodec1978"]:c20(),["SharedCodec1979"]:c21(),["SharedCodec1982"]:c22(),["SharedCodec1983"]:c23(),["SharedCodec1991"]:c24(),["SharedCodec1992"]:c25(),["SharedCodec1993"]:c26(),["SharedCodec1994"]:c27(),["SharedCodec216"]:c28(),["SharedCodec685"]:c29(),["SharedCodec686"]:c30(),["SharedCodec687"]:c31(),["SharedCodec688"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
