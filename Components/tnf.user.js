////////
// [INJECTION] CONFIG MENU(SLIDE)
////////
$("ul.ProfileHeading-toggle > a[data-nav=settings]").before(
(function () {/*
  <!-- INJECT START: GoogleChrome(Extend), Twitter Notification Filter -->
  <span id="tnf_config_button" class="NotificationsSettingsButton">フィルタ</span>
  <style id="tnf_css_button">
  <!--
    span#tnf_config_button:hover{
      cursor: pointer;
      text-decoration: underline;
    }
  -->
  </style>
  <style id="tnf_css_quotes" type="text/css">
  <!--
    li.js-activity-quote{ display: none; }
  -->
  </style>
  <style id="tnf_css_retweets" type="text/css">
  <!--
    li.js-activity-retweet{ display: none; }
    li.js-activity-retweeted_retweet{ display: none; }
  -->
  </style>
  <style id="tnf_css_likes" type="text/css">
  <!--
    li.js-activity-favorite{ display: none; }
    li.js-activity-favorited_retweet{ display: none; }
  -->
  </style>
  <script>
  <!--
    $("#tnf_config_button").click(function(){ $("#tnf_config").slideToggle(); });
  -->
  </script>
  <!-- INJECT END: GoogleChrome(Extend), Twitter Notification Filter -->
*/}).toString().replace(/(\n)/g, '').split('*')[1]
);

////////
// [INJECTION] CONFIG
////////
$("#content-main-heading").append(
(function () {/*
  <!-- INJECT START: GoogleChrome(Extend), Twitter Notification Filter -->
  <div id="tnf_config" style="padding: 0px 12px; text-align: right; display: none">
    <section id="tnf_config_activity" style="display: inline-block; text-align: left">
      <ul>
        <li><label><input id="tnf_quotes" type="checkbox"> <i class="Icon Icon--pinned"></i> Quoted Tweets </label></li>
        <li><label><input id="tnf_retweets" type="checkbox"> <i class="Icon Icon--retweeted"></i> Retweets </label></li>
        <li><label><input id="tnf_likes" type="checkbox"> <i class="Icon Icon--heartBadge"></i> Likes </label></li>
      </ul>
    </section>
  </div>
  <script>
  <!--
    function tnf_config_activity_save() {
        localStorage["extension_tnf_config"] = JSON.stringify({
            retweets: $("#tnf_retweets").prop("checked"),
            likes: $("#tnf_likes").prop("checked"),
            quotes: $("#tnf_quotes").prop("checked")
        });
    }

    function tnf_config_activity_load() {
        var config = {}
        try {
            config = JSON.parse(localStorage["extension_tnf_config"]);
        } catch (e) {
            tnf_config_activity_save();
            config = JSON.parse(localStorage["extension_tnf_config"]);
        }
        $("#tnf_quotes").prop("checked", config["quotes"]);
        $("#tnf_retweets").prop("checked", config["retweets"]);
        $("#tnf_likes").prop("checked", config["likes"]);
        tnf_change_visibles();
    }

    function tnf_change_visibles() {
        var config = JSON.parse(localStorage["extension_tnf_config"]);
        for (var i = 0, j = document.styleSheets.length; i < j; i++) {
            var sheet = document.styleSheets[i]
            if(!sheet){ continue; }
            var node = sheet.ownerNode;
            if(!node){ continue; }
            if (node.id == "tnf_css_quotes") {
                sheet.disabled = config["quotes"];
            }
            if (node.id == "tnf_css_retweets") {
                sheet.disabled = config["retweets"];
            }
            if (node.id == "tnf_css_likes") {
                sheet.disabled = config["likes"];
            }
        }
    }

    $("#tnf_config_activity").find(":checkbox").change(function() {
          tnf_config_activity_save(true);
          tnf_config_activity_load();
    });
    tnf_config_activity_load();
  -->
  </script>
  <!-- INJECT END: GoogleChrome(Extend), Twitter Notification Filter -->
*/}).toString().replace(/(\n)/g, '').split('*')[1]
);
