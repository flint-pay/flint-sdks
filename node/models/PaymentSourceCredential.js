import { d7721 as c0 } from '../descriptors/data/372.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7817 as c1 } from '../descriptors/data/376.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7739 as c2, d7740 as c3, d7741 as c4, d7742 as c5 } from '../descriptors/data/373.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7721 as d7721 } from '../descriptors/data/372.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7721;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredential"]:c0(),["ReaderPaymentSourceTip"]:c1(),["SharedCodec1237"]:c2(),["SharedCodec1238"]:c3(),["SharedCodec1239"]:c4(),["SharedCodec1240"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
