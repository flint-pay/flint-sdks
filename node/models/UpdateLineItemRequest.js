import { d7857 as c0, d7858 as c4 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c1 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9652 as c2 } from '../descriptors/data/442.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9661 as c3 } from '../descriptors/data/443.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7954 as c5 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9699 as c6, d9700 as c7, d9701 as c8, d9702 as c9, d9703 as c10, d9704 as c11 } from '../descriptors/data/444.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9705 as c12, d9706 as c13, d9707 as c14, d9708 as c16 } from '../descriptors/data/445.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9562 as c15 } from '../descriptors/data/437.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8525 as c17, d8526 as c18, d8527 as c19, d8528 as c20, d8529 as c21 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9749 as c22, d9750 as c23, d9751 as c24 } from '../descriptors/data/447.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7788 as c25 } from '../descriptors/data/334.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7600 as c26 } from '../descriptors/data/319.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7600 as d7600 } from '../descriptors/data/319.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7600;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec3068"]:c4(),["SharedCodec3071"]:c5(),["SharedCodec3103"]:c6(),["SharedCodec3104"]:c7(),["SharedCodec3105"]:c8(),["SharedCodec3106"]:c9(),["SharedCodec3107"]:c10(),["SharedCodec3108"]:c11(),["SharedCodec3109"]:c12(),["SharedCodec3110"]:c13(),["SharedCodec3111"]:c14(),["SharedCodec3112"]:c15(),["SharedCodec3113"]:c16(),["SharedCodec494"]:c17(),["SharedCodec495"]:c18(),["SharedCodec496"]:c19(),["SharedCodec497"]:c20(),["SharedCodec498"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
