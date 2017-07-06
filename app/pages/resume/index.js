import React from 'react';
import {
    Row,
    Col,
    Layout
} from 'antd';
import styles from './style.css';

const {
    Header,
    Content,
    Footer
} = Layout;

class Resume extends React.Component {

    render() {
        console.log("styles", styles);
        return (
            <div>
                <Layout>
                    <Header>
                        <h1>个人简历</h1>
                    </Header>
                    <Content>内容
                        <div className={styles.title}>
                            <h2>个人简介</h2>
                        </div>
                        <div className={styles.intro}>
                            <ul className={styles["intro-list"]}>
                                <li><i className="icon-user">&nbsp;&nbsp;姓名</i>&nbsp;&nbsp;|&nbsp;&nbsp;何宇威</li>
                                <li><i className="icon-phone">&nbsp;&nbsp;电话</i>&nbsp;&nbsp;|&nbsp;&nbsp;18929397532</li>
                                <li><i className="icon-envelope">&nbsp;&nbsp;邮箱</i>&nbsp;&nbsp;|&nbsp;&nbsp;breakerz21@gmail.com</li>
                                <li><i className="icon-magnet">&nbsp;&nbsp;学历</i>&nbsp;&nbsp;|&nbsp;&nbsp;本科 / 深圳大学土木工程系</li>
                                <li><i className="icon-user">&nbsp;&nbsp;英语水平</i>&nbsp;&nbsp;|&nbsp;&nbsp;CET-6</li>
                                <li><i className="icon-github-alt icon">&nbsp;&nbsp;Github</i>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/rayhaha2" target="_blank" id="kkk">点击进入</a></li>
                            </ul>
                            <div className={styles["intro-me"]}>
                                <p>我是一个做事认真，性格随和的人。<br/>
                                我热衷于钻研各种新鲜技术，紧跟时代潮流。<br/>
                                我有时间观念，能在约定时间内完成任务。<br/>
                                我对代码有浓厚的兴趣，尤其是喜欢纠结简洁、高效、优雅的代码。</p>
                                <p>熟悉 HTML、CSS、Javascript，能编写开发符合 W3C 标准的页面，了解react redux saga 相关技术栈，能够配合完成单页面应用开发，能够配合程序员完成相关工作。</p>
                            </div>
                        </div>
                        <section className={styles["section-a"]}>
                            <div className={styles["wrapper"]}>
                                <div className={styles["head-wrapper"]}>
                                    <h2>专业技能</h2>
                                </div>
                                <div>
                                    <ul className={styles["skill-list"]}>
                                       <li className={`${styles["skill-item"]} ${styles["skill-item-html"]} ${styles["skill-item-mastered"]}`}>
                                           <h4 className={`${styles["skill-item-name"]}`}>HTML&CSS</h4>
                                           <div className={`${styles["skill-item-detail"]} ${styles["fade"]}`}>
                                               <ul className={`${styles["list"]}`}>
                                                    <li>能使用合适编写兼容主流浏览器的页面布局；</li>
                                                    <li>了解HTML 5新标签的语义；</li>
                                                    <li>能使用Chrome开发者工具辅助开发；</li>
                                                    <li>能运用CSS3使页面在现代浏览器上效果更佳；</li>
                                                    <li>能编写模块化 CSS，完成较复杂的布局；</li>
                                               </ul>
                                           </div>
                                       </li> 
                                       <li className={`${styles["skill-item"]} ${styles["skill-item"]} ${styles["skill-item-javascript"]} ${styles["skill-item-mastered"]}`}>
                                           <h4 className={`${styles["skill-item-name"]}`}>Javascript</h4>
                                           <div className={`${styles["skill-item-detail"]} ${styles["fade"]}`}>
                                               <ul className={`${styles["list"]}`}>
                                                    <li>熟悉Javascript并能够根据需求进行功能开发</li>
                                                    <li>熟悉jQuery、Bootsrap等类库编码；</li>
                                               </ul>
                                           </div>
                                       </li>
                                       <li className={`${styles["skill-item"]} ${styles["skill-item"]} ${styles["skill-item-react"]} ${styles["skill-item-mastered"]}`}>
                                           <h4 className={`${styles["skill-item-name"]}`}>React</h4>
                                           <div className={`${styles["skill-item-detail"]} ${styles["fade"]}`}>
                                               <ul className={`${styles["list"]}`}>
                                                    <li>熟悉React Redux Saga相关技术栈</li>
                                                    <li>能够配合完成单页面应用开发</li>
                                                    <li>能够使用webpack工具进行项目打包</li>
                                               </ul>
                                           </div>
                                       </li> 
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section className={styles["section-a"]}>
                            <div className={styles["wrapper"]}>
                                <div className={styles["head-wrapper"]}>
                                    <h2>项目经验</h2>
                                </div>
                                <div className={`${styles["card-group"]} ${styles["clearfix"]}`}>
                                    <div className={styles["card"]}>
                                        <div className={styles["img-section"]}>
                                            
                                        </div>
                                    </div>
                                    <div className={styles["card"]}>
                                        <h3>设计施工一体化平台——甘特图控件自定义扩展</h3>
                                        <ul className={styles["tag-list"]}>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-html"]}`}>HTML</li>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-css"]}`}>CSS</li>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-javascript"]}`}>Javascript</li>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-jquery"]}`}>jQuery</li>
                                        </ul>
                                        <p>阅读分析源码，根据需求修改部分页面，增加功能点及相关业务逻辑。</p>
                                    </div>
                                    <div className={styles["card"]}>
                                        <div className={"img-section"}>
                                            
                                        </div>
                                    </div>
                                    <div className={styles["card"]}>
                                        <h3>麦垛在线工程文档管理平台JQuery+Boostrap</h3>
                                        <ul className={"tag-list"}>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-html"]}`}>HTML</li>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-css"]}`}>CSS</li>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-jquery"]}`}>JQuery</li>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-jquery"]}`}>Boostrap</li>
                                        </ul>
                                        <p>运用Boostrap框架对项目文档界面布局、通过HTML5相关属性实现拖拽上传文件夹模块开发</p>
                                        <p className={styles["demo"]}>
                                            <a href="http://htmlpreview.github.io/?https://github.com/rayhaha2/thinksimple/blob/master/index.html" target="_blank">demo</a>
                                            <a href="https://github.com/rayhaha2/thinksimple" target="_blank">项目地址</a>
                                        </p>
                                    </div>
                                    <div className={styles["card"]}>
                                        <div className={"img-section"}>
                                            
                                        </div>
                                    </div>
                                    <div className={styles["card"]}>
                                        <h3>铜官窑BIM设计施工一体化平台 React+antDesign+highChart</h3>
                                        <ul className={"tag-list"}>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-html"]}`}>HTML</li>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-css"]}`}>CSS</li>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-javascript"]}`}>Javascript</li>
                                        </ul>
                                        <p>使用react + antDesign + highChart实现布局及BIM管理系统主页面模块、进度模块、模型展示模块开发</p>
                                        <p className={styles["demo"]}>
                                            <a href="http://htmlpreview.github.io/?https://github.com/rayhaha2/resume/blob/master/index.html" target="_blank">demo</a>
                                            <a href="https://github.com/rayhaha2/resume/" target="_blank">项目地址</a>
                                        </p>
                                    </div>
                                    <div className={styles["card"]}>
                                        <div className={styles["img-section"]}>
                                            
                                        </div>
                                    </div>
                                    <div className={styles["card"]}>
                                        <h3>华东院合作项目--雅砻江杨房沟设计施工BIM 管理系统 React+antDesign+redux+saga</h3>
                                        <ul className={"tag-list"}>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-html"]}`}>HTML</li>
                                            <li className={`${styles["tag-item"]} ${styles["tag-item-javascript"]}`}>Javascript</li>
                                        </ul>
                                        <p> 使用react + antDesign + highChart实现布局及BIM管理系统安全监测模块、个人中心模块开发
                                            分析业务逻辑，对复杂交互数据运用redux+saga进行存储复用
                                            海康威视--视频监控WEB控件接入BIM 管理系统
                                            </p>
                                        <p className={styles["demo"]}>
                                            <a href="http://htmlpreview.github.io/?https://github.com/rayhaha2/jsgame/blob/master/jsgame.html" target="_blank">demo</a>
                                            <a href="https://github.com/rayhaha2/jsgame" target="_blank">项目地址</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={styles["section-a"]}>
                            <div className={styles["wrapper"]}>
                                <div className={styles["head-wrapper"]}>
                                    <h2>工作经验</h2>
                                </div>
                                <div className={styles["work-exp-list"]}>
                                    <div className={styles["work-exp-list-point"]}>
                                        <i className={styles["work-exp-list-point-ico"]}></i>
                                        2016.3-至今
                                    </div>
                                    <section className={styles["work-exp-company"]}>
                                        <header className={styles["work-exp-company-head"]}>
                                            <h4 className={styles["work-exp-company-title"]}>
                                                <a href="http://www.bimwinner.com/" title="www.bimwinner.com" target="_blank">盈嘉互联（北京）科技有限公司</a>
                                            </h4>
                                            <p className={styles["work-exp-company-jobtitle"]}>前端开发</p>  
                                        </header>
                                        <div className={`${styles["work-exp-company-body"]} ${styles["clearfix"]}`}>
                                            <ul className={styles["list"]}>
                                                <li className={styles["work-list"]}>
                                                    <h4 className={styles["work-item"]}>1.负责公司产品页面制作及功能开发、维护</h4>
                                                    <div className={`${styles["work-item-detail"]} ${styles["fade"]}`}>
                                                       <ul className={styles["list"]}>
                                                            <li>完成唛垛产品的3个独立页面制作</li>
                                                            <li>完成唛垛产品的上传文件模块的开发及维护</li>
                                                       </ul>
                                                    </div>
                                                </li>
                                                <li className={styles["work-list"]}>
                                                    <h4 className={styles["work-item"]}>
                                                    2.负责公司项目的开发和维护，主要为JS开发</h4>
                                                    <div className={`${styles["work-item-detail"]} ${styles["fade"]}`}>
                                                       <ul className={styles["list"]}>
                                                            <li>完成大空港bim管理系统4个独立页面的制作及进度模块甘特图控件扩展开发</li>
                                                            <li>完成铜官窑设计施工一体化系统得到页面制作及进度展示、3D模型展示模块相关react组件开发</li>
                                                            <li>完成雅砻江杨房沟设计施工BIM管理系统——安全检测、用户中心、设计管理模块相关react组件开发</li>
                                                       </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div> 
                                    </section>
                                    <div className={styles["work-exp-list-point"]}>
                                        <i className={styles["work-exp-list-point-ico"]}></i>
                                        2014-2015
                                    </div>
                                    <section className={styles["work-exp-company"]}>
                                        <header className={styles["work-exp-company-head"]}>
                                            <h4 className={styles["work-exp-company-title"]}>
                                                <a href="http://www.saudc.com/" title="www.saudc.com" target="_blank">深圳市城建工程设计有限公司</a>
                                            </h4>
                                            <p className={styles["work-exp-company-jobtitle"]}>结构设计员</p>  
                                        </header>
                                        <div className={`${styles["work-exp-company-body"]} ${styles["clearfix"]}`}>
                                            <ul className={styles["list"]}>
                                                <li className={styles["work-list"]}>
                                                    <h4 className={styles["work-item"]}>1.负责跟进施工单位进行现场变更设计图纸</h4>
                                                    <div className={`${styles["work-item-detail"]} ${styles["fade"]}`}>
                                                       <ul className={styles["list"]}>
                                                            <li>东方威海新天地（地下室扩建变更）：地下室PKPM模型调整、变更8张结构施工图</li>
                                                            <li>翔龙国际（塔楼和裙房商业变更）：变更20张结构施工图</li>
                                                       </ul>
                                                    </div>
                                                </li>
                                                <li className={styles["work-list"]}>
                                                    <h4 className={styles["work-item"]}>
                                                    2.协助结构专业负责人进行<strong>恒生壹号广场一期商业</strong>1栋4层商业方案到施工图阶段设计</h4>
                                                    <div className={`${styles["work-item-detail"]} ${styles["fade"]}`}>
                                                       <ul className={styles["list"]}>
                                                            <li>完成1栋4层商业广场及地下室PKPM结构建模和模型调整</li>
                                                            <li>完成自校，汇总、整理本人的设计文件（12张结构施工图，包括模板图、梁配筋图、板配筋图、柱配筋图）</li>
                                                       </ul>
                                                    </div>
                                                </li>
                                                <li className={styles["work-list"]}>
                                                    <h4 className={styles["work-item"]}>3.协助结构专业负责人进行<strong>繁胜名都</strong>2栋塔楼方案到施工图阶段设计</h4>
                                                    <div className={`${styles["work-item-detail"]} ${styles["fade"]}`}>
                                                       <ul className={styles["list"]}>
                                                            <li>完成4栋30层塔楼PKPM结构建模和模型调整</li>
                                                            <li>完成自校，汇总、整理本人的设计文件（20张结构施工图，包括模板图、梁配筋图、板配筋图、柱配筋图）</li>
                                                       </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div> 
                                    </section>
                                    <div className={styles["work-exp-list-point"]}>
                                        <i className={styles["work-exp-list-point-ico"]}></i>
                                        2013-2014
                                    </div>
                                    <section className={`${styles["work-exp-company"]} ${styles["clearfix"]}`}>
                                        <header className={styles["work-exp-company-head"]}>
                                            <h4 className={styles["work-exp-company-title"]}>
                                                <a href="http://www.pba-arch.com/" title="www.pba-arch.com" target="_blank">深圳市佰邦建筑设计顾问有限公司</a>
                                            </h4>
                                            <p className={`${styles["work-exp-company-jobtitle"]}`}>助理结构工程师</p>  
                                        </header>
                                        <div className={`${styles["work-exp-company-body"]}`}>
                                            <ul className={styles["list"]}>
                                                <li className={styles["work-list"]}>
                                                    <h4 className={styles["work-item"]}>1.协助结构专业负责人完成德远地产干沟桥返迁区项目（项目占地面积13万平米）</h4>
                                                    <div className={`${styles["work-item-detail"]} ${styles["fade"]}`}>
                                                       <ul className={styles["list"]}>
                                                            <li>方案阶段（包括前期工作）：收集、整理和分析基础资料，进行本专业计算和分析(3栋塔楼PKPM结构建模和模型调整）</li>
                                                            <li>初步设计阶段：进行扩初方案的制作，进行本专业计算和分析（调整PKPM模型），方案变更与建筑专业沟通协调，与建筑互提图纸资料，完成图纸并进行自校，汇总、整理本人完成的设计文件</li>
                                                            <li>施工图阶段：完善和深化扩初方案，进行本专业计算和分析，与建筑互提资料，完成施工图纸并进行自校，汇总、整理本人完成的设计文件（30张结构施工图，包括模板图、梁配筋图、板配筋图）</li>
                                                       </ul>
                                                    </div>
                                                </li>
                                                <li className={styles["work-list"]}>
                                                    <h4 className={styles["work-item"]}>
                                                    2.协助结构专业负责人进行泉州海韵山居项目</h4>
                                                    <div className={`${styles["work-item-detail"]} ${styles["fade"]}`}>
                                                       <ul className={styles["list"]}>
                                                            <li>方案阶段（包括前期工作）：收集、整理和分析基础资料，进行本专业计算和分析(3栋复式小高层PKPM结构建模和模型调整）</li>
                                                       </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div> 
                                    </section>             
                                </div>
                            </div>
                        </section>
                    </Content>
                    <Footer>页尾</Footer>
                </Layout>
            </div>
        )
    }
}

export default Resume;