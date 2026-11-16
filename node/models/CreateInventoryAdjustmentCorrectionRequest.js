import { d299 as c0 } from '../descriptors/data/15.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8936 as c1, d8946 as c10, d8947 as c11, d8948 as c12 } from '../descriptors/data/401.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8962 as c2, d8958 as c3, d8959 as c4, d8960 as c5, d8963 as c6, d8964 as c7, d8965 as c8, d8961 as c9 } from '../descriptors/data/402.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d299 as d299 } from '../descriptors/data/15.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d299;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCorrectionRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1408"]:c3(),["SharedCodec1409"]:c4(),["SharedCodec1410"]:c5(),["SharedCodec462"]:c6(),["SharedCodec463"]:c7(),["SharedCodec464"]:c8(),["SharedCodec465"]:c9(),["SharedCodec466"]:c10(),["SharedCodec467"]:c11(),["SharedCodec468"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCorrectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
