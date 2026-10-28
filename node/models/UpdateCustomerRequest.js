import { d3345 as c0, d3346 as c3, d3347 as c4 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3645 as c1, d3646 as c7, d3636 as c11, d3647 as c12 } from '../descriptors/data/153.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3251 as c2, d3252 as c5, d3253 as c6 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3625 as c8, d3626 as c9, d3627 as c10 } from '../descriptors/data/152.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2587 as c13 } from '../descriptors/data/107.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2587 as d2587 } from '../descriptors/data/107.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2587;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DocumentTaxIDRequestRequest"]:c1(),["MetadataPatchRequest"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec1252"]:c5(),["SharedCodec1253"]:c6(),["SharedCodec1258"]:c7(),["SharedCodec1259"]:c8(),["SharedCodec1260"]:c9(),["SharedCodec1261"]:c10(),["SharedCodec993"]:c11(),["TaxIdentityRequest"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
