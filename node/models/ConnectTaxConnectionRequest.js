import { d8114 as c0, d8112 as c3, d8113 as c4 } from '../descriptors/data/352.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d233 as c1 } from '../descriptors/data/10.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d11007 as c2 } from '../descriptors/data/519.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d233 as d233 } from '../descriptors/data/10.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d233;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["ConnectTaxConnectionRequest"]:c1(),["SellerTaxAttestationRequest"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConnectTaxConnectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
