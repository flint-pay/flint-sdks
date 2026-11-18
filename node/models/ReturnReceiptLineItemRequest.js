import { d10612 as c0, d10613 as c2, d10614 as c3 } from '../descriptors/data/496.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10628 as c1, d10615 as c4, d10616 as c5, d10617 as c6, d10618 as c7 } from '../descriptors/data/497.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10612 as d10612 } from '../descriptors/data/496.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10612;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2754"]:c2(),["SharedCodec2755"]:c3(),["SharedCodec2756"]:c4(),["SharedCodec2761"]:c5(),["SharedCodec2762"]:c6(),["SharedCodec2763"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
