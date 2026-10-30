import { d5041 as c0 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6111 as c1 } from '../descriptors/data/282.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5041 as d5041 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5041;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDraftTaxJurisdictionRequest"]:c0(),["TaxJurisdictionRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftTaxJurisdictionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
