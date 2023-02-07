<?php
/* Actions. */
$lang->project->createGuide         = '选择项目模板';
$lang->project->index               = '项目仪表盘';
$lang->project->home                = '项目主页';
$lang->project->create              = '创建项目';
$lang->project->edit                = '编辑项目';
$lang->project->batchEdit           = '批量编辑项目';
$lang->project->view                = '项目概况';
$lang->project->batchEdit           = '批量编辑';
$lang->project->browse              = '项目列表';
$lang->project->all                 = '所有项目';
$lang->project->start               = '启动项目';
$lang->project->finish              = '完成项目';
$lang->project->suspend             = '挂起项目';
$lang->project->delete              = '删除项目';
$lang->project->close               = '关闭项目';
$lang->project->activate            = '激活项目';
$lang->project->group               = '项目权限分组';
$lang->project->createGroup         = '项目创建分组';
$lang->project->editGroup           = '项目编辑分组';
$lang->project->copyGroup           = '项目复制分组';
$lang->project->manageView          = '项目维护视野';
$lang->project->managePriv          = '项目维护权限';
$lang->project->manageMembers       = '团队管理';
$lang->project->export              = '导出';
$lang->project->addProduct          = '新建产品';
$lang->project->manageGroupMember   = '维护分组用户';
$lang->project->moduleSetting       = '列表设置';
$lang->project->moduleOpen          = '显示项目集名';
$lang->project->dynamic             = '动态';
$lang->project->execution           = '执行列表';
$lang->project->qa                  = '测试仪表盘';
$lang->project->bug                 = 'Bug列表';
$lang->project->testcase            = '用例列表';
$lang->project->testtask            = '测试单';
$lang->project->build               = '版本';
$lang->project->updateOrder         = '排序';
$lang->project->sort                = '项目排序';
$lang->project->whitelist           = '项目白名单';
$lang->project->addWhitelist        = '项目添加白名单';
$lang->project->unbindWhitelist     = '项目删除白名单';
$lang->project->manageProducts      = '关联产品';
$lang->project->manageOtherProducts = '关联其他产品';
$lang->project->manageProductPlan   = '关联产品和计划';
$lang->project->copyTitle           = '请选择要复制的项目';
$lang->project->errorSameProducts   = '项目不能关联多个相同的产品。';
$lang->project->errorSameBranches   = '项目不能关联多个相同的分支。';
$lang->project->errorSamePlans      = '项目不能关联多个相同的计划。';
$lang->project->errorNoProducts     = '最少关联一个产品';
$lang->project->copyNoProject       = '没有可用的项目来复制';
$lang->project->searchByName        = '输入项目名称进行检索';
$lang->project->deleted             = '已删除';
$lang->project->linkedProducts      = '已关联产品';
$lang->project->unlinkedProducts    = '未关联';
$lang->project->testreport          = '测试报告';
$lang->project->selectProgram       = '项目集筛选';
$lang->project->teamMember          = '团队成员';
$lang->project->unlinkMember        = '移除成员';
$lang->project->copyTeamTitle       = '选择一个项目团队来复制';
$lang->project->daysGreaterProject  = '可用工日不能大于项目的可用工日『%s』';
$lang->project->errorHours          = '可用工时/天不能大于『24』';
$lang->project->workdaysExceed      = '可用工作日不能超过『%s』天';
$lang->project->teamMembersCount    = '，团队成员共%s人。';
$lang->project->budgetNumber        = '『预算』金额必须为数字。';
$lang->project->budgetGe0           = '『预算』金额必须大于等于0。';
$lang->project->allProjects         = '所有项目';
$lang->project->ignore              = '忽略';
$lang->project->manageRepo          = '关联代码库';
$lang->project->linkedRepo          = '已关联代码库';
$lang->project->unlinkedRepo        = '未关联代码库';
$lang->project->disableExecution    = '不启用迭代的项目';
$lang->project->selectProduct       = '选择产品';

/* Fields. */
$lang->project->common             = '项目';
$lang->project->id                 = '项目ID';
$lang->project->project            = '所属项目';
$lang->project->stage              = '阶段';
$lang->project->model              = '项目管理方式';
$lang->project->PM                 = '负责人';
$lang->project->PO                 = '项目负责人';
$lang->project->QD                 = '测试负责人';
$lang->project->RD                 = '发布负责人';
$lang->project->name               = '项目名称';
$lang->project->category           = '项目类型';
$lang->project->desc               = '项目描述';
$lang->project->code               = '项目代号';
$lang->project->hasProduct         = '是否关联产品';
$lang->project->copy               = '复制项目';
$lang->project->begin              = '计划开始';
$lang->project->end                = '计划完成';
$lang->project->status             = '状态';
$lang->project->subStatus          = '子状态';
$lang->project->type               = '项目类型';
$lang->project->lifetime           = '项目周期';
$lang->project->attribute          = '阶段类型';
$lang->project->percent            = '工作量占比';
$lang->project->milestone          = '里程碑';
$lang->project->output             = '输出';
$lang->project->path               = '路径';
$lang->project->grade              = '层级';
$lang->project->version            = '版本';
$lang->project->parentVersion      = '父版本';
$lang->project->planDuration       = '计划周期天数';
$lang->project->realDuration       = '实际周期天数';
$lang->project->openedVersion      = '创建版本';
$lang->project->pri                = '优先级';
$lang->project->openedBy           = '由谁创建';
$lang->project->openedDate         = '创建日期';
$lang->project->lastEditedBy       = '最后编辑人';
$lang->project->lastEditedDate     = '最后编辑日期';
$lang->project->closedBy           = '由谁关闭';
$lang->project->closedDate         = '关闭日期';
$lang->project->canceledBy         = '由谁取消';
$lang->project->canceledDate       = '取消日期';
$lang->project->team               = '团队';
$lang->project->teamAction         = '团队列表';
$lang->project->order              = '排序';
$lang->project->budget             = '预算';
$lang->project->budgetUnit         = '预算单位';
$lang->project->suspendedDate      = '暂停日期';
$lang->project->vision             = '界面';
$lang->project->displayCards       = '每列最大卡片数';
$lang->project->fluidBoard         = '列宽度';
$lang->project->template           = '项目模板';
$lang->project->estimate           = '预计';
$lang->project->consume            = '消耗';
$lang->project->surplus            = '剩余';
$lang->project->progress           = '进度';
$lang->project->weekProgress       = '本周进度';
$lang->project->dateRange          = '计划起止日期';
$lang->project->to                 = '至';
$lang->project->realBeganAB        = '实际开始';
$lang->project->realEndAB          = '实际完成';
$lang->project->realBegan          = '实际开始日期';
$lang->project->realEnd            = '实际完成日期';
$lang->project->division           = '阶段类型';
$lang->project->bygrid             = '看板';
$lang->project->bylist             = '列表';
$lang->project->bycard             = '卡片';
$lang->project->mine               = '我参与的';
$lang->project->myProject          = '我负责';
$lang->project->other              = '其他';
$lang->project->acl                = '访问控制';
$lang->project->setPlanduration    = '设置工期';
$lang->project->auth               = '权限控制';
$lang->project->durationEstimation = '工作量估算';
$lang->project->leftStories        = '剩余需求';
$lang->project->leftTasks          = '剩余任务';
$lang->project->leftBugs           = '剩余Bug';
$lang->project->leftHours          = '剩余工时';
$lang->project->children           = '子项目';
$lang->project->parent             = '所属项目集';
$lang->project->allStories         = '总需求';
$lang->project->doneStories        = '已完成';
$lang->project->doneProjects       = '已结束';
$lang->project->allInput           = '项目总投入';
$lang->project->weekly             = '项目周报';
$lang->project->pv                 = 'PV';
$lang->project->ev                 = 'EV';
$lang->project->sv                 = 'SV';
$lang->project->ac                 = 'AC';
$lang->project->cv                 = 'CV';
$lang->project->pvTitle            = '计划完成';
$lang->project->evTitle            = '实际完成';
$lang->project->svTitle            = '进度偏差';
$lang->project->acTitle            = '实际花费';
$lang->project->cvTitle            = '成本偏差';
$lang->project->teamCount          = '人数';
$lang->project->teamSumCount       = '共%s人';
$lang->project->longTime           = '长期';
$lang->project->future             = '待定';
$lang->project->moreProject        = '更多项目';
$lang->project->days               = '可用工作日';
$lang->project->mailto             = '抄送给';
$lang->project->etc                = "等";
$lang->project->product            = '所属产品';
$lang->project->branch             = '平台/分支';
$lang->project->plan               = '所属计划';
$lang->project->createKanban       = '添加看板';
$lang->project->kanban             = '看板';

/* Project Kanban. */
$lang->project->projectTypeList = array();
$lang->project->projectTypeList[1] = '产品型项目';
$lang->project->projectTypeList[0] = '项目型项目';

/* Project Kanban. */
$lang->project->typeList = array();
$lang->project->typeList['my']    = '我负责的项目';
$lang->project->typeList['other'] = '其他项目';

$lang->project->divisionList['0'] = '按项目创建';
$lang->project->divisionList['1'] = "按{$lang->productCommon}创建";

$lang->project->divisionSwitchList['0'] = '关闭';
$lang->project->divisionSwitchList['1'] = "开启";

$lang->project->waitProjects    = '未开始的项目';
$lang->project->doingProjects   = '进行中的项目';
$lang->project->doingExecutions = '进行中的执行(最近1个)';
$lang->project->closedProjects  = '已关闭的项目(最近2个)';
$lang->project->closedProject   = '已关闭的项目';
$lang->project->noProgram       = '无项目集归属项目';

$lang->project->laneColorList = array('#32C5FF', '#006AF1', '#9D28B2', '#FF8F26', '#FFC20E', '#00A78E', '#7FBB00', '#424BAC', '#C0E9FF', '#EC2761');

$lang->project->productNotEmpty        = '请关联产品或创建产品。';
$lang->project->existProductName       = '产品名称已存在。';
$lang->project->changeProgram          = '%s > 修改项目集';
$lang->project->changeProgramTip       = '修改项目集后，该项目关联产品的项目集也会被修改，请确认是否修改。';
$lang->project->linkedProjectsTip      = '关联的项目如下';
$lang->project->multiLinkedProductsTip = '该项目关联的如下产品还关联了其他项目，请取消关联后再操作';
$lang->project->noticeDivsion          = "当前项目为单套阶段，点击[开启]可以变为多套阶段，每套阶段只关联一个{$lang->productCommon}。";
$lang->project->linkStoryByPlanTips    = "此操作会将所选计划下面的{$lang->SRCommon}全部关联到此项目中";
$lang->project->createExecution        = "该项目下没有{$lang->executionCommon}，请先创建{$lang->executionCommon}";
$lang->project->unlinkExecutionMember  = "该用户参与了%s%s%s个{$lang->execution->common}，是否同时将其移除？（该用户所产生的数据不会受影响。）";
$lang->project->unlinkExecutionMembers = "移除的团队成员还参与了项目下的执行，是否同步从执行团队中移除？";
$lang->project->productTip             = '点击新建产品后，项目将不会关联已选中的产品。';
$lang->project->noDevStage             = '该项目下没有研发类型的阶段，或者您没有权限访问，暂时不支持创建版本。';
$lang->project->budgetOverrun          = '项目的预算超出了父项目集的剩余预算：';
$lang->project->disabledInputTip       = '请先取消%s';
$lang->project->linkRepoFailed         = '关联代码库失败';
$lang->project->unLinkProductTip       = "您确认要取消与%s的关联关系吗？（不影响已关联的需求）";
$lang->project->summary                = '本页共 <strong>%s</strong> 个项目。';
$lang->project->allSummary             = '本页共 <strong>%s</strong> 个项目，未开始 <strong>%s</strong>，进行中 <strong>%s</strong>，已挂起 <strong>%s</strong>，已关闭 <strong>%s</strong> 。';
$lang->project->checkedSummary         = '选中 <strong>%total%</strong> 个项目。';
$lang->project->checkedAllSummary      = '选中 <strong>%total%</strong> 个项目，未开始 <strong>%wait%</strong>，进行中 <strong>%doing%</strong>，已挂起 <strong>%suspended%</strong>，已关闭 <strong>%closed%</strong> 。';

$lang->project->tenThousand    = '万';
$lang->project->hundredMillion = '亿';

$lang->project->unitList['CNY'] = '人民币';
$lang->project->unitList['USD'] = '美元';
$lang->project->unitList['HKD'] = '港元';
$lang->project->unitList['NTD'] = '台币';
$lang->project->unitList['EUR'] = '欧元';
$lang->project->unitList['DEM'] = '马克';
$lang->project->unitList['CHF'] = '瑞士法郎';
$lang->project->unitList['FRF'] = '法国法郎';
$lang->project->unitList['GBP'] = '英镑';
$lang->project->unitList['NLG'] = '荷兰盾';
$lang->project->unitList['CAD'] = '加拿大元';
$lang->project->unitList['RUR'] = '卢布';
$lang->project->unitList['INR'] = '卢比';
$lang->project->unitList['AUD'] = '澳大利亚元';
$lang->project->unitList['NZD'] = '新西兰元';
$lang->project->unitList['THB'] = '泰国铢';
$lang->project->unitList['SGD'] = '新加坡元';

$lang->project->currencySymbol['CNY'] = '¥';
$lang->project->currencySymbol['USD'] = '$';
$lang->project->currencySymbol['HKD'] = 'HK$';
$lang->project->currencySymbol['NTD'] = 'NT$';
$lang->project->currencySymbol['EUR'] = '€';
$lang->project->currencySymbol['DEM'] = 'DEM';
$lang->project->currencySymbol['CHF'] = '₣';
$lang->project->currencySymbol['FRF'] = '₣';
$lang->project->currencySymbol['GBP'] = '£';
$lang->project->currencySymbol['NLG'] = 'ƒ';
$lang->project->currencySymbol['CAD'] = '$';
$lang->project->currencySymbol['RUR'] = '₽';
$lang->project->currencySymbol['INR'] = '₹';
$lang->project->currencySymbol['AUD'] = 'A$';
$lang->project->currencySymbol['NZD'] = 'NZ$';
$lang->project->currencySymbol['THB'] = '฿';
$lang->project->currencySymbol['SGD'] = 'S$';

$lang->project->modelList['']       = "";
$lang->project->modelList['scrum']  = "Scrum";
if(helper::hasFeature('waterfall')) $lang->project->modelList['waterfall'] = "瀑布";
$lang->project->modelList['kanban'] = "看板";

$lang->project->featureBar['browse']['all']       = '全部';
$lang->project->featureBar['browse']['undone']    = '未完成';
$lang->project->featureBar['browse']['wait']      = '未开始';
$lang->project->featureBar['browse']['doing']     = '进行中';
$lang->project->featureBar['browse']['suspended'] = '已挂起';
$lang->project->featureBar['browse']['closed']    = '已关闭';

$lang->project->featureBar['build']['all'] = '全部版本';

$lang->project->aclList['private'] = "私有 (只有项目负责人、团队成员和干系人可访问)";
$lang->project->aclList['open']    = "公开 (有项目视图权限即可访问)";

$lang->project->multipleList['1'] = '是';
$lang->project->multipleList['0'] = '否';

$lang->project->acls['private'] = '私有';
$lang->project->acls['open']    = '公开';

$lang->project->subAclList['private'] = "私有 (只有项目负责人、团队成员和干系人可访问)";
$lang->project->subAclList['open']    = "公开 (有项目视图权限即可访问)";
$lang->project->subAclList['program'] = '项目集内公开（所有上级项目集负责人和干系人、项目负责人、团队成员和干系人可访问）';

$lang->project->kanbanAclList['private'] = "私有 (只有项目负责人、团队成员可访问)";
$lang->project->kanbanAclList['open']    = "公开 (有项目视图权限即可访问)";

$lang->project->kanbanSubAclList['private'] = "私有 (只有项目负责人、团队成员可访问)";
$lang->project->kanbanSubAclList['open']    = "公开 (有项目视图权限即可访问)";
$lang->project->kanbanSubAclList['program'] = '项目集内公开（所有上级项目集负责人和干系人、项目负责人、团队成员可访问）';

global $config;
if($config->systemMode == 'light')
{
    unset($lang->project->subAclList['program']);
    unset($lang->project->kanbanSubAclList['program']);
}

$lang->project->authList['extend'] = '继承 (取系统权限与项目权限的合集)';
$lang->project->authList['reset']  = '重新定义 (只取项目权限)';

$lang->project->statusList['']          = '';
$lang->project->statusList['wait']      = '未开始';
$lang->project->statusList['doing']     = '进行中';
$lang->project->statusList['suspended'] = '已挂起';
$lang->project->statusList['closed']    = '已关闭';
$lang->project->statusList['delay']     = '已延期';

$lang->project->endList[31]  = '一个月';
$lang->project->endList[93]  = '三个月';
$lang->project->endList[186] = '半年';
$lang->project->endList[365] = '一年';
$lang->project->endList[999] = '长期';

$lang->project->scrumTitle     = '敏捷开发全流程项目管理';
$lang->project->waterfallTitle = '瀑布式项目管理';
$lang->project->kanbanTitle    = '专业研发看板项目管理';

$lang->project->empty                  = '暂时没有项目';
$lang->project->nextStep               = '下一步';
$lang->project->hoursUnit              = '%s 工时';
$lang->project->membersUnit            = '%s人';
$lang->project->lastIteration          = "近期{$lang->executionCommon}";
$lang->project->lastKanban             = '近期看板';
$lang->project->ongoingStage           = '进行中的阶段';
$lang->project->scrum                  = 'Scrum';
$lang->project->waterfall              = '瀑布';
$lang->project->cannotCreateChild      = '该项目已经有实际的内容，无法直接添加子项目。您可以为当前项目创建一个父项目，然后在新的父项目下面添加子项目。';
$lang->project->emptyPM                = '暂无';
$lang->project->emptyBranch            = '分支不能为空！';
$lang->project->cannotChangeToCat      = "该项目已经有实际的内容，无法修改为父项目";
$lang->project->cannotCancelCat        = "该项目下已经有子项目，无法取消父项目标记";
$lang->project->parentBeginEnd         = "父项目起止时间：%s ~ %s";
$lang->project->childLongTime          = "子项目中有长期项目，父项目也应该是长期项目";
$lang->project->readjustTime           = '重新调整项目起止时间';
$lang->project->notAllowRemoveProducts = "该产品中的需求与项目进行了关联或者项目下的{$lang->execution->common}关联了该产品，请取消关联后再操作。";
$lang->project->ge                     = "『%s』应当不小于实际开始时间『%s』。";

$lang->project->programTitle['0']    = '不显示';
$lang->project->programTitle['base'] = '只显示一级项目集';
$lang->project->programTitle['end']  = '只显示最后一级项目集';

$lang->project->accessDenied         = '您无权访问该项目！';
$lang->project->chooseProgramType    = '选择项目管理方式';
$lang->project->cannotCreateChild    = '该项目已经有实际的内容，无法直接添加子项目。您可以为当前项目创建一个父项目，然后在新的父项目下面添加子项目。';
$lang->project->hasChildren          = '该项目有子项目存在，不能删除。';
$lang->project->confirmDelete        = '您确定删除项目“%s”吗？';
$lang->project->cannotChangeToCat    = "该项目已经有实际的内容，无法修改为父项目";
$lang->project->cannotCancelCat      = "该项目下已经有子项目，无法取消父项目标记";
$lang->project->parentBeginEnd       = "父项目起止时间：%s ~ %s";
$lang->project->parentBudget         = "父项目集预算：";
$lang->project->beginLetterParent    = "项目的开始日期小于了父项目集的开始日期：";
$lang->project->endGreaterParent     = "项目的完成日期大于了父项目集的完成日期：";
$lang->project->dateExceedParent     = "项目的起止日期已超出父项目集的起止日期：";
$lang->project->beginGreateChild     = '项目的开始日期应大于等于项目集的最小开始日期：%s';
$lang->project->endLetterChild       = '项目的完成日期应小于等于项目集的最大完成日期：%s';
$lang->project->begigLetterExecution = '项目的开始日期应小于等于执行的最小开始日期：%s';
$lang->project->endGreateExecution   = '项目的完成日期应大于等于执行的最大完成日期：%s';
$lang->project->childLongTime        = "子项目中有长期项目，父项目也应该是长期项目";
$lang->project->confirmUnlinkMember  = "您确定从该项目中移除该用户吗？";
$lang->project->divisionTips         = "按项目创建为单套阶段，阶段关联所有{$lang->productCommon}；按{$lang->productCommon}创建为多套阶段，每套阶段关联一个{$lang->productCommon}。";

$lang->project->action = new stdclass();
$lang->project->action->managed = '$date, 由 <strong>$actor</strong> 维护。$extra' . "\n";

$lang->project->multiple = "启用{$lang->executionCommon}";

$lang->project->copyProject = new stdClass();
$lang->project->copyProject->nameTips           = '『项目名称』不可重复需要修改。';
$lang->project->copyProject->codeTips           = '『项目代号』不可重复需要修改。';
$lang->project->copyProject->endTips            = '『计划完成』不能为空。';
$lang->project->copyProject->daysTips           = '『可用工作日』应当是数字。';

$lang->project->linkBranchStoryByPlanTips = "项目按计划关联需求时，只导入本项目所关联%s的激活状态的需求。";
$lang->project->linkNormalStoryByPlanTips = "项目按计划关联需求时，只导入激活状态的需求。";