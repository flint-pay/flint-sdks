import { d1948 as c0, d1949 as c1 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1948 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1948;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAuthorizePreview"]:c0(),["PartnerAuthorizePreviewPermission"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAuthorizePreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
