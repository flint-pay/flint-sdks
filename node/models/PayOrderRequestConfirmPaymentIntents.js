import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9659 as c1, d9663 as c2, d9670 as c6, d9671 as c7 } from '../descriptors/data/443.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1391 as c3 } from '../descriptors/data/69.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9752 as c4, d9754 as c5, d9755 as c8, d9756 as c9, d9757 as c10, d9758 as c11, d9759 as c21, d9760 as c22 } from '../descriptors/data/447.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9679 as c12, d9680 as c13, d9681 as c14, d9689 as c15, d9690 as c16, d9691 as c17, d9692 as c18, d9693 as c19, d9694 as c20 } from '../descriptors/data/444.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1391 as d1391 } from '../descriptors/data/69.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1391;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1909"]:c6(),["SharedCodec1910"]:c7(),["SharedCodec2239"]:c8(),["SharedCodec2240"]:c9(),["SharedCodec2241"]:c10(),["SharedCodec2242"]:c11(),["SharedCodec2262"]:c12(),["SharedCodec2263"]:c13(),["SharedCodec2264"]:c14(),["SharedCodec2272"]:c15(),["SharedCodec2273"]:c16(),["SharedCodec2274"]:c17(),["SharedCodec2275"]:c18(),["SharedCodec2276"]:c19(),["SharedCodec2277"]:c20(),["SharedCodec345"]:c21(),["SharedCodec347"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
