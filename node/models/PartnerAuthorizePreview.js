import { d1904 as c0, d1905 as c1 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1904 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1904;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAuthorizePreview"]:c0(),["PartnerAuthorizePreviewPermission"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAuthorizePreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
