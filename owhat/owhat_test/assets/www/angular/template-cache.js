angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("alerts.html",
    "<ion-view title=\"急速公告\" class=\"o-you alerts\" >\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">返回</ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <div class=\"list\">\n" +
    "      <div class=\"null-content\" ng-if=\" messages.length<=0 \">您的列表是空的</div>\n" +
    "      <div ng-repeat=\"msg in messages\" ng-if=\" messages.length>0 \">\n" +
    "        <div class=\"item item-avatar o-avatar item-divider\" ng-if='msg.trackable_type === \"Event\"' ng-click=\"goEvent(msg.trackable_id)\">\n" +
    "          <img class=\"o-round-avatar\" src=\"{{msg.rel_user.avatar}}\">\n" +
    "          <span class=\"pull-right o-you-time\">\n" +
    "            <i class=\"ion-ios7-clock\"></i>{{msg.created_at | fromNow}}\n" +
    "          </span>\n" +
    "          <h3 class=\"o-you-name\">{{msg.rel_user.name}}</h3>\n" +
    "          <p class=\"content\">[急速公告]{{msg.info}}</p>\n" +
    "        </div>\n" +
    "        <div class=\"item item-avatar o-avatar\" ng-if='msg.trackable_type === \"Ticket\"'>\n" +
    "          <img class=\"o-round-avatar\" src=\"img/icon-mouth-open.png\" style='border:0;'>\n" +
    "          <span class=\"pull-right o-you-time\">\n" +
    "            <i class=\"ion-ios7-clock\"></i>\n" +
    "            {{msg.created_at | fromNow}}\n" +
    "            <a href=\"\" data-toggle=\"modal\" style=\"outline:none\">\n" +
    "              <i class=\"del-btn\" ng-click=\"deleteNotify($index)\"></i>\n" +
    "            </a>\n" +
    "          </span>\n" +
    "          <h3 class=\"o-you-name assertive\">系统通知</h3>\n" +
    "          <p class=\"content\">{{msg.info}}</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>"
  );

  $templateCache.put("alipay.html",
    "<ion-view name=\"login\" title=\"\" id=\"login\" class=\"login\" hide-nav-bar=\"true\">\n" +
    "  <ion-content class=\"content\">\n" +
    "    <h2 class=\"logo\"><img class=\"padding\" src=\"img/logo.png\" alt=\"o-what\"></h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col col-100\">\n" +
    "        <button class=\"button button-block button-assertive\" ng-click=\"goAlipay('{{ticket.alipay_wap_url}}')\">支付</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>"
  );

  $templateCache.put("areas.html",
    "<ion-view title=\"选择省份\" hide-back-button=\"true\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content ng-controller=\"AreaController\">\n" +
    "    <ul class=\"list\">\n" +
    "      <li class=\"item\" ng-repeat='area in areas' ng-click=\"pickCity('{{area.id}}', '{{area.name}}')\">\n" +
    "        {{area.name}}\n" +
    "        <i class=\"icon ion-chevron-right pull-right\"></i>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n"
  );

  $templateCache.put("attendees.html",
    "<ion-view title=\"报名列表\" class=\"inbox-follows\" >\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "  <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "    返回\n" +
    "  </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "  <ion-nav-buttons side=\"right\" ng-if=\"myEvent\">\n" +
    "    <a class=\"button button-clear\" ng-click=\"exportAttendees()\" style=\"margin-top: 0;color: #000;\">\n" +
    "      导出\n" +
    "      <!-- <i class=\"icon ion-ios7-upload-outline\"></i> -->\n" +
    "      <span class=\"icon ion-ios7-circle-outline icon-export\"><i class=\"ion-ios7-arrow-thin-up bg-green\"></i></span>\n" +
    "    </a>\n" +
    "  </ion-nav-buttons>\n" +
    "  <ion-content class=\"attendees\">\n" +
    "    <ion-refresher on-refresh=\"doRefresh()\"></ion-refresher>\n" +
    "    <div class=\"list\">\n" +
    "      <a class=\"item item-avatar item-divider o-avatar\" ng-repeat=\"ticket in attendees\" ng-if=\"ticket.user_uuid != myself\">\n" +
    "        <img class=\"o-round-avatar top10\" ng-src=\"{{ticket.user_avatar}}\" ng-click=\"goPerson(ticket.user_uuid)\">\n" +
    "        <button class=\"button follow-btn button-small pull-right bg-green\" ng-if='ticket.is_following === true && !myEvent' ng-click='unfollow(ticket.user_uuid, $index)'>已O啦!</button>\n" +
    "        <button class=\"button unfollow-btn button-small pull-right button-assertive\" ng-if='ticket.is_following === false && !myEvent' ng-click='follow(ticket.user_uuid, $index)'>速度O!</button>\n" +
    "\n" +
    "        <button class=\"button follow-btn button-small pull-right bg-green\" ng-if='ticket.checked_at && myEvent'>已验证</button>\n" +
    "        <button class=\"button unfollow-btn button-small pull-right bg-darkgray\" ng-if='!ticket.checked_at && myEvent'>未验证</button>\n" +
    "        <h3 class=\"o-you-name\" ng-class=\"myEvent ? 'mt12':''\"><i class=\"icon icon-o\" ng-show=\"ticket.user_verified_at\"></i>{{ticket.user_nickname}}</h3>\n" +
    "        <p class=\"content\" ng-if=\"!myEvent\">{{ticket.user_intro}}</p>\n" +
    "\n" +
    "        <div ng-if=\"myEvent\">\n" +
    "        <!-- 报名列表用户信息。按钮为‘已验证’-绿色按钮(bg-green)；‘未验证’两张状态-灰色按钮(bg-darkgray) -->\n" +
    "          <p class=\"inline-condensed mt5\">电话：{{ticket.phone}}</p>\n" +
    "          <p class=\"inline-condensed\">邮箱：{{ticket.email}}</p>\n" +
    "          <p class=\"inline-condensed\" ng-show=\"ticket.ext_info\">{{event.ext_info}}：{{ticket.ext_info}}</p>\n" +
    "          <!-- <p class=\"inline-condensed\"><span class=\"assertive\">备注：</span>注意还有一个“活动主办方”看到的内容和非主办方看到的内容不同。但不要按照上传的UI PSD制作，只需要注意我下图中标注的三个地方</p> -->\n" +
    "        </div>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <ion-infinite-scroll\n" +
    "      ng-if=\"haveMore\"\n" +
    "      icon=\"ion-loading-c\"\n" +
    "      on-infinite=\"fetchMore()\">\n" +
    "    </ion-infinite-scroll>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "\n" +
    "<style>\n" +
    "  .popup-buttons input{\n" +
    "    padding: 0 5px;\n" +
    "    height: 26px;\n" +
    "  }\n" +
    "  .popup-title{\n" +
    "    font-size: 13px;\n" +
    "    font-weight: normal;\n" +
    "  }\n" +
    "  .popup-body{\n" +
    "    padding-top: 0;\n" +
    "    padding-bottom: 0;\n" +
    "  }\n" +
    "</style>"
  );

  $templateCache.put("buy.html",
    "<ion-view title=\"我要O票\" class=\"buy\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\" ng-click=\"goBack()\">返回</ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content class=\"has-header padding-horizontal\">\n" +
    "    <form name='form' novalidate>\n" +
    "      <p class=\"assertive text-center tips mt5\">请填写你的真实信息，以保证主办方随时联络到你。我们承诺对你的信息妥善保管，以防泄漏。</p>\n" +
    "      <div class=\"list\">\n" +
    "        <label class=\"item item-input\">\n" +
    "          <input type=\"text\" name='name' placeholder=\"姓名\" ng-model='ticket.name' ng-blur=\"\">\n" +
    "        </label>\n" +
    "\n" +
    "        <label class=\"item item-input\">\n" +
    "          <input type=\"tel\" name='phone' placeholder=\"电话号码\" ng-model='ticket.phone' ng-pattern=\"/^1[3|4|5|7|8]\\d{9}$/\">\n" +
    "        </label>\n" +
    "\n" +
    "        <label class=\"item item-input\">\n" +
    "          <input type=\"email\" name='email' placeholder=\"Email\" ng-model='ticket.email' ng-pattern='/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$/'>\n" +
    "        </label>\n" +
    "\n" +
    "        <label class=\"item item-input item-select gender\">\n" +
    "          <select name='gender' ng-model='ticket.gender'>\n" +
    "            <option value='1'>男</option>\n" +
    "            <option value='0'>女</option>\n" +
    "          </select>\n" +
    "        </label>\n" +
    "\n" +
    "        <label class=\"item item-input\" ng-if=\"event.ext_info\">\n" +
    "          <input type=\"text\" placeholder=\"{{event.ext_info}}\" ng-model=\"ticket.ext_info\">\n" +
    "        </label>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"ticket-num clearfix\">\n" +
    "        <div class=\"operations\">\n" +
    "          <p>选择数量</p>\n" +
    "          <span class=\"button\" ng-class=\"ticket.quantity <= 1 ? 'disabled': ''\" ng-click=\"minusTicketNumber()\">-</span>\n" +
    "          <input class=\"\" type=\"text\" min=\"1\" max=\"event.ticket_limit\" value=\"{{ticket.quantity}}\" ng-model=\"ticket.quantity\" ng-init=\"ticket.quantity = 1\">\n" +
    "          <!-- <span>{{ticket.quantity}}</span> -->\n" +
    "          <span class=\"button\" ng-class=\"(event.ticket_limit == null || event.ticket_limit == 0 || ticket.quantity < event.ticket_limit) && (event.ticket_total == null || ticket.quantity < event.ticket_total) ? '': 'disabled'\" ng-click=\"addTicketNumber()\">+</span>\n" +
    "        </div>\n" +
    "        <div class=\"show-total text-center\">\n" +
    "          <p>总价</p>\n" +
    "          <span class=\"assertive total block\">{{event.fee * ticket.quantity | currency}}</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <button class=\"button button-block button-assertive\" ng-click=\"showConfirm()\" ng-if=\"!event.free\">\n" +
    "        确认O票并支付\n" +
    "      </button>\n" +
    "\n" +
    "      <button class=\"button button-block button-assertive\" ng-click=\"showConfirm()\" ng-if=\"event.free\">\n" +
    "        确认O票\n" +
    "      </button>\n" +
    "\n" +
    "      <p class=\"pr item-checkbox text-right\">\n" +
    "        <label class=\"checkbox\">\n" +
    "          <input type=\"checkbox\" checked disabled>用户协议\n" +
    "        </label>\n" +
    "      </p>\n" +
    "\n" +
    "    </form>\n" +
    "  </ion-content>\n" +
    "</ion-view>"
  );

  $templateCache.put("checkout.html",
    "<ion-view title=\"付款\" class=\"checkout\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">返回</ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content class=\"cart-info has-header\">\n" +
    "    <h5 class=\"text-green mt40\">\n" +
    "      <i class=\"ion-ribbon-b\"></i>你的战利品\n" +
    "    </h5>\n" +
    "    <p class=\"ticket-name\">\n" +
    "      {{ticket.title}}\n" +
    "    </p>\n" +
    "    <p>总计：{{ticket.quantity}}张</p>\n" +
    "    <p>需支付：{{ticket.total_fee}}元</p>\n" +
    "    <h5 class=\"text-green\">\n" +
    "      <i class=\"ion-card\"></i>付款方式：\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"list\">\n" +
    "      <label class=\"item item-radio\">\n" +
    "        <input type=\"radio\" name=\"group\" checked=\"checked\">\n" +
    "        <div class=\"item-content\">\n" +
    "          <img src=\"img/taobao.png\" alt=\"支付宝\">\n" +
    "        </div>\n" +
    "        <i class=\"radio-icon ion-ios7-checkmark text-green\"></i>\n" +
    "      </label>\n" +
    "<!--       <label class=\"item item-radio\">\n" +
    "        <input type=\"radio\" name=\"group\">\n" +
    "        <div class=\"item-content\">\n" +
    "          <img src=\"img/weixin.png\" alt=\"微信支付\">\n" +
    "        </div>\n" +
    "        <i class=\"radio-icon ion-ios7-checkmark text-green\"></i>\n" +
    "      </label>\n" +
    "      <label class=\"item item-radio\">\n" +
    "        <input type=\"radio\" name=\"group\">\n" +
    "        <div class=\"item-content\">\n" +
    "          <img src=\"img/unionpay.png\" alt=\"中国银联\">\n" +
    "        </div>\n" +
    "        <i class=\"radio-icon ion-ios7-checkmark text-green\"></i>\n" +
    "      </label> -->\n" +
    "      <label class=\"submit\">\n" +
    "        <button class=\"button button-block button-assertive\" ng-click=\"goAlipay()\">确认付款</button>\n" +
    "      </label>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>"
  );

  $templateCache.put("cities.html",
    "<ion-view title=\"选择城市\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content ng-controller=\"CityController\">\n" +
    "    <ul class=\"list\">\n" +
    "      <li class=\"item\" ng-repeat='area in children' ng-click=\"pickCity('{{area.id}}', '{{area.name}}')\">\n" +
    "        {{area.name}}\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n"
  );

  $templateCache.put("city_list.html",
    "<ion-modal-view>\n" +
    "<ion-header-bar class=\"bar-positive\">\n" +
    "  <h1 class=\"title\">请选择</h1>\n" +
    "</ion-header-bar>\n" +
    "<ion-content>\n" +
    "<ul class=\"list\">\n" +
    "  <li class=\"item\" ng-repeat='city in cities' ng-click=\"pickCity('{{city.id}}', '{{city.name}}')\">\n" +
    "    {{city.name}}\n" +
    "  </li>\n" +
    "</ul>\n" +
    "</ion-content>\n" +
    "</ion-modal-view>"
  );

  $templateCache.put("comments.html",
    "<ion-view title=\"废话桶\" class=\"comments\" animation=\"slide-left-right-ios7\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content class=\"bg-gray has-header\">\n" +
    "    <ion-list>\n" +
    "      <ion-item ng-repeat=\"comment in comments\">\n" +
    "        <span ng-class=\"{assertive: !comment.user_sex, 'text-green': comment.user_sex}\">{{comment.user_nickname}}:</span>\n" +
    "        {{comment.content}}\n" +
    "      </ion-item>\n" +
    "    </ion-list>\n" +
    "  </ion-content>\n" +
    "  <form name=\"commentForm\" ng-submit=\"submitForm(commentForm.$valid)\" novalidate>\n" +
    "    <div class=\"bar bar-footer\">\n" +
    "      <div class=\"bg\"></div>\n" +
    "      <div class=\"item-input-inset\">\n" +
    "        <label class=\"item-input-wrapper\">\n" +
    "          <i class=\"ion-edit\"></i>\n" +
    "          <input type=\"text\" ng-model=\"comment.content\" required>\n" +
    "        </label>\n" +
    "        <button class=\"button bg-green\" type=\"submit\" ng-disabled=\"commentForm.$invalid\">\n" +
    "          向组织汇报\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</ion-view>\n"
  );

  $templateCache.put("drafts.html",
    "<ion-view title=\"零时储物箱\" class=\"drafts\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "    <ion-nav-buttons side=\"right\">\n" +
    "      <a class=\"button button-clear\">\n" +
    "        <i class=\"icon ion-ios7-trash-outline text-black\"></i>\n" +
    "      </a>\n" +
    "    </ion-nav-buttons>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <div class=\"list\">\n" +
    "\n" +
    "      <label class=\"item\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <span class=\"icon-alert\">!</span>\n" +
    "          宝贝们，带上行李准备向地球进发！宝贝们，带上行李准备向地球进发！宝贝们，带上行李准备向地球进发！\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <span class=\"icon-alert\">!</span>\n" +
    "          宝贝们，带上行李准备向地球进发！\n" +
    "        </span>\n" +
    "      </label>\n" +
    "      <label class=\"item\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <span class=\"icon-alert\">!</span>\n" +
    "          宝贝们，带上行李准备向地球进发！\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <span class=\"icon-alert\">!</span>\n" +
    "          宝贝们，带上行李准备向地球进发！\n" +
    "        </span>\n" +
    "      </label>\n" +
    "      <label class=\"item\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <span class=\"icon-alert\">!</span>\n" +
    "          宝贝们，带上行李准备向地球进发！\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <span class=\"icon-alert\">!</span>\n" +
    "          宝贝们，带上行李准备向地球进发！\n" +
    "        </span>\n" +
    "      </label>\n" +
    "      <label class=\"item\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <span class=\"icon-alert\">!</span>\n" +
    "          宝贝们，带上行李准备向地球进发！\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <span class=\"icon-alert\">!</span>\n" +
    "          宝贝们，带上行李准备向地球进发！\n" +
    "        </span>\n" +
    "      </label>\n" +
    "      <label class=\"item\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <span class=\"icon-alert\">!</span>\n" +
    "          宝贝们，带上行李准备向地球进发！\n" +
    "        </span>\n" +
    "      </label>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "\n" +
    "</ion-view>"
  );

  $templateCache.put("event.html",
    "<ion-view title=\"\" animation=\"slide-left-right\" class=\"o-ticket\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\" ng-if=\"!showCustomBack\">返回</ion-nav-back-button>\n" +
    "    <button class=\"button-icon ion-ios7-arrow-left\" ng-click=\"goTabHome()\" ng-if=\"showCustomBack\">返回</button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content delegate-handle=\"eventScroll\" class=\"has-header has-footer\" animation=\"slide-left-right-ios7\">\n" +
    "    <ion-list>\n" +
    "      <ion-item class=\"nopadding\">\n" +
    "        <div class=\"poster pr\">\n" +
    "          <ion-slide-box does-continue=\"true\" auto-play=\"autoPlay\" slide-interval=\"{{slideInterval}}\" ng-if=\"event\">\n" +
    "            <ion-slide ng-if=\"event.video_url.length > 0\">\n" +
    "              <youku url=\"{{event.video_url}}\"/>\n" +
    "            </ion-slide>\n" +
    "            <ion-slide ng-if=\"event.cover1.length > 0\">\n" +
    "              <img ng-src=\"{{event.cover1}}\" class=\"full-image block\">\n" +
    "            </ion-slide>\n" +
    "            <ion-slide ng-if=\"event.cover2.length > 0\">\n" +
    "              <img ng-src=\"{{event.cover2}}\" class=\"full-image block\">\n" +
    "            </ion-slide>\n" +
    "            <ion-slide ng-if=\"event.cover3.length > 0\">\n" +
    "              <img ng-src=\"{{event.cover3}}\" class=\"full-image block\">\n" +
    "            </ion-slide>\n" +
    "          </ion-slide-box>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"item ticket-info\">\n" +
    "          <p class=\"title titShow\" ng-bind=\"event.title\"></p>\n" +
    "        </div>\n" +
    "        <div class=\"item text-right ticket-price\">\n" +
    "          <i class=\"owhat-icons icon-price-piao pull-left\"></i>\n" +
    "          <span class=\"del-line\" ng-if=\"event.original_fee\">\n" +
    "            ￥{{event.original_fee}}元\n" +
    "          </span>\n" +
    "          <span class=\"text-green\" ng-if=\"event.fee\">\n" +
    "            ￥{{event.fee}}元\n" +
    "            <!-- <span class=\"block text-right\">(内场)</span> -->\n" +
    "          </span>\n" +
    "          <span class=\"price ofree pull-right\" ng-if=\"!event.fee\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "        <p class=\"item ticket-detail\" ng-bind-html=\"event.description | nl2br\" ng-if=\"event\"></p>\n" +
    "        <div class=\"item item-avatar o-avatar\" ng-click=\"goPerson(event.user_uuid)\" ng-if=\"event\">\n" +
    "          <img class=\"o-round-avatar\" ng-src=\"{{event.user_avatar}}\">\n" +
    "          <span class=\"vjia\"></span>\n" +
    "          <button class=\"button button-small bg-green pull-right\">O!TA</button>\n" +
    "          <h3 class=\"o-you-name\">\n" +
    "            <i class=\"icon icon-o\" ng-if=\"event.user_verified_at\"></i>\n" +
    "            <span ng-bind=\"event.user_nickname\"></span>\n" +
    "          </h3>\n" +
    "          <p class=\"content\">{{event.created_at | fromNow}}发布</p>\n" +
    "        </div>\n" +
    "        <div class=\"item\">\n" +
    "          <i class=\"owhat-icons icon-clock-green\"></i>\n" +
    "          {{event.start_at | date: \"M月d日 HH:mm\"}}\n" +
    "          -\n" +
    "          {{event.end_at | date: \"HH:mm\"}}\n" +
    "        </div>\n" +
    "        <div class=\"item\">\n" +
    "          <i class=\"owhat-icons icon-phone\"></i>\n" +
    "          联系方式 {{event.mobile}}\n" +
    "        </div>\n" +
    "        <div class=\"item\" ng-if=\"event.ticket_total > 0\">\n" +
    "          <i class=\"owhat-icons icon-people\"></i>\n" +
    "          人数限定 <span class=\"text-green\">{{event.tickets_sold}}</span>/{{event.ticket_total}}\n" +
    "        </div>\n" +
    "        <div class=\"item\" ng-if=\"event.ticket_total <= 0\">\n" +
    "          <i class=\"owhat-icons icon-people\"></i>\n" +
    "          人数限定 <span class=\"text-green\">{{event.tickets_sold}}/不限</span>\n" +
    "        </div>\n" +
    "        <div class=\"item show-map pr\" ng-click=\"goEventMap(event.id)\">\n" +
    "          <span class=\"overlayer-h\"></span>\n" +
    "          <img class=\"full-image\" src=\"http://api.map.baidu.com/staticimage?center={{event.longitude}},{{event.latitude}}&width=640&height=144&zoom=16\" alt=\"\" ng-if=\"event.longitude\">\n" +
    "          <img class=\"full-image\" src=\"img/demo/demo-ticket.jpg\" alt=\"\" ng-if=\"!event.longitude\">\n" +
    "          <span class=\"address\">\n" +
    "            <i class=\"owhat-icons icon-addr-white\"></i>\n" +
    "            {{event.address}}\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"item pr\">\n" +
    "          <span class=\"item-note\">\n" +
    "            <span class=\"button button-small o-btn bg-green fire-arrow\" ng-click=\"goAttendees(event.id)\"></span>\n" +
    "            <span class=\"button button-small o-btn bg-green\" ng-click=\"goComments(event.id)\"><i class=\"owhat-icons icon-review\"></i>{{event.comments_count}}</span>\n" +
    "            <button class=\"button button-small o-btn bg-green\" ng-click=\"showSharesheet()\">O!分享</button>\n" +
    "          </span>\n" +
    "          <ion-slide-box on-slide-changed=\"slideHasChanged($index)\" show-pager=\"false\" class=\"you-slide\" style=\"width: 140px;\">\n" +
    "            <ion-slide>\n" +
    "              <div class=\"box\">\n" +
    "                <img ng-repeat=\"user in event.attendees\" class=\"other-avatar\" ng-src=\"{{user.user_avatar}}\" alt=\"\">\n" +
    "              </div>\n" +
    "            </ion-slide>\n" +
    "          </ion-slide-box>\n" +
    "        </div>\n" +
    "      </ion-item>\n" +
    "    </ion-list>\n" +
    "  </ion-content>\n" +
    "\n" +
    "\n" +
    "  <div class=\"bar bar-footer o-ticket\" ng-show='!event.owner'>\n" +
    "    <button class=\"button button-block bg-green opiao\" ng-click=\"goBuy(event.id)\" ng-show='!event.is_paid && !event.overrun && !event.closed'>O!  票</button>\n" +
    "    <button class=\"button button-block bg-green\" ng-show='overrun=(event.overrun && !event.is_paid && !event.closed)' disabled=\"overrun\">O完啦</button>\n" +
    "    <button class=\"button button-block bg-green\" ng-show='closed=(event.closed && !event.is_paid)' disabled=\"closed\">已结束</button>\n" +
    "    <button class=\"button button-block bg-green\" ng-show='isPaid=(event.is_paid)' disabled=\"isPaid\">已报名</button>\n" +
    "  </div>\n" +
    "  <div class=\"bar bar-footer o-ticket\" ng-show='event.owner'>\n" +
    "    <button class=\"button button-block bg-green\" ng-click=\"goEditEvent(event.id)\">编辑</button>\n" +
    "  </div>\n" +
    "</ion-view>\n" +
    "\n" +
    "\n" +
    "<style>\n" +
    "  /*share*/\n" +
    "  .action-sheet{\n" +
    "    margin-left: 5px;\n" +
    "    margin-right: 5px;\n" +
    "  }\n" +
    "  .action-sheet-group:first-child .button + .button,\n" +
    "  .action-sheet-group:first-child .button:first-child{\n" +
    "    color: #fff;\n" +
    "    display: inline-block;\n" +
    "    width: 20%;\n" +
    "    font-size: 12px;\n" +
    "    -webkit-transform: scale(0.8);\n" +
    "    -moz-transform: scale(0.8);\n" +
    "    -o-transform: scale(0.8);\n" +
    "    transform: scale(0.8);\n" +
    "  }\n" +
    "  .action-sheet-group{\n" +
    "    background-color: rgba(0,0,0,0.6);\n" +
    "    border-radius: 0;\n" +
    "    padding-bottom: 10px;\n" +
    "\n" +
    "  }\n" +
    "  .action-sheet-group:first-child{\n" +
    "    text-align: center;\n" +
    "    padding-top: 20px;\n" +
    "    margin-bottom: 0;\n" +
    "  }\n" +
    "  .action-sheet-group:last-child .button{\n" +
    "    background: #f4f4f4;\n" +
    "    color: #000;\n" +
    "    width: 90%;\n" +
    "    margin-left: auto;\n" +
    "    margin-right: auto;\n" +
    "    border-radius: 4px;\n" +
    "  }\n" +
    "  .icon-oShares{\n" +
    "    display: block;\n" +
    "    width: 44px;\n" +
    "    height: 44px;\n" +
    "    margin: 0 auto;\n" +
    "    background-image: url(img/share.png);\n" +
    "    background-repeat:  no-repeat;\n" +
    "  }\n" +
    "  .icon-owxQuan{\n" +
    "    background-position: 0 0;\n" +
    "  }\n" +
    "  .icon-owxFriend{\n" +
    "    background-position: -64px 0;\n" +
    "  }\n" +
    "  .icon-oweibo{\n" +
    "    background-position: -128px 0;\n" +
    "  }\n" +
    "  .icon-oqqweibo{\n" +
    "    background-position: -190px 0;\n" +
    "  }\n" +
    "  .icon-oqqKongjian{\n" +
    "    background-position: -254px 0;\n" +
    "  }\n" +
    "  /*head bar*/\n" +
    "  .bar .title{\n" +
    "    left: 63px;\n" +
    "    right: 63px;\n" +
    "  }\n" +
    "  .bar .button.button-icon::before{\n" +
    "    margin-right: 5px;\n" +
    "  }\n" +
    "  .bar .button.back-button{\n" +
    "    opacity: 1;\n" +
    "  }\n" +
    "  /*slide*/\n" +
    "  .slider-pager{\n" +
    "    text-align: right;\n" +
    "    padding-left: 20px;\n" +
    "    padding-right: 20px;\n" +
    "    bottom: 10px;\n" +
    "  }\n" +
    "  .slider-pager .slider-pager-page{\n" +
    "    color: #d8dbe2;\n" +
    "    opacity: 1;\n" +
    "    margin: 0;\n" +
    "    -webkit-transform: scale(0.6);\n" +
    "    transform: scale(0.6);\n" +
    "  }\n" +
    "  .slider-pager .slider-pager-page.active{\n" +
    "    color: #70dfd5;\n" +
    "  }\n" +
    "</style>\n"
  );

  $templateCache.put("event_edit.html",
    "<ion-view title=\"编辑活动\" class=\"publish\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <form name=\"eventForm\" ng-submit=\"submitForm(eventForm.$valid)\" novalidate>\n" +
    "    <div class=\"list\">\n" +
    "      <label class=\"item item-input row\">\n" +
    "        <span class=\"input-label col-10\">标题: </span>\n" +
    "        <input type=\"text\" ng-model=\"event.title\" required>\n" +
    "      </label>\n" +
    "\n" +
    "      <div class=\"item bg-gray\">\n" +
    "        <textarea rows=\"6\" placeholder=\"我是O星小秘书，主人写点什么吧?\" ng-model=\"event.description\" required id=\"event_desc\" ng-keypress=\"updateEditor()\"></textarea>\n" +
    "        <div class=\"take-pictures\">\n" +
    "          <div class=\"input-image\">\n" +
    "            <span style=\"background: url({{coverImage1}}) no-repeat center;background-size: contain;\" ng-click=\"takePicture(1)\">\n" +
    "            </span>\n" +
    "            <input type=\"hidden\" ng-model=\"event.cover_data1\" ng-required='event.cover1.length === 0'>\n" +
    "          </div>\n" +
    "          <div class=\"input-image\">\n" +
    "            <span style=\"background: url({{coverImage2}}) no-repeat center;background-size: contain;\" ng-click=\"takePicture(2)\">\n" +
    "            </span>\n" +
    "            <input type=\"hidden\" ng-model=\"event.cover_data2\">\n" +
    "          </div>\n" +
    "          <div class=\"input-image\">\n" +
    "            <span style=\"background: url({{coverImage3}}) no-repeat center;background-size: contain;\" ng-click=\"takePicture(3)\">\n" +
    "            </span>\n" +
    "            <input type=\"hidden\" ng-model=\"event.cover_data3\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <label class=\"item icon-right-tag\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <input type=\"number\" placeholder=\"不限\" ng-model=\"event.ticket_total\" ng-blur=\"isFocused=false\" ng-focus=\"isFocused=true\" min=\"1\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"isFocused ? 'active':''\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <i class=\"ion-ios7-people\"></i>\n" +
    "          召集人数\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "\n" +
    "      <label class=\"item icon-right-tag bg-gray\" ng-click=\"pickDate()\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <input type=\"date\" ng-model=\"event.start_date\" name='start' required ng-blur=\"isFocusedDate=false\" ng-focus=\"isFocusedDate=true\" readonly=\"{{isAndroid}}\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"isFocusedDate ? 'active':''\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <i class=\"ion-ios7-clock\"></i>\n" +
    "          活动日期\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item icon-right-tag bg-white\" ng-click=\"pickTime('start')\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <input type=\"time\" ng-model=\"event.start_time\" ng-blur=\"isFocusedTime=false\" ng-focus=\"isFocusedTime=true\" readonly=\"{{isAndroid}}\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"isFocusedTime ? 'active':''\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <i class=\"ion-ios7-clock\"></i>\n" +
    "          开始时间\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item icon-right-tag bg-gray\" ng-click=\"pickTime('end')\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <input type=\"time\" ng-model=\"event.end_time\" ng-blur=\"isFocusedEndTime=false\" ng-focus=\"isFocusedEndTime=true\" readonly=\"{{isAndroid}}\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"isFocusedEndTime ? 'active':''\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <i class=\"ion-ios7-clock\"></i>\n" +
    "          结束时间\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item icon-right-tag\" ng-click=\"goMap()\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <span class=\"address\">{{event.address}}</span>\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"isFocusedSite ? 'active':''\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <i class=\"ion-ios7-location\"></i>\n" +
    "          位置坐标\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item icon-right-tag bg-gray\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <input type=\"text\" ng-model=\"event.mobile\" ng-blur=\"isFocusedMobile=false\" ng-focus=\"isFocusedMobile=true\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"isFocusedMobile ? 'active':''\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <i class=\"ion-iphone\" style=\"margin-right: 6px;\"></i>联系方式\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <div class=\"item o-item-tabs\">\n" +
    "        <h4 class=\"title padding\">报名所需信息</h4>\n" +
    "        <div class=\"row\">\n" +
    "          <ion-checkbox class=\"button button-small col-20\" ng-repeat=\"item in regFields\" ng-model=\"item.checked\" ng-class=\"item.checked ? 'bg-green':'bg-darkgray'\" ng-disabled=\"item.id == 'name' || item.id == 'phone'\">{{ item.text }} <i class=\"ion-ios7-checkmark\" ng-if=\"item.checked\"></i></ion-checkbox>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <input type=\"text\" placeholder=\"自定义你需知道的更多信息\" ng-model=\"event.ext_info\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"item bg-gray o-item-tabs\">\n" +
    "        <div class=\"row\">\n" +
    "          <a class=\"button button-small col\" ng-click=\"event.free = true\" ng-class=\"event.free ? 'button-assertive':'bg-darkgray'\">免费</a>\n" +
    "          <a class=\"button button-small col\" ng-click=\"event.free = false\" ng-class=\"!event.free ? 'button-assertive':'bg-darkgray'\" >收费</a>\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"!event.free ? 'active':''\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"fee-toggle\" ng-show=\"!event.free\">\n" +
    "          <div class=\"row fee\">\n" +
    "            <div class=\"pr col\">\n" +
    "              <span class=\"pull-left\">原价&nbsp;&nbsp;|</span>\n" +
    "              <input type=\"text\" ng-model='event.original_fee'>\n" +
    "            </div>\n" +
    "            <div class=\"pr col\">\n" +
    "              <span class=\"pull-left\">现价&nbsp;&nbsp;|</span>\n" +
    "              <input type=\"text\" ng-model='event.fee' name='fee' ng-required='!event.free'>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row format\">\n" +
    "          <span class=\"pull-left col-20\">售卖形式</span>\n" +
    "          <a class=\"button button-small col-33 pull-right\" ng-class=\"event.ticket_limit == 1 ? 'bg-green' : 'bg-darkgray' \" ng-click=\"event.ticket_limit = 1\">限购1张</a>\n" +
    "          <a class=\"button button-small col-33 pull-right\" ng-class=\"event.ticket_limit != 1 ? 'bg-green' : 'bg-darkgray' \" ng-click=\"event.ticket_limit = 0\">正常发售</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!-- <div class=\"item o-item-tabs\">\n" +
    "        <div class=\"row\">\n" +
    "          <a class=\"button button-small col\" ng-click=\"event.sync_weibo = !event.sync_weibo\" ng-class=\"event.sync_weibo ? 'bg-green' : 'bg-darkgray'\">同步微博</a>\n" +
    "          <a class=\"button button-small col\" ng-click=\"event.sync_qq = !event.sync_qq\" ng-class=\"event.sync_qq ? 'bg-green' : 'bg-darkgray'\">同步QQ</a>\n" +
    "        </div>\n" +
    "      </div> -->\n" +
    "\n" +
    "      <div class=\"padding\">\n" +
    "        <button class=\"button button-block button-assertive\" type=\"submit\" ng-disabled=\"eventForm.$invalid\">保存</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    </form>\n" +
    "  </ion-content>\n" +
    "</ion-view>"
  );

  $templateCache.put("event_map.html",
    "<ion-view title=\"活动地址\" class=\"map\" >\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">返回</ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <div class=\"list\">\n" +
    "      <baidu-map map=\"map\"></baidu-map>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>"
  );

  $templateCache.put("follows.html",
    "<ion-view title=\"O！粉\" class=\"inbox-follows\" >\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <ion-list>\n" +
    "      <div class=\"null-content\" ng-if=\"isEmpty\">您的列表是空的</div>\n" +
    "      <div collection-repeat=\"user in followers\" collection-item-width=\"imageWidth\" collection-item-height=\"imageHeight\" style=\"width:100%\">\n" +
    "        <div class=\"item item-avatar item-divider o-avatar\" ng-class=\"{'item-dark': $index%2}\">\n" +
    "          <img class=\"o-round-avatar top10\" ng-src=\"{{user.avatar}}\" ng-click=\"goPerson(user.uuid)\">\n" +
    "          <div ng-show=\"!isMe(user.uuid)\">\n" +
    "          <button class=\"button follow-btn button-small pull-right bg-green\" ng-if='user.is_following == true' ng-click='unfollow(user, $index)'>已O啦!</button>\n" +
    "          <button class=\"button unfollow-btn button-small pull-right button-assertive\" ng-if='user.is_following != true' ng-click='follow(user, $index)'>速度O!</button>\n" +
    "          <button class=\"button button-clear button-small pull-right follow-each-other\">\n" +
    "            <i ng-class=\"{green: user.friendship_state === 3}\"></i>\n" +
    "          </button>\n" +
    "          </div>\n" +
    "          <h3 class=\"o-you-name\">{{user.nickname}}</h3>\n" +
    "          <p class=\"content\">{{user.intro}}</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </ion-list>\n" +
    "    <ion-infinite-scroll icon=\"ion-loading-c\" on-infinite=\"fetchMore()\" ng-if=\"moreDataCanBeLoaded()\"></ion-infinite-scroll>\n" +
    "  </ion-content>\n" +
    "</ion-view>"
  );

  $templateCache.put("forget.html",
    "<ion-view title=\"忘记暗号\" class=\"login register\" animation=\"slide-left-right-ios7\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "  <form name=\"forgetForm\" ng-submit=\"submitForm(forgetForm.$valid)\" novalidate>\n" +
    "    <div class=\"list\">\n" +
    "      <label class=\"item item-input\">\n" +
    "        <input type=\"tel\" placeholder=\"| 请输入手机号码  ( 注册时）\" name=\"mobile\" ng-pattern=\"/^1[3|4|5|7|8]\\d{9}$/\" ng-model=\"user.mobile\" required>\n" +
    "      </label>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"list mt40\">\n" +
    "      <label class=\"item item-input\">\n" +
    "        <input type=\"password\" placeholder=\"| 请输入新暗号（最少6位）\" ng-model=\"user.password\" ng-minlength=\"6\" required>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item item-input\">\n" +
    "        <input type=\"password\" placeholder=\"| 请再次输入新暗号\" ng-model=\"user.passwordConfirm\" match=\"user.password\" name=\"confirmPassword\" />\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"row verification\">\n" +
    "      <div class=\"item\">\n" +
    "        <!-- <button class=\"col button get-code assertive\">120秒后重新发送</button> -->\n" +
    "        <button class=\"col button get-code button-assertive\" ng-click=\"sendSmsCode()\" ng-disabled=\"forgetForm.mobile.$invalid || codeSent\">{{codeSentBtnText}}</button>\n" +
    "        <input class=\"col item-input input-code\" type=\"text\" placeholder=\"请输入验证码\" ng-model=\"user.code\" required>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"\">\n" +
    "      <button class=\"button bg-green gointo\" ng-disabled=\"forgetForm.$invalid\" type=\"submit\">复活</button>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n"
  );

  $templateCache.put("friends.html",
    "<ion-view title=\"添加朋友\" class=\"inbox-follows friends\" >\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <div class=\"item item-input-inset\">\n" +
    "      <label class=\"item-input-wrapper\">\n" +
    "        <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "        <input type=\"text\" placeholder=\"搜索O！what用户（用户名/昵称）\" ng-model=\"keyword\"/>\n" +
    "      </label>\n" +
    "      <button class=\"button button-small button-clear\" ng-click=\"search(keyword)\">\n" +
    "        搜索\n" +
    "      </button>\n" +
    "    </div>\n" +
    "    <div class=\"list\">\n" +
    "      <a class=\"item item-avatar item-divider o-avatar\" ng-repeat=\"user in friends\">\n" +
    "        <img class=\"o-round-avatar top10\" ng-src=\"{{user.avatar}}\" ng-click=\"goPerson(user.uuid)\">\n" +
    "        <button class=\"button follow-btn button-small pull-right bg-green\" ng-if='user.is_following == true' ng-click='unfollow(user, $index)'>已O啦!</button>\n" +
    "        <button class=\"button unfollow-btn button-small pull-right button-assertive\" ng-if='user.is_following != true' ng-click='follow(user, $index)'>速度O!</button>\n" +
    "        <button class=\"button button-clear button-small pull-right follow-each-other\">\n" +
    "          <i ng-class=\"{green: user.friendship_state === 3}\"></i>\n" +
    "        </button>\n" +
    "        <h3 class=\"o-you-name\">{{user.nickname}}</h3>\n" +
    "        <p class=\"content\">{{user.intro}}</p>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>"
  );

  $templateCache.put("hot.html",
    "<ion-view title=\"\" class=\"hot\" animation=\"slide-left-right-ios7\" hide-nav-bar=\"false\">\n" +
    "\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">返回</ion-nav-back-button>\n" +
    "    <ion-nav-buttons side=\"right\" ng-if=\"signedIn\">\n" +
    "      <a class=\"button button-clear btn-order-list\" ui-sref=\"tabs.hot_tickets\">\n" +
    "        <i class=\"icon-piao\"></i>\n" +
    "        <span class=\"round-dot-red\"></span>\n" +
    "      </a>\n" +
    "    </ion-nav-buttons>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <div class=\"hotop text-center has-head\">\n" +
    "    <img class=\"\" src=\"img/icon-mouth-open.png\" alt=\"\" ng-if=\"pulling == false\">\n" +
    "    <img class=\"\" src=\"img/icon-mouth-close.png\" alt=\"\" ng-if=\"pulling == true\">\n" +
    "  </div>\n" +
    "  <!-- <a class=\"\" ui-sref=\"tabs.tickets\" style=\"position:absolute;top: 31px;right: 7px;text-decoration:none;\">\n" +
    "    <i class=\"icon-piao\"></i>\n" +
    "    <span class=\"round-dot-red\" style=\"vertical-align:top;\"></span>\n" +
    "  </a> -->\n" +
    "  <ion-content delegate-handle=\"hotScroll\">\n" +
    "    <ion-refresher on-pulling=\"doRefresh()\" pulling-icon=\"\"></ion-refresher>\n" +
    "    <ion-list>\n" +
    "      <div class=\"item\" collection-repeat=\"event in events\" collection-item-width=\"imageWidth\" collection-item-height=\"imageHeight\" ng-click=\"goEvent(event.id)\">\n" +
    "        <img class=\"full-image\" ng-src=\"{{event.app_cover}}?imageView2/0/w/{{imageWidth}}/q/90\" ng-click=\"goEvent(event.id)\">\n" +
    "        <div class=\"event-info padding\">\n" +
    "          <div class=\"overlayer\"></div>\n" +
    "          <h2 class=\"title\">{{event.title}}</h2>\n" +
    "          <p class=\"event-attr text-green\"><i class=\"owhat-icons icon-addr\"></i>{{event.address}}</p>\n" +
    "          <p class=\"event-date\"><i class=\"owhat-icons icon-clock\"></i>{{event.start_at | date: 'yyyy年 MMM d日 a h:mm'}}</p>\n" +
    "        </div>\n" +
    "        <span class=\"price\" ng-if=\"event.fee && !((event.closed || event.overrun))\">￥{{event.fee}}</span>\n" +
    "        <span class=\"price ofree\" ng-if=\"event.free && !((event.closed || event.overrun))\"></span>\n" +
    "        <span class=\"price soldout\" ng-if=\"event.closed || event.overrun\"></span>\n" +
    "      </div>\n" +
    "    </ion-list>\n" +
    "    <ion-infinite-scroll icon=\"ion-loading-c\" on-infinite=\"fetchMore()\" ng-if=\"moreDataCanBeLoaded()\"></ion-infinite-scroll>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n"
  );

  $templateCache.put("inbox.html",
    "<ion-view title=\"消息中心\" class=\"inbox\" >\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content class=\"bg-gray\">\n" +
    "    <div class=\"list\">\n" +
    "      <a class=\"item\" ng-click=\"goFollows(userId)\">\n" +
    "        <i class=\"owhat-icons icon-ofen\"></i>\n" +
    "        O！粉\n" +
    "        <span class=\"round-dot-red\" ng-if='hasUnreadFollower'></span>\n" +
    "        <i class=\"o-ion-pricetag ion-ios7-pricetag text-green pull-right\"></i>\n" +
    "      </a>\n" +
    "      <a class=\"item\" ui-sref=\"tabs.alerts\">\n" +
    "        <i class=\"owhat-icons icon-chatbubble\"></i>\n" +
    "        急速公告\n" +
    "        <span class=\"round-dot-red\" ng-if='hasUnreadActivity'></span>\n" +
    "        <i class=\"o-ion-pricetag ion-ios7-pricetag text-green pull-right\"></i>\n" +
    "      </a>\n" +
    "      <a class=\"item\" ui-sref=\"tabs.messages\">\n" +
    "        <i class=\"owhat-icons icon-email\"></i>\n" +
    "        私信\n" +
    "        <span class=\"round-dot-red\" ng-if='hasUnreadMessage'></span>\n" +
    "        <i class=\"o-ion-pricetag ion-ios7-pricetag text-green pull-right\"></i>\n" +
    "      </a>\n" +
    "      <a class=\"item\" ui-sref=\"tabs.tickets\">\n" +
    "        <i class=\"owhat-icons icon-order\"></i>\n" +
    "        订单\n" +
    "        <i class=\"o-ion-pricetag ion-ios7-pricetag text-green pull-right\"></i>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"bg\"></div>\n" +
    "\n" +
    "  </ion-content>\n" +
    "</ion-view>"
  );

  $templateCache.put("login.html",
    "<ion-view name=\"login\" title=\"\" id=\"login\" class=\"login\" hide-nav-bar=\"true\">\n" +
    "  <ion-content class=\"content\">\n" +
    "  <form name=\"loginForm\" ng-submit=\"submitForm(loginForm.$valid)\" novalidate>\n" +
    "    <h2 class=\"logo\"><img class=\"padding\" src=\"img/logo.png\" alt=\"o-what\"></h2>\n" +
    "    <div class=\"list\">\n" +
    "      <label class=\"item item-input\">\n" +
    "        <input type=\"text\" placeholder=\"请输入手机号码或邮箱\" ng-model=\"user.login\" required>\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "        <input type=\"password\" placeholder=\"请输入暗号\" ng-model=\"user.password\" ng-minlength=\"6\" required>\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col col-100\">\n" +
    "        <button class=\"button button-block button-assertive\" type=\"submit\" ng-disabled=\"loginForm.$invalid\">登&nbsp;&nbsp;录</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col\">\n" +
    "        <a class=\"button button-block bg-green\" ng-click=\"qqLogin()\"><img src=\"img/login-qq.png\" class=\"login-icon\" alt=\"\">QQ登录</a>\n" +
    "      </div>\n" +
    "      <div class=\"col\">\n" +
    "        <a class=\"button button-block bg-green\" ng-click=\"weiboLogin()\"><img src=\"img/login-weibo.png\" class=\"login-icon\" alt=\"\">微博登录</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"btns-link\">\n" +
    "      <a class=\"item-note left\" ui-sref=\"start.register\">注册</a>\n" +
    "      <a class=\"item-note left\" ui-sref=\"start.forget\" style=\"margin-left:8px;\">\n" +
    "        忘记密码？\n" +
    "      </a>\n" +
    "      <a ui-sref=\"tabs.hot\" class=\"item-note\">返回首页</a>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n"
  );

  $templateCache.put("map.html",
    "<ion-view title=\"位置坐标\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\" style=\"display:none\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "    <ion-nav-buttons side=\"right\">\n" +
    "      <button class=\"button button-icon icon ion-ios7-checkmark-outline\" ng-click=\"goBack(data)\"></button>\n" +
    "    </ion-nav-buttons>\n" +
    "  </ion-nav-bar>\n" +
    "  <ion-content>\n" +
    "    <div class=\"\">\n" +
    "      <div class=\"item item-input-inset\">\n" +
    "        <label class=\"item-input-wrapper\">\n" +
    "          <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "          <input type=\"text\" placeholder=\"快来输入主人的精确坐标吧！\" ng-model=\"data.location\"/>\n" +
    "        </label>\n" +
    "        <button class=\"button button-small bg-green btn-search\" ng-click=\"search()\">\n" +
    "          搜索\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"list\">\n" +
    "      <baidu-map map=\"map\"></baidu-map>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>"
  );

  $templateCache.put("me.html",
    "<ion-view title=\"{{title}}\" class=\"about_me\">\n" +
    "  <ion-nav-buttons side=\"left\" ng-if=\"isMe && showSetting\">\n" +
    "      <a class=\"button button-clear\" ui-sref=\"tabs.settings\">\n" +
    "        <i class=\"icon ion-ios7-gear-outline\"></i>\n" +
    "      </a>\n" +
    "    </ion-nav-buttons>\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "    <ion-nav-buttons side=\"right\" ng-if=\"isMe && showSetting\">\n" +
    "      <a class=\"button button-clear\" ui-sref=\"tabs.inbox\">\n" +
    "        <i class=\"icon ion-ios7-email-outline\"></i>\n" +
    "      </a>\n" +
    "      <span class=\"round-dot-red\" ng-if=\"hasUnread\"></span>\n" +
    "    </ion-nav-buttons>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <div class=\"myinfo\">\n" +
    "      <div class=\"list\">\n" +
    "        <div class=\"item item-avatar\">\n" +
    "          <img ng-src=\"{{user.avatar}}\" ng-if=\"user.avatar\">\n" +
    "          <!-- <span class=\"my-name block text-center\">{{title}}</span> -->\n" +
    "\n" +
    "          <p class=\"my-city\"><i class=\"icon icon-o\" ng-if=\"user.verified_at\"></i>{{user.area_name}}</p>\n" +
    "          <p class=\"my-message\">{{user.verify_info || user.intro}}</p>\n" +
    "          <p class=\"text-center mt5\">\n" +
    "            <button class=\"button bg-green\" ui-sref=\"tabs.profile\" ng-if=\"isMe\"><i class=\"owhat-icons icon-edit\"></i>编辑资料</button>\n" +
    "            <button class=\"button button-assertive\" ui-sref=\"tabs.publish\"  ng-if=\"isMe\"><i class=\"owhat-icons icon-publish\"></i>发布活动</button>\n" +
    "\n" +
    "            <button class=\"button icon-left\" ng-class=\"isFollowing ? 'bg-green' : 'button-assertive ion-ios7-heart-outline'\" ng-click=\"follow()\" ng-if=\"!isMe && !isFollowing\">O!TA </button>\n" +
    "            <button class=\"button icon-left\" ng-class=\"isFollowing ? 'bg-green' : 'button-assertive ion-ios7-heart-outline'\" ng-click=\"follow()\" ng-if=\"!isMe && isFollowing\">已关注</button>\n" +
    "            <button class=\"button button-assertive icon-left ion-ios7-chatbubble-outline\" ng-click=\"goMessage(user.uuid)\" ng-if=\"!isMe\">O!私信</button>\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"user-atten\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col col33\">{{user.events_count}} <span class=\"block\">行程</span></div>\n" +
    "        <div class=\"col col33\" ng-click=\"goFollows(user.uuid,1)\">{{user.followers_count}} <span class=\"block\">粉丝</span></div>\n" +
    "        <div class=\"col col33\" ng-click=\"goFollows(user.uuid,2)\">{{user.following_count}} <span class=\"block\">关注</span></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- <p class=\"text-center myinfo filter-btns\">\n" +
    "      <button class=\"button\" ng-class=\"showCreateEvents ? 'bg-green' : '' \" ng-click=\"showCreateEvents = true\">{{personName}}创建的</button>\n" +
    "      <button class=\"button\" ng-class=\"showCreateEvents ? '' : 'bg-green' \" ng-click=\"showCreateEvents = false\">{{personName}}报名的</button>\n" +
    "    </p> -->\n" +
    "\n" +
    "    <div class=\"list myevent_list\">\n" +
    "      <a class=\"item item-avatar\" ng-repeat=\"event in events\" ng-click=\"goEvent(event.id)\" ng-class=\"eventClass(event)\">\n" +
    "        <span class=\"avatar-box\"><img ng-src=\"{{event.app_cover}}?imageView2/1/w/446/h/446\"></span>\n" +
    "        <em class=\"datetime\">{{event.start_at | date:'M/d'}}</em>\n" +
    "        <h2 class=\"title\">{{event.title}}</h2>\n" +
    "        <!-- <p>{{event.description}}</p> -->\n" +
    "        <span class=\"line_vertical\"></span>\n" +
    "      </a>\n" +
    "\n" +
    "      <!-- <a class=\"item item-avatar active\">\n" +
    "        <img src=\"img/icon-ghost-gray.png\">\n" +
    "        <em class=\"datetime\">12/30</em>\n" +
    "        <h2>ENSON CHEN</h2>\n" +
    "        <p>陈奕迅演唱会</p>\n" +
    "        <span class=\"line_vertical\"></span>\n" +
    "      </a>\n" +
    "      <a class=\"item item-avatar over\">\n" +
    "        <img src=\"img/icon-ghost-gray.png\">\n" +
    "        <em class=\"datetime\">12/30 <span class=\"block\">已结束</span></em>\n" +
    "        <h2>ENSON CHEN</h2>\n" +
    "        <p>陈奕迅演唱会</p>\n" +
    "        <span class=\"line_vertical\"></span>\n" +
    "      </a>\n" +
    "      <a class=\"item item-avatar\">\n" +
    "        <img src=\"img/icon-ghost-gray.png\">\n" +
    "        <em class=\"datetime\">12/30</em>\n" +
    "        <h2>ENSON CHEN</h2>\n" +
    "        <p>陈奕迅演唱会</p>\n" +
    "        <span class=\"line_vertical\"></span>\n" +
    "      </a> -->\n" +
    "    </div>\n" +
    "    <ion-infinite-scroll icon=\"ion-loading-c\" on-infinite=\"fetchMore()\" ng-if=\"moreDataCanBeLoaded()\"></ion-infinite-scroll>\n" +
    "  </ion-content>\n" +
    "\n" +
    "  <!-- <a class=\"goup\"></a> -->\n" +
    "  <!-- <a class=\"godown\"></a> -->\n" +
    "  <!-- <div class=\"list myevent_list\" ng-repeat=\"myevent in myevents\">\n" +
    "    <a class=\"item item-avatar\" ui-sref=\"\">\n" +
    "      <img src=\"{{ myevent.evenet_poster }}\">\n" +
    "      <em class=\"datetime\">{{ myevent.event_date }}</em>\n" +
    "      <h2>{{ myevent.star_name }}</h2>\n" +
    "      <p>{{ myevent.event_name }}</p>\n" +
    "      <span class=\"line_vertical\"></span>\n" +
    "    </a>\n" +
    "  </div> -->\n" +
    "</ion-view>\n"
  );

  $templateCache.put("message.html",
    "<ion-view title=\"{{teller.nickname}}\" class=\"mail-inner\" animation=\"slide-left-right-ios7\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "    <!-- <ion-nav-buttons side=\"right\">\n" +
    "      <a class=\"button button-clear\">\n" +
    "        <i class=\"icon ion-ios7-trash-outline text-black\"></i>\n" +
    "      </a>\n" +
    "    </ion-nav-buttons> -->\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content class=\"has-header\">\n" +
    "    <div class=\"list\" scroll-glue>\n" +
    "      <div ng-repeat=\"message in messages\" ng-class=\"{'item-img-left': !message.myMessage, 'item-img-right text-right': message.myMessage}\">\n" +
    "        <span class=\"block text-center time\">{{message.created_at | fromNow}}</span>\n" +
    "        <a class=\"item item-avatar\">\n" +
    "          <img class=\"o-round-avatar\" ng-src=\"{{me.avatar}}\" ng-if='message.myMessage' ng-click=\"goPerson(user.uuid)\">\n" +
    "          <img class=\"o-round-avatar\" ng-src=\"{{teller.avatar}}\" ng-if='!message.myMessage' ng-click=\"goPerson(teller.uuid)\">\n" +
    "          <p class=\"mail-content text-left\">\n" +
    "            {{message.content}}\n" +
    "            <span class=\"mail-inner-arrow\"></span>\n" +
    "          </p>\n" +
    "          <span class=\"round-dot-red\" ng-if='!message.myMessage && !message.read'></span>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "\n" +
    "  <div class=\"bar bar-footer bar-stable\">\n" +
    "    <div class=\"title text-left\">\n" +
    "      <input type=\"text\" class=\"mail-inner-input\" placeholder=\"请输入信息\" ng-model='content'>\n" +
    "    </div>\n" +
    "    <button class=\"button bg-green\" ng-click='sendMessage()'>发送</button>\n" +
    "  </div>\n" +
    "</ion-view>\n" +
    "\n"
  );

  $templateCache.put("messages.html",
    "<ion-view title=\"私信\" class=\"inbox-messages\" >\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <div class=\"list\">\n" +
    "      <div class=\"null-content\" ng-if=\"isEmpty\">您的列表是空的</div>\n" +
    "      <a class=\"item item-avatar item-divider o-avatar\" ng-class='{read: msg.unread === 0}' ng-repeat=\"msg in messages\" ng-if=\" messages.length>0 \" >\n" +
    "        <img class=\"o-round-avatar top10\" ng-src=\"{{msg.teller.avatar}}\" ui-sref=\"tabs.me_message({userId: msg.teller.uuid})\">\n" +
    "\n" +
    "        <div class=\"pull-right\">\n" +
    "          <span class=\"item-note text-right pull-left\">\n" +
    "            <span class=\"block time\">{{msg.last_updated_at | fromNow}}</span>\n" +
    "            <i class=\"ion-ios7-email-outline\"></i>\n" +
    "            <i class=\"del-btn\" ng-click=\"deleteNotify($index)\"></i>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <h3 class=\"o-you-name\" ui-sref=\"tabs.me_message({userId: msg.teller.uuid})\">\n" +
    "          {{msg.teller.nickname}}\n" +
    "          <span class=\"round-dot-red\" ng-if='msg.unread > 0'></span>\n" +
    "        </h3>\n" +
    "        <p class=\"content\" ui-sref=\"tabs.me_message({userId: msg.teller.uuid})\">{{msg.last_content}}</p>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n"
  );

  $templateCache.put("mobile.html",
    "<ion-view title=\"{{ mobile ?  '重新绑定' :  '手机号码绑定'}}\" class=\"login register\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <form name=\"regForm\" ng-submit=\"submitForm(regForm.$valid)\" novalidate>\n" +
    "      <div class=\"list\">\n" +
    "        <label class=\"item item-input\">\n" +
    "          <input type=\"tel\" placeholder=\"| 请输入手机号码\" name=\"mobile\"\n" +
    "            ng-pattern=\"/^1[3|4|5|7|8]\\d{9}$/\" ng-model=\"user.mobile\" required>\n" +
    "        </label>\n" +
    "        <label class=\"item item-input\">\n" +
    "          <input type=\"password\" placeholder=\"| 请输入暗号（最少6位）\" ng-model=\"user.password\" ng-minlength=\"6\" required>\n" +
    "        </label>\n" +
    "        <label class=\"item item-input\">\n" +
    "          <input type=\"password\" placeholder=\"| 请再次输入暗号（最少6位）\" ng-model=\"user.passwordConfirm\" match=\"user.password\" name=\"confirmPassword\" />\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"row verification\">\n" +
    "        <div class=\"item\">\n" +
    "          <!-- <button class=\"col button get-code assertive\">120秒后重新发送</button> -->\n" +
    "          <a class=\"col button get-code button-assertive\" ng-click=\"sendSmsCode()\" ng-disabled=\"regForm.mobile.$invalid || codeSent\">{{codeSentBtnText}}</a>\n" +
    "          <input class=\"col input-code item-input\" type=\"text\" placeholder=\"请输入验证码\" ng-model=\"user.code\" required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"\">\n" +
    "        <button class=\"button bg-green gointo\" type=\"submit\" ng-disabled=\"regForm.$invalid\">绑定</button>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n"
  );

  $templateCache.put("profile.html",
    "<ion-view title=\"我的档案\" class=\"profile\"  hide-header='true' ng-controller=\"ProfileController\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <form name=\"profileForm\" ng-submit=\"submitForm(profileForm.$valid)\" novalidate>\n" +
    "    <div class=\"list\">\n" +
    "      <div class=\"item\" ng-click=\"takePicture()\">\n" +
    "        <span class=\"item-note\">\n" +
    "          <img ng-src=\"{{avatar}}\">\n" +
    "          <i class=\"ion-ios7-arrow-thin-right green-radius\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">修改头像</span>\n" +
    "      </div>\n" +
    "      <label class=\"item item-input mt40\">\n" +
    "        <span class=\"input-label\">昵称</span>\n" +
    "        <input class=\"text-right\" type=\"text\" ng-model='user.nickname' placeholder=\"2-15个字符，支持中英文\" ng-minlength=\"2\" ng-maxlength=\"15\" required>\n" +
    "      </label>\n" +
    "      <label class=\"item item-input item-select\">\n" +
    "        <div class=\"input-label\">\n" +
    "          性别\n" +
    "        </div>\n" +
    "        <select ng-model='user.sex'>\n" +
    "          <option value='true'>男</option>\n" +
    "          <option value='false'>女</option>\n" +
    "        </select>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item\" ng-click=\"pickCity()\">\n" +
    "        <span class=\"pull-right\">{{area_name}}</span>\n" +
    "        <span class=\"input-label\">所在地</span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item item-input mt40\">\n" +
    "        <span class=\"input-label\">一句话简介</span>\n" +
    "        <textarea rows=\"5\" ng-model='user.intro' placeholder='说点什么'></textarea>\n" +
    "      </label>\n" +
    "\n" +
    "      <!-- <div class=\"item mt40\" ui-sref=\"tabs.bindsns\">\n" +
    "        <span class=\"item-note\">\n" +
    "          <i class=\"ion-ios7-arrow-thin-right green-radius\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">绑定</span>\n" +
    "      </div> -->\n" +
    "    </div>\n" +
    "    <div class=\"padding\">\n" +
    "      <button class=\"button button-block button-assertive\" type=\"submit\" ng-disabled=\"profileForm.$invalid\">保存</button>\n" +
    "    </div>\n" +
    "    </form>\n" +
    "    <!-- <button class=\"button button-small\" ng-click=\"profilePopup()\">测试弹框按钮</button> -->\n" +
    "    <div class=\"list bindsns\">\n" +
    "      <div class=\"padding\">社交网络账号</div>\n" +
    "      <div class=\"item\">\n" +
    "        <div class=\"item-inner\">\n" +
    "          <button class=\"item-note button button-small bg-green\" ng-click=\"weiboBind()\" ng-if=\"!weiboBinded\">绑定</button>\n" +
    "          <button class=\"item-note button button-small button-assertive\" ng-click=\"weiboUnBind()\" ng-if=\"weiboBinded\">解绑</button>\n" +
    "          <span class=\"title\">\n" +
    "            <img src=\"img/login-weibo.png\" class=\"login-icon\" alt=\"\">微博登录\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"item\">\n" +
    "        <div class=\"item-inner\">\n" +
    "          <button class=\"item-note button button-small bg-green\" ng-click=\"qqBind()\" ng-if=\"!qqBinded\">绑定</button>\n" +
    "          <button class=\"item-note button button-small button-assertive\" ng-click=\"qqUnBind()\" ng-if=\"qqBinded\">解绑</button>\n" +
    "          <span class=\"title\">\n" +
    "            <img src=\"img/login-qq.png\" class=\"login-icon\" alt=\"\">QQ登录\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"padding\">手机号码</div>\n" +
    "      <div class=\"item\"  ui-sref=\"tabs.mobile\">\n" +
    "        <div class=\"item-inner\">\n" +
    "          <span class=\"item-note\">\n" +
    "            {{mobile ||  '未绑定'}}\n" +
    "            <!-- 更改 -->\n" +
    "            <i class=\"ion-ios7-arrow-thin-right green-radius\"></i>\n" +
    "          </span>\n" +
    "          <i class=\"owhat-icons icon-phone\"></i>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n"
  );

  $templateCache.put("province_list.html",
    "<ion-modal-view>\n" +
    "<ion-header-bar class=\"bar-positive\">\n" +
    "  <h1 class=\"title\">请选择</h1>\n" +
    "</ion-header-bar>\n" +
    "<ion-content>\n" +
    "<ul class=\"list\">\n" +
    "  <li class=\"item\" ng-repeat='area in areas' ng-click=\"pickProvince('{{area.id}}', '{{area.name}}')\">\n" +
    "    {{area.name}}\n" +
    "    <i class=\"icon ion-chevron-right pull-right\"></i>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "</ion-modal-view>"
  );

  $templateCache.put("publish.html",
    "<ion-view title=\"创建活动\" class=\"publish\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\" ng-click=\"goBack()\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <form name=\"eventForm\" ng-submit=\"submitForm(eventForm.$valid)\" novalidate>\n" +
    "    <div class=\"list\">\n" +
    "      <label class=\"item item-input row\">\n" +
    "        <span class=\"input-label col-10\">标题: </span>\n" +
    "        <input type=\"text\" ng-model=\"event.title\" required id=\"event_title\">\n" +
    "      </label>\n" +
    "\n" +
    "      <div class=\"item bg-gray\">\n" +
    "        <textarea class=\"\" rows=\"6\" placeholder=\"我是O星小秘书，主人写点什么吧?\" ng-model=\"event.description\" required id=\"event_desc\" ng-keypress=\"updateEditor()\"></textarea>\n" +
    "        <div class=\"take-pictures\">\n" +
    "          <div class=\"input-image\">\n" +
    "            <span style=\"background: url({{coverImage1}}) no-repeat center;background-size: contain;\" ng-click=\"takePicture(1)\">\n" +
    "            </span>\n" +
    "            <input type=\"hidden\" ng-model=\"event.cover_data1\" required>\n" +
    "          </div>\n" +
    "          <div class=\"input-image\">\n" +
    "            <span style=\"background: url({{coverImage2}}) no-repeat center;background-size: contain;\" ng-click=\"takePicture(2)\">\n" +
    "            </span>\n" +
    "            <input type=\"hidden\" ng-model=\"event.cover_data2\">\n" +
    "          </div>\n" +
    "          <div class=\"input-image\">\n" +
    "            <span style=\"background: url({{coverImage3}}) no-repeat center;background-size: contain;\" ng-click=\"takePicture(3)\">\n" +
    "            </span>\n" +
    "            <input type=\"hidden\" ng-model=\"event.cover_data3\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <label class=\"item icon-right-tag\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <input type=\"number\" placeholder=\"不限\" ng-model=\"event.ticket_total\" ng-blur=\"isFocused=false\" ng-focus=\"isFocused=true\" min=\"1\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"isFocused ? 'active':''\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <i class=\"ion-ios7-people\"></i>\n" +
    "          召集人数\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item icon-right-tag bg-gray\" ng-click=\"pickDate()\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <input type=\"date\" ng-model=\"eventData.start_date\" required ng-blur=\"isFocusedDate=false\" ng-focus=\"isFocusedDate=true\" readonly=\"{{isAndroid}}\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"isFocusedDate ? 'active':''\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <i class=\"ion-calendar\"></i>\n" +
    "          活动日期\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item icon-right-tag bg-white\" ng-click=\"pickTime('start')\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <input type=\"time\" ng-model=\"eventData.start_time\" required ng-blur=\"isFocusedTime=false\" ng-focus=\"isFocusedTime=true\" readonly=\"{{isAndroid}}\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"isFocusedTime ? 'active':''\" ></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <i class=\"ion-ios7-clock\"></i>\n" +
    "          开始时间\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item icon-right-tag bg-gray\" ng-click=\"pickTime('end')\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <input type=\"time\" ng-model=\"eventData.end_time\" required ng-blur=\"isFocusedEndTime=false\" ng-focus=\"isFocusedEndTime=true\" readonly=\"{{isAndroid}}\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"isFocusedEndTime ? 'active':''\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <i class=\"ion-ios7-clock\"></i>\n" +
    "          结束时间\n" +
    "        </span>\n" +
    "      </label>\n" +
    "      <label class=\"item icon-right-tag\" ng-click=\"goMap()\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <!-- <input type=\"text\" ng-model=\"event.address\" required ng-blur=\"isFocusedSite=false\" ng-focus=\"isFocusedSite=true\"> -->\n" +
    "          <span class=\"address\">{{event.address}}</span>\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"isFocusedSite ? 'active':''\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <i class=\"ion-ios7-location\"></i>\n" +
    "          位置坐标\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item icon-right-tag bg-gray\">\n" +
    "        <span class=\"item-note pr\">\n" +
    "          <input type=\"text\" ng-model=\"event.mobile\" ng-blur=\"isFocusedMobile=false\" ng-focus=\"isFocusedMobile=true\">\n" +
    "          <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"isFocusedMobile ? 'active':''\"></i>\n" +
    "        </span>\n" +
    "        <span class=\"input-label\">\n" +
    "          <i class=\"ion-iphone\" style=\"margin-right: 6px;\"></i>联系方式\n" +
    "        </span>\n" +
    "      </label>\n" +
    "\n" +
    "      <div class=\"item o-item-tabs\">\n" +
    "        <h4 class=\"title padding\">报名所需信息</h4>\n" +
    "        <div class=\"row\">\n" +
    "          <ion-checkbox class=\"button button-small col-20\" ng-repeat=\"item in regFields\" ng-model=\"item.checked\" ng-class=\"item.checked ? 'bg-green':'bg-darkgray'\" ng-disabled=\"item.id == 'name' || item.id == 'phone'\">{{ item.text }} <i class=\"ion-ios7-checkmark\" ng-if=\"item.checked\"></i></ion-checkbox>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <input type=\"text\" placeholder=\"自定义你需知道的更多信息\" ng-model=\"event.ext_info\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"item bg-gray o-item-tabs\">\n" +
    "        <div class=\"row\">\n" +
    "          <a class=\"button button-small col\" ng-click=\"event.free = true\" ng-class=\"event.free ? 'button-assertive':'bg-darkgray'\">免费</a>\n" +
    "          <a class=\"button button-small col\" ng-click=\"event.free = false\" ng-class=\"!event.free ? 'button-assertive':'bg-darkgray'\" >收费</a>\n" +
    "          <!-- <i class=\"o-ion-pricetag ion-ios7-pricetag text-green\" ng-class=\"!event.free ? 'active':''\"></i> -->\n" +
    "        </div>\n" +
    "        <div class=\"fee-toggle\" ng-show=\"!event.free\">\n" +
    "          <div class=\"row fee\">\n" +
    "            <div class=\"pr col\">\n" +
    "              <span class=\"pull-left\">原价&nbsp;&nbsp;|</span>\n" +
    "              <input type=\"text\" ng-model='event.original_fee'>\n" +
    "            </div>\n" +
    "            <div class=\"pr col\">\n" +
    "              <span class=\"pull-left\">现价&nbsp;&nbsp;|</span>\n" +
    "              <input type=\"text\" ng-model='event.fee' name='fee' ng-required='event.free === false'>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row format\">\n" +
    "          <span class=\"pull-left col-20\">售卖形式</span>\n" +
    "          <a class=\"button button-small col-33 pull-right\" ng-class=\"event.ticket_limit == 1 ? 'bg-green' : 'bg-darkgray' \" ng-click=\"event.ticket_limit = 1\">限购1张</a>\n" +
    "          <a class=\"button button-small col-33 pull-right\" ng-class=\"event.ticket_limit != 1 ? 'bg-green' : 'bg-darkgray' \" ng-click=\"event.ticket_limit = 0\">正常发售</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"padding\">\n" +
    "        <button class=\"button button-block button-assertive\" type=\"submit\" ng-disabled=\"eventForm.$invalid\">发布活动</button>\n" +
    "      </div>\n" +
    "      <p class=\"pr item-checkbox text-right agreement clearfix\">\n" +
    "        <label class=\"checkbox pull-left\">\n" +
    "          <input type=\"checkbox\" checked disabled>Owhat开放平台合作协议\n" +
    "        </label>\n" +
    "        <label class=\"checkbox pull-left plat\">\n" +
    "          <input type=\"checkbox\" checked disabled>用户协议\n" +
    "        </label>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    </form>\n" +
    "  </ion-content>\n" +
    "\n" +
    "</ion-view>"
  );

  $templateCache.put("register.html",
    "<ion-view title=\"手机号码注册\" class=\"login register\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <form name=\"regForm\" ng-submit=\"submitForm(regForm.$valid)\" novalidate>\n" +
    "      <div class=\"list\">\n" +
    "        <label class=\"item item-input\">\n" +
    "          <input type=\"tel\" placeholder=\"| 请输入手机号码\" name=\"mobile\"\n" +
    "            ng-pattern=\"/^1[3|4|5|7|8]\\d{9}$/\" ng-model=\"user.mobile\" required>\n" +
    "        </label>\n" +
    "        <label class=\"item item-input\">\n" +
    "          <input type=\"password\" placeholder=\"| 请输入暗号（最少6位）\" ng-model=\"user.password\" ng-minlength=\"6\" required>\n" +
    "        </label>\n" +
    "        <label class=\"item item-input\">\n" +
    "          <input type=\"password\" placeholder=\"| 请再次输入暗号（最少6位）\" ng-model=\"user.passwordConfirm\" match=\"user.password\" name=\"confirmPassword\" />\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"row verification\">\n" +
    "        <div class=\"item\">\n" +
    "          <!-- <button class=\"col button get-code assertive\">120秒后重新发送</button> -->\n" +
    "          <a class=\"col button get-code button-assertive\" ng-click=\"sendSmsCode()\" ng-disabled=\"regForm.mobile.$invalid || codeSent\">{{codeSentBtnText}}</a>\n" +
    "          <input class=\"col input-code item-input\" type=\"text\" placeholder=\"请输入验证码\" ng-model=\"user.code\" required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"\">\n" +
    "        <button class=\"button bg-green gointo\" type=\"submit\" ng-disabled=\"regForm.$invalid\">进入O！WHAT</button>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n"
  );

  $templateCache.put("settings.html",
    "<ion-view title=\"系统设置\" class=\"settings\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "  <ion-content>\n" +
    "    <ul class=\"list\">\n" +
    "      <!-- <li class=\"item\"></li> -->\n" +
    "      <!-- <li class=\"item item-toggle\">\n" +
    "        接收新消息通知\n" +
    "      </li>\n" +
    "      <li class=\"item\"><small>请在iPhone消息中心进行设置</small></li> -->\n" +
    "      <!-- <li class=\"item item-toggle\">\n" +
    "        消息免打扰\n" +
    "        <label class=\"toggle toggle-calm\">\n" +
    "          <input type=\"checkbox\">\n" +
    "          <div class=\"track\">\n" +
    "            <div class=\"handle\"></div>\n" +
    "          </div>\n" +
    "        </label>\n" +
    "      </li>\n" +
    "      <li class=\"item\"><small>当日22:00-次日8:00</small></li> -->\n" +
    "      <!-- <li class=\"item item-toggle\">\n" +
    "        私信提醒\n" +
    "        <label class=\"toggle toggle-calm\">\n" +
    "          <input type=\"checkbox\" ng-model=\"user.notify_message\" ng-change=\"updateUser()\">\n" +
    "          <div class=\"track\">\n" +
    "            <div class=\"handle\"></div>\n" +
    "          </div>\n" +
    "        </label>\n" +
    "      </li> -->\n" +
    "      <!-- <li class=\"item\"></li> -->\n" +
    "      <li class=\"item\">\n" +
    "        <a class=\"border-b block\" ng-click=\"goFeedback()\">意见反馈</a>\n" +
    "        <a class=\"border-b block\" ng-click=\"goAbout()\">关于我们</a>\n" +
    "      </li>\n" +
    "      <li class=\"item\"><small>当前版本：1.0.21</small></li>\n" +
    "    </ul>\n" +
    "    <div class=\"padding\">\n" +
    "      <button class=\"button button-block button-assertive\" ng-click=\"logoutConfirm()\">退出登录</button>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>"
  );

  $templateCache.put("start.html",
    "<ion-nav-view name=\"start\"></ion-nav-view>"
  );

  $templateCache.put("success.html",
    "<ion-view title=\"订票成功\" class=\"success-order\" animation=\"slide-left-right-ios7\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">\n" +
    "      返回\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "  <div class=\"poster-detail list\">\n" +
    "    <a class=\"item item-thumbnail-left\">\n" +
    "      <img src=\"cover.jpg\">\n" +
    "      <h3>2014 极限震撼 彩虹共震</h3>\n" +
    "      <p><small>数量：1 <span class=\"block\">总价：￥8000</span></small></p>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div class=\"bg-gray item\">\n" +
    "    <span class=\"block info\">地址：北京工人体育馆西门广场</span>\n" +
    "    <span class=\"block info\">时间：9月30日 18:00 - 9月30日 22:00</span>\n" +
    "  </div>\n" +
    "  <div class=\"item\">\n" +
    "    <span class=\"block info\">订单时间：2014-09-29   12：05</span>\n" +
    "  </div>\n" +
    "  <div class=\"bg-half-dot\"></div>\n" +
    "  </ion-content>\n" +
    "\n" +
    "  <div class=\"bar bar-footer o-ticket\">\n" +
    "    <button class=\"button button-block bg-green\">查看电子票</button>\n" +
    "  </div>\n" +
    "</ion-view>\n"
  );

  $templateCache.put("tabs.html",
    "<ion-tabs class=\"tabs-positive tabs-icon-left\" ng-class=\"{'tabs-item-hide': hideTabs}\">\n" +
    "  <ion-tab title=\"O!你\" ui-sref=\"tabs.you\" icon-on=\"on-tabs-insect\" icon-off=\"off-tabs-insect\">\n" +
    "    <ion-nav-view name=\"you\"></ion-nav-view>\n" +
    "  </ion-tab>\n" +
    "\n" +
    "  <ion-tab title=\"O!\" ui-sref=\"tabs.hot\" icon-on=\"on-tabs-ghost\" icon-off=\"off-tabs-ghost\">\n" +
    "    <ion-nav-view name=\"hot\"></ion-nav-view>\n" +
    "  </ion-tab>\n" +
    "\n" +
    "  <ion-tab title=\"O!我\" ui-sref=\"tabs.me\" icon-on=\"on-tabs-eye\" icon-off=\"off-tabs-eye\">\n" +
    "    <ion-nav-view name=\"me\"></ion-nav-view>\n" +
    "  </ion-tab>\n" +
    "</ion-tabs>"
  );

  $templateCache.put("tickets.html",
    "<ion-view title=\"订单\" class=\"inbox-tickets\" >\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">返回</ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <div class=\"card\">\n" +
    "      <div class=\"null-content\" ng-if=\"isEmpty\">您的列表是空的</div>\n" +
    "      <div class=\"item item-text-wrap\" ng-click=\"showPopup($index)\" ng-repeat=\"msg in tickets\" ng-if=\"tickets.length>0 \">\n" +
    "        <img ng-if=\"showPop == true\" class=\"pull-right\" ng-src=\"{{msg.imgcode}}\" alt=\"\">\n" +
    "        <img ng-if=\"showPop == false\" style=\"opacity:0;\" class=\"pull-right\" ng-src=\"{{msg.imgcode}}\" alt=\"\">\n" +
    "        <h2>您购买了“{{msg.event.title}}”{{msg.quantity}}张，请妥善保管好右侧二维码，主办方工作人员会与您联系。</h2>\n" +
    "        <p>\n" +
    "          <i class=\"ion-android-clock\"></i>\n" +
    "          {{msg.event.start_at | date: 'yyyy年 MMM d日 a h:mm'}}\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          <i class=\"ion-ios7-location-outline\"></i>\n" +
    "          {{msg.event.address}}\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          <i class=\"ion-ios7-telephone-outline\"></i>\n" +
    "          {{msg.event.mobile}}\n" +
    "        </p>\n" +
    "        <!-- ’订单已使用‘ 添加class ticketUsed -->\n" +
    "        <span class=\"ticketUse\" ng-if=\"!msg.checked_at\">订单未使用</span>\n" +
    "        <span class=\"ticketUse ticketUsed\" ng-if=\"msg.checked_at\">订单已使用</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "\n" +
    "<style type=\"text/css\">\n" +
    "  .popup{\n" +
    "    width: 290px;\n" +
    "  }\n" +
    "  .popup-buttons.row .pop-imgcode {\n" +
    "    font-size: 17px;\n" +
    "  }\n" +
    "  .popup-head{\n" +
    "    padding-top: 0;\n" +
    "  }\n" +
    "  .backdrop{\n" +
    "    background-color: rgba(0, 0, 0, 0.8);\n" +
    "  }\n" +
    "</style>"
  );

  $templateCache.put("you.html",
    "<ion-view title=\"\" animation=\"slide-left-right-ios7\" class=\"o-you\">\n" +
    "  <ion-nav-bar class=\"bar-positive\">\n" +
    "    <ion-nav-back-button class=\"button-icon ion-ios7-arrow-left\">返回</ion-nav-back-button>\n" +
    "    <ion-nav-buttons side=\"right\">\n" +
    "      <a class=\"button button-clear btn-add-friends\" ui-sref=\"tabs.friends\">\n" +
    "        <i class=\"icon-add-friend\"></i>\n" +
    "      </a>\n" +
    "    </ion-nav-buttons>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <ion-refresher on-refresh=\"doRefresh()\"></ion-refresher>\n" +
    "    <ion-list>\n" +
    "      <ion-item ng-repeat=\"event in events\" class=\"nopadding\">\n" +
    "        <div class=\"item item-avatar o-avatar\">\n" +
    "          <img ng-click=\"goPerson(event.user_uuid)\" class=\"o-round-avatar\" ng-src=\"{{event.user_avatar}}\" ng-class=\"!event.user_verified_at ? 'top10':''\">\n" +
    "          <span class=\"pull-right o-you-time\">\n" +
    "            <i class=\"ion-ios7-clock\"></i>\n" +
    "            {{event.created_at | fromNow}}\n" +
    "          </span>\n" +
    "\n" +
    "          <h2 ng-click=\"goPerson(event.user_uuid)\" class=\"o-you-name assertive\" ng-class=\"event.user_verified_at ? 'o-you-verified' : ''\">\n" +
    "            <span class=\"block\" ng-if=\"event.user_verified_at\"><i class=\"icon icon-o\"></i></span>\n" +
    "            {{event.user_nickname}}\n" +
    "          </h2>\n" +
    "        </div>\n" +
    "        <div class=\"item item-body\">\n" +
    "          <p class=\"you-detail\">{{event.description}}</p>\n" +
    "          <div class=\"poster pr\" ui-sref=\"tabs.you_event({ eventId: event.id })\">\n" +
    "            <div class=\"overlayer\"></div>\n" +
    "            <img class=\"full-image\" ng-src=\"{{event.cover}}?imageView2/0/w/{{imageWidth}}/q/90\">\n" +
    "            <span class=\"item-note price text-green\" ng-if=\"event.fee\">\n" +
    "              ￥{{event.fee}}\n" +
    "            </span>\n" +
    "            <span class=\"price ofree\" ng-if=\"!event.fee && !((event.closed || event.overrun))\"></span>\n" +
    "            <span class=\"title\">{{event.title}}</span>\n" +
    "            <span class=\"price soldout\" ng-if=\"event.closed || event.overrun\"></span>\n" +
    "          </div>\n" +
    "          <div class=\"pr mt5\">\n" +
    "            <ion-slide-box on-slide-changed=\"slideHasChanged($index)\" show-pager=\"false\" class=\"you-slide\">\n" +
    "              <ion-slide>\n" +
    "                <div class=\"box\">\n" +
    "                  <img ng-repeat=\"user in event.attendees\" class=\"other-avatar\" ng-src=\"{{user.user_avatar}}\" alt=\"\">\n" +
    "                </div>\n" +
    "              </ion-slide>\n" +
    "            </ion-slide-box>\n" +
    "            <span class=\"button button-small o-btn bg-green fire-arrow\" ng-click=\"goAttendees(event.id)\"></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <hr class=\"o-you-hr\">\n" +
    "      </ion-item>\n" +
    "    </ion-list>\n" +
    "    <ion-infinite-scroll icon=\"ion-loading-c\" on-infinite=\"fetchMore()\" ng-if=\"moreDataCanBeLoaded()\"></ion-infinite-scroll>\n" +
    "  </ion-content>\n" +
    "</ion-view>"
  );

}]);
