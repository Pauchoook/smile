import * as functions from "./files/functions.js";

import "../scss/style.scss";
import spoller from "./files/spoller.js";
import sliders from "./files/sliders.js";
import burger from "./files/burger.js";
import tab from "./files/tab.js";
import modal from "./files/modal.js";
import select from "./files/select.js";
import beforeAfter from "./files/beforeAfter.js";
import map from "./files/map.js";

sliders();
functions.isWebp();
functions.mediaAdaptive();
spoller();
burger();
tab();
modal();
select();
beforeAfter();
map();