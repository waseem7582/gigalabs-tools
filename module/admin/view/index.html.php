<?php
/**
 * The view file of bug module of ZenTaoPMS.
 *
 * @copyright   Copyright 2009-2015 青岛易软天创网络科技有限公司(QingDao Nature Easy Soft Network Technology Co,LTD, www.cnezsoft.com)
 * @license     ZPL(http://zpl.pub/page/zplv12.html) or AGPL(https://www.gnu.org/licenses/agpl-3.0.en.html)
 * @author      Chunsheng Wang <chunsheng@cnezsoft.com>
 * @package     admin
 * @version     $Id: view.html.php 2568 2012-02-09 06:56:35Z shiyangyangwork@yahoo.cn $
 * @link        http://www.zentao.net
 */
?>
<?php include '../../common/view/header.html.php';?>
<div id='mainContent' class='main-content'>
  <?php if(!$bind and !$ignore and common::hasPriv('admin', 'register')):?>
  <div id="notice" class='alert alert-success'>
    <?php echo html::a(inlink('ignore'), '<i class="icon-close icon-sm"></i> ' . $lang->admin->notice->ignore, 'hiddenwin', 'class="close" data-dismiss="alert" style="font-size: 12px"');?>
    <div class="content"><i class='icon-exclamation-sign'></i> <?php echo sprintf($lang->admin->notice->register, html::a(inlink('register'), $lang->admin->registerNotice->click, '', 'class="alert-link"'));?></div>
  </div>
  <?php endif;?>

  <div class='main-header'>
    <h2>
      <?php
      $versionName = $config->version;
      if(trim($config->visions, ',') == 'lite') $versionName = $lang->liteName . $config->liteVersion;
      printf($lang->admin->info->version, $versionName);
      if($bind) echo sprintf($lang->admin->info->account, '<span class="red">' . $account . '</span>');
      echo $lang->admin->info->links;
      ?>
    </h2>
  </div>
  <?php include '../../misc/view/links.html.php';?>
</div>
<?php include '../../common/view/footer.html.php';?>
