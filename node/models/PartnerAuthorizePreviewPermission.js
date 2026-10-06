import { d1944 as c0 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1944 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1944;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAuthorizePreviewPermission"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAuthorizePreviewPermission(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
