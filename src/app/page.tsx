import Link from 'next/link';
import { 
  Users, Briefcase, GraduationCap, Target, Award, CheckCircle2, ArrowRight,
  Building2, UserPlus, MessageCircle, Shield, Clock, Heart
} from 'lucide-react';

const services = [
  {
    icon: Users,
    title: '人力资源管理咨询',
    description: '全方位测评及关键问题解决方案，帮助企业解决人力资源战略分解及落地难题',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Briefcase,
    title: '人力资源业务外包',
    description: '推动企业人力资源高效建设，减负企业人资部门，提供成本可视化、服务一体化的外包业务',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: GraduationCap,
    title: '人才招聘和派遣',
    description: '聚焦人才需求，提升企业人才竞争力，提供多元化人才问题解决方案',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Award,
    title: '人力资源培训及开发',
    description: '量身定制培训方案，指导并落实，全程监督并反馈建设效果',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Target,
    title: '个人职业及发展规划',
    description: '提供专业的个人成长规划教育及指导，个人事务委托管理',
    color: 'from-pink-500 to-pink-600',
  },
];

const advantages = [
  { number: '10+', label: '年行业经验', icon: Clock },
  { number: '500+', label: '服务企业客户', icon: Building2 },
  { number: '1000+', label: '成功派遣人才', icon: UserPlus },
  { number: '50+', label: '战略合作伙伴', icon: Shield },
];

const teamFeatures = [
  {
    icon: Users,
    title: '专业团队',
    description: '来自世界500强企业的高素质、专业化团队',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Heart,
    title: '用心服务',
    description: '以客户需求为中心，提供个性化解决方案',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: MessageCircle,
    title: '高效沟通',
    description: '快速响应客户需求，全程专业跟进服务',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Award,
    title: '品质保障',
    description: '双资格证书认证，服务质量有保障',
    color: 'bg-yellow-50 text-yellow-600',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Users className="h-4 w-4" />
                <span>值得信赖的人力资源合作伙伴</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block">为人才增值</span>
                <span className="block">为企业增效</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/80">
                FUYITE 福伊特企业管理有限公司
              </p>
              
              <p className="text-lg text-white/70 max-w-xl">
                专注于人力资源服务，专业于用工方案优化，提供定制化问题解决方案。
                您身边的人力资源问题专家。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all hover:bg-white/95 hover:shadow-2xl hover:-translate-y-1"
                >
                  立即咨询
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/50 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white"
                >
                  了解更多服务
                </Link>
              </div>
            </div>
            
            {/* Hero illustration */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Main circle */}
                <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center relative">
                  {/* Person 1 */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-xs text-white/80">企业客户</span>
                  </div>
                  {/* Person 2 */}
                  <div className="absolute bottom-8 left-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                      <UserPlus className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-xs text-white/80">人才推荐</span>
                  </div>
                  {/* Person 3 */}
                  <div className="absolute bottom-8 right-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                      <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-xs text-white/80">高效服务</span>
                  </div>
                  {/* Center */}
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl font-bold text-primary">F</span>
                    </div>
                    <span className="text-sm font-semibold text-white">福伊特</span>
                  </div>
                </div>
                {/* Orbiting elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-pulse">
                  <Award className="h-8 w-8 text-white/80" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-sm text-primary font-medium mb-4">
              <Target className="h-4 w-4" />
              <span>我们的核心服务</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              全方位人力资源解决方案
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              定制化、全流程 | 将服务精神贯彻到底
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services`}
                className="group bg-white rounded-2xl p-6 shadow-sm border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>了解更多</span>
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {item.number}
                  </div>
                  <div className="text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-sm text-primary font-medium mb-6">
                <CheckCircle2 className="h-4 w-4" />
                <span>为什么选择我们</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                让专业的人<br />做专业的事
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8">
                我们坚持&quot;让专业的人做专业的事&quot;，专业创造价值，专业创造高效。
                来自世界500强的高素质团队，为您提供全方位人力资源解决方案。
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {teamFeatures.map((feature, index) => (
                  <div key={index} className={`p-4 rounded-xl ${feature.color}`}>
                    <feature.icon className="h-6 w-6 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs opacity-80">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center text-primary font-semibold hover:underline"
                >
                  了解更多关于我们
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/10 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-primary/5"></div>
                
                <blockquote className="text-xl lg:text-2xl font-serif text-foreground italic mb-8 relative">
                  &quot;发展是第一要务，人才是第一资源，创新是第一动力。&quot;
                </blockquote>
                
                <p className="text-muted-foreground text-right font-medium">— 习近平</p>
                
                <div className="mt-8 pt-8 border-t border-slate-200 relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">张</div>
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">李</div>
                      <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">王</div>
                      <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">陈</div>
                    </div>
                    <span className="text-sm text-muted-foreground">500+ 企业客户的选择</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    创新必将主导人力资源服务行业的未来；每一步积极的改善和优化终会为企业带来新的生命活力；坚持不懈地自我提升和追求卓越，必将让我们的服务更超值于期望。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            准备好与福伊特合作了吗？
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            联系我们，让专业的人力资源团队为您的企业发展保驾护航
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all hover:bg-white/95 hover:shadow-2xl hover:-translate-y-1"
            >
              立即咨询
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:0512-52713026"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/50 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <span className="mr-2">📞</span>
              电话咨询: 0512-52713026
            </a>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>双资格证书认证</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>快速响应服务</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>专业值得信赖</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
