import { d1360 as c0 } from '../descriptors/data/62.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7023 as c1, d7024 as c2, d7025 as c3, d7026 as c4, d7027 as c5 } from '../descriptors/data/326.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1360 as d1360 } from '../descriptors/data/62.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1360;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec1420"]:c1(),["SharedCodec1421"]:c2(),["SharedCodec1422"]:c3(),["SharedCodec1423"]:c4(),["SharedCodec1424"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
