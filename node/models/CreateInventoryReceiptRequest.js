import { d306 as c0 } from '../descriptors/data/16.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9009 as c1 } from '../descriptors/data/405.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8962 as c2, d8958 as c3, d8959 as c4, d8960 as c5, d8963 as c6, d8964 as c7, d8965 as c8, d8961 as c9 } from '../descriptors/data/402.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d306 as d306 } from '../descriptors/data/16.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d306;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryReceiptRequest"]:c0(),["InventoryReceiptLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1408"]:c3(),["SharedCodec1409"]:c4(),["SharedCodec1410"]:c5(),["SharedCodec462"]:c6(),["SharedCodec463"]:c7(),["SharedCodec464"]:c8(),["SharedCodec465"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
