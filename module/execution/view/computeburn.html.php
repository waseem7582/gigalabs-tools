<?php
/**
 * The computeburn view file of execution module of ZenTaoPMS.
 *
 * @copyright   Copyright 2009-2015 青岛易软天创网络科技有限公司(QingDao Nature Easy Soft Network Technology Co,LTD, www.cnezsoft.com)
 * @license     ZPL(http://zpl.pub/page/zplv12.html) or AGPL(https://www.gnu.org/licenses/agpl-3.0.en.html)
 * @author      Fu Jia <fujia@cnezsoft.com>
 * @package     execution
 * @version     $Id: computeburn.html.php 4129 2013-01-18 01:58:14Z wwccss $
 * @link        http://www.zentao.net
 */
?>
<?php
foreach($burns as $burn)
{
    echo $burn->execution . "\t" . $burn->executionName . "\t" . $burn->date . "\t" . $burn->left . "\n";
}
?>
