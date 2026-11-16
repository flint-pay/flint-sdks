import { d302 as c0 } from '../descriptors/data/15.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8932 as c1, d8934 as c2, d8936 as c3, d8937 as c8, d8938 as c9, d8939 as c10, d8940 as c11, d8941 as c12, d8946 as c17, d8947 as c18, d8948 as c19, d8949 as c20, d8950 as c21, d8951 as c22, d8952 as c23 } from '../descriptors/data/401.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8962 as c4, d8958 as c5, d8959 as c6, d8960 as c7, d8963 as c13, d8964 as c14, d8965 as c15, d8961 as c16 } from '../descriptors/data/402.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d302 as d302 } from '../descriptors/data/15.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec1408"]:c5(),["SharedCodec1409"]:c6(),["SharedCodec1410"]:c7(),["SharedCodec1411"]:c8(),["SharedCodec1412"]:c9(),["SharedCodec1413"]:c10(),["SharedCodec1414"]:c11(),["SharedCodec1415"]:c12(),["SharedCodec462"]:c13(),["SharedCodec463"]:c14(),["SharedCodec464"]:c15(),["SharedCodec465"]:c16(),["SharedCodec466"]:c17(),["SharedCodec467"]:c18(),["SharedCodec468"]:c19(),["SharedCodec469"]:c20(),["SharedCodec470"]:c21(),["SharedCodec471"]:c22(),["SharedCodec472"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
