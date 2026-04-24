import Link from 'next/link';
import { Users, Briefcase, GraduationCap, Target, Award, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: '人力资源管理咨询',
    description: '全方位测评及关键问题解决方案，帮助企业解决人力资源战略分解及落地难题',
  },
  {
    icon: Briefcase,
    title: '人力资源业务外包',
    description: '推动企业人力资源高效建设，减负企业人资部门，提供成本可视化、服务一体化的外包业务',
  },
  {
    icon: GraduationCap,
    title: '人才招聘和派遣',
    description: '聚焦人才需求，提升企业人才竞争力，提供多元化人才问题解决方案',
  },
  {
    icon: Award,
    title: '人力资源培训及开发',
    description: '量身定制培训方案，指导并落实，全程监督并反馈建设效果',
  },
  {
    icon: Target,
    title: '个人职业及发展规划',
    description: '提供专业的个人成长规划教育及指导，个人事务委托管理',
  },
];

const advantages = [
  { number: '10+', label: '平均从业经验（年）' },
  { number: '500+', label: '服务企业客户' },
  { number: '1000+', label: '成功派遣人才' },
  { number: '50+', label: '战略合作伙伴' },
];

const whyChooseUs = [
  '具备"人力资源服务"和"劳务派遣"双资格证书',
  '团队来自世界500强企业，具备国际先进管理理念',
  '立足长三角，影响力辐射全国',
  '专注、高效、共赢的企业价值观',
  '量身定制的个性化解决方案',
  '全程专业服务，让专业的人做专业的事',
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/hero-bg.jpg')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              为人才增值
              <br />
              为企业增效
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-4">
              FUYITE 福伊特企业管理有限公司
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              专注于人力资源服务，专业于用工方案优化，提供定制化问题解决方案。
              成为值得信赖的人力资源合作伙伴。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
              >
                立即咨询
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-medium text-white transition-all hover:bg-white/10"
              >
                了解更多服务
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              我们的服务
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              全站式、专业化、定制化人力资源服务，发挥人力资源价值，为企业增效减负
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services#${service.title.slice(0, 2)}`}
                className="card-hover bg-white rounded-xl p-6 shadow-sm border group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              查看全部服务详情
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {item.number}
                </div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                为什么选择福伊特？
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                我们坚持&quot;让专业的人做专业的事&quot;，专业创造价值，专业创造高效。
                来自世界500强的高素质团队，为您提供全方位人力资源解决方案。
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  了解更多关于我们
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 lg:p-12">
              <blockquote className="text-xl lg:text-2xl font-serif text-foreground italic mb-6">
                &quot;发展是第一要务，人才是第一资源，创新是第一动力。&quot;
              </blockquote>
              <p className="text-muted-foreground text-right">— 习近平</p>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-muted-foreground leading-relaxed">
                  创新必将主导人力资源服务行业的未来；每一步积极的改善和优化终会为企业带来新的生命活力；坚持不懈地自我提升和追求卓越，必将让我们的服务更超值于期望。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            准备好与福伊特合作了吗？
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            联系我们，让专业的人力资源团队为您的企业发展保驾护航
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-medium text-primary shadow-lg transition-all hover:bg-white/90"
            >
              立即咨询
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
