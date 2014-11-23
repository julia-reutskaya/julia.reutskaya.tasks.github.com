/**
 * Created by ulia on 16.11.14.
 */
$(function(){

    var tasks = null,
        tabTaskContainer = $(".tasks-control"),
        contentContainer = $(".preview-content");


    loadProjectStructure ();

    function loadProjectStructure () {

        var url = "structure.json";

        $.ajax({
            url: url,
            contentType: "json"
        }).done(function (response) {

            tasks = response.tasks;
            loadTask ();

            var firstTask = tabTaskContainer.children().eq(0),
                text = firstTask.text(),
                path = 'tasks/' + text;

            applyStyles(firstTask);
            loadTaskContent(path);
        });
    }


    function loadTask () {
        $.each(tasks, function () {

            var taskNameTab = $("<li>"),
                taskNameA = $("<a>");

            taskNameA.text(this);
            taskNameA.attr("href", "#");
            taskNameTab.append(taskNameA);
            tabTaskContainer.append(taskNameTab);
        });

    }

    tabTaskContainer.on('click', 'li', function(e){
        var taskBtn = $(e.currentTarget),
            taskName = taskBtn.text(),
            path = 'tasks/' + taskName;

        applyStyles(taskBtn);
        loadTaskContent(path);

    });

    function loadTaskContent(url) {

        $.ajax({
            url: url + '/index.html',
            contentType: "text/html"
        }).done(function (response) {
            var startBody = response.indexOf("<body>") + 6,
                endBody = response.indexOf("</body>"),
                loadedBody = response.substring(startBody, endBody);

            contentContainer.html(loadedBody);

            addJs(url + '/scripts.js');
            addCss(url + '/styles.css');
        });
    }

    function applyStyles(btn) {
        tabTaskContainer.children().removeClass('active');
        btn.addClass('active');
        contentContainer.html('task not found');
    }

    function addJs(text) {

        var exist = false,
            head = $('head'),
            script = $('<script>', {
                src: text
            });

        //head.find('script').each(function(){
        //    if(this.src.indexOf(text) !== -1) {
        //        exist = true;
        //    }
        //});
        //
        //if(!exist){
            script.appendTo(head);
        //}

    }

    function addCss(text){
        var exist = false,
            head = $('head'),
            style = $('<link>', {
                href: text,
                rel: "stylesheet",
                type: "text/css"
            });

        head.find('link').each(function(){
            if(this.href.indexOf(text) !== -1) {
                exist = true;
            }
        });

        if(!exist){
            style.appendTo(head);
        }
    }
});