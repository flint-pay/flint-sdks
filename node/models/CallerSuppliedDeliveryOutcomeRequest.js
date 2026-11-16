import { d8565 as c0, d8569 as c1, d8570 as c3, d8571 as c4, d8572 as c5, d8573 as c6, d8574 as c7, d8575 as c8, d8576 as c9, d8577 as c10 } from '../descriptors/data/378.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c2 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8578 as c11, d8579 as c12, d8580 as c13 } from '../descriptors/data/379.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8565 as d8565 } from '../descriptors/data/378.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8565;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec201"]:c3(),["SharedCodec202"]:c4(),["SharedCodec203"]:c5(),["SharedCodec204"]:c6(),["SharedCodec205"]:c7(),["SharedCodec206"]:c8(),["SharedCodec207"]:c9(),["SharedCodec208"]:c10(),["SharedCodec209"]:c11(),["SharedCodec210"]:c12(),["SharedCodec211"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
