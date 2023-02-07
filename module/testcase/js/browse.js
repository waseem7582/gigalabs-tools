/**
 * Confirm batch delete cases.
 *
 * @param  string $actionLink
 * @access public
 * @return void
 */
function confirmBatchDelete(actionLink)
{
    if(confirm(batchDelete)) setFormAction(actionLink);
    return false;
}

$(function()
{
    if($('#caseList thead th.c-title').width() < 150) $('#caseList thead th.c-title').width(150);

    /* The display of the adjusting sidebarHeader is synchronized with the sidebar. */
    $(".sidebar-toggle").click(function()
    {
        $("#sidebarHeader").toggle("fast");
    });
    if($("main").is(".hide-sidebar")) $("#sidebarHeader").hide();

    $('#importToLib').on('click', function()
    {
        var storyIdList = '';
        $("input[name^='caseIDList']:checked").each(function()
        {
            storyIdList += $(this).val() + ',';
            $('#caseIdList').val(storyIdList);
        });
    });

    $('input[name^="showAutoCase"]').click(function()
    {
        var showAutoCase = $(this).is(':checked') ? 1 : 0;
        $.cookie('showAutoCase', showAutoCase, {expires:config.cookieLife, path:config.webRoot});
        window.location.reload();
    });
});

var runCase = false;
/**
 * Define triggerModal hidden event.
 *
 * @access public
 * @return void
 */
function triggerHidden()
{
    $('#triggerModal').on('hidden.zui.modal', function()
    {
        if(runCase == true) window.location.reload();
    });
}
