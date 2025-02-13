import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [productsSubmenuShow, setProductsSubmenuShow] = useState(false);
    const [solutionsSubmenuShow, setSolutionsSubmenuShow] = useState(false);
    const [learnSubmenuShow, setLearnSubmenuShow] = useState(false);
    const [companySubmenuShow, setCompanySubmenuShow] = useState(false);


    const products_items = [
        {
            key: 1,
            label: '数据目录',
            href: 'https://www.alation.com/product/data-catalog/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/2P8V0xAdbOEhFtNnpiyYn/2d438cf60372d02a4fa71b76fc1c182b/Nav-icon-SlateGray-Data-Catalog.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/7IonC6mPoPsh4ogdT4Vvak/44127fad123bc5669a90b467cafeb20d/Nav-icon-OrangeHover-Data-Catalog.svg'
        },
        {
            key: 2,
            label: '数据治理',
            href: 'https://www.alation.com/product/data-governance/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/656kOWlxjiJY8CM8jDpTEz/1c89e1f9c9410da6467abd805ae0784e/Nav-icon-SlateGray-Data-Governance.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/3Pw1c73szzqcrD5SS05Yo4/058d3cad73b1d13a45985a462d3c9ce9/Nav-icon-OrangeHover-Data-Governance.svg'
        },
        {
            key: 3,
            label: '数据沿袭',
            href: 'https://www.alation.com/product/data-lineage/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/6tAzaD8WbJaLNCTa03nnwy/0c80e66ba24d643cd317e093aa504e17/Nav-icon-SlateGray-Data-Lineage.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/5ZHvd2N6TcPwcynxYsH1yJ/2fdf5e04731e82ea397b5e58794978af/Nav-icon-OrangeHover-Data-Lineage.svg'
        },
        {
            key: 4,
            label: 'Alation 构成',
            href: 'https://www.alation.com/product/compose/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/eh5B6IXp5CQ2Xy4bgQ9vY/4925a9b953d88871e6f400535960279c/Nav-icon-SlateGray-Compose.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/4ZzWbasBhdcDrnaiETIopy/8fa5816bcc60e87fa5100affb6bb9c20/Nav-icon-OrangeHover-Compose.svg'
        },
        {
            key: 5,
            label: 'Alation 无处不在',
            href: 'https://www.alation.com/product/alation-anywhere/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/4HK89Ly24uP7T8YSs69mnG/6a2fc6e7826480a928fdfb199b287039/Nav-icon-SlateGray-Alation-Anywhere.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/7oTIDKg9rrjY2HOG2CpTLd/94fd7c9b57a1f424af892e1da5b6adcd/Nav-icon-OrangeHover-Alation-Anywhere.svg'
        },
        {
            key: 6,
            label: 'Alation 分析',
            href: 'https://www.alation.com/product/alation-analytics/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/OrGze0F8zsVKDQzwRpWBb/7a72bdb2c43d7344ba1a5f68b5ca7123/Nav-icon-SlateGray-Alation-Analytics.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/6PZ77dTozLiPiL6aeC81xj/4cfe878f7f52b4a2063b810f57435824/Nav-icon-OrangeHover-Alation_Analytics.svg'
        }
    ]
    const platform_services_items = [
        {
            key: 1,
            label: '智能搜索',
            href: 'https://www.alation.com/product/search-function/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/330uWFEhcrSUDj8wlBnIdM/22e65811a718c0f3fd1acc29c6c57496/Nav-icon-SlateGray-Search.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/2S2oSQAEbVHKVrQDrBxibV/93f7eb76ba2aa976507b6c5cd8531707/Nav-icon-OrangeHover-Search.svg'
        },
        {
            key: 2,
            label: '主动元数据图',
            href: 'https://www.alation.com/product/active-metadata-graph/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/19IQKimRmT9XnrHMx7nQxt/e1e677e3ac0470519fbc773e0fb3e7bc/Nav-icon-SlateGray-Active-Metadata-Graph.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/4uw2LLj8JnnIJdL7uJ6wCC/137c96f254715fb1a4a0a0e50871c55c/Nav-icon-OrangeHover-Active-Metadata-Graph.svg'
        },
        {
            key: 3,
            label: '由 ALLIE 驱动的 AI',
            href: 'https://www.alation.com/product/allie-ai/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/6swujThh8upBgFpPl0QTRI/7ca90fa0cd4cb4607472542d9d6e28e1/Nav-icon-SlateGray-AI-powered-Allie.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/12FAI0k11NpFD7BMSWRWia/941d7278a0105a598956a2dc43ec3ef6/Nav-icon-OrangeHover-AI-powered-Allie.svg'
        },
        {
            key: 4,
            label: '工作流自动化',
            href: 'https://www.alation.com/product/workflow-automation/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/3i7hadzG77X6YZPUzEZcGF/05abd82c1419e347ba6b6ad24ffd286b/Nav-icon-SlateGray-Workflow-Automation.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/KAIx2edyWtew8ybq7TTup/110656d0fe627c8208a0d14babbc9348/Nav-icon-OrangeHover-Workflow-Automation.svg'
        }
    ]
    const ecosystem_items = [
        {
            key: 1,
            label: 'Snowflake',
            href: 'https://www.alation.com/partners/snowflake/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/1nkGTwJs7PCprLPYevXiWt/edde4108aa17e227918144c990fc97cd/Nav-icon-SlateGray-Snowflake.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/2KNyIA7KSqFNfHp1mdrIYY/ef295177ca8b54d8d7b4867f893db2e7/Nav-icon-OrangeHover-Snowflake.svg'
        },
        {
            key: 2,
            label: 'Databricks',
            href: 'https://www.alation.com/partners/databricks/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/6E1JJdT4bhHN7z1IiRFrbl/031d8d627e69510b5cccf42fe7688e3e/Nav-icon-SlateGray-Databricks.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/6oiYLw5lhqa3vcvkfG92Se/27766faf88e52ea06464bf80ad033ed7/Nav-icon-OrangeHover-Databricks.svg'
        },
        {
            key: 3,
            label: 'Salesforce',
            href: 'https://www.alation.com/partners/salesforce/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/2oQ2W62DMiOXOVarVR9CxE/21e0c55aa2fd6f0bfdb1fce3f8182196/Nav-icon-SlateGray-Salesforce.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/46RJtBKp8lFowhZmIoSedP/21b198117bbdaf8683f88e8a14fe3dd8/Nav-icon-OrangeHover-Salesforce.svg'
        },
        {
            key: 4,
            label: 'Open Connector Framework',
            href: 'https://www.alation.com/product/connectors/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/AwMJOU7IiwFGim1Q5BDDn/35e48c4b34cf6b71be5ae6cce1da16c2/Nav-icon-SlateGray-Open-Connectors-Framework.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/2DOJSo7GeXndgr2m9pP1w4/866005b807d7563413f5ae54ceaf14c1/Nav-icon-OrangeHover-Open-Connectors-Framework.svg'
        },
        {
            key: 5,
            label: 'Open Data Quality Framework',
            href: 'https://www.alation.com/product/data-quality/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/4HUlsf0xVuO3hT9ReZHYt5/e294a28f183d43756667ca2269372117/Nav-icon-SlateGray-Open-Data-Quality-Framework.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/1eufsHp0YXsZDSR9gV9ZLa/56bc9cbdd1a81c23dbbea7ed56ca2d0d/Nav-icon-OrangeHover-Open-Data-Quality-Framework.svg'
        },
        {
            key: 6,
            label: 'Alation APIs',
            href: 'https://www.alation.com/product/alation-apis/',
            primaryIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/SZWipeCntDxHldVSBKsnH/26c7fadb905ec0de32566077054e6342/Nav-icon-SlateGray-APIs.svg',
            hoverIcon: 'https://images.ctfassets.net/7p3vnbbznfiw/41tgvKKKnnppGq781yMcQw/1dd0682f12ed97e78766a819fee44086/Nav-icon-OrangeHover-APIs.svg'
        }
    ]
    const objective_items = [
        {
            key: 1,
            label: '主动数据治理',
            href: 'https://www.alation.com/solutions/data-governance/',
        },
        {
            key: 2,
            label: 'AI 治理',
            href: 'https://www.alation.com/solutions/artificial-intelligence/',
        },
        {
            key: 3,
            label: '数据现代化',
            href: 'https://www.alation.com/solutions/cloud-data-migration/',
        },
        {
            key: 4,
            label: '数据产品市场',
            href: 'https://www.alation.com/solutions/data-products/',
        },
        {
            key: 5,
            label: '元数据管理',
            href: 'https://www.alation.com/solutions/active-metadata-management/',
        },
        {
            key: 6,
            label: '隐私、风险、合规',
            href: 'https://www.alation.com/solutions/privacy-risk-and-compliance/',
        },
        {
            key: 7,
            label: '自助式分析',
            href: 'https://www.alation.com/solutions/self-service-analytics/',
        }
    ]
    const industry_items = [
        {
            key: 1,
            label: '金融服务',
            href: 'https://www.alation.com/solutions/financial-services/',
        },
        {
            key: 2,
            label: '医疗保健',
            href: 'https://www.alation.com/solutions/healthcare/',
        },
        {
            key: 3,
            label: '保险业',
            href: 'https://www.alation.com/solutions/insurance/',
        },
        {
            key: 4,
            label: '制造业',
            href: 'https://www.alation.com/solutions/manufacturing/',
        },
        {
            key: 5,
            label: '零售业',
            href: 'https://www.alation.com/solutions/retail/',
        },
        {
            key: 6,
            label: '科技产业',
            href: 'https://www.alation.com/solutions/technology/',
        },
        {
            key: 7,
            label: '公共部门',
            href: 'https://www.alation.com/solutions/public-sector/',
        }
    ]
    const resources_items = [
        {
            key: 1,
            label: '资源中心',
            href: 'https://www.alation.com/resource-center/',
        },
        {
            key: 2,
            label: '活动和网络研讨会',
            href: 'https://www.alation.com/events/',
        },
        {
            key: 3,
            label: '博客',
            href: 'https://www.alation.com/blog/',
        },
        {
            key: 4,
            label: '数据文化成熟度模型',
            href: 'https://www.alation.com/data-culture-maturity-model/',
        },
        {
            key: 5,
            label: '数据激进派播客',
            href: 'https://www.alation.com/podcast/',
        },
        {
            key: 6,
            label: '开发者文档',
            href: 'https://www.alation.com/docs/en/latest/',
        }
    ]
    const company_items = [
        {
            key: 1,
            label: '关于我们',
            href: 'https://www.alation.com/about-alation/',
        },
        {
            key: 2,
            label: '职业规划',
            href: 'https://www.alation.com/careers/',
        },
        {
            key: 3,
            label: '新闻与新闻稿',
            href: 'https://www.alation.com/news-and-press/',
        },
        {
            key: 4,
            label: '合作伙伴',
            href: 'https://www.alation.com/partners/',
        },
        {
            key: 5,
            label: '数据智能项目',
            href: 'https://www.alation.com/data-intelligence-project/',
        },
        {
            key: 6,
            label: '信任中心',
            href: 'https://www.alation.com/alation-trust-center/',
        }
    ]

    return (
        <div className="App">
            <div className='header'>
                <div className='nav'>
                    <img alt="headerLogo" fetchPriority="high" width="175" height="31" decoding="async" data-nimg="1"
                         style={{color: 'transparent'}}
                         src="https://images.ctfassets.net/7p3vnbbznfiw/TMRjJsOSHitRstKLRdkcX/d0d1535647d1517b879576074b6e5505/Alation-Logo-Primary.svg"/>
                    <div className='header-tab'>
                        <ul className='nav-bar'>

                            <li className='menu-item'
                                onMouseEnter={() => setProductsSubmenuShow(true)}
                                onMouseLeave={() => setProductsSubmenuShow(false)}
                            >
                                <p style={{display: 'inline-block', color: '#35444d'}}>产品</p>
                                <img alt="chevron" loading="lazy" width="16" height="8" decoding="async" data-nimg="1"
                                     className="chevron"
                                     src="https://www.alation.com/themes2024/chevron-button-primary-orange.svg"
                                     style={{color: 'transparent'}}/>
                                <div className='submenu' style={{
                                    opacity: productsSubmenuShow ? 1 : 0,
                                    pointerEvents: productsSubmenuShow ? 'auto' : 'none'
                                }}>
                                    <div className='submenu-section'>
                                        <p className="subMenuName">产品</p>
                                        <div className='linksContainer'>
                                            {
                                                products_items.map((item) => {
                                                    return <div
                                                        className='hasIcon'
                                                        key={item.key}
                                                        onMouseEnter={(e) => {
                                                            const span = e.currentTarget.querySelector('span');
                                                            span.style.backgroundImage = `url(${item.hoverIcon})`;
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            const span = e.currentTarget.querySelector('span');
                                                            span.style.backgroundImage = `url(${item.primaryIcon})`;
                                                        }}
                                                    >
                                                        <a href={item.href}>
                                                            <span
                                                                style={{
                                                                    width: 30,
                                                                    height: 30,
                                                                    color: 'transparent',
                                                                    alignSelf: 'center',
                                                                    backgroundSize: 'contain',
                                                                    backgroundPosition: 'center',
                                                                    backgroundRepeat: 'no-repeat',
                                                                    backgroundImage: `url(${item.primaryIcon})`
                                                                }}
                                                            />
                                                            <p className="link">{item.label}</p>
                                                        </a>
                                                    </div>
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className='submenu-section'>
                                        <p className="subMenuName">平台服务</p>
                                        <div className='linksContainer'>
                                            {
                                                platform_services_items.map((item) => {
                                                    return <div
                                                        className='hasIcon'
                                                        key={item.key}
                                                        onMouseEnter={(e) => {
                                                            const span = e.currentTarget.querySelector('span');
                                                            span.style.backgroundImage = `url(${item.hoverIcon})`;
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            const span = e.currentTarget.querySelector('span');
                                                            span.style.backgroundImage = `url(${item.primaryIcon})`;
                                                        }}
                                                    >
                                                        <a href={item.href}>
                                                            <span
                                                                style={{
                                                                    width: 30,
                                                                    height: 30,
                                                                    color: 'transparent',
                                                                    alignSelf: 'center',
                                                                    backgroundSize: 'contain',
                                                                    backgroundPosition: 'center',
                                                                    backgroundRepeat: 'no-repeat',
                                                                    backgroundImage: `url(${item.primaryIcon})`
                                                                }}
                                                            />
                                                            <p className="link">{item.label}</p>
                                                        </a>
                                                    </div>
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className='submenu-section'>
                                        <p className="subMenuName">生态系统</p>
                                        <div className='linksContainer'>
                                            {
                                                ecosystem_items.map((item) => {
                                                    return <div
                                                        className='hasIcon'
                                                        key={item.key}
                                                        onMouseEnter={(e) => {
                                                            const span = e.currentTarget.querySelector('span');
                                                            span.style.backgroundImage = `url(${item.hoverIcon})`;
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            const span = e.currentTarget.querySelector('span');
                                                            span.style.backgroundImage = `url(${item.primaryIcon})`;
                                                        }}
                                                    >
                                                        <a href={item.href}>
                                                            <span
                                                                style={{
                                                                    width: 30,
                                                                    height: 30,
                                                                    color: 'transparent',
                                                                    alignSelf: 'center',
                                                                    backgroundSize: 'contain',
                                                                    backgroundPosition: 'center',
                                                                    backgroundRepeat: 'no-repeat',
                                                                    backgroundImage: `url(${item.primaryIcon})`
                                                                }}
                                                            />
                                                            <p className="link">{item.label}</p>
                                                        </a>
                                                    </div>
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className='calloutWrapper'>
                                        <a target='_self'
                                           href='https://www.alation.com/product/data-intelligence-platform/'>
                                            <div className='calloutWrapper__image'>
                                                <img
                                                    alt="The Alation Marketecture showcasing everything possible with the Alation platform"
                                                    loading="lazy" decoding="async" data-nimg="fill" sizes="240px"
                                                    // srcSet="/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=16&q=75 16w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=32&q=75 32w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=48&q=75 48w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=64&q=75 64w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=96&q=75 96w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=128&q=75 128w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=256&q=75 256w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=384&q=75 384w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=3840&q=75 3840w"
                                                    src="https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=384&q=75"
                                                    style={{
                                                        position: 'absolute',
                                                        height: '100%',
                                                        width: '100%',
                                                        inset: '0px',
                                                        color: 'transparent'
                                                    }}/>
                                            </div>
                                            <div>
                                                <div className="calloutWrapper__details">平台概述</div>
                                                <div className="calloutWrapper__details__title">数据智能平台</div>
                                                <div className="calloutCTA">
                                                    <div className="linkWrapper">
                                                        <div className="linkTextArrowWrapper"><span
                                                            className='learnmore'>了解更多</span>
                                                            <div className="rightArrow"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className='menu-item'
                                onMouseEnter={() => setSolutionsSubmenuShow(true)}
                                onMouseLeave={() => setSolutionsSubmenuShow(false)}
                            >
                                <p style={{display: 'inline-block', color: '#35444d'}}>解决方案</p>
                                <img alt="chevron" loading="lazy" width="16" height="8" decoding="async" data-nimg="1"
                                     className="chevron"
                                     src="https://www.alation.com/themes2024/chevron-button-primary-orange.svg"
                                     style={{color: 'transparent'}}/>
                                <div className='submenu' style={{
                                    opacity: solutionsSubmenuShow ? 1 : 0,
                                    pointerEvents: solutionsSubmenuShow ? 'auto' : 'none'
                                }}>
                                    <div className='submenu-section'>
                                        <p className="subMenuName">按目标</p>
                                        <div className='linksContainer'>
                                            {
                                                objective_items.map((item) => {
                                                    return <div
                                                        className='hasIcon'
                                                        key={item.key}
                                                    >
                                                        <a href={item.href}>
                                                            <p className="link">{item.label}</p>
                                                        </a>
                                                    </div>
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className='submenu-section'>
                                        <p className="subMenuName">按行业</p>
                                        <div className='linksContainer'>
                                            {
                                                industry_items.map((item) => {
                                                    return <div
                                                        className='hasIcon'
                                                        key={item.key}
                                                    >
                                                        <a href={item.href}>
                                                            <p className="link">{item.label}</p>
                                                        </a>
                                                    </div>
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className='calloutWrapper' style={{backgroundColor: 'rgba(68,35,116,.102)'}}>
                                        <a target='_self'
                                           href='https://www.alation.com/alation-expert-services/'>
                                            <div className='calloutWrapper__image'>
                                                <img
                                                    alt="The Alation Marketecture showcasing everything possible with the Alation platform"
                                                    loading="lazy" decoding="async" data-nimg="fill" sizes="240px"
                                                    // srcSet="/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=16&q=75 16w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=32&q=75 32w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=48&q=75 48w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=64&q=75 64w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=96&q=75 96w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=128&q=75 128w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=256&q=75 256w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=384&q=75 384w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=3840&q=75 3840w"
                                                    src="https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F2Sc6oy1OlTMwrUhbRZAd0h%2F8b9d8aef955b9fddf2e45d46e62ad81d%2FSolutions_Callout_Nav_Image.png&w=3840&q=75"
                                                    style={{
                                                        position: 'absolute',
                                                        height: '100%',
                                                        width: '100%',
                                                        inset: '0px',
                                                        color: 'transparent'
                                                    }}/>
                                            </div>
                                            <div>
                                                <div className="calloutWrapper__details">专业服务</div>
                                                <div className="calloutWrapper__details__title">Alation
                                                    的专家服务有助于最大限度地发挥影响力
                                                </div>
                                                <div className="calloutCTA">
                                                    <div className="linkWrapper">
                                                        <div className="linkTextArrowWrapper"><span
                                                            className='learnmore'>了解更多</span>
                                                            <div className="rightArrow"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className='menu-item'>
                                <a href='https://www.alation.com/customers/'><p
                                    style={{display: 'inline-block', color: '#35444d'}}>客户案例</p></a>
                            </li>
                            <li className='menu-item'
                                onMouseEnter={() => setLearnSubmenuShow(true)}
                                onMouseLeave={() => setLearnSubmenuShow(false)}
                            >
                                <p style={{display: 'inline-block', color: '#35444d'}}>学习</p>
                                <img alt="chevron" loading="lazy" width="16" height="8" decoding="async" data-nimg="1"
                                     className="chevron"
                                     src="https://www.alation.com/themes2024/chevron-button-primary-orange.svg"
                                     style={{color: 'transparent'}}/>
                                <div className='submenu' style={{
                                    opacity: learnSubmenuShow ? 1 : 0,
                                    pointerEvents: learnSubmenuShow ? 'auto' : 'none'
                                }}>
                                    <div className='submenu-section'>
                                        <p className="subMenuName">资源</p>
                                        <div className='linksContainer'>
                                            {
                                                resources_items.map((item) => {
                                                    return <div
                                                        className='hasIcon'
                                                        key={item.key}
                                                    >
                                                        <a href={item.href}>
                                                            <p className="link">{item.label}</p>
                                                        </a>
                                                    </div>
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className='calloutWrapper' style={{backgroundColor: 'rgba(128,222,216,.102)'}}>
                                        <a target='_self'
                                           href='https://www.alation.com/podcast/'>
                                            <div className='calloutWrapper__image'>
                                                <img
                                                    alt="The Alation Marketecture showcasing everything possible with the Alation platform"
                                                    loading="lazy" decoding="async" data-nimg="fill" sizes="240px"
                                                    // srcSet="/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=16&q=75 16w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=32&q=75 32w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=48&q=75 48w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=64&q=75 64w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=96&q=75 96w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=128&q=75 128w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=256&q=75 256w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=384&q=75 384w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FkocJlMRjEM6DS0B22DaPr%2Fc80003553b18d24302f01d8d54e410cd%2FAlation-Marketecture-2024-hero-updated.png&w=3840&q=75 3840w"
                                                    src="https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F3UCHileCYco9fYEu96iQQl%2F460beda9de678693d8ca42ee735047cb%2FThe_Data_Radicals_Podcast_Returns-Blog-Hero-647x357-2x.png&w=3840&q=75"
                                                    style={{
                                                        position: 'absolute',
                                                        height: '100%',
                                                        width: '100%',
                                                        inset: '0px',
                                                        color: 'transparent'
                                                    }}/>
                                            </div>
                                            <div>
                                                <div className="calloutWrapper__details">播客</div>
                                                <div
                                                    className="calloutWrapper__details__title">与行业领导者探索数据和AI
                                                </div>
                                                <div className="calloutCTA">
                                                    <div className="linkWrapper">
                                                        <div className="linkTextArrowWrapper"><span
                                                            className='learnmore'>立即收听</span>
                                                            <div className="rightArrow"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className='menu-item'
                                onMouseEnter={() => setCompanySubmenuShow(true)}
                                onMouseLeave={() => setCompanySubmenuShow(false)}
                            >
                                <p style={{display: 'inline-block', color: '#35444d'}}>公司</p>
                                <img alt="chevron" loading="lazy" width="16" height="8" decoding="async" data-nimg="1"
                                     className="chevron"
                                     src="https://www.alation.com/themes2024/chevron-button-primary-orange.svg"
                                     style={{color: 'transparent'}}/>
                                <div className='submenu' style={{
                                    opacity: companySubmenuShow ? 1 : 0,
                                    pointerEvents: companySubmenuShow ? 'auto' : 'none'
                                }}>
                                    <div className='submenu-section'>
                                        <p className="subMenuName">公司新闻</p>
                                        <div className='linksContainer'>
                                            {
                                                company_items.map((item) => {
                                                    return <div
                                                        className='hasIcon'
                                                        key={item.key}
                                                    >
                                                        <a href={item.href}>
                                                            <p className="link">{item.label}</p>
                                                        </a>
                                                    </div>
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className='calloutWrapper'
                                         style={{backgroundColor: 'rgba(253,166,0,.102)', width: '516px'}}>
                                        <div className="calloutWrapper__title"></div>
                                        <div className='calloutWrapper__items'>
                                            <a target='_blank' className='calloutWrapper__items__itemWrapper'
                                               href='https://www.cio.com/article/3532160/alation-and-salesforce-partner-on-data-governance-for-data-cloud.html'>
                                                <div className='calloutWrapper__items__image'>
                                                    <img alt="CIO logo" loading="lazy" decoding="async" data-nimg="fill"
                                                         sizes="240px"
                                                        // srcSet="/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=16&amp;q=75 16w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=32&amp;q=75 32w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=48&amp;q=75 48w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=64&amp;q=75 64w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=96&amp;q=75 96w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=128&amp;q=75 128w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=256&amp;q=75 256w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=384&amp;q=75 384w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=3840&amp;q=75 3840w"
                                                         src="https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=3840&amp;q=75"
                                                         style={{
                                                             position: 'absolute',
                                                             height: '100%',
                                                             width: '100%',
                                                             inset: '0px',
                                                             color: 'transparent',
                                                             borderRadius: '4px'
                                                         }}/>
                                                </div>
                                                <div className='calloutWrapper__items__details'>
                                                    <div
                                                        className="calloutWrapper__items__details">文章
                                                    </div>
                                                    <div
                                                        className="calloutWrapper__items__details__title">Alation 与
                                                        Salesforce 在数据云的数据治理方面合作
                                                    </div>

                                                </div>
                                            </a>
                                            <a target='_blank' className='calloutWrapper__items__itemWrapper'
                                               href='https://fortune.com/2024/07/31/strong-data-culture-key-ai/'>
                                                <div className='calloutWrapper__items__image'>
                                                    <img alt="CIO logo" loading="lazy" decoding="async" data-nimg="fill"
                                                         sizes="240px"
                                                        // srcSet="/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=16&amp;q=75 16w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=32&amp;q=75 32w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=48&amp;q=75 48w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=64&amp;q=75 64w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=96&amp;q=75 96w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=128&amp;q=75 128w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=256&amp;q=75 256w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=384&amp;q=75 384w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=3840&amp;q=75 3840w"
                                                         src="https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F2oavMYhMxuPlhaNWzP356l%2Fca975104413add33bc8d978bbe2246f7%2FFortune-Gray-400x225-1.png&w=3840&q=75"
                                                         style={{
                                                             position: 'absolute',
                                                             height: '100%',
                                                             width: '100%',
                                                             inset: '0px',
                                                             color: 'transparent',
                                                             borderRadius: '4px'
                                                         }}/>
                                                </div>
                                                <div className='calloutWrapper__items__details'>
                                                    <div
                                                        className="calloutWrapper__items__details">文章
                                                    </div>
                                                    <div
                                                        className="calloutWrapper__items__details__title">为什么建立强大的数据文化是人工智能战略的关键
                                                    </div>

                                                </div>
                                            </a>
                                            <a target='_blank' className='calloutWrapper__items__itemWrapper'
                                               href='https://www.forbes.com/sites/joemckendrick/2024/06/26/machine-suggested-human-verified-in-search-of-ais-elusive-trust-factor/'>
                                                <div className='calloutWrapper__items__image'>
                                                    <img alt="CIO logo" loading="lazy" decoding="async" data-nimg="fill"
                                                         sizes="240px"
                                                        // srcSet="/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=16&amp;q=75 16w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=32&amp;q=75 32w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=48&amp;q=75 48w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=64&amp;q=75 64w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=96&amp;q=75 96w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=128&amp;q=75 128w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=256&amp;q=75 256w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=384&amp;q=75 384w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4ThU6aTdaoSym9YPlyuT8c%2F4706cb1d4ef02825d0f0452a56691bfa%2Fcio_logo.png&amp;w=3840&amp;q=75 3840w"
                                                         src="https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7iewX7OBcgRxnDOYka7Vl3%2F1825c4e90de5e1f68a239e6f559b4711%2FUntitled_design__35_.png&w=3840&q=75"
                                                         style={{
                                                             position: 'absolute',
                                                             height: '100%',
                                                             width: '100%',
                                                             inset: '0px',
                                                             color: 'transparent',
                                                             borderRadius: '4px'
                                                         }}/>
                                                </div>
                                                <div className='calloutWrapper__items__details'>
                                                    <div
                                                        className="calloutWrapper__items__details">文章
                                                    </div>
                                                    <div
                                                        className="calloutWrapper__items__details__title">机器建议，人工验证：探寻人工智能难以捉摸的信任因素
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className='navAndButton'>
                            <div className="searchWrapper"><a
                                className="searchIconContainer" href="https://www.alation.com/search/">
                                <img alt="search"
                                     loading="lazy"
                                     width="20"
                                     height="20"
                                     decoding="async"
                                     data-nimg="1"
                                     style={{color: 'transparent'}}
                                     src="https://www.alation.com/themes2024/search-icon-button-primary-orange.svg"/>
                            </a>
                            </div>
                            <div className="main-nav-cta"><a
                                className="button-anchor-wrapper"
                                href="https://www.alation.com/learn-more/" target="_self">
                                <button
                                    className="button__Qiyid">
                                    <div className="labelWrapper">获取演示</div>
                                </button>
                            </a></div>
                        </div>
                    </div>
                </div>
            </div>
            <main className='siteWrapper'>
                <section className='sectionFullWidth'>
                    <div className='contentWrapper'>
                        <div className="textWrapper"><p
                            className="textWrapper__preHeader"></p>
                            <h1 className="textWrapper__title">可信赖的 AI
                                始于 <gradient-span>可信赖的数据</gradient-span></h1>
                            <h2 className="textWrapper__subTitle">利用元数据的力量，从每一项数据和人工智能计划中实现价值</h2>
                            <div className="textWrapper__buttonContainer">
                                <div><a className="button-anchor-wrapper"
                                        href="https://www.alation.com/learn-more/" target="_self">
                                    <button
                                        className="button__Qiyid"
                                        style={{minWidth: '230px'}}>
                                        <div className="labelWrapper">让我的数据 AI 做好准备</div>
                                    </button>
                                </a></div>
                            </div>
                        </div>
                        <video className="mp4Video" autoPlay="" loop="" muted="" playsInline=""
                               poster="https://images.ctfassets.net/7p3vnbbznfiw/1w0VeckeVCC5MS66pH2eLV/add4913fa827c7d2393b3beb59fdefcd/Homepage_hero_video_placeholder_image.png">
                            <source
                                src="https:////videos.ctfassets.net/7p3vnbbznfiw/7c0FIFqvqaSHCShiyn9tfa/050ce79b5771e54ad3740a6292f7ebb7/Compressed_Home_Page_Hero.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>

                </section>
            </main>
        </div>
    );
}

export default App;
