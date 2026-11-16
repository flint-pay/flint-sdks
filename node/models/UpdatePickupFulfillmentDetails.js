import { d8265 as c0, d8266 as c1 } from '../descriptors/data/362.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7955 as c2, d7956 as c3 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7618 as c4 } from '../descriptors/data/320.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7618 as d7618 } from '../descriptors/data/320.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7618;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1741"]:c0(),["SharedCodec1742"]:c1(),["SharedCodec2"]:c2(),["SharedCodec3"]:c3(),["UpdatePickupFulfillmentDetails"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePickupFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
