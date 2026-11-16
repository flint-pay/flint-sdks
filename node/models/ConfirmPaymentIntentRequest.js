import { d222 as c0 } from '../descriptors/data/9.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9752 as c1, d9754 as c2, d9755 as c3, d9756 as c4, d9757 as c5, d9758 as c6, d9759 as c11, d9760 as c13 } from '../descriptors/data/447.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9884 as c7, d9885 as c8, d9886 as c9, d9888 as c10, d9892 as c12 } from '../descriptors/data/455.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d222 as d222 } from '../descriptors/data/9.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d222;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec2239"]:c3(),["SharedCodec2240"]:c4(),["SharedCodec2241"]:c5(),["SharedCodec2242"]:c6(),["SharedCodec341"]:c7(),["SharedCodec342"]:c8(),["SharedCodec343"]:c9(),["SharedCodec344"]:c10(),["SharedCodec345"]:c11(),["SharedCodec346"]:c12(),["SharedCodec347"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
