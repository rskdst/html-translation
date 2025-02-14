import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from "react";
import {keys} from "@material-ui/core/styles/createBreakpoints";

function App() {

    const animatedRef = useRef()
    const startTimeRef = useRef(null);

    const [productsSubmenuShow, setProductsSubmenuShow] = useState(false);
    const [solutionsSubmenuShow, setSolutionsSubmenuShow] = useState(false);
    const [learnSubmenuShow, setLearnSubmenuShow] = useState(false);
    const [companySubmenuShow, setCompanySubmenuShow] = useState(false);
    const [collapse, setCollapse] = useState(0);
    const [collapseImg, setCollapseImg] = useState(0);
    const [animatedWidth, setAnimatedWidth] = useState('0%');
    const [animatedOpacity, setAnimatedOpacity] = useState(0);
    const [animatedScale, setAnimatedScale] = useState(0.8);


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

    const collapse_items = [
        {
            key: 1,
            height: '126px',
            title: '满怀信心地构建 AI 模型',
            richText: '可信的 AI 于可信的数据。Alation 的 AI 治理框架确保数据质量、透明度和合规性。记录见解、跟踪沿袭，并在团队之间协作，以实现合乎道德、合规的人工智能。',
            linkText: '构建可信的 AI',
            imgLink: 'https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&w=3840&q=75'
        },
        {
            key: 2,
            height: '106px',
            title: '实现数据治理',
            richText: '通过数据治理推动业务成果。将合规指导融入工作流程，支持协作和创新，同时降低风险。使每个人都能凭借数据做出决策。',
            linkText: '实现数据治理',
            imgLink: 'https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F5p0gURZbdabIFV6Vy2Viw4%2Ff483103e4236c688709f8394e4833fa0%2FEnable_data_governancev2.png&w=3840&q=75'
        },
        {
            key: 3,
            height: '126px',
            title: '创建一个值得信赖的数据产品市场',
            richText: '通过一个用户友好型的、按类别组织的市场，让团队能够即时访问可靠的数据产品。快速找到适合您需求的准确、高质量的数据，以加快决策速度。',
            linkText: '构建一个市场',
            imgLink: 'https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F63q409jJJsBL0adHP8rntg%2Fc61bcd4b8a091b54ca42a525f358a43f%2FData-Products-Marketplacev3.png&w=3840&q=75'
        },
        {
            key: 4,
            height: '128px',
            title: '做出更快的决策',
            richText: '使每个人都能够做出数据驱动的决策。将数据引入到诸如 Slack、Tableau、Excel 和 Google Sheets 等常用工具中。通过将元数据集成到日常工作流程中来提高生产力。',
            linkText: '实现自助式分析',
            imgLink: 'https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2FyO6BRJXMt8ZJ4CotySKtP%2F7b20e803d88d7e42b982291256b15dc6%2FSelf-service-analyticsv3.png&w=3840&q=75'
        },
        {
            key: 5,
            height: '126px',
            title: '使您的数据现代化',
            richText: '让您的云转型无缝衔接。借助 Alation，制定一个成功的数据现代化计划，打破传统的数据孤岛。优先考虑重要事项，自信地进行迁移，同时保障质量和治理。',
            linkText: '自信地迁移',
            imgLink: 'https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F1Y13lJW95KQfetDshrw5dm%2Fa8718fef2617899c77e0950422043c6d%2FModernize-data-ecosystemv3.png&w=3840&q=75'
        },

    ]

    const discover_items = [
        {
            key: 1,
            videoId: 'TF8w9VNZskCE9wuUdO5tm',
            cover: 'https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&w=3840&q=75',
            video: 'https:////videos.ctfassets.net/7p3vnbbznfiw/2TF8w9VNZskCE9wuUdO5tm/fdf0925bff951cdd0b43300e41481a39/Sallie-Mae-Customer-Video.mp4',
            desc: 'Alation 帮助我们确信我们的数据是可信的并且适合其用途。'
        },
        {
            key: 2,
            videoId: 'b9mAfipLtYBW8eS4tNhgr',
            cover: 'https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F3L6AzMAlNsxwG5ogJwoDw1%2F5efb4079a5f495eab956fc764be84158%2FGXS-Bank-Case-Study-Youtube-Cover-1280x720-v3__1_.png&w=3840&q=75',
            video: 'https:////videos.ctfassets.net/7p3vnbbznfiw/3b9mAfipLtYBW8eS4tNhgr/da30e462594f5e2535ed58eb4284740b/GXS-Customer-Video.mp4',
            desc: 'Alation 为利益相关者提供了平台和能力，使他们能够搜索到他们所需的数据……'
        },
        {
            key: 3,
            videoId: 'RZ5MIEO2vhFOqa3xyMwxw',
            cover: 'https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7JhKPLLh4LWhh9SfBx9aE5%2Faac7bb75a6d42f67761508ed9a9edfb9%2FVattenfall-Case-Study-Youtube-Cover-1280x720-v2__1_.jpg&w=3840&q=75',
            video: 'https:////videos.ctfassets.net/7p3vnbbznfiw/6RZ5MIEO2vhFOqa3xyMwxw/b37fc56e3050b7d4d98d323c20bff357/Vattenfall-Customer-Video.mp4',
            desc: '[借助 Alation] 我们将以用户为中心和高质量数据确定为促进我们的数据文化和创造业务价值的关键推动因素。'
        },
    ]

    const animate_func = (totalDuration, func, end) => {
        startTimeRef.current = performance.now();
        const animate = (timestamp) => {
            const elapsedTime = timestamp - startTimeRef.current;
            const progress = Math.min(elapsedTime / totalDuration, 1);

            if (progress < end) {
                func(progress);
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }


    useEffect(() => {
        startTimeRef.current = performance.now();
        const animate = (timestamp) => {
            const elapsedTime = timestamp - startTimeRef.current;
            const totalDuration = 10000;
            const progress = Math.min(elapsedTime / totalDuration, 1);
            const newWidth = `${progress * 100}%`;

            if (progress < 1) {
                setAnimatedWidth(newWidth);
                requestAnimationFrame(animate);
            } else {
                if (collapse === 4) {
                    setCollapse(0)
                    setCollapseImg(0)
                } else {
                    setCollapse(collapse + 1)
                    setCollapseImg(collapseImg + 1)
                }
            }
        };

        requestAnimationFrame(animate);

    }, [collapse]);

    useEffect(() => {
        animate_func(500, setAnimatedOpacity, 1)
    }, [collapse]);

    useEffect(() => {
        animate_func(1200, setAnimatedScale, 0.9)

    }, [collapseImg]);

    useEffect(() => {
        return () => {
            setAnimatedWidth('0%')
        };
    }, [collapse]);


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
                <section className='section__nIFoJ'>
                    <div className='accordionWrapper__BeL8n'>
                        <h2 className="accordionTitle__O5vYK">将您的元数据转化为每个团队的宝贵资源</h2>
                        <div className="accordionDescription">
                            <div className="richText"><p style={{paddingBottom: 0}}><span>《财富》100 强企业中有 40% 依靠 Alation 来实现其数据和人工智能计划的商业价值。构建可信的数据产品，扩展自助式分析，管理您的数据和人工智能资产，并实现数据现代化。</span>
                            </p></div>
                        </div>
                        <div className='itemWrapper__MCaSa'>
                            <div className='itemWrapper__items__CQZu5'>
                                {
                                    collapse_items.map((item, index) => {
                                        return <div key={item.key}>
                                            <div id="3GQoWkBSsXTo8M4p29FmTs-0"
                                                 className="elementWrapper__DTk6j"
                                                 onClick={() => {
                                                     setCollapseImg(index)
                                                     if (index === collapse) {
                                                         setCollapse(-1)
                                                     } else {
                                                         setCollapse(index)
                                                     }

                                                 }}
                                            >
                                                <div className="element__67Z2P">
                                                    <div className="header__GeehG"><h4
                                                        className="header__title__VJMAp">{item.title}</h4>
                                                        <div
                                                            className="header__arrow">
                                                            {collapse !== index ?
                                                                <img alt="down arrow" loading="lazy" width="24"
                                                                     height="24"
                                                                     decoding="async" data-nimg="1"
                                                                     style={{color: 'transparent'}}
                                                                     src="https://www.alation.com/themes2024/down-arrow-slate-gray-30.svg"/> :
                                                                <img alt="up arrow" loading="lazy" width="24"
                                                                     height="24"
                                                                     decoding="async" data-nimg="1"
                                                                     style={{color: 'transparent'}}
                                                                     src="https://www.alation.com/themes2024/up-arrow-button-primary-orange.svg"/>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementDetailsWrapper__9jTEj"
                                                        style={{
                                                            height: index === collapse ? item.height : 0,

                                                        }}>
                                                        <div className="elementDetailsWrapper__details__hhPhT">
                                                            <div className="styles_richText__IQPtE"><p
                                                                style={{paddingBottom: 0}}>
                                                                <span>{item.richText}</span>
                                                            </p></div>
                                                        </div>
                                                        <div className="elementDetailsWrapper__textCTA__eQppF">
                                                            <div
                                                                className="linkWrapper__NDyq4">
                                                                <a href="https://www.alation.com/solutions/artificial-intelligence/">
                                                                    <div
                                                                        className="linkTextArrowWrapper__IdI7c">
                                                                        <span>{item.linkText}</span>
                                                                        <div
                                                                            className="rightArrow__VFSTQ"></div>
                                                                    </div>
                                                                </a></div>
                                                        </div>
                                                        {/*<div className="elementDetailsWrapper__mediaWrapper__cRBtF">*/}
                                                        {/*    <img*/}
                                                        {/*        alt="Build AI models with confidence and break down data silos"*/}
                                                        {/*        loading="lazy" decoding="async" data-nimg="fill"*/}
                                                        {/*        style={{*/}
                                                        {/*            position: 'absolute',*/}
                                                        {/*            height: '100%',*/}
                                                        {/*            width: '100%',*/}
                                                        {/*            left: 0,*/}
                                                        {/*            top: 0,*/}
                                                        {/*            right: 0,*/}
                                                        {/*            bottom: 0,*/}
                                                        {/*            objectFit: 'cover',*/}
                                                        {/*            color: 'transparent'*/}
                                                        {/*        }}*/}
                                                        {/*        sizes="1230"*/}
                                                        {/*        // srcSet="/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=16&amp;q=75 16w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=32&amp;q=75 32w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=48&amp;q=75 48w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=64&amp;q=75 64w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=96&amp;q=75 96w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=128&amp;q=75 128w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=256&amp;q=75 256w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=384&amp;q=75 384w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=3840&amp;q=75 3840w"*/}
                                                        {/*        src="https://www.alation.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=3840&amp;q=75"/>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lineBreakWrapper__qjncw">
                                                <div className="lineBreakWrapper__lineBreak__OCr42"></div>
                                                <div
                                                    ref={animatedRef}
                                                    className="lineBreakWrapper__lineBreakAnimated__ltgGd"
                                                    style={{
                                                        width: animatedWidth,
                                                        border: index === collapse ? '2px solid #e3682a' : "none"
                                                    }}></div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="itemWrapper__images__J5Yvy">
                                {
                                    collapse_items.map((item, index) => {
                                        return <div key={item.key}>
                                            <div
                                                className="itemWrapper__mediaWrapper__JObFe"
                                                style={{display: index === collapseImg ? "block" : "none"}}
                                            >
                                                <div
                                                    className="itemWrapper__mediaWrapper__overlay__etW4r"
                                                ></div>
                                                {/*style={{left: '50%', right: '0%'}}></div>*/}
                                                <img alt="Build AI models with confidence and break down data silos"
                                                     loading="lazy" decoding="async" data-nimg="fill"
                                                     className="itemWrapper__mediaWrapper__image__nj5mC"
                                                     style={{
                                                         position: 'absolute',
                                                         height: '100%',
                                                         width: '100%',
                                                         inset: 0,
                                                         color: 'transparent',
                                                         opacity: index === collapseImg ? animatedOpacity : 0,
                                                         transform: `scale(${animatedScale}, ${animatedScale})`,
                                                         // transform: 'translate3d(0px,0px,0px)',
                                                         translate: 'none',
                                                         rotate: 'none',
                                                         scale: 'none',
                                                         // transition: 'opacity 1s ease'
                                                     }}
                                                     sizes="1230"
                                                    // srcSet="/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=16&amp;q=75 16w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=32&amp;q=75 32w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=48&amp;q=75 48w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=64&amp;q=75 64w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=96&amp;q=75 96w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=128&amp;q=75 128w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=256&amp;q=75 256w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=384&amp;q=75 384w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F4Hxvb8bXjOYnr6XiBQYbpC%2Fbe357c4d2c4af67909468f5b2f64666b%2FBuild-AI-Modelsv2.png&amp;w=3840&amp;q=75 3840w"
                                                     src={item.imgLink}/>
                                            </div>
                                        </div>
                                    })

                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section__hkTtd'>
                    <div className='bentoBoxWrapper__1gpnZ'>
                        <div className="bentoBoxWrapper__header__Fah6R"><h2
                            className="bentoBoxWrapper__header__title___RZNr">探究为什么《财富》100 强中 40% 的企业选择并信任 Alation</h2></div>
                        <div className='boxRow__VKmFX'>
                            {
                                discover_items.map((item, index) => {
                                    return <div className="boxWrapper__lE8tA" key={item.key}>
                                        <div className="boxWrapper__section__XrwAR">
                                            <div className="videoWrapper__Ltqxy">
                                                <div className="videoWrapper__ii9rv">
                                                    <img
                                                        id={`video_image_${index}`}
                                                        alt="video cover image" loading="lazy" decoding="async"
                                                        data-nimg="fill"
                                                        className="show__nWBAW" sizes="1280px"
                                                        // srcSet="/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=16&amp;q=75 16w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=32&amp;q=75 32w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=48&amp;q=75 48w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=64&amp;q=75 64w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=96&amp;q=75 96w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=128&amp;q=75 128w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=256&amp;q=75 256w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=384&amp;q=75 384w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F7p3vnbbznfiw%2F7aGO8eVwYF8iPaAbQynLXV%2Ff3b8f17957781d8d468077cab7fafadc%2FSallie-Mae-Case-Study-Youtube-Cover-v3-1280x720.png&amp;w=3840&amp;q=75 3840w"
                                                        src={item.cover}
                                                        style={{
                                                            position: 'absolute',
                                                            height: '100%',
                                                            width: '100%',
                                                            inset: '0px',
                                                            objectFit: 'cover',
                                                            color: 'transparent'
                                                        }}/>
                                                    <div
                                                        className="playButtonWrapper__TXN4B"
                                                        id={`video_play_${index}`}
                                                        onClick={() => {
                                                            const videoElement = document.querySelector(`#${item.videoId}`);
                                                            const imgElement = document.querySelector(`#video_image_${index}`);
                                                            const playElement = document.querySelector(`#video_play_${index}`);
                                                            if (videoElement) {
                                                                videoElement.style.visibility = 'visible'
                                                                imgElement.style.visibility = 'hidden'
                                                                playElement.style.visibility = 'hidden'
                                                                videoElement.play();
                                                            }
                                                        }}
                                                    >
                                                        <img alt="play-button" loading="lazy"
                                                             width="16" height="13"
                                                             decoding="async" data-nimg="1"
                                                             src="https://www.alation.com/_next/static/media/play.9b3a0a51.svg"
                                                             style={{color: 'transparent'}}

                                                        /></div>
                                                    <video
                                                        id={item.videoId}
                                                        className="mp4Video__a7Ked" controls
                                                        playsInline
                                                    >
                                                        <source
                                                            src={item.video}
                                                            type="video/mp4"/>
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="description__z3ZvN">
                                                <div className="richText__IQPtE"><p style={{paddingBottom: '0px'}}>
                                                    <span>“{item.desc}</span><span>”</span>
                                                </p></div>
                                            </div>
                                        </div>
                                    </div>

                                })
                            }
                        </div>
                        <div className="bentoBoxWrapper__ctaWrapper___9zvm"><a
                            className="buttonAnchorWrapper__UwNgs"
                            href="https://www.alation.com/customers/" target="_self">
                            <button
                                className="button__Qiyid">
                                <div className="labelWrapper__KP57a">查看所有客户案例</div>
                            </button>
                        </a></div>
                    </div>

                </section>
            </main>
        </div>
    );
}

export default App;
