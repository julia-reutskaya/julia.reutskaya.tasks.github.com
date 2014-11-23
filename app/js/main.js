/**
 * Created by ulia on 16.11.14.
 */
$(function(){

    var tasks = null,
        tabTaskContainer = $("#tabs"),
        contentContainer = $("#content");


    loadProjectStructure ();

    function loadProjectStructure () {

        var url = "structure.json";

        $.ajax({
            url: url,
            contentType: "json"
        }).done(function (response) {
            tasks = response.tasks;
            loadTask ();
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

            loadTaskContent(this);
        });

    }

    function loadTaskContent(name) {

        var url = "tasks/" + name + "/index.html";

        $.ajax({
            url: url,
            contentType: "text/html"
        }).done(function (response) {
            var startBody = response.indexOf("<body>") + 6,
                endBody = response.indexOf("</body>"),
                loadedBody = response.substring(startBody, endBody),
                oneContent = $("<li>");

            oneContent.html(loadedBody);
            contentContainer.append(oneContent)
            initStyles();
        });
    }

    function initStyles() {
        if(contentContainer.children().length === 1) {
            contentContainer.children().first().addClass('active');
            tabTaskContainer.children().first().addClass('active');
        }
    }
});