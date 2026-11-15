import { d7098 as c0, d7107 as c3, d7108 as c4, d7109 as c5, d7110 as c6, d7111 as c7 } from '../descriptors/data/334.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7018 as c1, d7019 as c9, d7020 as c10, d7021 as c11, d7017 as c12, d7014 as c13, d7015 as c14, d7016 as c15 } from '../descriptors/data/330.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1293 as c2 } from '../descriptors/data/62.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7112 as c8 } from '../descriptors/data/335.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1293 as d1293 } from '../descriptors/data/62.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1383"]:c3(),["SharedCodec1384"]:c4(),["SharedCodec1385"]:c5(),["SharedCodec1386"]:c6(),["SharedCodec1387"]:c7(),["SharedCodec1388"]:c8(),["SharedCodec295"]:c9(),["SharedCodec296"]:c10(),["SharedCodec297"]:c11(),["SharedCodec298"]:c12(),["SharedCodec790"]:c13(),["SharedCodec791"]:c14(),["SharedCodec792"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
