import { d390 as c0 } from '../descriptors/data/23.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10612 as c1, d10613 as c7, d10614 as c8 } from '../descriptors/data/496.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10519 as c2, d10522 as c4, d10523 as c5 } from '../descriptors/data/490.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10628 as c3, d10615 as c9, d10616 as c10, d10617 as c11, d10618 as c12 } from '../descriptors/data/497.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10524 as c6 } from '../descriptors/data/491.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9111 as c13 } from '../descriptors/data/407.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d390 as d390 } from '../descriptors/data/23.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d390;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec2680"]:c4(),["SharedCodec2681"]:c5(),["SharedCodec2682"]:c6(),["SharedCodec2754"]:c7(),["SharedCodec2755"]:c8(),["SharedCodec2756"]:c9(),["SharedCodec2761"]:c10(),["SharedCodec2762"]:c11(),["SharedCodec2763"]:c12(),["SharedCodec450"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
