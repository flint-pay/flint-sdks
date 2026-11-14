import { d353 as c0 } from '../descriptors/data/22.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8483 as c1 } from '../descriptors/data/418.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8485 as c2, d8493 as c7, d8494 as c8, d8495 as c9, d8496 as c10, d8497 as c11, d8498 as c12 } from '../descriptors/data/419.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8439 as c3 } from '../descriptors/data/415.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8343 as c4, d8344 as c5, d8345 as c6 } from '../descriptors/data/408.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7016 as c13 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d353 as d353 } from '../descriptors/data/22.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d353;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec1463"]:c4(),["SharedCodec1464"]:c5(),["SharedCodec1465"]:c6(),["SharedCodec1503"]:c7(),["SharedCodec1504"]:c8(),["SharedCodec1505"]:c9(),["SharedCodec1506"]:c10(),["SharedCodec1507"]:c11(),["SharedCodec1508"]:c12(),["SharedCodec304"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
