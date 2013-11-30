exports.content = {
    cancel : "放弃",
    error404 : "404! 您访问的页面不存在",
    readmore : "阅读更多 &raquo;",
    top_list : "推荐",
    
    pagetitle_homepage : "首页",
    pagetitle_aboutme : "关于",
    pagetitle_updatepost : "更新博文",
    pagetitle_trash : "博文回收站",
    pagetitle_password : "修改密码",
    pagetitle_404 : "404错误",
    
    nav_blog : "博客",
    nav_aboutme: "关于",
    nav_admin_login: "登录",
    nav_admin: "管理",
    nav_admin_setting: "设置",
    nav_admin_data : "备份/恢复",
    nav_admin_addpost: "添加博文",
    nav_admin_myposts: "我的博文",
    nav_admin_password: "修改密码",
    nav_admin_logout: "登出",
    
    page_older : "← 更早",
    page_newer : "更新 →",

    relevant_tags: "标签",
    relevant_links: "友情链接",
    relevant_meweb: "我的连接",

    login_username: "用户名",
    login_password: "密码",
    login_submit: "登录",
    login_failed: "用户名或密码错误！",

    tip_nopost: "不错啊，博客已经正常运行啦！马上开始撰写你的第一篇博文吧: ",
    tip_noaboutme: "不错啊，博客已经正常运行啦！马上到 管理->设置 中更新你自己的“关于我”信息吧",

    setting_lang: "语言",
    setting_lang_tip: "站点语言设置，需要重启Node.js服务",
    setting_sitename: "站点名称",
    setting_sitename_tip: "将会显示在站点顶部，并作为HTML title标签",
    setting_sitedesc: "站点描述",
    setting_sitedesc_tip: "HTML description标签内容",
    setting_keywords: "关键字",
    setting_keywords_tip: "HTML keywords标签内容",
    setting_commentservice: "评论服务商",
    setting_commentservice_tip: "目前支持 <a href='http://disqus.com' target='_blank'>Disqus</a>, <a href='http://www.livefyre.com/' target='_blank'>Lifeflye</a> 和 <a href='http://duoshuo.com/' target='_blank'>多说</a>，更多支持加入中",
    setting_commentserviceid: "评论服务ID",
    setting_commentserviceid_tip: "上述服务注册后分配的唯一ID，如shortname、siteId",
    setting_gaid: "Google Tracking ID",
    setting_gaid_tip: "Google Analytics分配的Tracking ID",
    setting_sitelogo: "站点Logo",
    setting_sitelogo_tip: "显示在默认主题的右上部",
    setting_theme: "网站主题",
    setting_theme_tip: "选择一个你中意的主题吧",
    setting_footer: "底部信息",
    setting_footer_tip: "版权申明和其它你想放的信息",
    setting_aboutme: "关于我",
    setting_aboutme_tip: "关于我页面的内容",
    setting_links: "友情链接",
    setting_links_tip: "每行一个链接，单条链接的格式是：链接名称|链接URL",
    setting_meweb: "我的连接",
    setting_meweb_tip: "每行一个链接，单条链接的格式是：链接名称|链接URL",
    setting_host_local: "本地文件",
    setting_hljs_host: "Highlight.js CDN",
    setting_hljs_host_tip: "请选择一个速度快的免费Highlight.js文件CDN",
    setting_hljs_theme: "Highlight.js主题",
    setting_hljs_theme_tip: "选择一个你中意的代码高亮主题。注意：如果使用本地样式文件，请确认已经将相应css文件放到/public/css目录下面了",
    setting_hljs_theme_demo: "在线预览",
    setting_jquery_host: "jQuery CDN",
    setting_jquery_host_tip: "选择一个速度快的免费jQuery代码库CDN",
    setting_submit: "提交",
   
    post_title: "标题",
    post_tags: "标签",
    post_tags_tip: "支持半角或全角的逗号、分号、空格分隔",
    post_content: "内容",
    post_content_tip: "支持全部Markdown语法以及表格",
    post_created: "创建日期",
    post_created_tip: "留空使用系统当前时间",
    post_created_tip_update: "留空使用原创建时间不修改",
    post_submit: "提交",

    mypost_admin: "博文管理",
    mypost_trash: "回收站",
    mypost_th_id: "ID",
    mypost_th_title: "标题",
    mypost_th_created: "创建时间",
    mypost_th_actions: "操作",
    mypost_action_update: "更新",
    mypost_action_trash: "回收",
    mypost_action_remove: "删除",
    mypost_action_restore: "恢复",
    mypost_trash_tip: "确认要将博文放入回收站吗?",
    mypost_trash_empty: "回收站中没有任何博文",
    mypost_remove_tip: "确认彻底删除吗？删除后不可恢复哦！",
    mypost_adminlink: "管理",
    mypost_trashlink: "回收站",
    mypost_addtop: "置顶",
    mypost_deltop: "普通",

    password_username: "用户名",
    password_oldpassword: "旧密码",
    password_newpassword: "新密码",
    password_confirmpassword: "确认新密码",
    password_submit: "提交",
    password_failed_username: "用户名格式错误",
    password_failed_oldpassword: "旧密码不正确",
    password_failed_newpassword: "新密码格式错误，不得少于6个字符",
    password_failed_match: "新密码确认不匹配",
    password_changed: "密码修改成功!",
    
    admindata_title : "数据备份/恢复",
    admindata_backup : "备份",
    admindata_backup_tip : "点击备份按钮开始备份站点设置和博文数据:",
    admindata_restore : "恢复",
    admindata_restore_upload : "请选择一个之前的备份数据包来恢复数据:",
    admindata_restorefilenotfound : "用于恢复的数据包文件 --@1-- 不存在",
    admindata_restore_file : "用于恢复的数据包:",
    admindata_restore_tip : "注意：此操作将使用您选择的恢复数据包替换目前站点全部数据，而且无法撤销，您确认要进行恢复吗？",
    admindata_dorestore : "确认恢复",
    admindata_restore_succ : "数据恢复成功"
};
