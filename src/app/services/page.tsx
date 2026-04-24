import { Metadata } from 'next';
import Link from 'next/link';
import { Users, Briefcase, GraduationCap, Target, Award, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '服务项目',
  description: '福伊特提供全方位人力资源服务，包括管理咨询、业务外包、人才招聘、培训开发、个人职业规划等',
};

const services = [
  {
    id: 'consulting',
    icon: Users,
    title: '人力资源管理咨询',
    subtitle: 'HR Management Consulting',
    description: '结合企业运营实际，提供全方位测评及关键问题解决方案，帮助企业解决人力资源战略分解及落地难题',
    value: '价值所在：专业',
    features: [
      '科学化测评企业人力资源现状',
      '完善系统人力资源管理体系',
      '升级企业人力资源管理手段',
      '提升组织活力和绩效',
      '缓和企业紧张的劳务关系',
    ],
    details: [
      { name: '人力资源战略规划', desc: '立足企业发展战略，结合企业人力资源困境及实施要点，提出高价值、可落地的人力资源规划' },
      { name: '人力资源管理手段导入', desc: '针对企业内部人力资源管理能力，提升人资部门管理水平、完善科学化管理工具使用' },
      { name: '科学化人力资源诊断', desc: '通过全面调查及测评，客观分析企业目前人力资源问题所在，提出关键问题解决方案' },
      { name: '人力资源管理体系建设', desc: '组织管理与职位体系设计、绩效考核管理体系设计、薪酬激励与福利体系设计、员工职业生涯规划' },
      { name: '劳动关系咨询', desc: '为健全企业劳动关系认知，提供专业法律法规咨询，劳动法律咨询、文本修订、合规培训等' },
    ],
  },
  {
    id: 'outsourcing',
    icon: Briefcase,
    title: '人力资源业务外包',
    subtitle: 'Human Resource Outsourcing',
    description: '为紧跟企业人力资源建设需求，推动企业人力资源高效建设，减负企业人资部门，提供成本可视化、服务一体化的外包业务',
    value: '价值所在：风险控制',
    features: [
      '协助企业规范操作',
      '分担企业内部工作压力',
      '优化企业人力资源制度',
      '灵活定制优质服务',
      '成本可视化、服务一体化',
    ],
    details: [
      { name: '薪酬管理外包', desc: '薪酬管理作为企业人力资源管理的核心，委托专业代管机构可以有效推进建设进度' },
      { name: '招聘流程外包 (RPO)', desc: '帮助企业打造人才招聘矩阵，从需求分析到入职跟踪全程服务' },
      { name: '岗位外包服务', desc: '提供灵活用工解决方案，帮助企业远离用工急、招聘难、工作紧的困境' },
    ],
  },
  {
    id: 'recruitment',
    icon: GraduationCap,
    title: '人才招聘和派遣',
    subtitle: 'Talent Recruitment and Dispatch',
    description: '聚焦人才需求，提升企业人才竞争力，提供多元化人才问题解决方案，为企业人力资源存续发展提供动力',
    value: '价值所在：效率',
    features: [
      '专业人才猎头服务',
      '批量招聘解决方案',
      '灵活用工派遣服务',
      '实习生与校园招聘',
      '人才评估与推荐',
    ],
    details: [
      { name: '中高端人才猎头', desc: '精准匹配企业需求，快速获取优质人才' },
      { name: '批量蓝领招聘', desc: '聚焦制造业、服务业，提供高效批量招聘服务' },
      { name: '劳务派遣服务', desc: '合规劳务派遣，帮助企业灵活用工' },
      { name: '招聘流程外包 (RPO)', desc: '打造企业人才招聘矩阵，全程招聘服务' },
    ],
  },
  {
    id: 'training',
    icon: Award,
    title: '人力资源培训及开发',
    subtitle: 'Human Resource Training and Development',
    description: '量身定制符合组织当下人力资源发展需求、员工队伍建设、企业文化建设的培训方案，指导并落实，全程监督并反馈建设效果',
    value: '价值所在：执行力',
    features: [
      '专业诊断企业培训困境',
      '补充内部部门监督培训的不足',
      '定向培养员工业务能力',
      '定制企业特色培训方案',
      '打造企业内部发展核动力',
    ],
    details: [
      { name: '培训需求分析和方案设计', desc: '根据企业实际需求，量身定制培训方案' },
      { name: '定制化培训服务', desc: '提供符合企业特色的专业培训课程' },
      { name: 'HR培训能力指导', desc: '提升企业人力资源部门培训管理能力' },
    ],
  },
  {
    id: 'career',
    icon: Target,
    title: '个人职业及发展规划',
    subtitle: 'Personal Career and Development Planning',
    description: '面向社会，提供专业的个人成长规划教育及指导；针对自由职业者，提供人事档案、社会保险、公积金等个人事务委托管理',
    value: '价值所在：专注',
    features: [
      '个人职业规划指导',
      '个人成长教育咨询',
      '人事档案委托管理',
      '社保公积金代缴',
      '职业生涯发展建议',
    ],
    details: [
      { name: '职业规划咨询', desc: '帮助每一位有理想的人，在通往成功的路上更顺畅' },
      { name: '个人事务代理', desc: '提供人事档案、社会保险、公积金等个人事务委托管理' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              服务项目
            </h1>
            <p className="text-xl text-white/80 mb-4">
              全方位人力资源解决方案
            </p>
            <p className="text-lg text-white/70">
              定制化、全流程 | 将服务精神贯彻到底
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="bg-primary/5 rounded-lg p-4 mb-6">
                  <p className="text-primary font-medium">{service.value}</p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`bg-slate-100 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  核心服务内容
                </h3>
                <div className="space-y-6">
                  {service.details.map((detail, i) => (
                    <div key={i} className="border-l-2 border-primary pl-4">
                      <h4 className="font-medium text-foreground mb-1">{detail.name}</h4>
                      <p className="text-sm text-muted-foreground">{detail.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            需要定制人力资源解决方案？
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            联系我们，专业团队将根据您的企业需求，量身定制最适合的人力资源服务方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-medium text-primary shadow-lg transition-all hover:bg-white/90"
            >
              立即咨询
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:0512-52713026"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-medium text-white transition-all hover:bg-white/10"
            >
              电话咨询: 0512-52713026
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
