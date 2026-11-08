import { d186 as c0 } from '../descriptors/data/7.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8377 as c1 } from '../descriptors/data/404.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d186 as d186 } from '../descriptors/data/7.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d186;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConnectTaxConnectionRequest"]:c0(),["SellerTaxAttestationRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConnectTaxConnectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
