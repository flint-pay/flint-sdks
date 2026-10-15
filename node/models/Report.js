import { d2100 as c0, d2160 as c1, d1536 as c2, d1535 as c3, d1537 as c4, d1538 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2160 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2160;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicDownload"]:c0(),["Report"]:c1(),["SharedCodec386"]:c2(),["SharedCodec387"]:c3(),["SharedCodec388"]:c4(),["SharedCodec389"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReport(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
