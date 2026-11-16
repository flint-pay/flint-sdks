import { d8564 as c0, d8565 as c1, d8569 as c2, d8570 as c4, d8571 as c5, d8572 as c6, d8573 as c7, d8574 as c8, d8575 as c9, d8576 as c10, d8577 as c11 } from '../descriptors/data/378.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c3 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8578 as c12, d8579 as c13, d8580 as c14 } from '../descriptors/data/379.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8564 as d8564 } from '../descriptors/data/378.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec201"]:c4(),["SharedCodec202"]:c5(),["SharedCodec203"]:c6(),["SharedCodec204"]:c7(),["SharedCodec205"]:c8(),["SharedCodec206"]:c9(),["SharedCodec207"]:c10(),["SharedCodec208"]:c11(),["SharedCodec209"]:c12(),["SharedCodec210"]:c13(),["SharedCodec211"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
